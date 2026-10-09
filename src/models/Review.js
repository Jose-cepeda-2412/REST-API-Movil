import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { User } from "./User.js";

export const Review = sequelize.define("review", {
  reviewId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "userId",
    },
  },
  videoGameId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "videoGames",
      key: "videoGameId",
    },
  },
  gameplayRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
  },
  graphicsRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
  },
  storyRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avgRating: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  },
});

// Nota promedio de la reseña: promedio de las 3 notas
// (jugabilidad, gráficos e historia), redondeado a 2 decimales.
function calcularPromedio(review) {
  const total =
    review.gameplayRating + review.graphicsRating + review.storyRating;
  return Math.round((total / 3) * 100) / 100;
}

// Recalcula numReviews y avgRating del usuario a partir de sus reseñas:
// numReviews = conteo de reseñas, avgRating = promedio de los promedios.
export async function updateUserReviewStats(userId) {
  const stats = await Review.findOne({
    where: { userId },
    attributes: [
      [sequelize.fn("COUNT", sequelize.col("reviewId")), "numReviews"],
      [sequelize.fn("AVG", sequelize.col("avgRating")), "avgRating"],
    ],
    raw: true,
  });

  const numReviews = Number(stats?.numReviews ?? 0);
  const avgRating =
    stats?.avgRating == null
      ? 0.0
      : Math.round(Number(stats.avgRating) * 100) / 100;

  await User.update({ numReviews, avgRating }, { where: { userId } });
}

// Calcula avgRating antes de crear o actualizar una reseña
Review.addHook("beforeSave", (review) => {
  review.avgRating = calcularPromedio(review);
});

// Lo mismo para los seeds que usan bulkCreate
Review.addHook("beforeBulkCreate", (reviews) => {
  for (const review of reviews) {
    review.avgRating = calcularPromedio(review);
  }
});

// Mantiene las estadísticas del usuario al día con cada cambio en sus reseñas
Review.addHook("afterCreate", (review) => updateUserReviewStats(review.userId));

Review.addHook("afterBulkCreate", async (reviews) => {
  const userIds = [...new Set(reviews.map((review) => review.userId))];
  for (const userId of userIds) {
    await updateUserReviewStats(userId);
  }
});

Review.addHook("afterUpdate", (review) => updateUserReviewStats(review.userId));

Review.addHook("afterDestroy", (review) => updateUserReviewStats(review.userId));
