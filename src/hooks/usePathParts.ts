import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export const usePathParts = () => {
  const { pathname } = useLocation();
  return useMemo(() => pathname.split('/').filter(Boolean), [pathname]);
};
