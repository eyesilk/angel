import { ChangeEvent, FC, useRef, useState } from 'react';
import './change.scss';
import { UiButtonDefault } from '../../../shared/button-default';
import { ChangeProps } from '../model/ChangeProps.type';
import { useModalOutside } from '../../../shared/utils';
import { useChangeName } from '../../../features/auth';
import { UiDotsLoader } from '../../../shared/dots-loader';

export const UsernameChange: FC<ChangeProps> = ({ onClose }) => {
  const [username, setUsername] = useState<string>('');
  const { handleChangeName, isPending, message } = useChangeName(() => onClose(false));

  const modalRef = useRef<HTMLDivElement>(null);

  useModalOutside(modalRef, () => onClose((prev) => !prev));
  return (
    <div className="change">
      <div className="change__popup" ref={modalRef}>
        <span className="change__title">Изменение имени</span>
        {message && <span className="change__error">{message}</span>}
        <form className="change__input-box" onSubmit={(e) => handleChangeName(e)}>
          <label htmlFor="username">Новое имя</label>
          <input
            type="username"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
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
              <UiButtonDefault color="grey" disabled={!username} type="submit">
                Сохранить
              </UiButtonDefault>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
