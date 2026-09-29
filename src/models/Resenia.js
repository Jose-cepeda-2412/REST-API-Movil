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
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
  },
  fechaResenia: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  contenido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
