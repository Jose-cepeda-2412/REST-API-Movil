import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    port: 5432,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
);
