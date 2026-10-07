import { User } from "../models/User.js";

const initUsers = [
  {
    email: "andres.paz@gmail.com",
    username: "AndresPaz",
    password: "jose123",
    biography: "Amante de los videojuegos y los RPG.",
    registrationDate: "2026-09-01",
    fotoUrl: null,
    isActive: true,
  },
  {
    email: "laura.gomez@gmail.com",
    username: "LauraGamer",
    password: "laura123",
    biography: "Fan de los juegos de aventura y mundo abierto.",
    registrationDate: "2026-09-03",
    fotoUrl: null,
    isActive: true,
  },
  {
    email: "santiago.martinez@gmail.com",
    username: "SantiGames",
    password: "santi123",
    biography: "Siempre buscando el proximo juego para completar.",
    registrationDate: "2026-09-05",
    fotoUrl: null,
    isActive: true,
  },
  {
    email: "valentina.rojas@gmail.com",
    username: "ValePlays",
    password: "vale123",
    biography: "Me encantan los juegos indie y de aventura.",
    registrationDate: "2026-09-08",
    fotoUrl: null,
    isActive: true,
  },
  {
    email: "andres.ramirez@gmail.com",
    username: "AndresXP",
    password: "andres123",
    biography: "FPS, accion y juegos competitivos.",
    registrationDate: "2026-09-10",
    fotoUrl: null,
    isActive: true,
  },
  {
    email: "camila.torres@gmail.com",
    username: "CamiPixel",
    password: "camila123",
    biography: "Jugando una historia a la vez.",
    registrationDate: "2026-09-12",
    fotoUrl: null,
    isActive: true,
  },
];

export async function loadInitUsers() {
  try {
    //contar cuantos datos hay en la BD, si esta vacio ingresar los usuarios
    const count = await User.count();
    if (count == 0) {
      await User.bulkCreate(initUsers);
      console.log("Usuarios cargados a BD");
    }
  } catch (error) {
    console.log(error);
  }
}
