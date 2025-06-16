
import React, { useState, useEffect } from 'react';
import './ProductComparison.scss';

export default function ProductComparison() {
  const [products, setProducts] = useState([]);
  const [specifications, setSpecifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock specifications data
  const mockSpecifications = [
    { label: 'Digital Inputs', value: 'USB, Ethernet, Wi-Fi' },
    { label: 'Digital Outputs', value: 'AES/EBU, Coaxial, Toslink' },
    { label: 'Analog Outputs', value: 'None (Digital Only)' },
    { label: 'Supported Formats', value: 'PCM up to 32bit/384kHz, DSD512' },
    { label: 'Network', value: 'Gigabit Ethernet, Wi-Fi 802.11ac' },
    { label: 'Storage', value: '1TB Internal SSD (Optional)' },
    { label: 'Processing', value: 'Tesla G2 Platform' },
    { label: 'Memory', value: '2GB DDR3 RAM' },
    { label: 'Display', value: '4-inch Color LCD' },
    { label: 'Control', value: 'Lightning DS App, Web Interface' },
    { label: 'Power Consumption', value: '30W (Typical)' },
    { label: 'Standby Power', value: '<1W' },
    { label: 'Dimensions (W×H×D)', value: '340 × 80 × 320 mm' },
    { label: 'Weight', value: '6.5 kg' },
    { label: 'Operating Temperature', value: '0°C to 40°C' },
    { label: 'Storage Temperature', value: '-20°C to 60°C' },
    { label: 'Humidity', value: '10% to 90% (Non-condensing)' },
    { label: 'Finish Options', value: 'Black, Silver, Gold' },
    { label: 'Warranty', value: '2 Years Limited Warranty' },
    { label: 'Certifications', value: 'CE, FCC, IC' }
  ];

  // Mock products data
  const mockProducts = [
    {
      id: 1,
      name: 'Auralic Aries G2.1 Streamer',
      image: '/api/placeholder/300/200',
      specifications: mockSpecifications
    },
    {
      id: 2,
      name: 'Auralic Aries G2.1 Streamer',
      image: '/api/placeholder/300/200',
      specifications: mockSpecifications
    },
    {
      id: 3,
      name: 'Auralic Aries G2.1 Streamer',
      image: '/api/placeholder/300/200',
      specifications: mockSpecifications
    }
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      
      // Replace with your actual API endpoint
      // const response = await fetch('/api/products/comparison');
      // const data = await response.json();
      
      // Mock API call with delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setProducts(mockProducts);
      setSpecifications(mockSpecifications);
      setError(null);
    } catch (err) {
      setError('Failed to load product data');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const getSpecificationValue = (product, specLabel) => {
    const spec = product.specifications?.find(s => s.label === specLabel);
    return spec?.value || 'N/A';
  };

  if (loading) {
    return (
        
      <div className="product-comparison">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-comparison">
        <div className="error">
          <p>{error}</p>
          <button onClick={fetchProducts} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
        <h1 className="main-title">Product Comparison</h1>
    <div className="product-comparison">
        <div className="comparison-table">
          <div className="table-header">
            <div className="spec-column">
              <div className="spec-label-header">Specifications</div>
            </div>
            {products.map((product, index) => (
              <div key={product.id} className="product-column">
                <div className="product-header">
                  <div className="product-image">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjBGMEYwIi8+CjxyZWN0IHg9IjkwIiB5PSI3MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzMzMzMzMyIvPgo8L3N2Zz4K';
                      }}
                    />
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="table-body">
            {specifications.map((spec, specIndex) => (
              <div 
                key={spec.label} 
                className={`table-row ${specIndex % 2 === 0 ? 'even' : 'odd'}`}
              >
                <div className="spec-column">
                  <div className="spec-label">{spec.label}</div>
                </div>
                {products.map((product) => (
                  <div key={product.id} className="product-column">
                    <div className="spec-value">
                      {getSpecificationValue(product, spec.label)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

