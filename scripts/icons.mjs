import { existsSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** Корневая папка с иконками, разложенными по категориям */
const ICONS_DIR = resolve(__dirname, '../src/assets/icons');

/** Заголовок сгенерированного файла */
const HEADER = 'Сгенерировано автоматически: scripts/icons.mjs — не редактировать вручную.';

/**
 * Преобразует имя svg-файла в имя React-компонента (PascalCase).
 * `folder-2` → `Folder2`, `3dcube` → `Icon3dcube`, `battery-empty 2` → `BatteryEmpty2`,
 * `ruler&pen` → `RulerPen`, `Snow` → `Snow`.
 */
const toComponentName = (fileName) => {
  const pascal = fileName
    .replace(/\.svg$/i, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  // Имена, начинающиеся с цифры, не являются валидными идентификаторами
  return /^[0-9]/.test(pascal) ? `Icon${pascal}` : pascal;
};

/** Собирает список категорий — прямые подпапки с svg-файлами */
const getCategories = () =>
  readdirSync(ICONS_DIR)
    .filter((name) => statSync(join(ICONS_DIR, name)).isDirectory())
    .sort();

/** Возвращает отсортированные svg-файлы категории */
const getCategoryIcons = (category) =>
  readdirSync(join(ICONS_DIR, category))
    .filter((fileName) => fileName.toLowerCase().endsWith('.svg'))
    .sort();

/** Генерирует содержимое index.ts для одной категории */
const buildCategoryBarrel = (category) => {
  const icons = getCategoryIcons(category);
  const used = new Map();
  const lines = icons.map((fileName) => {
    const name = toComponentName(fileName);

    if (used.has(name)) {
      throw new Error(
        `Дублирующееся имя «${name}» в категории «${category}»: ${used.get(name)} и ${fileName}`
      );
    }

    used.set(name, fileName);

    return `export { default as ${name} } from './${fileName}?react';`;
  });

  return `/**\n * Иконки категории «${category}».\n * ${HEADER}\n */\n\n${lines.join('\n')}\n`;
};

/** Генерирует содержимое корневого index.ts с реестром категорий */
const buildRootBarrel = (categories) => {
  const imports = categories.map((category) => `import * as ${category} from './${category}';`);
  const entries = categories.map((category) => `  ${category}`);

  return (
    `/**\n * Реестр иконок, сгруппированных по папкам-категориям.\n * ${HEADER}\n */\n\n` +
    `${imports.join('\n')}\n\n` +
    `/** Иконки, сгруппированные по папкам-категориям */\n` +
    `export const ICON_CATEGORIES = {\n${entries.join(',\n')}\n};\n`
  );
};

/** Пишет файл и сообщает о результате */
const writeFile = (path, content) => {
  writeFileSync(path, content, 'utf-8');
  console.log(`✓ ${path.replace(`${ICONS_DIR}/`, '')}`);
};

const main = () => {
  if (!existsSync(ICONS_DIR)) {
    throw new Error(`Папка с иконками не найдена: ${ICONS_DIR}`);
  }

  const categories = getCategories();
  let total = 0;

  categories.forEach((category) => {
    writeFile(join(ICONS_DIR, category, 'index.ts'), buildCategoryBarrel(category));
    total += getCategoryIcons(category).length;
  });

  writeFile(join(ICONS_DIR, 'index.ts'), buildRootBarrel(categories));

  console.log(`\nГотово: ${total} иконок в ${categories.length} категориях.`);
};

main();
