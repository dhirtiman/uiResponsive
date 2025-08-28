import React, { useState } from 'react';

type ModeTypes = 'primary' | 'grey' | 'link' | 'light' | 'default';
type SizeTypes = 'smallest' | 'small' | 'medium' | 'large' | 'extra-large';
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
    default: 'gap-2 font-inter font-medium text-md text-neutral-200',
    primary: 'bg-primary border text-white hover:bg-purple-800',
    grey: 'bg-neutral-1300 border border-neutral-1000',
    link: 'bg-transparent text-blue-600 underline hover:text-blue-800',
    light: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100',
  };

  // Size-based Tailwind styles
  const sizeClasses = {
    smallest:
      'self-center px-2 w-[104px] h-[24px] rounded-[240px] gap-2 text-sm font-inter text-neutral-200 font-medium ',
    small:
      'self-center  rounded-lg py-2 px-4 gap-2 text-neutral-200 font-inter font-medium text-md',
    medium: 'px-5 py-3 text-[var(--text-md)]',
    large: 'px-6 py-4 text-[var(--text-lg)]',
    'extra-large': 'px-8 py-5 text-[var(--text-xl)]',
  };

  // State handling
  const stateClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const IconThing = () => {
    return <img className="size-5" src={iconImage} alt="icon" />;
  };

  return (
    <button
      onClick={onClick}
      className={`${modeClasses[mode]}  flex flex-row ${sizeClasses[size]} items-center cursor-pointer  ${className}`}
    >
      {iconImage && icon === 'leading' ? <IconThing /> : null}

      {children}
      {iconImage && icon === 'lagging' ? <IconThing /> : null}
    </button>
  );
};

export default Button;
