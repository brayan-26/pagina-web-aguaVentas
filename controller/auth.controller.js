import { registerUser } from "../models/user.models.js";

export const register = async (req, res) => {
  try {
    const { nombreTienda, nombrePropietario, cedula, correo, numeroNit } =
      req.body;
    const datos = [nombreTienda, nombrePropietario, cedula, correo, numeroNit];

    if (nombreTienda && nombrePropietario && cedula && correo && numeroNit) {
      const results = await registerUser(datos);
      if (results.length > 0) {
        res.status(200).json({ mensaje: "Usuario Registrado" });
      } else {
        res.status(404).json({ mensaje: "Error al Registar El Usuario" });
      }
    } else {
      res.status(404).json({ mensaje: "Ingrese todos los datos" });
    }
  } catch (error) {
    console.log(error);
  }
};
