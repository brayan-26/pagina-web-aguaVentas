import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { loginUser } = useAuth();
  const [mensaje, setMensaje] = useState(null);
  const navegate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    try {
      const results = await loginUser(values);

      if (results.resultsData === 200) {
        navegate("/main");
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
          placeholder="cedula"
          {...register("cedula", { required: true })}
        />
        <input
          type="text"
          placeholder="XXXXXXXXX-Y"
          {...register("numeroNit", { required: true })}
        />
        <button type="submit">login</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
      <Link to={"/register"}>register</Link>
    </div>
  );
}

export default LoginPage;
