import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function ProductsPage() {
  const { getProduct } = useAuth();
  const [aguacates, setAguacates] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const results = await getProduct();
        setAguacates(results.aguacates);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerProductos();
  }, []);

  
  const rutaImg = "../public/img/";

  const renderProductos = aguacates.map((producto, index) => {
    return (
      <div key={index} className="containerCard">
        <div className="container-flex">
          <p>Nombre del aguacate: {producto.nombre_aguacate}</p>
          <p>Tipo de aguacate: {producto.tipo_aguacate}</p>
          <p>{producto.precio_aguacate} pesos por un kilo</p>
          <img
            src={`${rutaImg}${producto.img_aguacate}`}
            alt="imagen del aguacate"
          />
          <br />
          <button >Comprar</button>
        </div>
      </div>
    );
  });

  

  return (
    <div className="render">
      <div>
        <h2>Productos Disponibles:</h2>
        {renderProductos}
      </div>
      <div className="containerCompras">
        
        <button>Realizar Compra</button>
      </div>
    </div>
  );
}

export default ProductsPage;
