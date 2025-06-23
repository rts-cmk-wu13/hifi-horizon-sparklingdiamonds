import React, { useState } from 'react';
import './ProductSlider.scss';

export default function ProductSlider({ product }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productImages = product.colorOptions?.map(opt => opt.img) || [];
  const colorOptions = product.colorOptions?.map(opt => ({
    name: opt.name,
    color: opt.hex || '#ccc'
  })) || [];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', {
      productId: product.id,
      quantity,
      color: colorOptions[currentSlide]?.name
    });
  };

  return (
    <div className="product-slider">
      <div className="slider-container">
        <div className="slider-wrapper">
          <button className="slider-btn prev" onClick={prevSlide}>
            &#8249;
          </button>

          <div className="slider-content">
            <img 
              src={productImages[currentSlide]} 
              alt={`${product.name} - ${colorOptions[currentSlide]?.name}`}
              className="product-image"
            />
          </div>

          <button className="slider-btn next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>

        <div className="slider-dots">
          {productImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-subtitle">{product.subtitle}</p>

        <div className="product-description">
          <p>{product.description}</p>
        </div>

        <div className="color-options">
          {colorOptions.map((option, index) => (
            <button
              key={index}
              className={`color-option ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundColor: option.color }}
              onClick={() => setCurrentSlide(index)}
              title={option.name}
            />
          ))}
        </div>

        <div className="price-section">
          <span className="price">£ {product.price.toFixed(2)}</span>
          <span className="stock-status">{product.stockStatus} ●</span>
        </div>

        <div className="purchase-controls">
          <div className="quantity-controls">
            <button 
              className="quantity-btn"
              onClick={() => handleQuantityChange(-1)}
            >
              −
            </button>
            <input 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="quantity-input"
            />
            <button 
              className="quantity-btn"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
