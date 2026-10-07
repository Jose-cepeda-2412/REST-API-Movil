import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";

export const Resenia = sequalize.define("reseña", {
  idResenia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "usuarios",
      key: "idUsuario",
    },
  },
  idVideoJuego: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "videoJuegos",
      key: "idVideoJuego",
    },
  },
  ratingJugabilidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
  },
  ratingGraficos: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
  },
  ratingHistoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
  },
  contenido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
