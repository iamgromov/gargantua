export * from './Accordion/Accordion';
export * from './Footer/Footer';
export * from './Header/Header';

//TODO:
// Header, Footer, Sidebar, Navbar — шапка, подвал, общие layout‑блоки приложения. Они могут знать про авторизацию, навигацию и т.п.
// UserCard, ProductCard, ArticlePreview — карточки доменных сущностей с конкретными полями (имя пользователя, цена товара, дата статьи).
// LoginForm, SignupForm, CheckoutForm, SearchForm — формы с валидацией, отправкой на API, локальным стейтом.
// CartWidget, LanguageSwitcher, ThemeSwitcher, NotificationsPanel — фичевые компоненты с логикой, использующие shared/ui внутри.
// LayoutMain, DashboardLayout, AuthLayout — макеты страниц, собирающие хедер/сайдбар/контент.
