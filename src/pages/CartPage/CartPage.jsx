import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './CartPage.scss';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Fetch produkter fra API og håndter loading af kurv
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError(null);
        console.log('Fetching products from API...');
        const response = await fetch('https://hifi-api-o08m.onrender.com/products');
        
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);
        

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Raw API response:', data);
        console.log('Data type:', typeof data);
        console.log('Is array:', Array.isArray(data));
        
        const productsArray = Array.isArray(data) ? data : [];
        
        if (!Array.isArray(data)) {
          console.warn('Expected array but received:', typeof data, data);
        }
        
        console.log('Products loaded:', productsArray.length);
        setProducts(productsArray);
        
        // Efter produkter er loadet, håndter cart
        const urlParams = new URLSearchParams(location.search);
        const addProductId = urlParams.get('add');
        console.log('Add product ID from URL:', addProductId);
        
        if (addProductId && productsArray.length > 0) {
          const product = productsArray.find(p => p.id === parseInt(addProductId));
          console.log('Found product:', product);
          
          if (product) {
            // Tjek om produktet er på lager
            if (product.stockStatus !== 'In stock') {
              console.log('Product not in stock, cannot add to cart:', product.stockStatus);
              navigate('/cart', { replace: true });
              return;
            }

            const defaultColor = product.colorOptions?.find(color => color.available) || product.colorOptions?.[0];
            const productToAdd = {
              ...product,
              selectedColor: defaultColor,
              image: defaultColor?.img || product.image
            };
            console.log('Adding product to cart:', productToAdd);
            
            // Tilføj til cart - kun tilføj hvis produktet ikke allerede er i kurven
            const savedCart = sessionStorage.getItem('cart');
            const existingItems = savedCart ? JSON.parse(savedCart) : [];
            const existingItem = existingItems.find(item => item.id === product.id);
            
            let newItems;
            if (existingItem) {
              // Hvis produktet allerede er i kurven, øg kun mængden med 1
              newItems = existingItems.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
            } else {
              // Hvis produktet ikke er i kurven, tilføj det med quantity 1
              newItems = [...existingItems, { ...productToAdd, quantity: 1 }];
            }
            
            console.log('New cart items:', newItems);
            sessionStorage.setItem('cart', JSON.stringify(newItems));
            setCartItems(newItems);
          }
          // Clean URL
          navigate('/cart', { replace: true });
        } else {
          // Load existing cart
          const savedCart = sessionStorage.getItem('cart');
          if (savedCart) {
            try {
              const cartData = JSON.parse(savedCart);
              console.log('Loading existing cart:', cartData);
              setCartItems(Array.isArray(cartData) ? cartData : []);
            } catch (parseError) {
              console.error('Error parsing cart data:', parseError);
              sessionStorage.removeItem('cart'); // Clear corrupted data
              setCartItems([]);
            }
          }
        }
        
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
        setProducts([]);
        
        
        const savedCart = sessionStorage.getItem('cart');
        if (savedCart) {
          try {
            const cartData = JSON.parse(savedCart);
            console.log('Loading existing cart (API failed):', cartData);
            setCartItems(Array.isArray(cartData) ? cartData : []);
          } catch (parseError) {
            console.error('Error parsing cart data:', parseError);
            sessionStorage.removeItem('cart');
            setCartItems([]);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProducts();
  }, [location.search, navigate]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      let newItems;
      
      if (existingItem) {
        newItems = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...prevItems, { ...product, quantity: 1 }];
      }
      
      // Gem i sessionStorage
      sessionStorage.setItem('cart', JSON.stringify(newItems));
      return newItems;
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems => {
      const newItems = prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
      sessionStorage.setItem('cart', JSON.stringify(newItems));
      return newItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== productId);
      sessionStorage.setItem('cart', JSON.stringify(newItems));
      return newItems;
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const updateColor = (productId, colorOption) => {
    setCartItems(prevItems => {
      const newItems = prevItems.map(item =>
        item.id === productId
          ? { 
              ...item, 
              selectedColor: colorOption,
              image: colorOption.img || item.image
            }
          : item
      );
      sessionStorage.setItem('cart', JSON.stringify(newItems));
      return newItems;
    });
  };

  const formatPrice = (price, currency = '£') => {
    return `${currency} ${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  };

  if (isLoading) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="loading">Loading cart...</div>
        </div>
      </div>
    );
  }

  // Error handling
  if (error && cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb__link">Home</Link>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">Cart</span>
          </nav>
          
          <div className="cart-error">
            <h2>Unable to load products</h2>
            <p>Error: {error}</p>
            <p>Please check if the API endpoint is correct and accessible.</p>
            <Link to="/" className="cart-empty__button">
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">

        {error && cartItems.length > 0 && (
          <div className="cart-warning">
            <p>⚠️ Unable to load new products, but showing existing cart items.</p>
          </div>
        )}

        {/* Breadcrumb */}

        {/* Cart Header */}
        <div className="cart-header">
          <h1 className="cart-header__title">Cart</h1>
          
          {/* Continue Shopping Button */}
          <div className="cart-continue-shopping">
              <Link to="/products" className="cart-continue-shopping__button">
                ← Continue Shopping
              </Link>
            </div>
        </div>

        {/* Cart Content */}
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <h2>Your cart is empty</h2>
            <p>Add some products to get started</p>
            <Link to="/products" className="cart-empty__button">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            {/* Cart Items */}
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <button 
                    className="cart-item__remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                  
                  <div className="cart-item__image">
                    <img src={item.selectedColor?.img || item.image} alt={item.name} />
                  </div>
                  
                  <div className="cart-item__details">
                    <h3 className="cart-item__name">{item.name}</h3>
                    <p className="cart-item__subtitle">{item.subtitle}</p>
                    
                    {/* Color Selection */}
                    {item.colorOptions && item.colorOptions.length > 1 && (
                      <div className="cart-item__colors">
                        <span className="cart-item__colors-label">Color:</span>
                        <div className="cart-item__colors-options">
                          {item.colorOptions.map(color => (
                            <button
                              key={color.name}
                              className={`cart-item__color-option ${
                                item.selectedColor?.name === color.name ? 'active' : ''
                              } ${!color.available ? 'disabled' : ''}`}
                              style={{ backgroundColor: color.colorCode }}
                              onClick={() => color.available && updateColor(item.id, color)}
                              disabled={!color.available}
                              title={color.name}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="cart-item__stock">
                      <span 
                        className={`cart-item__stock-dot ${
                          item.inStock ? 'green' : 'red'
                        }`}
                      ></span>
                      {item.stockStatus}
                    </div>
                  </div>
                  
                  <div className="cart-item__quantity">
                    <button 
                      className="cart-item__quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="cart-item__quantity-value">{item.quantity}</span>
                    <button 
                      className="cart-item__quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="cart-item__price">
                    {formatPrice(item.price, item.currency)}
                  </div>
                </div>
              ))}
            </div>


            {/* Cart Summary */}
            <div className="cart-summary">
              <div className="cart-summary__row">
                <span>Sub total</span>
                <span className="cart-summary__price">
                  {formatPrice(calculateSubtotal(), cartItems[0]?.currency)}
                </span>
              </div>
              
              <button 
                className="cart-summary__button"
                onClick={() => navigate('/payment')}
              >
                Go to payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;