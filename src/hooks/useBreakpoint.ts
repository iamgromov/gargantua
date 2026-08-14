import { useSyncExternalStore } from 'react';

import { BREAKPOINTS, MEDIA } from '@/constants';

const getDeviceType = (width: number): MEDIA => {
  if (width < BREAKPOINTS.TABLET) {
    return MEDIA.MOBILE;
  }

  if (width < BREAKPOINTS.DESKTOP) {
    return MEDIA.TABLET;
  }

  return MEDIA.DESKTOP;
};

const subscribe = (callback: () => void) => {
  window.addEventListener('resize', callback);

  return () => window.removeEventListener('resize', callback);
};

const getSnapshot = () => getDeviceType(window.innerWidth);

const getServerSnapshot = () => MEDIA.DESKTOP;

export const useBreakpoint = () => {
  const device = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const isMobile = device === MEDIA.MOBILE;
  const isTablet = device === MEDIA.TABLET;
  const isDesktop = device === MEDIA.DESKTOP;

  return { device, isMobile, isTablet, isDesktop };
};
