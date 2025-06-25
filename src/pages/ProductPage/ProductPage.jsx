import React, { useEffect, useState } from 'react';
import SortBy from '../../components/SortBy/SortBy';
import ProductCards from '../../components/ProductCard/ProductCard';
import './ProductPage.scss';
import { useLocation } from 'react-router';
import SearchedResults from '../../components/SearchBar/SearchResults';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    brand: [],
    color: [],
    priceOrder: 'none',
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    fetch('https://hifi-api-o08m.onrender.com/products')
      .then(res => res.json())
      .then(data => {
        const enriched = data.map(p => ({
          ...p,
          colorOptions: p.colorOptions || [],
          image: p.colorOptions?.[0]?.img || '',
        }));
        setProducts(enriched);
      });
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredProducts = products
    .filter(product => {
      const brandMatch =
        filters.brand.length === 0 || filters.brand.includes(product.brand);
      const colorMatch =
        filters.color.length === 0 || product.colorOptions.some(co => filters.color.includes(co.name));

      return brandMatch && colorMatch;
    })
    .sort((a, b) => {
      if (filters.priceOrder === 'asc') return a.price - b.price;
      if (filters.priceOrder === 'desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="product-page">
      {query ? (
        <SearchedResults results={filteredProducts} />
      ) : (
        <>
          <h2>Products</h2>
          <div className="product-page__layout">
            <SortBy filters={filters} onFilterChange={handleFilterChange} />
            <ProductCards products={filteredProducts} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
