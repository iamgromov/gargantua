import { type ComponentType } from 'react';

import { REPO_URL } from '@/constants';

import { AccordionSection } from './sections/AccordionSection/AccordionSection';
import { ButtonDemo } from './sections/ButtonDemo/ButtonDemo';
import { EmptyStateDemo } from './sections/EmptyStateDemo/EmptyStateDemo';
import { IconButtonsDemo } from './sections/IconButtonsDemo/IconButtonsDemo';
import { LinkDemo } from './sections/LinkDemo/LinkDemo';
import { PaperDemo } from './sections/PaperDemo/PaperDemo';
import { SelectDemo } from './sections/SelectDemo/SelectDemo';
import { SpinnerDemo } from './sections/SpinnerDemo/SpinnerDemo';
import { TypographyDemo } from './sections/TypographyDemo/TypographyDemo';

interface ComponentSection {
  id: string;
  title: string;
  description: string;
  link: string;
  Component: ComponentType;
}

/** Базовый адрес исходников компонентов в репозитории */
const CODE_BASE_URL = `${REPO_URL}/tree/main/src/shared/ui`;

/** Компоненты, отображаемые на странице */
export const SECTIONS: ComponentSection[] = [
  {
    id: 'accordion',
    title: 'Accordion',
    description: 'Сворачиваемые панели для компактного отображения контента.',
    link: `${CODE_BASE_URL}/Accordion`,
    Component: AccordionSection
  },
  {
    id: 'button',
    title: 'Button',
    description: 'Кнопка с настраиваемым размером и вариантом оформления.',
    link: `${CODE_BASE_URL}/Button`,
    Component: ButtonDemo
  },
  {
    id: 'empty-state',
    title: 'EmptyState',
    description: 'Заглушка для пустых состояний с заголовком, описанием и действием.',
    link: `${CODE_BASE_URL}/EmptyState`,
    Component: EmptyStateDemo
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Стили заголовков для визуального выделения и структурирования контента.',
    link: `${CODE_BASE_URL}/Typography`,
    Component: TypographyDemo
  },
  {
    id: 'icon-buttons',
    title: 'IconButton',
    description: 'Кнопка с иконкой без текстовой подписи.',
    link: `${CODE_BASE_URL}/Button`,
    Component: IconButtonsDemo
  },
  {
    id: 'link',
    title: 'Link',
    description: 'Ссылка для внутренней навигации и перехода по внешним URL.',
    link: `${CODE_BASE_URL}/Link`,
    Component: LinkDemo
  },
  {
    id: 'paper',
    title: 'Paper',
    description: 'Контейнер с фоном, границей и скруглением для группировки контента.',
    link: `${CODE_BASE_URL}/Paper`,
    Component: PaperDemo
  },
  {
    id: 'select',
    title: 'Select',
    description: 'Выпадающий список для выбора одного значения из набора опций.',
    link: `${CODE_BASE_URL}/Select`,
    Component: SelectDemo
  },
  {
    id: 'spinner',
    title: 'Spinner',
    description: 'Индикатор загрузки для отображения процесса ожидания.',
    link: `${CODE_BASE_URL}/Spinner`,
    Component: SpinnerDemo
  }
];

export const SECTION_OPTIONS = SECTIONS.map(({ id, title }) => ({ value: id, label: title }));
