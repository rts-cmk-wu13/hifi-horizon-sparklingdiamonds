
import React from 'react';
import './SortBy.scss';

const SortBy = ({ filters, onFilterChange }) => {
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
      <h3>Sort by</h3>

      <div className="sortby__section">
        <label>Brand</label>
        {['Apple', 'Logitech', 'Steelseries'].map(brand => (
          <div key={brand}>
            <input
              type="checkbox"
              checked={filters.brand.includes(brand)}
              onChange={() => handleSelect('brand', brand)}
            />
            <span>{brand}</span>
          </div>
        ))}
      </div>

      <div className="sortby__section">
        <label>Color</label>
        {['White', 'Black', 'Grey'].map(color => (
          <div key={color}>
            <input
              type="checkbox"
              checked={filters.color.includes(color)}
              onChange={() => handleSelect('color', color)}
            />
            <span>{color}</span>
          </div>
        ))}
      </div>

      <div className="sortby__section">
        <label>Price</label>
        <select
          value={filters.priceOrder}
          onChange={e => handleSelect('priceOrder', e.target.value)}
        >
          <option value="none">None</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SortBy;
