# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Структура

public - директория с публичной точкой входа в приложение
└─── index.html - точка входа и настройки сборки

src - корневая директория для скриптов
│ app - для инициализация провайдеров и сервисов уровня приложения
│ │ providers - хранилища состояний и контекста приложения
│ │ │ _provider_name_
│ │ │ │ index.js - реэкспорт провайдера
│ │ │ └─── _provider_name_.jsx - HOC провайдер. Инициализатор сервиса, который подключается в app
│ │ └─── index.js - комбинированный из множества провайдеров провайдер (для упрощения подключения)
│ │ App.test.js - тест для корневого элемента
│ └─── App.jsx - корневой элемент для подключения провайдеров
│ layouts - компоненты обертки
│ └─── _layout_name_.jsx - HOC, может подключатся к апи и хранилищам
│ │ │ index.js - реэкспорт компонента
│ │ │ _layout_name_.module.scss - стили компонента
│ │ └─── _layout_name_.jsx - HOC обертка
│ modules
│ │ index.js - реэкспорт компонента
│ └─── _module_name_.jsx - компонент модуля, может подключатся к апи и хранилищам
│ pages
│ └─── _page_name_.jsx - HOC, может подключатся к апи и хранилищам
│ │ │ _page_name_.module.scss - стили страницы
│ │ └─── _page_name_.jsx - страница, предназначена для объединения модулей и оберток
│ └─── index.js - предназначен для подключения страниц к роутеру
│ shared
│ │ assets
│ │ │ images - картинки
│ │ └─── svg - иконки
│ │ components - переиспользуемые компоненты
│ │ │ index.js - реэкспорт компонента
│ │ │ _component_name_.module.scss - стили компонента
│ │ └─── _component_name_.jsx - компонент без подключения к хранилищам и апи, все из пропов
│ │ hooks
│ │ └─── _hook_.js - вспомогательные хуки
│ │ lib
│ │ └─── _lib_.js - вспомогательные функции
│ └─── styles
│ │ index.css - для подключения глобальных стилей
│ └─── overrides.css - для переопределения глобальных стилей
└─── index.js - точка входа в приложения
