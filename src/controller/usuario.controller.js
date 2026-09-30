import { Usuario } from "../models/Usuario.js";

//buscar por id del usuario
export const getUsuarioId = async (req, rep) => {
  try {
    const id = req.params.id;
    const usuario = await Usuario.findByPk(id);
    return rep.json(usuario);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
