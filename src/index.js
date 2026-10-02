import app from "./app.js";
import { sequalize } from "./database/database.js";
import { loadInitVideoJuegos } from "./database/initVideoJuego.js";
import { loadInitUsuarios } from "./database/initUsuarios.js";
import { loadInitResenia } from "./database/initResenia.js";
import { configurarRelaciones } from "./models/relations.js";
import "./models/VideoJuego.js";
import "./models/Resenia.js";
import "./models/Usuario.js";
import "./models/relations.js";

async function intit() {
  try {
    await sequalize
      .authenticate()
      .then(() => {
        console.log("conexion exitosa a la BD");
      })
      .catch((error) => {
        console.log("Error al realizar la conexion a la BD", error);
      });

    await sequalize.sync({ force: true }); //crear tablas

    configurarRelaciones();

    await loadInitUsuarios();

    await loadInitVideoJuegos();

    await loadInitResenia();

    app.listen(3000, () => {
      console.log("server on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
}

intit();
