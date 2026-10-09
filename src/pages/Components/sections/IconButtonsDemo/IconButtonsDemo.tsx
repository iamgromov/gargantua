import { type FC } from 'react';

import { ArrowUp } from '@/assets/icons';
import { Button } from '@/shared/ui/Button';

export const IconButtonsDemo: FC = () => <Button icon={ <ArrowUp /> } round={ true } />;
