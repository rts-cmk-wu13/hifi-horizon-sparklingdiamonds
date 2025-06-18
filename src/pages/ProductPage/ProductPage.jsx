
import React, { useEffect, useState } from 'react';
import SortBy from '../../components/SortBy/SortBy';
import ProductCards from '../../components/ProductCard/ProductCard';
import './ProductPage.scss';


/* ----------------------added Denisse-------------------------- */
import { useLocation } from 'react-router';
import SearchedResults from '../../components/SearchBar/SearchResults';
/* ----------------------------------------------------------- */

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    brand: [],
    color: [],
    priceOrder: 'none', // 'asc' | 'desc' | 'none'
  });

  /* --------------------- added Denisse-------------------------- */
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
   /* -------------------------------------------------------------- */


  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
      .then(res => res.json())
      .then(data => {
        const brands = ['Apple', 'Logitech', 'Steelseries'];
        const colors = ['White', 'Black', 'Grey'];

        const enriched = data.map(p => ({
          ...p,
          brand: brands[Math.floor(Math.random() * brands.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
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
        filters.color.length === 0 || filters.color.includes(product.color);
      return brandMatch && colorMatch;
    })
    .sort((a, b) => {
      if (filters.priceOrder === 'asc') return a.price - b.price;
      if (filters.priceOrder === 'desc') return b.price - a.price;
      return 0;
    });

  return (

    <>
    {query ? (
        <SearchedResults products={products} />
      ) : (
        <div className="product-page">
          <h2>Products</h2>
          <div className="product-page__layout">
            <SortBy filters={filters} onFilterChange={handleFilterChange} />
            <ProductCards products={filteredProducts} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
