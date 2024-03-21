import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function ProductsPage() {
  const { getProduct } = useAuth();
  const [aguacates, setAguacates] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProduct, setCountProduct] = useState(0);
  const [active, setActive] = useState(false);

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id_agacates === product.id_agacates)) {
      const products = allProducts.map((item) =>
        item.id_agacates === product.id_agacates
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCountProduct(countProduct + product.quantity);
      setTotal(total + product.precio_aguacate * product.quantity);
      return setAllProducts([...products]);
    }
    // setTotal(total + total);
    setTotal(total + product.precio_aguacate * product.quantity);
    setCountProduct(countProduct + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  const onDelectProduct = (product) => {
    const results = allProducts.filter(
      (item) => item.id_agacates !== product.id_agacates
    );
    setTotal(total - product.precio_aguacate * product.quantity);
    setCountProduct(countProduct - product.quantity);
    setAllProducts(results);
  };

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

  const rutaImg = "../assets/img/";

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
          <p className="price">Tipo de aguacate: {producto.tipo_aguacate}</p>
          <p className="price">${producto.precio_aguacate} pesos por un kilo</p>
          <button
            className="btn-add-cart"
            onClick={() => onAddProduct(producto)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="render">
      <div className="body">
        <header>
          <h1>Tienda</h1>
          <div className="container-icon">
            <div
              className="container-cart-icon"
              onClick={() => setActive(!active)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="icon-cart"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div className="count-products">
                <span id="contador-productos">{countProduct}</span>
              </div>

              <div
                className={`container-cart-products ${
                  active ? "" : "hidden-cart"
                }`}
              >
                {allProducts.length ? (
                  <>
                    <div className="row-product">
                      {allProducts.map((producto) => (
                        <div
                          className="cart-product"
                          key={producto.id_agacates}
                        >
                          <div className="info-cart-product">
                            <span className="cantidad-producto-carrito">
                              {producto.quantity}
                            </span>
                            <p className="titulo-producto-carrito">
                              {producto.nombre_aguacate}
                            </p>
                            <span className="precio-producto-carrito">
                              ${producto.precio_aguacate}
                            </span>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="icon-close"
                            onClick={() => onDelectProduct(producto)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      ))}
                    </div>

                    <div className="cart-total">
                      <h3>Total:</h3>
                      <span className="total-pagar">${total}</span>
                    </div>
                    <button className="btn-clear-all">Vaciar carrito</button>
                  </>
                ) : (
                  <p className="cart-empty">El carrito está vacío</p>
                )}
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
