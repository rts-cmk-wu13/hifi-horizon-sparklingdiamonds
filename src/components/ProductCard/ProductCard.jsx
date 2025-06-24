import { Link, useNavigate } from 'react-router';
import './ProductCard.scss';

const ProductCards = ({ products }) => {
  const navigate = useNavigate();

  const handleCompareClick = (productId) => {
    // Hent eksisterende produkter fra sessionStorage
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

    // Tjek om produktet allerede er i sammenligningen
    const productIdStr = productId.toString();
    if (!existingProducts.includes(productIdStr)) {
      // Tilføj det nye produkt (maksimalt 3 produkter)
      existingProducts.push(productIdStr);
      
      // Max 3 produkter
      if (existingProducts.length > 3) {
        existingProducts = existingProducts.slice(-3); // Behold de seneste 3
      }
      
      // Gem i sessionStorage
      sessionStorage.setItem('compareProducts', JSON.stringify(existingProducts));
    }

    // Naviger til sammenligning med alle produkter
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
            {/* Compare (forhindrer navigation til produktdetaljer) */}
            <div
              className="product-card__compare"
              onClick={(e) => {
                e.preventDefault(); // stop klik på kortet
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

            {/* Produktbillede */}
            <img
              src={product.image}
              alt={product.name}
              className="product-card__image"
            />

            {/* Info */}
            <div className="product-card__info">
              <h2 className="product-card__name">{product.name}</h2>
              <p className="product-card__subtitle">{product.subtitle}</p>
              <p className="product-card__price">
                £ {product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </p>

              <div className="product-card__bottom">
                {/* Tilføj til kurv (forhindrer navigation til produktdetaljer) */}
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