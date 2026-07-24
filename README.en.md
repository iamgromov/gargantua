[![Pages Deploy](https://github.com/iamgromov/gargantua/actions/workflows/deploy.yml/badge.svg)](https://github.com/iamgromov/gargantua/actions/workflows/deploy.yml)
[![Workflow Status](https://img.shields.io/github/actions/workflow/status/iamgromov/gargantua/deploy.yml?branch=main&logo=githubactions)](https://github.com/iamgromov/gargantua/actions/workflows/deploy.yml)
[![Last Commit](https://img.shields.io/github/last-commit/iamgromov/gargantua?logo=git)](https://github.com/iamgromov/gargantua/commits/main/)

# <img src="public/favicon.png" width="24" alt="favicon"> Gargantua

**Gargantua** is a React project template that lets you quickly start a new project without additional setup. It features a basic project structure, configured linters, automatic linting and formatting on commit, and deployment to GitHub Pages via GitHub Actions.

## <img src="public/television.png" width="16" alt="television"> Demo

View the demo here: [iamgromov.github.io/gargantua](https://iamgromov.github.io/gargantua)

## <img src="public/joystick.png" width="16" alt="joystick"> Features

- **Modular architecture** — components organized by separation of concerns
- **Theme support** — switching between light and dark themes
- **Responsive design** — components adapt to various screen sizes
- **TypeScript** — full typing for better DX
- **Reusable components** — set of ready-to-use UI elements
- **Modern stack** — React 19, Vite, Redux Toolkit, SCSS

## <img src="public/tools.png" width="16" alt="tools"> Technologies

- **React** — library for building user interfaces
- **TypeScript** — typed JavaScript
- **Vite** — fast build tool
- **Redux Toolkit** — application state management
- **React Router DOM** — routing
- **SCSS** — CSS preprocessor
- **ESLint + Stylelint** — code and styles linting
- **Prettier** — code formatting
- **Husky** — Git hooks

## <img src="public/package.png" width="16" alt="package"> Installation

```bash
# Clone the repository
git clone https://github.com/iamgromov/gargantua.git

# Navigate to project directory
cd gargantua

# Install dependencies (pnpm)
pnpm install
```

## <img src="public/rocket.png" width="16" alt="rocket"> Running

```bash
# Development mode
pnpm dev

# Production build
pnpm build

# Preview build
pnpm preview

# Lint code
pnpm lint

# Lint styles
pnpm stylelint
```

Auto-fix commands are also available:

```bash
pnpm lint:fix       # ESLint with auto-fix
pnpm stylelint:fix  # Stylelint with auto-fix
```

## <img src="public/handshake.png" width="16" alt="handshake"> Contributing

The project is in active development. To contribute:

1. Create a feature branch from `main` named `feature/<your-feature>`
2. Make the necessary changes
3. Ensure all linting checks pass
4. Create a Pull Request into `dev` or `main`

### Branch Rules

| Rule                 | Description                                       |
| -------------------- | ------------------------------------------------- |
| **Deployment**       | Only from `main`                                  |
| **Feature branches** | Must be created from `main` and named `feature/*` |
| **Merge targets**    | Feature branches merge into `dev` or `main` only  |

These rules are enforced automatically via GitHub Actions on every PR.

---

**Author**: [iamgromov](https://github.com/iamgromov)
**Demo**: [https://iamgromov.github.io/gargantua](https://iamgromov.github.io/gargantua)
