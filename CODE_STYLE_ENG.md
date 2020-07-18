# Code style

### Global

Structure of file:
- The project should be located in the folder app.
- Each screen should be located in folder view (app/view)
- Folder with screen should contain folders: redux,saga, _test_,(app/mainScreen/redux ...),
- Main folder should be named index.(js or ts) (app/mainScrenn/index).
- You should write the name of all files with camelCase (only in english)
- Music files,the icons, svg,printing type should be located in folder assests  in the corresponding folders (app/assets/fronts ....).
- All constants (colors, url, resource paths and so on) should be stored in next path(app/modules/utils) in utils folder
- All reused components must be located in the folder components (app/components).
- The language structure is contained in the localization folder app/il8n or another library
- All texts are taken from constant.To maintain localization  in the future 
- Navigation contained in the modules folder along the path (app/modules)

### Variable naming 
- To choose a variable name that will tell the reader of the program what the variable represents

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

- The name of functions should be Self-explanatory   and point to action (Should be verb)

  //bad
  function name () {
    return someName
  }

  //good
  function getUserName () {
    return someName
  }

- Ternary operator should be short ,otherwise translate to if else
  (isAdmin ? 'Admin' : 'Guest')

### Using try-catch

- If a function is asynchronous (async - await)
- If a function contains logic with JSON (JSON.stringify, JSON.parse)
- In catch we have to show error with **console.warn('function name: ', error);**

### Mixed

- Create object through **{}**
  // bad
  const item = new Object();

  // good
  const item = {};

- Create arrays through **[]**
  // bad
  const items = new Array();

  // good
  const items = [];  

- Avoid multi-line spaces