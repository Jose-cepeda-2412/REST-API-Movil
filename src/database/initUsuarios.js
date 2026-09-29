import { Usuario } from "../models/Usuario.js";

const initUsuarios = [
  {
    correo: "andres.paz@gmail.com",
    nombreUsuario: "AndresPaz",
    contrasenia: "jose123",
    biografia: "Amante de los videojuegos y los RPG.",
    fechaRegistro: "2026-09-01",
    fotoUrl: null,
    estado: true,
  },
  {
    correo: "laura.gomez@gmail.com",
    nombreUsuario: "LauraGamer",
    contrasenia: "laura123",
    biografia: "Fan de los juegos de aventura y mundo abierto.",
    fechaRegistro: "2026-09-03",
    fotoUrl: null,
    estado: true,
  },
  {
    correo: "santiago.martinez@gmail.com",
    nombreUsuario: "SantiGames",
    contrasenia: "santi123",
    biografia: "Siempre buscando el proximo juego para completar.",
    fechaRegistro: "2026-09-05",
    fotoUrl: null,
    estado: true,
  },
  {
    correo: "valentina.rojas@gmail.com",
    nombreUsuario: "ValePlays",
    contrasenia: "vale123",
    biografia: "Me encantan los juegos indie y de aventura.",
    fechaRegistro: "2026-09-08",
    fotoUrl: null,
    estado: true,
  },
  {
    correo: "andres.ramirez@gmail.com",
    nombreUsuario: "AndresXP",
    contrasenia: "andres123",
    biografia: "FPS, accion y juegos competitivos.",
    fechaRegistro: "2026-09-10",
    fotoUrl: null,
    estado: true,
  },
  {
    correo: "camila.torres@gmail.com",
    nombreUsuario: "CamiPixel",
    contrasenia: "camila123",
    biografia: "Jugando una historia a la vez.",
    fechaRegistro: "2026-09-12",
    fotoUrl: null,
    estado: true,
  },
];

export async function loadInitUsuarios() {
  //contar cuantos datos hay en la BD, si esta vacio ingresar los usuarios
  const count = await Usuario.count();
  if (count == 0) {
    await Usuario.bulkCreate(initUsuarios);
    console.log("Usuarios cargados a BD");
  }
}
