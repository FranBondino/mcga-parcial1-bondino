<h1 align="center">Parcial N°1 Modelos Computacionales de Gestion Administrativa</h1>
<h2 align="center">Consignas</h2>
Crear un servidor web usando Node.js, NPM y Express.js respetando la arquitectura API REST. Debe contar
con una serie de endpoints que contemple las acciones básicas de un CRUD de productos. Los datos de los
productos afectados deben estar persistidos en un base de datos NoSQL, usando Mongoose como ODM y
Mongo Atlas como servicio en la nube en donde alojar la base de datos.
Crear un esquema de mongoose para los productos el cual tenga las siguientes propiedades. Cada una debe
contar con al menos la validación de tipo de dato:
- id
- name
- price
- stock
- description
Crear 6 endpoints respetando los métodos HTTP para manejar el CRUD:
- GET: para hacer ping al servidor y que devuelva 'OK' en caso que el server y la BD estén levantadas
- GET: para conseguir la lista entera de productos
- GET: para conseguir un producto por name O id
- POST: para agregar un producto a la BD
- DELETE: para eliminar un producto
- PUT: para editar algún campo de un producto
El proyecto debe manejar variables de entorno utilizando la librería dotEnv, en donde deben ir los valores
sensibles que no deben ser subidos al repositorio, como por ejemplo el string de conexión a la base de
datos.


<h2 align="center">Tecnologias Empleadas</h2>
-MongoDB
-Mongoose
-Node.js
-Express

<h2 align="center">Instrucciones</h2>
Para clonar el repositorio utilizando git desde la terminal:<br>
-Desde el repositorio, seleccionar el boton clonar.<br>
-Copiar el comando clone.<br>
-Desde una terminal, posicionarse en el directorio local donde se quiera clonar el repositorio<br>
-Pegar el comando en la terminal, por ejemplo:<br>
$ git clone https://github.com/FranBondino/mcga-parcial1-bondino.git

