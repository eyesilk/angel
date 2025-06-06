import { FC, useEffect, useRef, useState } from 'react';
import './bag.scss';
import { useBag, useBagFuncs, useBagStore, useRefetchBag } from '../../../features/bag';
import { formatPrice, useModalOutside, useRemoveScroll } from '../../../shared/utils';
import { UiButtonCross } from '../../../shared/button-cross';
import { EBPSkeleton, EntBagProduct } from '../../../entites/bag-product';
import { UiButtonDefault } from '../../../shared/button-default';
import { useAuthStore } from '../../../features/auth';
import { CSSTransition } from 'react-transition-group';

export const Bag: FC = () => {
  const bagRef = useRef<HTMLDivElement>(null);
  const isBagOpen = useBagStore((state) => state.isBagOpen);
  const setIsBagOpen = useBagStore((state) => state.setIsBagOpen);

  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const { data: bagProducts, isLoading, isError } = useBag(isEnabled);
  const isAuthed = useAuthStore((state) => state.isAuthed);

  const bag = useBagStore((state) => state.bagProducts);
  const setBagProducts = useBagStore((state) => state.setBagProducts);
  const { onDecr, onRemove, isSuccess, onIncr } = useBagFuncs();

  const onDecrement = async (productId: string, size: string, quantity: number): Promise<void> => {
    if (quantity <= 1) {
      await onRemove(productId, size);
    } else {
      await onDecr(productId, size, quantity);
    }
  };

  useEffect(() => {
    if (bagProducts && !isLoading && !isError) {
      setBagProducts(bagProducts);
      setIsEnabled(false);
    }
  }, [bagProducts, isLoading, isError]);

  useEffect(() => {
    if (isAuthed) {
      setIsEnabled(true);
    }
  }, [isAuthed]);

  useRefetchBag(isSuccess);
  useRemoveScroll(isBagOpen);
  useModalOutside(bagRef, setIsBagOpen);
  return (
    <>
      <CSSTransition
        in={isBagOpen}
        timeout={300}
        classNames="bag__animate"
        nodeRef={bagRef}
        unmountOnExit
      >
        <div className="bag">
          <div className="bag__wrapper" ref={bagRef}>
            <div className="bag__title">
              <span>Корзина</span>
              <div className="bag__cross">
                <UiButtonCross onClick={() => setIsBagOpen()} />
              </div>
            </div>
            <div className="bag__products">
              {bag && bag.length > 0 ? (
                bag.map((product) => (
                  <EntBagProduct
                    key={product.id}
                    id={product.productId}
                    imageUrl={product.imageUrl}
                    name={product.name}
                    size={product.size}
                    count={product.quantity}
                    price={product.price}
                    onDecr={onDecrement}
                    onRemove={onRemove}
                    onIncr={onIncr}
                  />
                ))
              ) : isLoading || isError ? (
                [...new Array(3)].map((_, index) => <EBPSkeleton key={index} />)
              ) : (
                <div className="bag__empty">
                  <span>Корзина пуста</span>
                </div>
              )}
            </div>
            <div className="bag__price">
              <span>Всего:</span>
              <span>
                {formatPrice(
                  bag.reduce((accum, item) => (accum += item.price * item.quantity), 0) || 0,
                )}
              </span>
            </div>
            <UiButtonDefault>Продолжить</UiButtonDefault>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
