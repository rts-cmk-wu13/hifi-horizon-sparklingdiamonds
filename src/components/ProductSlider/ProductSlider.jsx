
import React, { useState } from 'react';
import './ProductSlider.scss';

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    '/images/auralic-aries-g2-1-black.jpg',
    '/images/auralic-aries-g2-1-silver.jpg',
    '/images/auralic-aries-g2-1-gold.jpg'
  ];

  const colorOptions = [
    { name: 'Black', color: '#000000' },
    { name: 'Silver', color: '#C0C0C0' },
    { name: 'Gold', color: '#FFD700' }
  ];

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
    console.log('Added to cart:', { quantity, color: colorOptions[currentSlide].name });
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
              alt={`Auralic Aries G2.1 Streamer - ${colorOptions[currentSlide].name}`}
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
        <h1 className="product-title">Auralic Aries G2.1 Streamer</h1>
        <p className="product-subtitle">(Digital Output)</p>
        
        <div className="product-description">
          <p>
            G2.1 is the next logical evolutionary step, resulting from a desire to 
            improve upon the original G2 series. At AURALIC, we always work to create 
            a new approach to digital music that pushes the boundaries of sonic 
            quality, incorporating state-of-the-art technologies and delivered with 
            an innovative features. G2.1 is built for unlimited levels of sonic performance.
          </p>
          
          <p>
            Every G2.1 series component, including the ARIES G2.1, sports an all-new 
            industrial design that's engineered to set a new standard for sound 
            quality, enhance the user experience, and look every bit as good as it 
            sounds with its contemporary aesthetic. Offering features like a copper 
            shield and galvanic isolation, Unity Chassis II beautifully houses and 
            optimizes the sound of the ARIES G2.1 and ensures it is the most capable 
            and feature-rich way to introduce streaming to your audio system that 
            we've ever created.
          </p>
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
          <span className="price">£ 4,799.00</span>
          <span className="stock-status">In stock ●</span>
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
};

