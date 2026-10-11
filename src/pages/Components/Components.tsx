import { useCallback, useState, type ChangeEvent, type FC } from 'react';
import cn from 'classnames';

import { useBreakpoint } from '@/hooks';
import { Content, LayoutWithSidebar, PageTitle, Paper, PaperIntent, Select, SelectWidth, Sidebar } from '@/shared/ui';

import { ComponentDemo } from './ComponentDemo/ComponentDemo';
import { COMPONENTS_MAP, COMPONENTS_OPTIONS } from './constants';

import styles from './Components.module.scss';

export const Components: FC = () => {
  const { isDesktop } = useBreakpoint();
  const [activeId, setActiveId] = useState(COMPONENTS_MAP[0].id);

  const handleSelect = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setActiveId(event.target.value);
  }, []);

  const activeComponent = COMPONENTS_MAP.find((component) => component.id === activeId) ?? COMPONENTS_MAP[0];
  const ComponentPreview = activeComponent.Component;

  return (
    <div className={ styles.wrapper }>
      <PageTitle title='Components' documentTitle='Components' />
      { !isDesktop && (
        <Select
          options={ COMPONENTS_OPTIONS }
          value={ activeId }
          width={ SelectWidth.Full }
          onChange={ handleChange }
        />
      ) }
      <LayoutWithSidebar>
        <Sidebar>
          <Paper className={ styles.nav } intent={ PaperIntent.Primary }>
            { COMPONENTS_MAP.map(({ id, title }) => (
              <button
                key={ id }
                type='button'
                className={ cn(styles.navItem, { [styles.active]: id === activeId }) }
                onClick={ () => handleSelect(id) }
              >
                { title }
              </button>
            )) }
          </Paper>
        </Sidebar>
        <Content className={ styles.content }>
          <Paper>
            <ComponentDemo
              title={ activeComponent.title }
              description={ activeComponent.description }
              link={ activeComponent.link }
            >
              <ComponentPreview />
            </ComponentDemo>
          </Paper>
        </Content>
      </LayoutWithSidebar>
    </div>
  );
};
