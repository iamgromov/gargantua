# Компоненты

Документ описывает единый подход к проектированию, оформлению и размещению UI‑компонентов в проекте

> Правила обязательны для всех новых компонентов

## 1. Расположение

- **Компоненты дизайн‑системы** — `src/shared/ui/<ComponentName>/`, где `<ComponentName>` совпадает с именем компонента (`Button`, `Drawer`, `BottomSheet`, `LayoutWithSidebar`).
- **Кросс‑компонентные примитивы** (низкоуровневые блоки, переиспользуемые внутри других компонентов) — `src/shared/ui/primitives/<Name>/<Name>.tsx`, где и папка, и файл в `PascalCase`, например `src/shared/ui/primitives/Overlay/Overlay.tsx`.
- Публичный реэкспорт компонентов — через `src/shared/ui/index.ts`.
- Внутренние части составных компонентов (если у них нет самостоятельной публичной роли) не экспортируются из `src/shared/ui/index.ts`.

## 2. Структура папки компонента

Каждый компонент — это отдельная папка с четырьмя файлами:

```
src/shared/ui/ComponentName/
├── ComponentName.tsx          # Реализация компонента и короткое описание того, что он делает
├── ComponentName.module.scss  # Локальные стили компонента, подключаемые как CSS‑модуль
├── types.ts                   # `interface XxxProps` с описанием каждого пропа и вспомогательные типы/перечисления
└── index.ts                   # Реэкспорт компонента и его типов
```

Имя файла реализации всегда совпадает с именем компонента и именем папки. Для стилей используется суффикс `.module.scss`.

## 3. `ComponentName.tsx` — реализация

Правила:

1. **Именованный экспорт**, без `default`:
   ```tsx
   export const ComponentName: FC<ComponentNameProps> = ({ ... }) => { ... };
   ```
2. Компонент объявляется через `FC<Props>`. Через `forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>` — только если компонент должен пробрасывать `ref` (как `Button` или `Link`).
3. **JSDoc описывает только то, что делает компонент** — одной короткой строкой. Назначение пропсов в `Component.tsx` **не дублируется**: оно живёт в интерфейсе в `types.ts` (см. раздел 4).
   ```tsx
   /** Выезжающая снизу шторка */
   export const BottomSheet: FC<BottomSheetProps> = ({ ... }) => { ... };
   ```
4. Пропсы деструктурируются в сигнатуре, значения по умолчанию задаются прямо в деструктуризации:
   ```tsx
   export const Drawer: FC<DrawerProps> = ({
     open,
     onClose,
     children,
     side = 'right',
     closeOnBackdrop = true,
     ...
   }) => { ... };
   ```
5. Порядок импортов строго по правилу `import/order` из `eslint.config.mjs`:
   1. `react` и внешние библиотеки (`react-dom`, `classnames`, `react-router-dom`);
   2. внутренние алиасы `@/...` (например `@/utils/zIndex`, `@/hooks`);
   3. относительные импорты родительских/соседних модулей (`../primitives/Overlay`);
   4. `./types` (типы текущего компонента);
   5. стили `./ComponentName.module.scss` — всегда последними.

   Между группами — пустая строка.

   ```tsx
   import { type FC, useCallback, useEffect, useId } from 'react';
   import { createPortal } from 'react-dom';
   import cn from 'classnames';

   import { ZIndex } from '@/utils/zIndex';

   import { Overlay } from '../primitives/Overlay';

   import { type BottomSheetProps } from './types';

   import styles from './BottomSheet.module.scss';
   ```

6. Для типов используется `import type` / инлайн `type` (`import { type FC } from 'react'`).
7. Классы собираются через `cn(...)` из `classnames`, затем к результату добавляется пользовательский `className`:
   ```tsx
   const sheetClass = cn(styles.sheet, styles[size], { [styles.loading]: loading }, className);
   ```
8. Пробрасываемые на корневой DOM‑элемент пропсы собираются в `...restProps` и спредятся в разметку.
9. Вспомогательные обработчики оборачиваются в `useCallback`; побочные эффекты — в `useEffect` с корректной очисткой.
10. JSDoc‑комментарии к локальным веткам/блокам кода — короткие (например `// Закрытие по Escape`).

## 4. `types.ts` — типы и пропсы

Здесь описываются **все** пропсы компонента. Именно в этом файле, в интерфейсе, а не в `Component.tsx`.

Правила:

1. Основной интерфейс называется `ComponentNameProps`.
2. Каждый проп сопровождается JSDoc‑комментарием, который объясняет его назначение. Комментарий ставится **над** пропом:
   ```ts
   export interface DrawerProps {
     /** Управляет видимостью панели. */
     open: boolean;
     /** Вызывается при закрытии (клик по подложке или Escape). */
     onClose: () => void;
     ...
   }
   ```
3. Конечные наборы вариантов оформляются через `enum` и экспортируются оттуда же (`Intent`, `Size`, `Width`, `DrawerSide`, `SidebarPosition`). Это даёт автодополнение и единый источник значений.
   ```ts
   export enum DrawerSide {
     Left = 'left',
     Right = 'right'
   }
   ```
4. Для типов используется только `import type` из `react`:
   ```ts
   import type { CSSProperties, ReactNode } from 'react';
   ```
5. Пропсы, общие для многих компонентов, называются одинаково:
   - `children?: ReactNode` — содержимое;
   - `className?: string` — дополнительный класс;
   - `style?: CSSProperties` — дополнительные инлайн‑стили;
   - `onClick`, `onClose`, `onChange` — обработчики;
   - `disabled?: boolean`, `loading?: boolean` — состояния;
   - `size`, `intent` (или `variant`) — варианты оформления;
   - `width?: 'auto' | 'full'` — ширина;
   - `to?: string` — внутренний маршрут, `href?: string` — внешний URL (для компонентов, которые умеют быть ссылкой).
6. Обязательные пропсы идут выше необязательных; логически близкие группируются рядом.

Пример полного `types.ts`:

```ts
import type { CSSProperties, ReactNode } from 'react';

export enum DrawerSide {
  Left = 'left',
  Right = 'right'
}

export interface DrawerProps {
  /** Управляет видимостью панели. */
  open: boolean;
  /** Вызывается при закрытии (клик по подложке или Escape). */
  onClose: () => void;
  /** Произвольный контент внутри панели. */
  children?: ReactNode;
  /** Сторона, с которой выезжает панель. */
  side?: DrawerSide;
  /** Закрывать ли при клике по подложке. */
  closeOnBackdrop?: boolean;
  /** Закрывать ли по нажатию Escape. */
  closeOnEscape?: boolean;
  /** Дополнительный класс для панели. */
  className?: string;
  /** Дополнительные стили для панели. */
  style?: CSSProperties;
}
```

## 5. `index.ts` — публичный экспорт

Barrel‑файл реэкспортирует и компонент, и его типы:

```ts
export * from './Drawer';
export * from './types';
```

Экспорт именованный, порядок фиксированный: сначала реализация, затем типы.

## 6. `ComponentName.module.scss` — стили

Правила:

1. Файл подключается в компоненте как CSS‑модуль: `import styles from './ComponentName.module.scss';`.
2. Подключение токенов дизайн‑системы — первой строкой:
   ```scss
   @use '../../../styles/variables' as *;
   @use '../../../styles/mixins' as *;
   ```
   Для примитивов путь на уровень глубже: `@use '../../../../styles/variables' as *;`.
3. Классы называются в `camelCase` (`iconWrapper`, `visuallyHidden`, `errorMessage`) и описываются через объект `styles` в TSX.
4. Модификаторы — отдельные классы (`.right`, `.left`, `.small`, `.large`, `.disabled`, `.loading`), которые комбинируются в TSX через `cn(...)`, а не вложенные `&--modifier`‑конструкции.
5. Каждую смысловую группу предваряет короткий комментарий на русском (`// Закрытие по Escape`, `// Варианты размеров`, `// Анимации`).
6. Порядок свойств внутри блока — по правилу `order/properties-order` из `stylelint.config.js`: Layout → Visual → Typography → Misc, затем прочие свойства по алфавиту. Значения берутся из токенов (`$color-*`, `$spacing-*`, `$border-*`, `$transition-*`), а не «магическими» числами.
7. Анимации объявляются `@keyframes` в конце файла.
8. Скругления задаются миксином `superellipse($tl, $tr, $br, $bl, $shrink)` из `styles/mixins`: `border-radius` остаётся fallback‑ом, а `corner-shape: superellipse(1.5)` включается в `@supports`. Радиусы берутся из токенов `$border-radius-*`, нулевые углы передаются как `0` без единиц, а `$shrink` (по умолчанию `$border-radius-sm`) компенсирует визуально более скруглённый суперэллипс. Для круглых элементов (`border-radius: 50%`, `$border-radius-full`) миксин не применяется, вместо него остаётся обычный радиус.

Пример:

```scss
@use '../../../styles/variables' as *;
@use '../../../styles/mixins' as *;

// Съезжающая снизу панель
.sheet {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  max-height: 85vh;
  padding: $spacing-xl;
  overflow-y: auto;

  background-color: $color-background;
  border: $border-width-1 solid $color-border;
  box-shadow: $shadow-2xl;

  color: $color-text-primary;

  animation: slide-up $transition-fast;

  @include superellipse($border-radius-xl, $border-radius-xl, 0, 0);
}

// Появление шторки снизу
@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0);
  }
}
```

## 7. Регистрация в `src/shared/ui/index.ts`

Новый публичный компонент добавляется в общий barrel‑файл `src/shared/ui/index.ts` в верхний блок реэкспортов. Порядок — алфавитный:

```ts
export * from './BottomSheet';
export * from './Button';
export * from './Drawer';
// ...
```

Примитивы выносятся в отдельный блок с комментарием `// Примитивы`:

```ts
// Примитивы
// Overlay — единая подложка для всех оверлеев (модалки, шторки, drawer и т.д.)
export * from './primitives/Overlay';
```

## 8. Вложенные и примитивные компоненты

- Если у компонента есть **составные части с собственными стилями**, каждая выносится в подпапку: `ComponentName/Child/Child.tsx` + `Child.module.scss` (пример — `Accordion/AccordionItem/`).
- Если у частичной компоненты **нет собственных стилей** и она является простой обёрткой — допустимо держать её отдельным файлом в папке родителя (пример — `LayoutWithSidebar/Content.tsx`, `LayoutWithSidebar/Sidebar.tsx`).
- Внутренние части реэкспортируются из `index.ts` родителя и используются через композицию (`children`). Проверять тип вложенного компонента следует через `child.type === Content` (см. `LayoutWithSidebar`).
- Логику, которая нужна нескольким независимым компонентам, выносить в **примитив** `src/shared/ui/primitives/<Name>/<Name>.tsx` (пример — `Overlay`), а не копировать между компонентами.

## 9. Паттерны поведения

Для интерактивных компонентов (оверлеи, всплывающие панели) придерживаемся единых приёмов, отработанных в `Drawer` и `BottomSheet`.

1. **Контролируемая видимость** — пропсы `open: boolean` и `onClose: () => void`. Компонент не хранит собственный стейт открытия.
2. **Нет открытого состояния — нет рендера**: при `if (!open) return null;`.
3. **Портал в `body`** для оверлеев: `createPortal(<></>, document.body)`.
4. **Закрытие по Escape** — `useEffect` с навешиванием/снятием `keydown`‑обработчика; поведение управляется пропом `closeOnEscape` (по умолчанию `true`).
5. **Клик по подложке** — единый примитив `Overlay`; поведение управляется пропом `closeOnBackdrop` (по умолчанию `true`).
6. **Блокировка прокрутки страницы** под оверлеем: сохранить и вернуть `document.body.style.overflow` в `useEffect`.
7. **Доступность**: `role='dialog'`, `aria-modal='true'`, `aria-labelledby={ titleId }`, где `titleId = useId()`, и скрытый визуально заголовок `<h2 className={ styles.visuallyHidden } id={ titleId }>`. Иконки декоративны — `aria-hidden='true'`.
8. **Слои** задаются из перечисления `ZIndex` (`src/utils/zIndex.ts`) через инлайн‑стиль, чтобы не хардкодить `z-index` в разметке.

## 10. Стиль кода

Код компонентов подчиняется правилам `eslint.config.mjs` и `.prettierrc`. Ключевое:

- отступ — 2 пробела;
- одинарные кавычки, в JSX — также одинарные (`'` по умолчанию);
- точка с запятой обязательна, «висячих» запятых нет;
- максимальная длина строки — 120 символов;
- пробелы внутри фигурных скобок: `{ children }`, `{ onClick }`;
- `@stylistic/arrow-parens: always` — `(arg) => ...`;
- перед `return` — пустая строка;
- не более одной пустой строки подряд;
- `id-length` требует осмысленных имён; односимвольные имена только с `_`‑префиксом;
- `import/order` — см. раздел 3.

Запуск проверок:

```bash
pnpm lint          # ESLint по коду
pnpm stylelint     # Stylelint по стилям
pnpm typecheck     # проверка типов (tsc -b)
```

Перед коммитом все проверки обязаны проходить без ошибок (в т.ч. через `lint-staged`).

## 11. Эталонный пример

Ниже — полный пример компонента с разделением ответственности: описание пропсов — в интерфейсе, описание компонента — в реализации.

`types.ts`:

```ts
import type { CSSProperties, ReactNode } from 'react';

export interface BottomSheetProps {
  /** Управляет видимостью компонента. */
  open: boolean;
  /** Вызывается при закрытии (клик по подложке или Escape). */
  onClose: () => void;
  /** Произвольный контент внутри шторки. */
  children?: ReactNode;
  /** Закрывать ли при клике по подложке. */
  closeOnBackdrop?: boolean;
  /** Закрывать ли по нажатию Escape. */
  closeOnEscape?: boolean;
  /** Дополнительный класс для панели шторки. */
  className?: string;
  /** Дополнительные стили для панели шторки. */
  style?: CSSProperties;
}
```

`BottomSheet.tsx` — обратите внимание: JSDoc содержит только назначение компонента, без `@param`:

```tsx
import { type FC, useCallback, useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { ZIndex } from '@/utils/zIndex';

import { Overlay } from '../primitives/Overlay';

import { type BottomSheetProps } from './types';

import styles from './BottomSheet.module.scss';

/** Выезжающая снизу шторка */
export const BottomSheet: FC<BottomSheetProps> = ({
  open,
  onClose,
  children,
  closeOnBackdrop = true,
  closeOnEscape = true,
  className,
  style
}) => {
  const titleId = useId();

  // Закрытие по Escape
  useEffect(() => {
    if (!open || !closeOnEscape) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, closeOnEscape, onClose]);

  // Блокировка прокрутки страницы под шторкой
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const { overflow } = document.body.style;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const handleBackdropClick = useCallback(() => {
    if (closeOnBackdrop) {
      onClose();
    }
  }, [closeOnBackdrop, onClose]);

  if (!open) {
    return null;
  }

  return createPortal(
    <>
      <Overlay onClick={handleBackdropClick} style={{ zIndex: ZIndex.BottomSheet }} />
      <section
        className={cn(styles.sheet, className)}
        style={{ ...style, zIndex: ZIndex.BottomSheet }}
        role='dialog'
        aria-modal='true'
        aria-labelledby={titleId}
      >
        <h2 className={styles.visuallyHidden} id={titleId}>
          Bottom sheet
        </h2>
        {children}
      </section>
    </>,
    document.body
  );
};
```

`index.ts`:

```ts
export * from './BottomSheet';
export * from './types';
```

## 12. Чек-лист нового компонента

- [ ] Создана папка `src/shared/ui/<ComponentName>/` (для примитива — `src/shared/ui/primitives/<Name>/`).
- [ ] Есть четыре файла: `<ComponentName>.tsx`, `<ComponentName>.module.scss`, `types.ts`, `index.ts`.
- [ ] Интерфейс называется `<ComponentName>Props`, у каждого пропа есть русский JSDoc.
- [ ] В `<ComponentName>.tsx` JSDoc описывает **только назначение компонента** — без `@param`.
- [ ] Использован именованный экспорт (`export const ...`), без `default`.
- [ ] Классы собираются через `cn(...)`, пользовательский `className` добавляется последним.
- [ ] Типы импортируются через `import type`, порядок импортов соответствует `import/order`.
- [ ] В стилях подключены токены (`variables`/`mixins`), классы в `camelCase`, комментарии на русском.
- [ ] Компонент добавлен в `src/shared/ui/index.ts` (примитивы — в блок `// Примитивы`).
- [ ] Для интерактивных компонентов соблюдены паттерны из раздела 9 (контролируемость, портал, Escape, блокировка скролла, доступность, `ZIndex`).
- [ ] `pnpm lint`, `pnpm stylelint`, `pnpm typecheck` проходят без ошибок.
