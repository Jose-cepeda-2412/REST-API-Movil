# Voxel Review - API REST

API REST desarrollada como backend para **Voxel Review**, una aplicación móvil enfocada en reseñas de videojuegos.

La API permite gestionar la información necesaria para la aplicación móvil, proporcionando endpoints para consultar, crear, modificar y eliminar información almacenada en una base de datos PostgreSQL.

## Tecnologías utilizadas

- Node.js
- Express.js
- Sequelize
- PostgreSQL
- JavaScript
- REST API

## Funcionalidades

Actualmente, la API permite:

- Gestionar usuarios.
- Gestionar videojuegos.
- Crear reseñas asociadas a un usuario y un videojuego.
- Consultar las reseñas realizadas por un usuario.
- Consultar las reseñas de un videojuego.
- Modificar reseñas.
- Eliminar reseñas.
- Validar la información recibida al crear o modificar una reseña.
- Evitar que un usuario realice más de una reseña sobre el mismo videojuego.

## Estructura del proyecto

El proyecto está organizado principalmente en:

- `models/`: definición de los modelos utilizados por Sequelize.
- `controllers/`: lógica para procesar las peticiones y respuestas de la API.
- `routes/`: definición de las rutas y endpoints.
- `database/`: configuración de la conexión con la base de datos.

## Base de datos

La información de la aplicación se almacena en **PostgreSQL**.

**Sequelize** se utiliza como ORM para interactuar con la base de datos desde el backend.

## API REST

La API utiliza métodos HTTP para realizar las diferentes operaciones:

- `GET` para consultar información.
- `POST` para crear información.
- `PUT/PATCH` para modificar información.
- `DELETE` para eliminar información.

Las respuestas de la API se envían en formato **JSON** utilizando los códigos de estado HTTP correspondientes.

## Aplicación móvil

Este backend está diseñado para ser consumido por la aplicación móvil **Voxel Review**, permitiendo que la aplicación consulte y gestione la información almacenada en la base de datos mediante peticiones HTTP.
