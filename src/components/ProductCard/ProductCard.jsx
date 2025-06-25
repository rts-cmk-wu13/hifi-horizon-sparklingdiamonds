import { Link, useNavigate } from 'react-router';
import './ProductCard.scss';

const ProductCards = ({ products }) => {
  const navigate = useNavigate();

  const handleCompareClick = (productId) => {
    const stored = sessionStorage.getItem('compareProducts');
    let existingProducts = [];
    
    if (stored) {
      try {
        existingProducts = JSON.parse(stored);
        if (!Array.isArray(existingProducts)) {
          existingProducts = [];
        }
      } catch (e) {
        console.error('Fejl ved parsing af compareProducts:', e);
        existingProducts = [];
      }
    }

    const productIdStr = productId.toString();
    if (!existingProducts.includes(productIdStr)) {
      existingProducts.push(productIdStr);
      if (existingProducts.length > 3) {
        existingProducts = existingProducts.slice(-3);
      }
      sessionStorage.setItem('compareProducts', JSON.stringify(existingProducts));
    }

    const urlParams = existingProducts.map(id => `product=${id}`).join('&');
    navigate(`/compare?${urlParams}`);
  };

  return (
    <div className="product-cards">
      {products.map(product => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="product-card__link"
        >
          <div className="product-card">
            <div
              className="product-card__compare"
              onClick={(e) => {
                e.preventDefault();
                handleCompareClick(product.id);
              }}
            >
              <span>Compare</span>
              <img
                src="sliders.svg"
                alt="Compare icon"
                className="product-card__compare-icon"
              />
            </div>

            {/* Produktbillede med fallback */}
            <div className='product__images__container'>
              <img
                src={product.image}
                alt={product.name}
                className="product-card__image"
                onError={(e) => {
                  e.target.onerror = null; // Forhindrer infinite loop
                  e.target.src = "produktbilleder/cd_afspillere/creek_evo_cd.jpg"; // Fallback billede
                }}
              />
            </div>

            <div className="product-card__info">
              <p className="product-card__name">{product.name}</p>
              <p className="product-card__subtitle">{product.subtitle}</p>
              <p className="product-card__price">
                £ {product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </p>

              <div className="product-card__bottom">
                <button
                  className="product-card__button"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/cart?add=${product.id}`);
                  }}
                >
                  Add to cart
                </button>

                <div className="product-card__stock">
                  {product.stockStatus}
                  <span
                    className={`product-card__dot ${
                      product.stockStatus.toLowerCase().includes('in stock')
                        ? 'green'
                        : product.stockStatus.toLowerCase().includes('few')
                        ? 'orange'
                        : 'red'
                    }`}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCards;
