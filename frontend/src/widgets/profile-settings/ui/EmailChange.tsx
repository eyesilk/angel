import { ChangeEvent, FC, useRef, useState } from 'react';
import './change.scss';
import { UiButtonDefault } from '../../../shared/button-default';
import { ChangeProps } from '../model/ChangeProps.type';
import { useModalOutside } from '../../../shared/utils';
import { useChangeEmail } from '../../../features/auth';
import { UiDotsLoader } from '../../../shared/dots-loader';

export const EmailChange: FC<ChangeProps> = ({ onClose }) => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const { handleChangeEmail, isPending, message } = useChangeEmail();
  const modalRef = useRef<HTMLDivElement>(null);

  useModalOutside(modalRef, () => onClose((prev) => !prev));
  return (
    <div className="change">
      <div className="change__popup" ref={modalRef}>
        <span className="change__title">Изменение почты</span>
        {message && <span className="change__error">{message}</span>}
        <form className="change__input-box" onSubmit={(e) => handleChangeEmail(e)}>
          <label htmlFor="email">Новая почта</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
              <UiButtonDefault color="grey" disabled={!email && !password} type="submit">
                Сохранить
              </UiButtonDefault>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
