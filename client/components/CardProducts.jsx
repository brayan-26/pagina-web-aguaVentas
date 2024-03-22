import React from "react";

function CardProducts({ onAddProduct, producto, index }) {
  const rutaImg = "../assets/img/";

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
        <p className="price">Tipo de aguacate: {producto.tipo_aguacate}</p>
        <p className="price">${producto.precio_aguacate} pesos por un kilo</p>
        <button className="btn-add-cart" onClick={() => onAddProduct(producto)}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

export default CardProducts;
