# TP ODM MongoDB
   

### Dependencias:
    "body-parser": "^1.20.1",
    "express": "^4.18.2",
    "mongoose": "^6.6.5"

### Instalación:
~~~
> npm install
~~~

### Ejecución:
~~~
> npm start
~~~

### Estructura (MVC)
- `server.js`
- app
    - config
        - config.js
        - database.js
    -controllers
        - BurgerController.js
        - FriesController.js
        - MenuController.js
    - models
        - BurgerModel.js
        - FriesModel.js
        - MenuModel.js
    - routes
        - burger.js
        - fries.js
        - menu.js
    - views
        - doc.html
    - app.js

El servidor (server.js) inicia con el comando npm start. Entonces se lanza la app (app.js) que carga express y las rutas de los endpoint.

**La raiz '/'** contiene la `documentacion` (doc.html) con los endpoints disponibles.
