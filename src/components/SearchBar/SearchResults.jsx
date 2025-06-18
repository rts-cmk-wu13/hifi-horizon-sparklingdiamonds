import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { fetchSearch } from '../../api/authService';
import '../ProductCard/ProductCard.scss';
import { GoDotFill } from "react-icons/go";
import ReactImageFallback from "react-image-fallback";



export default function SearchedResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSearch(query);
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch products.");
      }
    };

    fetchData();
  }, [query]);

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
            {product.colorOptions.map((option, i) => (
              <img
                className="product__image"
                onError={(e) => {
                  e.target.onerror = null; // prevents looping
                  e.target.src = "./broken-img.png"; // fallback image
                }}
                src={!option.img ? "./placeholder.png" : option.img}
                alt={option.color}
                key={i}
              />
            ))}
          </div>

          <div className='product__info'>
            <p>{product.name}</p>
            <p>{product.subtitle}</p>
            <p>{product.price} <span>{product.currency}</span></p>
            <div className='button-stock__container'>
              <button>Add to Cart</button>
                <span>
                      {product.stock > 0 ? (
                        <>
                          {product.stock} in stock <GoDotFill style={{ color: 'green' }} />
                        </>
                      ) : (
                        <>
                          Out of stock <GoDotFill style={{ color: 'red' }} />
                        </>
                      )}
                </span>
                </div>

              </div>
            </section>
          ))}
    </div>
  );
}
