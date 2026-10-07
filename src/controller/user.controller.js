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
