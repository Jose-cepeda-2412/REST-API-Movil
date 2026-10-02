import { Usuario } from "./Usuario.js";
import { Resenia } from "./Resenia.js";
import { VideoJuego } from "./VideoJuego.js";
import { Seguidores } from "./Seguidores.js";
export function configurarRelaciones() {
  //usuario 1-----N reseñas
  Usuario.hasMany(Resenia, {
    foreignKey: "idUsuario",
    as: "resenias", //para hacer la consulta usuario.getResenias()
    onDelete: "cascade",
    hooks: true, //cuasndo se realice cierta accion se ejecute otra accion de manera automatica
  });

  Resenia.belongsTo(Usuario, {
    foreignKey: "idUsuario",
    as: "usuario", //para poder hacer resenia.getUsuario()
  });

  //reseñas N----- 1 videojuego

  Resenia.belongsTo(VideoJuego, {
    foreignKey: "idVideoJuego",
    as: "videoJuego",
  });

  VideoJuego.hasMany(Resenia, {
    foreignKey: "idVideoJuego",
    as: "resenias",
    onDelete: "cascade",
    hooks: true, //cuasndo se realice cierta accion se ejecute otra accion de manera automatica
  });

  Usuario.belongsToMany(Usuario, {
    through: Seguidores,
    foreignKey: "idUsuarioSeguidor",
    otherKey: "idUsuarioSeguido",
    as: "followers",
  });

  Usuario.belongsToMany(Usuario, {
    through: Seguidores,
    as: "following",
    foreignKey: "idUsuarioSeguido",
    otherKey: "idUsuarioSeguidor",
  });
}
