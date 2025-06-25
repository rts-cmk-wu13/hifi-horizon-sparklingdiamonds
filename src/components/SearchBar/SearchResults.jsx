import { useLocation, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { fetchSearch } from '../../api/authService';
import '../../pages/ProductPage/ProductPage.scss'


import { GoDotFill } from "react-icons/go";
import Loader from '../../components/Loader/Loader.jsx';

export default function SearchedResults() {

  const navigate = useNavigate();
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
    <div className="product-cards">
      <h1 className="search__results__title">Search Results for: "{query}"</h1>

      {products.map((product) => (
        <section key={product.id} className="product-card">
          <div className='product__images__container'>
            {product?.colorOptions?.[0]?.img && (
              <img
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "produktbilleder/cd_afspillere/creek_evo_cd.jpg";
                }}
                src={product.colorOptions[0].img}
                alt={product.name}
              />
            )}
          </div>

          <div className='product-card__info'>
            <p className='product-card__name'>{product.name}</p>
            <p className='product-card__subtitle'>{product.subtitle}</p>
            <p className='product-card__price'>{product.price} <span>{product.currency}</span></p>
            <div className='product-card__bottom'>
              <button className='product-card__button'
               onClick={(e) => {
                    e.preventDefault();
                    navigate(`/cart?add=${product.id}`);
                  }}
              >Add to Cart</button>
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
