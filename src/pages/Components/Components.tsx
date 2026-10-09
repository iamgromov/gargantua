import { useCallback, useState, type ChangeEvent, type FC } from 'react';
import cn from 'classnames';

import { useBreakpoint } from '@/hooks';
import { Content, LayoutWithSidebar, PageTitle, Paper, Select, SelectWidth, Sidebar } from '@/shared/ui';

import { SECTION_OPTIONS, SECTIONS } from './constants';
import { Section } from './sections/Section/Section';

import styles from './Components.module.scss';

export const Components: FC = () => {
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
      <PageTitle title='Components' documentTitle='Components' />
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
          <Paper>
            <Section
              title={ activeSection.title }
              description={ activeSection.description }
              link={ activeSection.link }
            >
              <ActiveComponent />
            </Section>
          </Paper>
        </Content>
      </LayoutWithSidebar>
    </div>
  );
};
