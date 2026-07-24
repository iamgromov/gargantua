export * from './IconButton/IconButton';
export * from './LinkButton/LinkButton';
export * from './Logo/Logo';
export * from './ScrollToTop/ScrollToTop';
export * from './Select/Select';
export * from './Spinner/Spinner';
export * from './ThemeSwitcher/ThemeSwitcher';
export * from './Typography/Typography';

// TODO:
// Button, IconButton, LinkButton — универсальные кнопки со всеми вариантами размеров/цветов.
// Input, Textarea, Select, Checkbox, Radio, Switch — базовые поля ввода без знания о том, какие именно данные вводятся.
// Modal, Drawer, Tooltip, Popover, DropdownMenu — контейнеры/оверлеи, которые просто показывают переданный контент.
// Card, Grid, Stack, Container, Tabs, Accordion — композиционные блоки для layout’а и группировки контента.
// Typography (заголовки, текст), Tag, Badge, Avatar, Skeleton, Spinner — чисто визуальные элементы дизайна‑системы.

// Header, Footer, Sidebar, Navbar — шапка, подвал, общие layout‑блоки приложения. Они могут знать про авторизацию, навигацию и т.п.
// UserCard, ProductCard, ArticlePreview — карточки доменных сущностей с конкретными полями (имя пользователя, цена товара, дата статьи).
// LoginForm, SignupForm, CheckoutForm, SearchForm — формы с валидацией, отправкой на API, локальным стейтом.
// CartWidget, LanguageSwitcher, ThemeSwitcher, NotificationsPanel — фичевые компоненты с логикой, использующие shared/ui внутри.
// LayoutMain, DashboardLayout, AuthLayout — макеты страниц, собирающие хедер/сайдбар/контент.
