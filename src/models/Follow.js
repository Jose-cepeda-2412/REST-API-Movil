import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Follow = sequelize.define("follow", {
  followId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  followerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "userId",
    },
  },

  followedId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "userId",
    },
  },
});
