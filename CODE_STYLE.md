# Code style

### Global

Файловая структура:
- проект должен находиться в папке app.
- каждый экран должен находиться в папке view (app/view).
- папка с экраном должен содержать папки: redux, saga, __test__, (app/mainScreen/redux ...),
- главный файл должен называться index.(jsx либо tsx) (app/mainScreen/index).
- главный файл должен содержать стиль style.(js либо ts) (app/mainScreen/index).
- название всех файлов пишем camelCase (только на английском).
- файлы музыки, иконки, шрифтов, svg, должны быть в папке assets в соответствующих папках (app/assets/fonts ...).
- все константы (цвета, url, пути к ресурсам и т.д) должны храниться по пути (app/modules/utils) в папке utils
- все переиспользуемые компоненты должны находиться в папке components (app/components).
- языковая структура содержиться в папке локализации app/i18n либо же другая библиотека.
- все тексты берём из констант.Для поддержания в будующем локализации.
- навигация содержиться в папке modules по пути (app/modules).

### Variable naming

- Название переменных должны быть "говорящими" (быть существительным)

  //bad
  const a = 10;
  const b = 'John'

  //good
  const counter = 10;
  const userName = 'John'

- Constants located at the top of a file
- Constants naming with capiutal laters **I_AM_CONSTANT**
- Boolean - starts with **is**
- Conditions (if) always using with **{ }**

### Functions naming

- Название функций должны быть "говорящими" и указывать на действие (быть глаголом)

  //bad
  function name () {
    return someName
  }

  //good
  function getUserName () {
    return someName
  }

- Тернарный оператор должен быть коротким, иначе переводим в if else
  (isAdmin ? 'Admin' : 'Guest')

### Using try-catch

- If a function is asynchronous (async - await)
- If a function contains logic with JSON (JSON.stringify, JSON.parse)
- In catch we have to show error with **console.warn('finction name: ', error);**

### Mixed

- Создовать объекты через **{}**
  // bad
  const item = new Object();

  // good
  const item = {};

- Создовать массивы через **[]**
  // bad
  const items = new Array();

  // good
  const items = [];  

- Избегать многострочных пробелов.