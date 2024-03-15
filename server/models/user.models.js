import { connection } from "../config/db.js";

export async function validacionUser(datos) {
  try {
    const sql = "SELECT * FROM usuarios WHERE numero_nit = ? ";
    const results = await connection.promise().execute(sql, datos);
    return results;
  } catch (error) {
    console.log(error);
  }
}

export async function registerUser(datos) {
  try {
    const sql =
      "INSERT INTO usuarios (nombre_tienda, nombre_propietario, cedula, correo, numero_nit) VALUES (?, ?, ?, ?, ?)";
    const results = await connection.promise().execute(sql, datos);
    return results;
  } catch (error) {
    console.log(error);
  }
}

export function getProductosAguacate() {
  try {
    const sql = "SELECT * FROM productos_aguacates";
    const results = connection.promise().execute(sql);
    return results;
  } catch (error) {
    console.log(error);
  }
}
export function getProductosComerciales() {
  try {
    const sql = "SELECT * FROM productos_comerciales";
    const results = connection.promise().execute(sql);
    return results;
  } catch (error) {
    console.log(error);
  }
}

export function loginUser(datos) {
  try {
    const sql = "SELECT * FROM usuarios WHERE cedula = ? AND numero_nit = ?  ";
    const results = connection.promise().execute(sql, datos);
    return results;
  } catch (error) {
    console.log(error);
  }
}
