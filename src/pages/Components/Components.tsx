import { useCallback, useState, type ChangeEvent, type ComponentType, type FC } from 'react';
import cn from 'classnames';

import { useBreakpoint, useDocumentTitle } from '@/hooks';
import { Content, HeadingLarge, LayoutWithSidebar, Select, SelectWidth, Sidebar } from '@/shared/ui';

import { AccordionDemo } from './sections/AccordionDemo/AccordionDemo';
import { ButtonsDemo } from './sections/ButtonsDemo/ButtonsDemo';
import { EmptyStateDemo } from './sections/EmptyStateDemo/EmptyStateDemo';
import { IconButtonsDemo } from './sections/IconButtonsDemo/IconButtonsDemo';
import { Posts } from './sections/Posts/Posts';
import { Section } from './sections/Section/Section';
import { SelectDemo } from './sections/SelectDemo/SelectDemo';
import { SpinnersDemo } from './sections/SpinnersDemo/SpinnersDemo';
import { TypographyDemo } from './sections/TypographyDemo/TypographyDemo';

import styles from './Components.module.scss';

interface ComponentSection {
  id: string;
  title: string;
  Component: ComponentType;
}

/** Секция с несколькими демо-компонентами */
const AccordionSection: FC = () => (
  <>
    <AccordionDemo />
    <Posts />
  </>
);

/** Компоненты, отображаемые на странице */
const SECTIONS: ComponentSection[] = [
  { id: 'accordion', title: 'Accordion', Component: AccordionSection },
  { id: 'select', title: 'Select', Component: SelectDemo },
  { id: 'headers', title: 'Headers', Component: TypographyDemo },
  { id: 'buttons', title: 'Buttons', Component: ButtonsDemo },
  { id: 'icon-buttons', title: 'IconButtons', Component: IconButtonsDemo },
  { id: 'spinners', title: 'Spinners', Component: SpinnersDemo },
  { id: 'empty-state', title: 'EmptyState', Component: EmptyStateDemo }
];

/** Опции выпадающего списка для навигации по компонентам на узких экранах */
const SECTION_OPTIONS = SECTIONS.map(({ id, title }) => ({ value: id, label: title }));

export const Components: FC = () => {
  useDocumentTitle('Components');

  const { isDesktop } = useBreakpoint();
  const [activeId, setActiveId] = useState(SECTIONS[0].id);

  const handleSelect = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setActiveId(event.target.value);
  }, []);

  const activeSection = SECTIONS.find((section) => section.id === activeId) ?? SECTIONS[0];
  const ActiveComponent = activeSection.Component;

  return (
    <div className={ styles.wrapper }>
      <HeadingLarge>Components</HeadingLarge>
      { !isDesktop && (
        <Select
          options={ SECTION_OPTIONS }
          value={ activeId }
          width={ SelectWidth.Full }
          onChange={ handleChange }
        />
      ) }
      <LayoutWithSidebar>
        <Sidebar>
          <nav className={ styles.nav }>
            { SECTIONS.map(({ id, title }) => (
              <button
                key={ id }
                type='button'
                className={ cn(styles.navItem, { [styles.active]: id === activeId }) }
                onClick={ () => handleSelect(id) }
              >
                { title }
              </button>
            )) }
          </nav>
        </Sidebar>

        <Content className={ styles.content }>

          <Section title={ activeSection.title }>
            <ActiveComponent />
          </Section>
        </Content>
      </LayoutWithSidebar>
    </div>
  );
};
