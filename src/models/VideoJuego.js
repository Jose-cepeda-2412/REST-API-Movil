import { DataTypes } from "sequelize";
import { sequalize } from "../database/database.js";
export const VideoJuego = sequalize.define("videoJuego", {
  idVideoJuego: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desarrollador: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plataforma: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaLanzamiento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
