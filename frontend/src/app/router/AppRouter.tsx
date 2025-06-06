import { FC, lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '../layout';
import { PageLoading } from '../../pages/loading';
import { User } from '../../features/auth/model/types/user.type';
import { getUser, saveUser, useAuthStore, useRefresh } from '../../features/auth';
import { jwtDecode } from 'jwt-decode';
import { useTotalLogout } from '../../features/auth/api/hooks/useTotalLogout';

const PageLanding = lazy(() =>
  import('../../pages/landing').then((module) => ({ default: module.PageLanding })),
);
const PageBrands = lazy(() =>
  import('../../pages/brands').then((module) => ({ default: module.PageBrands })),
);
const PageBrandProducts = lazy(() =>
  import('../../pages/brand-products').then((module) => ({ default: module.PageBrandProducts })),
);
const PageProducts = lazy(() =>
  import('../../pages/products').then((module) => ({ default: module.PageProducts })),
);
const PageProduct = lazy(() =>
  import('../../pages/product').then((module) => ({ default: module.PageProduct })),
);
const PageProfile = lazy(() =>
  import('../../pages/profile').then((module) => ({ default: module.PageProfile })),
);
const PageNotFound = lazy(() =>
  import('../../pages/not-found').then((module) => ({ default: module.PageNotFound })),
);
const PageActivate = lazy(() =>
  import('../../widgets/activate').then((module) => ({ default: module.WidgetActivate })),
);

export const AppRouter: FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const { data: userData, isSuccess, isLoading, isError } = useRefresh(isEnabled);
  const setUserData = useAuthStore((state) => state.setUserData);
  const setIsAuthed = useAuthStore((state) => state.setIsAuthed);
  const { mutate: logout } = useTotalLogout();
  const token: string | null = localStorage.getItem('accessToken');

  let user: User | null = getUser();

  useEffect(() => {
    if (!user) {
      setIsEnabled(true);
    } else {
      setUserData(user);
      setIsAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (token) {
      try {
        const payload: { exp: number } = jwtDecode(token);
        const expTime: number = payload.exp * 1000;
        const now: number = Date.now();
        const timeLeft = expTime - now;
        if (timeLeft > 90 * 1000) {
          const refreshTimeout = setTimeout(
            () => {
              setIsEnabled(true);
            },
            timeLeft - 60 * 1000,
          );

          return () => clearTimeout(refreshTimeout);
        } else {
          setIsEnabled(true);
        }
      } catch {
        logout();
      }
    }
  }, [token]);

  useEffect(() => {
    if (userData && isSuccess && !isLoading && !isError) {
      setUserData(userData.user);
      setIsAuthed(true);
      saveUser(userData.user);
      localStorage.setItem('accessToken', userData.tokens.accessToken);
      setIsEnabled(false);
    }
    if (isError) {
      logout();
    }
  }, [userData, isSuccess, isLoading, isError]);

  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<PageLanding />} />
          <Route path="/brands" element={<PageBrands />} />
          <Route path="/brand/:id" element={<PageBrandProducts />} />
          <Route path="/:gender/products" element={<PageProducts />} />
          <Route path="/product/:id" element={<PageProduct />} />
          <Route path="/profile" element={<PageProfile />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/activate/:link" element={<PageActivate type="account" />} />
        <Route path="/activate-email/:link" element={<PageActivate type="email" />} />
      </Routes>
    </Suspense>
  );
};
