import React, { useState } from 'react';
import './SortBy.scss';

const SortBy = ({ filters, onFilterChange }) => {
  const [expanded, setExpanded] = useState({
    brand: true,
    color: true,
    price: false,
  });

  const toggleSection = (section) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSelect = (type, value) => {
    const newFilters = { ...filters };

    if (type === 'priceOrder') {
      newFilters.priceOrder = value;
    } else {
      if (newFilters[type].includes(value)) {
        newFilters[type] = newFilters[type].filter(v => v !== value);
      } else {
        newFilters[type].push(value);
      }
    }

    onFilterChange(newFilters);
  };

  return (
    <div className="sortby">
      <h2 className="sortby__title">Sort by</h2>

      {/* Brand */}
      <div className="sortby__section">
        <div className="sortby__header" onClick={() => toggleSection('brand')}>
          <span>Brand</span>
          <span className={`arrow ${expanded.brand ? 'up' : 'down'}`}></span>
        </div>
        {expanded.brand && (
          <div className="sortby__options">
            {['Marantz', 'Auralic', 'Cambridge Audio', 'Bluesound', 'iFi Audio', 'Denon', 'Yamaha', 'Oppo', 'Panasonic', 'Sony', 'Rotel'].map((brand) => (
              <label key={brand} className="sortby__option">
                <span>{brand}</span>
                <span
                  className={`radio ${
                    filters.brand.includes(brand) ? 'checked' : ''
                  }`}
                  onClick={() => handleSelect('brand', brand)}
                >
                  {filters.brand.includes(brand) && <span className="checkmark">✓</span>}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Color */}
      <div className="sortby__section">
        <div className="sortby__header" onClick={() => toggleSection('color')}>
          <span>Color</span>
          <span className={`arrow ${expanded.color ? 'up' : 'down'}`}></span>
        </div>
        {expanded.color && (
          <div className="sortby__options">
            {['Silver', 'Black', 'Gold'].map((color) => (
              <label key={color} className="sortby__option">
                <span>{color}</span>
                <span
                  className={`radio ${
                    filters.color.includes(color) ? 'checked' : ''
                  }`}
                  onClick={() => handleSelect('color', color)}
                >
                  {filters.color.includes(color) && <span className="checkmark">✓</span>}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="sortby__section">
        <div className="sortby__header" onClick={() => toggleSection('price')}>
          <span>Price</span>
          <span className={`arrow ${expanded.price ? 'up' : 'down'}`}></span>
        </div>
        {expanded.price && (
          <select
            className="sortby__select"
            value={filters.priceOrder}
            onChange={(e) => handleSelect('priceOrder', e.target.value)}
          >
            <option value="none">None</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default SortBy;
