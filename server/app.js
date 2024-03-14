import express from "express";
import morgan from "morgan";
import router from "./router/router.js";
import { connection } from "./config/db.js";

const app = express();

// controlamos los get and post del api
app.use(morgan("dev"));

// escuchamos un puerto 3000
app.listen(3000, () => {
  console.log("por on 3000");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// usamos las rutas
app.use("/api", router);

// creamos la conexion a la base de datos
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Conexión a la base de datos exitosa");
  }
});