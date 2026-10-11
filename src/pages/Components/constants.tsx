import { lazy, type ComponentType } from 'react';

import { REPO_TREE_URL } from '@/constants';

/** Ленивая загрузка компонента из именованного экспорта модуля демо */
const lazyComponent = <TModule extends Record<string, ComponentType>>(
  factory: () => Promise<TModule>,
  name: keyof TModule
) => lazy(() => factory().then((module) => ({ default: module[name] })));

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
    Component: lazyComponent(() => import('./ComponentsDemo/AccordionSection/AccordionSection'), 'AccordionSection')
  },
  {
    id: 'button',
    title: 'Button',
    description: 'Кнопка с настраиваемым размером и вариантом оформления.',
    link: `${CODE_BASE_URL}/shared/ui/Button`,
    Component: lazyComponent(() => import('./ComponentsDemo/ButtonDemo/ButtonDemo'), 'ButtonDemo')
  },
  {
    id: 'empty-state',
    title: 'EmptyState',
    description: 'Заглушка для пустых состояний с заголовком, описанием и действием.',
    link: `${CODE_BASE_URL}/shared/ui/EmptyState`,
    Component: lazyComponent(() => import('./ComponentsDemo/EmptyStateDemo/EmptyStateDemo'), 'EmptyStateDemo')
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Стили заголовков для визуального выделения и структурирования контента.',
    link: `${CODE_BASE_URL}/shared/ui/Typography`,
    Component: lazyComponent(() => import('./ComponentsDemo/TypographyDemo/TypographyDemo'), 'TypographyDemo')
  },
  {
    id: 'icons',
    title: 'Icons',
    description: 'Библиотека иконок, сгруппированных по категориям.',
    link: `${CODE_BASE_URL}/assets/icons`,
    Component: lazyComponent(() => import('./ComponentsDemo/IconsDemo/IconsDemo'), 'IconsDemo')
  },
  {
    id: 'link',
    title: 'Link',
    description: 'Ссылка для внутренней навигации и перехода по внешним URL.',
    link: `${CODE_BASE_URL}/shared/ui/Link`,
    Component: lazyComponent(() => import('./ComponentsDemo/LinkDemo/LinkDemo'), 'LinkDemo')
  },
  {
    id: 'paper',
    title: 'Paper',
    description: 'Контейнер с фоном, границей и скруглением для группировки контента.',
    link: `${CODE_BASE_URL}/shared/ui/Paper`,
    Component: lazyComponent(() => import('./ComponentsDemo/PaperDemo/PaperDemo'), 'PaperDemo')
  },
  {
    id: 'select',
    title: 'Select',
    description: 'Выпадающий список для выбора одного значения из набора опций.',
    link: `${CODE_BASE_URL}/shared/ui/Select`,
    Component: lazyComponent(() => import('./ComponentsDemo/SelectDemo/SelectDemo'), 'SelectDemo')
  },
  {
    id: 'spinner',
    title: 'Spinner',
    description: 'Индикатор загрузки для отображения процесса ожидания.',
    link: `${CODE_BASE_URL}/shared/ui/Spinner`,
    Component: lazyComponent(() => import('./ComponentsDemo/SpinnerDemo/SpinnerDemo'), 'SpinnerDemo')
  }
];

export const COMPONENTS_OPTIONS = COMPONENTS_MAP.map(({ id, title }) => ({ value: id, label: title }));
