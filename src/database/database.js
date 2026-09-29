import { Sequelize } from "sequelize";

export const sequalize = new Sequelize("VoxelReview", "postgres", "Jose2412", {
  port: 5432,
  host: "localhost",
  dialect: "postgres",
});
