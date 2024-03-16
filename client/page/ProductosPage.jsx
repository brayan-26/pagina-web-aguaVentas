import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function ProductsPage() {
  const { getProduct } = useAuth();
  const [aguacates, setAguacates] = useState([]);
  const [compras, setCompras] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);

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

  const agregarCompra = (producto) => {
    setCompras([...compras, producto]);
    setPrecioTotal(
      (prevPrecioTotal) =>
        prevPrecioTotal + parseFloat(producto.precio_aguacate)
    );
  };

  const eliminarCompra = (index) => {
    const productoEliminado = compras[index];
    setPrecioTotal(
      (prevPrecioTotal) =>
        prevPrecioTotal - parseFloat(productoEliminado.precio_aguacate)
    );
    const nuevasCompras = compras.filter((_, i) => i !== index);
    setCompras(nuevasCompras);
  };

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
          <button onClick={() => agregarCompra(producto)}>Comprar</button>
        </div>
      </div>
    );
  });

  const renderCompras = compras.map((producto, index) => {
    return (
      <div key={index}>
        <p>Producto: {producto.nombre_aguacate}</p>
        <p>Precio: {producto.precio_aguacate}</p>
        <button onClick={() => eliminarCompra(index)}>Eliminar</button>
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
        <h2>Productos en la Cesta:</h2>
        {renderCompras}
        <h3>Precio Total: {precioTotal} pesos</h3>
        <button>Realizar Compra</button>
      </div>
    </div>
  );
}

export default ProductsPage;
