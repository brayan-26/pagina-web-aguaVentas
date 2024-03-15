import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function ProductsPage() {
  const { getProduct } = useAuth();
  const [aguacates, setAguacate] = useState([]);
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const results = await getProduct();
        setAguacate(results.aguacates);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerProductos();
  }, []);

  console.log(aguacates)
  const renderProductos = aguacates.map((x) => {
    return (
      <div>
        <p>nombre del aguacate {x.nombre_aguacate}</p>
      </div>
    );
  });
  return <div>{renderProductos}</div>;
}

export default ProductsPage;
