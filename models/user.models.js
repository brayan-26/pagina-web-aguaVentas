import { connection } from "../config/db.js";

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
