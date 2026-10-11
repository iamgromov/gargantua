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

/** Компоненты, отображаемые на странице */
export const COMPONENTS_MAP: ComponentDemo[] = [
  {
    id: 'accordion',
    title: 'Accordion',
    description: 'Сворачиваемые панели для компактного отображения контента.',
    link: `${REPO_TREE_URL}/shared/ui/Accordion`,
    Component: lazyComponent(() => import('./DemoComponents/AccordionSection/AccordionSection'), 'AccordionSection')
  },
  {
    id: 'button',
    title: 'Button',
    description: 'Кнопка с настраиваемым размером и вариантом оформления.',
    link: `${REPO_TREE_URL}/shared/ui/Button`,
    Component: lazyComponent(() => import('./DemoComponents/ButtonDemo/ButtonDemo'), 'ButtonDemo')
  },
  {
    id: 'empty-state',
    title: 'EmptyState',
    description: 'Заглушка для пустых состояний с заголовком, описанием и действием.',
    link: `${REPO_TREE_URL}/shared/ui/EmptyState`,
    Component: lazyComponent(() => import('./DemoComponents/EmptyStateDemo/EmptyStateDemo'), 'EmptyStateDemo')
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Стили заголовков для визуального выделения и структурирования контента.',
    link: `${REPO_TREE_URL}/shared/ui/Typography`,
    Component: lazyComponent(() => import('./DemoComponents/TypographyDemo/TypographyDemo'), 'TypographyDemo')
  },
  {
    id: 'icons',
    title: 'Icons',
    description: 'Библиотека иконок, сгруппированных по категориям.',
    link: `${REPO_TREE_URL}/assets/icons`,
    Component: lazyComponent(() => import('./DemoComponents/IconsDemo/IconsDemo'), 'IconsDemo')
  },
  {
    id: 'link',
    title: 'Link',
    description: 'Ссылка для внутренней навигации и перехода по внешним URL.',
    link: `${REPO_TREE_URL}/shared/ui/Link`,
    Component: lazyComponent(() => import('./DemoComponents/LinkDemo/LinkDemo'), 'LinkDemo')
  },
  {
    id: 'paper',
    title: 'Paper',
    description: 'Контейнер с фоном, границей и скруглением для группировки контента.',
    link: `${REPO_TREE_URL}/shared/ui/Paper`,
    Component: lazyComponent(() => import('./DemoComponents/PaperDemo/PaperDemo'), 'PaperDemo')
  },
  {
    id: 'select',
    title: 'Select',
    description: 'Выпадающий список для выбора одного значения из набора опций.',
    link: `${REPO_TREE_URL}/shared/ui/Select`,
    Component: lazyComponent(() => import('./DemoComponents/SelectDemo/SelectDemo'), 'SelectDemo')
  },
  {
    id: 'spinner',
    title: 'Spinner',
    description: 'Индикатор загрузки для отображения процесса ожидания.',
    link: `${REPO_TREE_URL}/shared/ui/Spinner`,
    Component: lazyComponent(() => import('./DemoComponents/SpinnerDemo/SpinnerDemo'), 'SpinnerDemo')
  }
];

export const COMPONENTS_OPTIONS = COMPONENTS_MAP.map(({ id, title }) => ({ value: id, label: title }));
