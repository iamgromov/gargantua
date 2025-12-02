import type { DetailedHTMLProps, FC, ReactNode, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Typography.module.scss';

interface TypographyProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> {
  variant: 't10' | 't14' | 't14_130' | 't18b' | 't24b' | 't30b';
  children: ReactNode;
  isUppercase?: boolean;
  isCapitalize?: boolean;
  isCenter?: boolean;
  isRight?: boolean;
  isJustify?: boolean;
  isBold?: boolean;
}

export const Typography: FC<TypographyProps> = ({
  variant,
  color,
  children,
  isUppercase,
  isCapitalize,
  isRight,
  isCenter,
  isJustify,
  ...props
}) => {
  return (
    <span
      style={{
        color: color ? `var(--${color})` : 'inherit',
        textTransform: (isUppercase && 'uppercase') || (isCapitalize && 'capitalize') || 'none',
        textAlign:
          (isRight && 'right') || (isCenter && 'center') || (isJustify && 'justify') || 'left',
      }}
      className={cn(styles.root, styles[variant])}
      {...props}
    >
      {children}
    </span>
  );
};
