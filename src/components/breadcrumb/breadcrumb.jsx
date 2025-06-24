import React from 'react';
import { useLocation } from 'react-router-dom';
import './Breadcrumb.scss';
import { FaShoppingCart, FaCreditCard, FaReceipt } from 'react-icons/fa';

const steps = [
  { path: '/cart', icon: <FaShoppingCart />, label: 'Cart' },
  { path: '/payment', icon: <FaCreditCard />, label: 'Payment' },
  { path: '/invoice', icon: <FaReceipt />, label: 'Invoice' },
];

const Breadcrumb = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const currentStepIndex = steps.findIndex(step =>
    currentPath.startsWith(step.path)
  );

  return (
    <div className="breadcrumb">
      <div className="breadcrumb__line">
        {steps.map((step, index) => (
          <div
            key={step.path}
            className={`breadcrumb__step ${index === currentStepIndex ? 'active' : ''}`}
          >
            <div className="breadcrumb__icon">{step.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;

