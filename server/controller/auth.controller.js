import {
  getProductosAguacate,
  getProductosComerciales,
  registerUser,
  validacionUser,
} from "../models/user.models.js";

export const validarUser = async (req, res, next) => {
  try {
    const { numeroNit } = req.body;
    const results = await validacionUser([numeroNit]);
    if (results[0].length > 0) {
      res.status(404).json({ mensaje: "La Empresa Ya Existe" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

export const register = async (req, res) => {
  try {
    const { nombreTienda, nombrePropietario, cedula, correo, numeroNit } =
      req.body;
    var regex = /^[0-9]{9}-[0-9]$/;
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const datos = [nombreTienda, nombrePropietario, cedula, correo, numeroNit];

    if (nombreTienda && nombrePropietario && cedula && correo && numeroNit) {
      if (regex.test(numeroNit)) {
        if (validEmail.test(correo)) {
          const results = await registerUser(datos);
          if (results.length > 0) {
            res.status(200).json({ mensaje: "Usuario Registrado" });
          } else {
            res.status(404).json({ mensaje: "Error al Registar El Usuario" });
          }
        } else {
          res.status(404).json({
            mensaje: "Correo invalido, un ejemplo usuario@dominio.com",
          });
        }
      } else {
        res.status(404).json({
          mensaje:
            "El formato del numero de nit es invalido, deberia ser XXXXXXXXX-Y",
        });
      }
    } else {
      res.status(404).json({ mensaje: "Ingrese todos los datos" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductos = async (req, res) => {
  try {
    const dataAguacate = await getProductosAguacate();
    const dataComercial = await getProductosComerciales();
    const datosAguacate = dataAguacate[0];
    const datosComercial = dataComercial[0];
    res.status(200).json({
      dataAguacate: datosAguacate,
      dataComercial: datosComercial,
    });
  } catch (error) {
    console.log(error);
  }
};
