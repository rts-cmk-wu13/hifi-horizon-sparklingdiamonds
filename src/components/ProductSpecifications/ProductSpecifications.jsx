
import React from 'react';
import './ProductSpecifications.scss';

const ProductSpecifications = () => {
  const specifications = [
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

  return (
    <div className="product-specifications">
      <h2 className="specifications-title">PRODUCT SPECIFICATIONS</h2>
      
      <div className="specifications-grid">
        {specifications.map((spec, index) => (
          <div key={index} className="specification-row">
            <div className="spec-label">{spec.label}</div>
            <div className="spec-value">{spec.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecifications;