import { User } from "./User.js";
import { Review } from "./Review.js";
import { VideoGame } from "./VideoGame.js";
import { Follow } from "./Follow.js";
export function setupAssociations() {
  //usuario 1-----N reseñas
  User.hasMany(Review, {
    foreignKey: "userId",
    as: "reviews", //para hacer la consulta user.getReviews()
    onDelete: "cascade",
    hooks: true, //cuasndo se realice cierta accion se ejecute otra accion de manera automatica
  });

  Review.belongsTo(User, {
    foreignKey: "userId",
    as: "user", //para poder hacer review.getUser()
  });

  //reseñas N----- 1 videojuego

  Review.belongsTo(VideoGame, {
    foreignKey: "videoGameId",
    as: "videoGame",
  });

  VideoGame.hasMany(Review, {
    foreignKey: "videoGameId",
    as: "reviews",
    onDelete: "cascade",
    hooks: true, //cuasndo se realice cierta accion se ejecute otra accion de manera automatica
  });

  User.belongsToMany(User, {
    through: Follow,
    foreignKey: "followerId",
    otherKey: "followedId",
    as: "followers",
  });

  User.belongsToMany(User, {
    through: Follow,
    as: "following",
    foreignKey: "followedId",
    otherKey: "followerId",
  });
}
