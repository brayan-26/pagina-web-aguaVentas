import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate , Link} from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const { registerUser } = useAuth();
  const [mensaje, setMensaje] = useState(null);
  const navegate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    try {
      const results = await registerUser(values);

      if (results.resultsData === 200) {
        navegate("/main")
      }

      if (results.errorSatus === 404) {
        setMensaje(results.mensajeError);
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nombre de la tienda"
          {...register("nombreTienda", { required: true })}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="nombre del propietario"
          {...register("nombrePropietario", { required: true })}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="numero de cedula"
          {...register("cedula", { required: true })}
        />{" "}
        <br />
        <input
          type="email"
          placeholder="correo"
          {...register("correo", { required: true })}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="XXXXXXXXX-Y"
          {...register("numeroNit", { required: true })}
        />{" "}
        <br />
        <button type="submit">register usuario </button>
      </form>
      {mensaje && <p>{mensaje}</p>}
      <Link to={"/"} >login</Link>
    </div>
  );
}

export default RegisterPage;
