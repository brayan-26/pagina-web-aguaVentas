import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

function ProductsPage() {
  const { getProduct } = useAuth();
  const [aguacates, setAguacates] = useState([]);
  const [allProducts, SetAllProducts] = useState([]);

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

  // renderizamos los productos
  const renderProductos = aguacates.map((producto, index) => {
    return (
      <div key={index} className="item">
        <figure>
          <img
            src={`${rutaImg}${producto.img_aguacate}`}
            alt="imagen del aguacate"
          />
        </figure>
        <div className="info-product">
          <h2> Nombre del aguacate: {producto.nombre_aguacate}</h2>
          <p class="price">Tipo de aguacate: {producto.tipo_aguacate}</p>
          <p class="price">${producto.precio_aguacate} pesos por un kilo</p>
          <button class="btn-add-cart">Añadir al carrito</button>
        </div>
        {/* <p>Tipo de aguacate: {producto.tipo_aguacate}</p> */}
      </div>
    );
  });

  return (
    <div className="render">
      <div className="body">
        <header>
          <h1>Tienda</h1>
          <div className="container-icon">
            <div class="container-cart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-cart"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div class="count-products">
                <span id="contador-productos">0</span>
              </div>
            </div>
            
          </div>
        </header>

        <div className="container-items">{renderProductos}</div>
      </div>
    </div>
  );
}

export default ProductsPage;
