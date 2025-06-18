
import './ProductCard.scss';


const ProductCards = ({ products }) => {
 

  return (
    <>
     <div className="productcards">
          {products.map(product => (
            <div key={product.id} className="productcards__card">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <p>£ {product.price.toFixed(2)}</p>
              <p><strong>Brand:</strong> {product.brand}</p>
              <p><strong>Color:</strong> {product.color}</p>
              <button>Add to cart</button>
            </div>
          ))}
        </div>
    </>
  )
}

export default ProductCards;
