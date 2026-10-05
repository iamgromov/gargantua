import { createElement, type ElementType, type ReactElement } from 'react';
import cn from 'classnames';

import { type TypographyProps } from './types';

import styles from './Typography.module.scss';

/** Рендерит элемент типографики с классом заданного варианта */
function renderElement(props: TypographyProps, variant: string): ReactElement {
  const { tag = 'div', children, className, ...restProps } = props;

  return createElement(
    tag as ElementType,
    { ...restProps, className: cn(styles.typography, styles[variant], className) },
    children
  );
}

/** Создаёт компонент типографики для заданного варианта */
const makeRender = (variant: string) => (props: TypographyProps): ReactElement => renderElement(props, variant);

// Заголовки
const HeadingLarge = makeRender('headingLarge');
const HeadingStandard = makeRender('headingStandard');
const HeadingSmall = makeRender('headingSmall');

// Основной текст
const BodyXLargeSemibold = makeRender('bodyXLargeSemibold');
const BodyXLargeMedium = makeRender('bodyXLargeMedium');
const BodyXLargeRegular = makeRender('bodyXLargeRegular');
const BodyLargeSemibold = makeRender('bodyLargeSemibold');
const BodyLargeMedium = makeRender('bodyLargeMedium');
const BodyLargeRegular = makeRender('bodyLargeRegular');
const BodyStandardSemibold = makeRender('bodyStandardSemibold');
const BodyStandardMedium = makeRender('bodyStandardMedium');
const BodyStandardRegular = makeRender('bodyStandardRegular');

// Подписи
const LabelLargeSemibold = makeRender('labelLargeSemibold');
const LabelLargeMedium = makeRender('labelLargeMedium');
const LabelLargeRegular = makeRender('labelLargeRegular');
const LabelStandardSemibold = makeRender('labelStandardSemibold');
const LabelStandardMedium = makeRender('labelStandardMedium');
const LabelStandardRegular = makeRender('labelStandardRegular');
const LabelSmallSemibold = makeRender('labelSmallSemibold');
const LabelSmallMedium = makeRender('labelSmallMedium');
const LabelSmallRegular = makeRender('labelSmallRegular');

export {
  HeadingLarge,
  HeadingStandard,
  HeadingSmall,
  BodyXLargeSemibold,
  BodyXLargeMedium,
  BodyXLargeRegular,
  BodyLargeSemibold,
  BodyLargeMedium,
  BodyLargeRegular,
  BodyStandardSemibold,
  BodyStandardMedium,
  BodyStandardRegular,
  LabelLargeSemibold,
  LabelLargeMedium,
  LabelLargeRegular,
  LabelStandardSemibold,
  LabelStandardMedium,
  LabelStandardRegular,
  LabelSmallSemibold,
  LabelSmallMedium,
  LabelSmallRegular

};
