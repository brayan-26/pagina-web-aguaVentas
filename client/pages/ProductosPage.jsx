import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import CardProducts from "../components/CardProducts";
import HeaderProducts from "../components/HeaderProducts";
import useProductActions from "../utils/productActions";

function ProductsPage() {
  const { getProduct } = useAuth();
  const [aguacates, setAguacates] = useState([]);
  const {
    onAddProduct,
    onDelectProduct,
    onClearAll,
    total,
    countProduct,
    allProducts,
  } = useProductActions();

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

  return (
    <div className="render">
      <div className="body">
        <HeaderProducts
          onDelectProduct={onDelectProduct}
          onClearAll={onClearAll}
          total={total}
          countProduct={countProduct}
          allProducts={allProducts}
        />

        <div className="container-items">
          {aguacates.map((producto, index) => (
            <CardProducts
              key={index}
              producto={producto}
              onAddProduct={onAddProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
