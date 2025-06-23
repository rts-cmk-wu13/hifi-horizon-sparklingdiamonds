import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductSlider.scss';

export default function ProductSlider({ product }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const productImages = product.colorOptions?.map(opt => opt.img) || [];
  const colorOptions = product.colorOptions || [];

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
    // Check if product is in stock
    if (product.stockStatus !== 'In stock') {
      console.log('Product not in stock, cannot add to cart:', product.stockStatus);
      // Could add a toast notification here
      return;
    }

    // Get selected color
    const selectedColor = colorOptions[currentSlide];
    
    // Check if selected color is available
    if (selectedColor && !selectedColor.available) {
      console.log('Selected color not available:', selectedColor.name);
      // Could add a toast notification here
      return;
    }

    // Prepare product for cart
    const productToAdd = {
      ...product,
      selectedColor: selectedColor,
      image: selectedColor?.img || product.image
    };

    // Get existing cart from sessionStorage
    const savedCart = sessionStorage.getItem('cart');
    const existingItems = savedCart ? JSON.parse(savedCart) : [];
    
    // Find if product already exists in cart
    const existingItem = existingItems.find(item => 
      item.id === product.id && 
      item.selectedColor?.name === selectedColor?.name
    );
    
    let newItems;
    if (existingItem) {
      // If same product with same color exists, increase quantity
      newItems = existingItems.map(item =>
        item.id === product.id && item.selectedColor?.name === selectedColor?.name
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      // Add new item to cart
      newItems = [...existingItems, { ...productToAdd, quantity }];
    }
    
    // Save to sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(newItems));
    
    console.log('Added to cart:', {
      productId: product.id,
      quantity,
      color: selectedColor?.name,
      totalItems: newItems.length
    });

    // Navigate to cart page
    navigate('/cart');
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
              className={`color-option ${index === currentSlide ? 'active' : ''} ${
                !option.available ? 'disabled' : ''
              }`}
              style={{ backgroundColor: option.colorCode || option.hex || '#ccc' }}
              onClick={() => option.available && setCurrentSlide(index)}
              disabled={!option.available}
              title={`${option.name} ${!option.available ? '(Not Available)' : ''}`}
            />
          ))}
        </div>

        <div className="price-section">
          <span className="price">£ {product.price.toFixed(2)}</span>
          <span className={`stock-status ${product.stockStatus === 'In stock' ? 'in-stock' : 'out-of-stock'}`}>
            {product.stockStatus} ●
          </span>
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

          <button 
            className={`add-to-cart-btn ${
              product.stockStatus !== 'In stock' || 
              (colorOptions[currentSlide] && !colorOptions[currentSlide].available) 
                ? 'disabled' : ''
            }`}
            onClick={handleAddToCart}
            disabled={
              product.stockStatus !== 'In stock' || 
              (colorOptions[currentSlide] && !colorOptions[currentSlide].available)
            }
          >
            {product.stockStatus !== 'In stock' 
              ? 'Out of Stock' 
              : (colorOptions[currentSlide] && !colorOptions[currentSlide].available)
                ? 'Color Not Available'
                : 'Add to cart'
            }
          </button>
        </div>
      </div>
    </div>
  );
}