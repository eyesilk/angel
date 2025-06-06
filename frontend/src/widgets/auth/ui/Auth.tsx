import { FC, useEffect, useRef, useState } from 'react';
import { useAuthStore, useLoginSubmit, useRegisterSubmit } from '../../../features/auth';
import { useModalOutside, useRemoveScroll } from '../../../shared/utils';
import './auth.scss';
import { UiButtonCross } from '../../../shared/button-cross';
import { UiButtonGray } from '../../../shared/button-gray';
import { UiButtonDefault } from '../../../shared/button-default';
import { UiDotsLoader } from '../../../shared/dots-loader';
import { CSSTransition } from 'react-transition-group';

export const Auth: FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const isAuthOpen = useAuthStore((state) => state.isAuthOpen);
  const setIsAuthOpen = useAuthStore((state) => state.setIsAuthOpen);
  const [selectedMethod, setSelectedMethod] = useState<string>('Войти');
  const methodMenu: string[] = ['Войти', 'Создать аккаунт'];

  const { message: supMessage, isPending: supPending, handleRegisterSubmit } = useRegisterSubmit();
  const {
    message: sinMessage,
    isPending: sinPending,
    handleLoginSubmit,
    isSuccess,
  } = useLoginSubmit();

  useRemoveScroll(isAuthOpen);
  useModalOutside(modalRef, setIsAuthOpen);

  useEffect(() => {
    if (isSuccess) {
      setIsAuthOpen();
    }
  }, [isSuccess]);

  return (
    <>
      <CSSTransition
        in={isAuthOpen}
        timeout={300}
        classNames="auth__animate"
        nodeRef={modalRef}
        unmountOnExit
      >
        <div className="auth">
          <div className="auth__wrapper" ref={modalRef}>
            <div className="auth__title">
              <h2>Войдите или создайте аккаунт</h2>
              <div className="auth__cross">
                <UiButtonCross onClick={() => setIsAuthOpen()} />
              </div>
            </div>
            <ul className="auth__method">
              {methodMenu.map((method, index) => (
                <li key={index}>
                  <UiButtonGray
                    onClick={() => setSelectedMethod(method)}
                    active={method === selectedMethod}
                  >
                    {method}
                  </UiButtonGray>
                </li>
              ))}
            </ul>
            {selectedMethod === 'Войти' ? (
              <form className="auth__form" key="login" onSubmit={(e) => handleLoginSubmit(e)}>
                {sinMessage && <span className="auth__message">{sinMessage}</span>}
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" name="password" required />
                <UiButtonDefault type="submit" disabled={sinPending && true}>
                  {sinPending ? <UiDotsLoader color="white" /> : 'Войти'}
                </UiButtonDefault>
              </form>
            ) : (
              <form className="auth__form" key="register" onSubmit={(e) => handleRegisterSubmit(e)}>
                {supMessage && <span className="auth__message">{supMessage}</span>}
                <label htmlFor="username">Имя</label>
                <input type="username" id="username" name="username" required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" name="password" required />

                <p>
                  Регистрируясь, вы вступаете в  <strong>программу лояльности</strong> и
                  соглашаетесь с документами <a href="/">«Условия пользования»</a> и{' '}
                  <a href="/">«Политика конфиденциальности»</a>.
                </p>

                <UiButtonDefault type="submit" disabled={supPending && true}>
                  {supPending ? <UiDotsLoader color="white" /> : 'Зарегистрироваться'}
                </UiButtonDefault>
              </form>
            )}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
