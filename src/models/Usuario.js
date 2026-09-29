import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";

export const Usuario = sequalize.define("usuario", {
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  nombreUsuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contrasenia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  biografia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fechaRegistro: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fotoUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});
