import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Button } from "react-bootstrap";

import { selectProducts } from "../../store/product/selectors";
import { fetchProducts } from "../../store/product/actions";
import ProductCard from "../../components/ProductCard";
import "./styles.css";

export default function ShopPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return products.map((product) => {
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
  });
}
