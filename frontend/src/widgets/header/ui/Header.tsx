import { FC, useRef, useState } from 'react';
import './header.scss';
import { UiButtonWrapper } from '../../../shared/button-wrapper';
import logo from '/assets/icons/logo.svg';
import accountIco from '/assets/icons/account.svg';
import burgerBtnIco from '/assets/icons/burger.svg';
import productsIco from '/assets/icons/bag.svg';
import favIco from '/assets/icons/favorite.svg';
import { Link } from 'react-router-dom';
import '../../../shared/assets/ui/styles/limits.scss';
import { PopupNav } from './PopupNav';
import { CSSTransition } from 'react-transition-group';
import { useBagStore } from '../../../features/bag';
import { useAuthStore } from '../../../features/auth';

export const Header: FC = () => {
  const setIsBagOpen = useBagStore((state) => state.setIsBagOpen);
  const setIsAuthOpen = useAuthStore((state) => state.setIsAuthOpen);
  const isAuthed = useAuthStore((state) => state.isAuthed);

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const burgerBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <header className={`header ${isPopupOpen ? 'header_transparent' : ''}`}>
        <div className="header__wrapper limits">
          <UiButtonWrapper onClick={() => setIsPopupOpen((prev) => !prev)} ref={burgerBtnRef}>
            <div className="header__burger-button">
              <img src={burgerBtnIco} alt="button" />
            </div>
          </UiButtonWrapper>
          <UiButtonWrapper>
            <Link to="/">
              <div className="header__logo">
                <img src={logo} alt="noir logo" />
              </div>
            </Link>
          </UiButtonWrapper>
          <nav className="header__navbar">
            <ul>
              <li>
                {!isAuthed ? (
                  <UiButtonWrapper onClick={() => setIsAuthOpen()}>
                    <img src={accountIco} alt="account" className="header__navbar-account" />
                  </UiButtonWrapper>
                ) : (
                  <Link to="/profile">
                    <img src={accountIco} alt="account" className="header__navbar-account" />
                  </Link>
                )}
              </li>
              <li>
                {!isAuthed ? (
                  <UiButtonWrapper onClick={() => setIsAuthOpen()}>
                    <img src={favIco} alt="account" className="header__navbar-fav" />
                  </UiButtonWrapper>
                ) : (
                  <Link to="/profile">
                    <img src={favIco} alt="account" className="header__navbar-fav" />
                  </Link>
                )}
              </li>
              <li>
                {!isAuthed ? (
                  <UiButtonWrapper onClick={() => setIsAuthOpen()}>
                    <img src={productsIco} alt="bag" className="header__navbar-bag" />
                  </UiButtonWrapper>
                ) : (
                  <UiButtonWrapper onClick={() => setIsBagOpen()}>
                    <img src={productsIco} alt="bag" className="header__navbar-bag" />
                  </UiButtonWrapper>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <CSSTransition
        classNames="header__popup"
        in={isPopupOpen}
        timeout={300}
        unmountOnExit
        nodeRef={popupRef}
      >
        <div ref={popupRef} className="header__popup-wrapper">
          <PopupNav
            setIsPopupOpen={setIsPopupOpen}
            isPopupOpen={isPopupOpen}
            btnRef={burgerBtnRef}
          />
        </div>
      </CSSTransition>
    </>
  );
};
