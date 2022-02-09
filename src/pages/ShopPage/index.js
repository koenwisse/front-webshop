//PACKAGES
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//REDUX
import { selectProducts } from "../../store/product/selectors";
import { fetchProducts } from "../../store/product/actions";
//COMP
import ProductCard from "../../components/ProductCard/ProductCard";
//STYLE
import "./styles.css";

export default function ShopPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            rating={product.rating}
            image={product.mainImage}
          />
        );
      })}
      ;
    </div>
  );
}
