import { memo, type FC, type ReactElement } from 'react';

import { useBreakpoint } from '@/hooks';

import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop';
import { HeaderMobile } from './HeaderMobile/HeaderMobile';
import { HeaderTablet } from './HeaderTablet/HeaderTablet';

export const Header: FC = memo((): ReactElement => {
  const { isMobile, isTablet } = useBreakpoint();

  if (isMobile) {
    return <HeaderMobile />;
  }

  if (isTablet) {
    return <HeaderTablet />;
  }

  return <HeaderDesktop />;
});
