import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';
import { UiButtonDefault } from '../../../shared/button-default';
import { useTotalLogout } from '../../../features/auth/api/hooks/useTotalLogout';
import './safety.scss';
import { useAuthStore } from '../../../features/auth';
import { DotsLoader } from '../../../shared/dots-loader/ui/DotsLoader';
import { editIco } from '../../../shared/assets';
import { UsernameChange } from './UsernameChange';
import { EmailChange } from './EmailChange';
import { PasswordChange } from './PasswordChange';
import { useRemoveScroll } from '../../../shared/utils';

export const Safety: FC = () => {
  const [isChangeName, setIsChangeName] = useState<boolean>(false);
  const [isChangeEmail, setIsChangeEmail] = useState<boolean>(false);
  const [isChangePass, setIsChangePass] = useState<boolean>(false);
  const isPopupOpen: boolean = isChangeEmail || isChangeName || isChangePass;

  const { mutate, isPending } = useTotalLogout();
  const userData = useAuthStore((state) => state.userData);

  const safetyParams: {
    title: string;
    value: string;
    func: Dispatch<SetStateAction<boolean>>;
    state: boolean;
    popup: ReactNode;
  }[] = [
    {
      title: 'Имя',
      value: userData?.username!, 
      func: setIsChangeName,
      state: isChangeName,
      popup: <UsernameChange onClose={setIsChangeName}/>,
    },
    {
      title: 'Email',
      value: userData?.email!,
      func: setIsChangeEmail,
      state: isChangeEmail,
      popup: <EmailChange onClose={setIsChangeEmail}/>,
    },
    {
      title: 'Пароль',
      value: '*******',
      func: setIsChangePass,
      state: isChangePass,
      popup: <PasswordChange onClose={setIsChangePass}/>,
    },
  ];

  useRemoveScroll(isPopupOpen);
  return (
    <>
      <div className="safety">
        <ul className="safety__info">
          {safetyParams.map((param, index) => (
            <li key={index}>
              <span className="safety__params-title">{param.title}</span>
              <span>{param.value}</span>
              <button className="safety__edit-button" onClick={() => param.func((prev) => !prev)}>
                <img src={editIco} alt="edit" />
              </button>
            </li>
          ))}
        </ul>
        {isPending ? (
          <UiButtonDefault disabled>
            <DotsLoader color="white"></DotsLoader>
          </UiButtonDefault>
        ) : (
          <UiButtonDefault onCLick={mutate}>Выйти из аккаунта</UiButtonDefault>
        )}
      </div>
      {safetyParams.map((param) => param.state && param.popup)}
    </>
  );
};
