// ButtonControl.tsx
import React from 'react';

type ButtonControlProps = {
  children:React.ReactNode;
  variant?: 'primary' | 'secondary';
};

const ButtonControl: React.FC<ButtonControlProps> = ({
  children:label,
  variant = 'primary',
}) => {
  const variantClass = variant === 'primary' 
    ? 'bg-blue-500 text-white' 
    : 'bg-gray-500 text-white';

  return (
    <button
      className={`px-4 py-2 rounded ${variantClass} hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`} 
      
    >
      {label}
    </button>
  );
};

export default ButtonControl;
