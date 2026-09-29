import { Usuario } from "../models/Usuario.js";

//buscar por id del usuario
export const getUsuarioId = async (req, rep) => {
  const id = req.params.id;
  const usuario = await Usuario.findByPk(id);
  return rep.json(usuario);
};
