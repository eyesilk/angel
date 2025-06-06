import { ChangeEvent, FC, useRef, useState } from 'react';
import './change.scss';
import { UiButtonDefault } from '../../../shared/button-default';
import { ChangeProps } from '../model/ChangeProps.type';
import { useModalOutside } from '../../../shared/utils';
import { useChangePass } from '../../../features/auth';
import { UiDotsLoader } from '../../../shared/dots-loader';

export const PasswordChange: FC<ChangeProps> = ({ onClose }) => {
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const { handleChangePassword, isPending, message } = useChangePass(() => onClose(false));
  const modalRef = useRef<HTMLDivElement>(null);

  useModalOutside(modalRef, () => onClose((prev) => !prev));
  return (
    <div className="change">
      <div className="change__popup" ref={modalRef}>
        <span className="change__title">Изменение пароля</span>
        {message && <span className="change__error">{message}</span>}
        <form className="change__input-box" onSubmit={(e) => handleChangePassword(e)}>
          <label htmlFor="password">Старый пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <label htmlFor="newPassword">Новый пароль</label>
          <input
            type="newPassword"
            id="newPassword"
            name="newPassword"
            required
            value={newPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
          />
          <div className="change__buttons">
            <UiButtonDefault type="button" onCLick={() => onClose(false)}>
              Отмена
            </UiButtonDefault>
            {isPending ? (
              <UiButtonDefault color="black" disabled type="button">
                <UiDotsLoader color="white" />
              </UiButtonDefault>
            ) : (
              <UiButtonDefault color="grey" disabled={!newPassword && !password} type="submit">
                Сохранить
              </UiButtonDefault>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
