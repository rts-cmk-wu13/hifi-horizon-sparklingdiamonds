import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import ProductSpecifications from '../../components/ProductSpecifications/ProductSpecifications';
import './ProductDetails.scss';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://hifi-api-o08m.onrender.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Failed to load product", error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <ProductSlider product={product} />
      <ProductSpecifications product={product} />

    </>
  );
}
