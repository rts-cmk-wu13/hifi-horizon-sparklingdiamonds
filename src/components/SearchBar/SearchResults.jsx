import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { fetchSearch } from '../../api/authService';
import '../ProductCard/ProductCard.scss';

import { GoDotFill } from "react-icons/go";
import Loader from '../../components/Loader/Loader.jsx';

export default function SearchedResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const data = await fetchSearch(query);
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData();
  }, [query]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (products.length === 0) {
    return <div className='no-results'>No products found for "{query}"</div>;
  }

  return (
    <div className="search__results">
      <h1 className="search__results__title">Search Results for: "{query}"</h1>

      {products.map((product) => (
        <section key={product.id} className="productcards__card searched__product-card">
          <div className='product__images__container'>
            {product?.colorOptions?.[0]?.img && (
              <img
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "./broken-img.png";
                }}
                src={product.colorOptions[0].img}
                alt={product.name}
              />
            )}
          </div>

          <div className='product__info'>
            <p>{product.name}</p>
            <p>{product.subtitle}</p>
            <p>{product.price} <span>{product.currency}</span></p>
            <div className='button-stock__container'>
              <button>Add to Cart</button>
              <span>
                {product.inStock ? (
                  <div>
                    In stock <GoDotFill style={{ color: 'green' }} />
                  </div>
                ) : (
                  <div>
                    Out of stock <GoDotFill style={{ color: 'red' }} />
                  </div>
                )}
              </span>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
