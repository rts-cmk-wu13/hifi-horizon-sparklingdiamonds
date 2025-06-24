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

  // Find aktivt trin – matcher også hvis der er trailing slash eller query parametre
  const currentStepIndex = steps.findIndex(step =>
    currentPath.startsWith(step.path)
  );

  return (
    <div className="breadcrumb">
      {steps.map((step, index) => (
        <div key={step.path} className={`breadcrumb__step ${index === currentStepIndex ? 'active' : ''}`}>
          <div className="breadcrumb__icon">{step.icon}</div>
          {index < steps.length - 1 && <div className="breadcrumb__line" />}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
