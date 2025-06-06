import { FC, useEffect } from 'react';
import { UiDotsLoader } from '../../../shared/dots-loader';
import { useActivate, useActivateEmail } from '../../../features/auth';
import { useNavigate, useParams } from 'react-router-dom';

interface ActivateProps {
  type: 'account' | 'email';
}

export const Activate: FC<ActivateProps> = ({ type }) => {
  const params = useParams<{ link: string }>();
  const navigate = useNavigate();
  const { mutateAsync: activationAccount, isSuccess: isAccountSuccess } = useActivate();
  const { mutateAsync: activateEmail, isSuccess: isEmailSuccess } = useActivateEmail();

  useEffect(() => {
    const fetchActivate = async (link: string) => {
      if (type === 'account') {
        await activationAccount(link);
      }
      if (type === 'email') {
        await activateEmail(link);
      }
    };

    fetchActivate(params.link!);
  }, []);

  useEffect(() => {
    if (isAccountSuccess || isEmailSuccess) {
      navigate('/');
    }
    if (isEmailSuccess) {
      location.reload()
    }
  }, [isAccountSuccess, isEmailSuccess]);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <UiDotsLoader color="black" />
    </div>
  );
};
