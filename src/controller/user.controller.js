import { User } from "../models/User.js";

//buscar por id del usuario
export const getUserById = async (req, rep) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);
    return rep.json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Retornar todos los usuarios
export const getAllUsers = async (req, rep) => {
  try {
    const user = await User.findAll();
    return rep.json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
