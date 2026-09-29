import app from "./app.js";
import { sequalize } from "./database/database.js";

async function intit() {
  try {
    await sequalize
      .authenticate()
      .then(() => {
        console.log("conexion exitosa a la BD");
      })
      .catch(() => {
        console.log("Error al realizar la conexion a la BD", err);
      });

    app.listen(3000, () => {
      console.log("serever on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
}

intit();
