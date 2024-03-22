import { useState } from "react";

const useProductActions = () => {
  const [total, setTotal] = useState(0);
  const [countProduct, setCountProduct] = useState(0);
  const [allProducts, setAllProducts] = useState([]);

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

  const onClearAll = () => {
    setTotal(0);
    setCountProduct(0);
    setAllProducts([]);
  };

  return {
    onAddProduct,
    onDelectProduct,
    onClearAll,
    total,
    countProduct,
    allProducts,
  };
};

export default useProductActions;
