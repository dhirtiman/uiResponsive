import React, { useState } from 'react';

type ModeTypes = 'primary' | 'grey' | 'link' | 'light';
type SizeTypes = 'small' | 'medium' | 'large' | 'extra-large';
type IconFlow = 'none' | 'lagging' | 'leading';

type States = 'default' | 'hover' | 'focused' | 'disabled';

type ButtonProps = {
  mode: ModeTypes;
  size?: SizeTypes;
  icon?: IconFlow;
  iconImage?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  mode,
  size = 'small',
  icon = 'none',
  iconImage,
  disabled = false,
  children,
  onClick,
  className,
}) => {
  const [, setState] = useState<States>('default');

  // Mode-based Tailwind styles
  const modeClasses = {
    primary: 'bg-primary border text-white hover:bg-purple-800',
    grey: 'bg-neutral-1300 border border-neutral-1000',
    link: 'bg-transparent text-blue-600 underline hover:text-blue-800',
    light: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100',
  };

  // Size-based Tailwind styles
  const sizeClasses = {
    small:
      'self-center px-2 w-[104px] h-[24px] gap-2 text-sm font-inter font-medium ',
    medium: 'px-5 py-3 text-[var(--text-md)]',
    large: 'px-6 py-4 text-[var(--text-lg)]',
    'extra-large': 'px-8 py-5 text-[var(--text-xl)]',
  };

  // State handling
  const stateClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      className={`${modeClasses[mode]} ${sizeClasses[size]} rounded-[240px] text-neutral-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
