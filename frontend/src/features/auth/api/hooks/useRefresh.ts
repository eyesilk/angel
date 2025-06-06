import { useQuery } from '@tanstack/react-query';
import AuthApi from '../authApi';

export const useRefresh = (isEnabled: boolean) => {
  return useQuery({
    queryKey: ['refresh-token'],
    queryFn: AuthApi.refreshToken,
    refetchOnWindowFocus: false,
    enabled: isEnabled,
    retry: 0,
  });
};
