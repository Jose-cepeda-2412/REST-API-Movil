import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";

export const Seguidores = sequalize.define("seguidores", {
  idSeguidos: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  idUsuarioSeguidor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "usuarios",
      key: "idUsuario",
    },
  },

  idUsuarioSeguido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "usuarios",
      key: "idUsuario",
    },
  },
});
