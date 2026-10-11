import { type ComponentType } from 'react';

import { REPO_TREE_URL } from '@/constants';

import { AccordionSection } from './ComponentsDemo/AccordionSection/AccordionSection';
import { ButtonDemo } from './ComponentsDemo/ButtonDemo/ButtonDemo';
import { EmptyStateDemo } from './ComponentsDemo/EmptyStateDemo/EmptyStateDemo';
import { IconsDemo } from './ComponentsDemo/IconsDemo/IconsDemo';
import { LinkDemo } from './ComponentsDemo/LinkDemo/LinkDemo';
import { PaperDemo } from './ComponentsDemo/PaperDemo/PaperDemo';
import { SelectDemo } from './ComponentsDemo/SelectDemo/SelectDemo';
import { SpinnerDemo } from './ComponentsDemo/SpinnerDemo/SpinnerDemo';
import { TypographyDemo } from './ComponentsDemo/TypographyDemo/TypographyDemo';

interface ComponentDemo {
  id: string;
  title: string;
  description: string;
  link: string;
  Component: ComponentType;
}

/** Базовый адрес исходников в репозитории */
const CODE_BASE_URL = `${REPO_TREE_URL}/src`;

/** Компоненты, отображаемые на странице */
export const COMPONENTS_MAP: ComponentDemo[] = [
  {
    id: 'accordion',
    title: 'Accordion',
    description: 'Сворачиваемые панели для компактного отображения контента.',
    link: `${CODE_BASE_URL}/shared/ui/Accordion`,
    Component: AccordionSection
  },
  {
    id: 'button',
    title: 'Button',
    description: 'Кнопка с настраиваемым размером и вариантом оформления.',
    link: `${CODE_BASE_URL}/shared/ui/Button`,
    Component: ButtonDemo
  },
  {
    id: 'empty-state',
    title: 'EmptyState',
    description: 'Заглушка для пустых состояний с заголовком, описанием и действием.',
    link: `${CODE_BASE_URL}/shared/ui/EmptyState`,
    Component: EmptyStateDemo
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Стили заголовков для визуального выделения и структурирования контента.',
    link: `${CODE_BASE_URL}/shared/ui/Typography`,
    Component: TypographyDemo
  },
  {
    id: 'icons',
    title: 'Icons',
    description: 'Библиотека иконок, сгруппированных по категориям.',
    link: `${CODE_BASE_URL}/assets/icons`,
    Component: IconsDemo
  },
  {
    id: 'link',
    title: 'Link',
    description: 'Ссылка для внутренней навигации и перехода по внешним URL.',
    link: `${CODE_BASE_URL}/shared/ui/Link`,
    Component: LinkDemo
  },
  {
    id: 'paper',
    title: 'Paper',
    description: 'Контейнер с фоном, границей и скруглением для группировки контента.',
    link: `${CODE_BASE_URL}/shared/ui/Paper`,
    Component: PaperDemo
  },
  {
    id: 'select',
    title: 'Select',
    description: 'Выпадающий список для выбора одного значения из набора опций.',
    link: `${CODE_BASE_URL}/shared/ui/Select`,
    Component: SelectDemo
  },
  {
    id: 'spinner',
    title: 'Spinner',
    description: 'Индикатор загрузки для отображения процесса ожидания.',
    link: `${CODE_BASE_URL}/shared/ui/Spinner`,
    Component: SpinnerDemo
  }
];

export const COMPONENTS_OPTIONS = COMPONENTS_MAP.map(({ id, title }) => ({ value: id, label: title }));
