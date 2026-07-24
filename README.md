[![Pages Deploy](https://github.com/iamgromov/gargantua/actions/workflows/deploy.yml/badge.svg)](https://github.com/iamgromov/gargantua/actions/workflows/deploy.yml)
[![Workflow Status](https://img.shields.io/github/actions/workflow/status/iamgromov/gargantua/deploy.yml?branch=main&logo=githubactions)](https://github.com/iamgromov/gargantua/actions/workflows/deploy.yml)
[![Last Commit](https://img.shields.io/github/last-commit/iamgromov/gargantua?logo=git)](https://github.com/iamgromov/gargantua/commits/main/)

# <img src="public/favicon.png" width="24" alt="favicon"> Gargantua

**Gargantua** — шаблон React-проекта, позволяющий быстро начать новый проект без дополнительной настройки. Включает базовую структуру, настроенные линтеры, автоматическую проверку и форматирование кода при коммите, а также деплой на GitHub Pages через GitHub Actions.

## <img src="public/television.png" width="16" alt="television"> Демо

Демо-версия доступна по ссылке: [iamgromov.github.io/gargantua](https://iamgromov.github.io/gargantua)

## <img src="public/joystick.png" width="16" alt="joystick"> Возможности

- **Модульная архитектура** — компоненты разделены по зонам ответственности
- **Поддержка тем** — переключение между светлой и тёмной темами
- **Адаптивный дизайн** — компоненты подстраиваются под различные размеры экрана
- **TypeScript** — полная типизация для улучшенного DX
- **Переиспользуемые компоненты** — набор готовых UI-элементов
- **Актуальный стек** — React 19, Vite, Redux Toolkit, SCSS

## <img src="public/tools.png" width="16" alt="tools"> Технологии

- **React** — библиотека для построения пользовательских интерфейсов
- **TypeScript** — типизированный JavaScript
- **Vite** — быстрый сборщик проекта
- **Redux Toolkit** — управление состоянием приложения
- **React Router DOM** — маршрутизация
- **SCSS** — CSS-препроцессор
- **ESLint + Stylelint** — линтинг кода и стилей
- **Prettier** — форматирование кода
- **Husky** — Git-хуки

## <img src="public/package.png" width="16" alt="package"> Установка

```bash
# Клонирование репозитория
git clone https://github.com/iamgromov/gargantua.git

# Переход в директорию проекта
cd gargantua

# Установка зависимостей (pnpm)
pnpm install
```

## <img src="public/rocket.png" width="16" alt="rocket"> Запуск

```bash
# Режим разработки
pnpm dev

# Продакшн-сборка
pnpm build

# Предпросмотр сборки
pnpm preview

# Линтинг кода
pnpm lint

# Линтинг стилей
pnpm stylelint
```

Также доступны команды с автоисправлением:

```bash
pnpm lint:fix       # ESLint с автофиксом
pnpm stylelint:fix  # Stylelint с автофиксом
```

## <img src="public/handshake.png" width="16" alt="handshake"> Участие в развитии

Проект находится в активной разработке. Чтобы внести свой вклад:

1. Создайте feature-ветку от `main` с именем `feature/<например-дата-в-формате-ДД-ММ-ГГ>`
2. Внесите необходимые изменения
3. Убедитесь, что все проверки линтеров проходят успешно
4. Создайте Pull Request в `dev` или `main`

### Правила работы с ветками

| Правило              | Описание                                          |
| -------------------- | ------------------------------------------------- |
| **Деплой**           | Только из `main`                                  |
| **Feature-ветки**    | Создаются от `main`, имя вида `feature/*`         |
| **Цели для слияния** | Feature-ветки сливаются только в `dev` или `main` |

Эти правила проверяются автоматически через GitHub Actions при каждом PR.

---

**Автор**: [iamgromov](https://github.com/iamgromov)
**Демо**: [https://iamgromov.github.io/gargantua](https://iamgromov.github.io/gargantua)
