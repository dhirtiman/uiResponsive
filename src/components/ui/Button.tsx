import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

type ModeTypes = 'primary' | 'grey' | 'link' | 'light' | 'default';
type SizeTypes = 'smallest' | 'small' | 'medium' | 'large' | 'extra-large';
type IconFlow = 'none' | 'lagging' | 'leading';

type States = 'default' | 'hover' | 'focused' | 'disabled';

type ButtonProps = {
  mode: ModeTypes;
  size?: SizeTypes;
  icon?: IconFlow;
  iconImage?: LucideIcon | string;
  iconSettings?: string;
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
  iconSettings,
  disabled = false,
  children,
  onClick,
  className,
}) => {
  const [, setState] = useState<States>('default');

  // Mode-based Tailwind styles
  const modeClasses = {
    default: 'gap-2 font-inter font-medium text-md text-neutral-200',
    primary: 'bg-primary-400  text-white ',
    grey: 'bg-neutral-1300 border border-neutral-1000',
    link: 'text-primary-400',
    light: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100',
  };

  // Size-based Tailwind styles
  const sizeClasses = {
    smallest:
      'self-center px-2 w-[104px] h-[24px] rounded-[240px] gap-2 text-sm font-inter text-neutral-200 font-medium ',
    small:
      'self-center  rounded-lg py-2 px-4 gap-2 text-neutral-200 font-inter font-medium text-md',
    medium: 'font-inter font-medium text-md text-center',
    large: 'rounded-lg p-4 gap-2 text-md font-inter text-center font-medium',
    'extra-large': 'px-8 py-5 text-[var(--text-xl)]',
  };

  // State handling
  const stateClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const IconThing = () => {
    if (typeof iconImage === 'string') {
      return <img className="size-5" src={iconImage} alt="icon" />;
    }

    const Icon = iconImage as LucideIcon;
    return <Icon className={`${iconSettings} ml-2`}></Icon>;
  };

  return (
    <button
      onClick={onClick}
      className={`${modeClasses[mode]} flex flex-row ${sizeClasses[size]} cursor-pointer items-center-safe justify-center ${className}`}
    >
      {iconImage && icon === 'leading' ? <IconThing /> : null}
      {children}
      {iconImage && icon === 'lagging' ? <IconThing /> : null}
    </button>
  );
};

export default Button;
