import app from "./app.js";
import { sequelize } from "./database/database.js";
import { loadInitVideoGames } from "./database/initVideoGames.js";
import { loadInitUsers } from "./database/initUsers.js";
import { loadInitReviews } from "./database/initReviews.js";
import { setupAssociations } from "./models/relations.js";
import "./models/VideoGame.js";
import "./models/Review.js";
import "./models/User.js";
import "./models/relations.js";

async function init() {
  try {
    await sequelize
      .authenticate()
      .then(() => {
        console.log("conexion exitosa a la BD");
      })
      .catch((error) => {
        console.log("Error al realizar la conexion a la BD", error);
      });

    await sequelize.sync({ force: true }); //crear tablas

    setupAssociations();

    await loadInitUsers();

    await loadInitVideoGames();

    await loadInitReviews();

    app.listen(3000, () => {
      console.log("server on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
}

init();
