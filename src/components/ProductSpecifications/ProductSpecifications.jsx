import React from 'react';
import './ProductSpecifications.scss';

const ProductSpecifications = ({ product }) => {
  if (!product) {
    return null; // eller loading-state, hvis relevant
  }

  // Dynamisk opbygning af specs ud fra product objektet
  const specifications = [
    { label: 'Brand', value: product.brand },
    { label: 'Model', value: product.model },
    { label: 'Price', value: product.currency + product.price },
    { label: 'Weight', value: product.weight ? product.weight + ' kg' : 'N/A' },
    { label: 'Dimensions (W×H×D)', value: product.dimensions ? `${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} ${product.dimensions.unit}` : 'N/A' },
    { label: 'Warranty', value: product.warranty || 'N/A' },
    { label: 'Color Options', value: product.colorOptions ? product.colorOptions.map(c => c.name).join(', ') : 'N/A' },
    { label: 'Category', value: product.category || 'N/A' },
    { label: 'Tags', value: product.tags ? product.tags.join(', ') : 'N/A' },
    { label: 'Stock Status', value: product.stockStatus || 'N/A' },
    { label: 'Description', value: product.description || 'N/A' },
   
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
