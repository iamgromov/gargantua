import { memo, type FC, type ReactElement } from 'react';

import { useBreakpoint } from '@/hooks';

import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop';
import { HeaderMobile } from './HeaderMobile/HeaderMobile';

export const Header: FC = memo((): ReactElement => {
  const { isMobile } = useBreakpoint();

  if (isMobile) {
    return <HeaderMobile />;
  }

  return <HeaderDesktop />;
});
