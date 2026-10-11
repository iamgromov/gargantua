import { Suspense, useCallback, useState, type ChangeEvent, type FC } from 'react';

import { useBreakpoint } from '@/hooks';
import { Content, LayoutWithSidebar, PageTitle, Select, SelectWidth, Sidebar, Spinner, SpinnerSize } from '@/shared/ui';

import { ComponentPreview } from './ComponentPreview/ComponentPreview';
import { ComponentTabs } from './ComponentTabs/ComponentTabs';
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
  const ActiveComponentPreview = activeComponent.Component;

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
          <ComponentTabs activeId={ activeId } onSelect={ handleSelect } />
        </Sidebar>
        <Content className={ styles.content }>
          <ComponentPreview
            title={ activeComponent.title }
            description={ activeComponent.description }
            link={ activeComponent.link }
          >
            <Suspense fallback={ <Spinner size={ SpinnerSize.Large } fullHeight={ true } /> }>
              <ActiveComponentPreview />
            </Suspense>
          </ComponentPreview>
        </Content>
      </LayoutWithSidebar>
    </div>
  );
};
