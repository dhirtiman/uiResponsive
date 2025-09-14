import { type LucideIcon } from 'lucide-react';

type ModeTypes = 'grey' | 'light' | 'primary';
type sizeTypes = 'large' | 'small' | 'medium';

type FeatureThingProps = {
  className?: string;
  Icon: LucideIcon;
  mode: ModeTypes;
  size?: sizeTypes;
  heading: string;
  description: string;
};

const FeatureThing: React.FC<FeatureThingProps> = ({
  className,
  Icon,
  mode,
  size = 'large',
  heading,
  description,
}) => {
  const modeClasses = {
    primary: 'bg-primary-400  text-white ',
    grey: 'bg-neutral-1300 text-neutral-200',
    // continue
    light: 'bg-primary-900 text-primary-400',
  };

  const sizeClasses = {
    large: '',
    medium: '',
    small: '',
  };

  return (
    <div className={`flex w-[343px] flex-col gap-2 p-4 ${className}`}>
      {/* content */}
      <div className="flex w-[311px] items-center flex-col gap-4">
        {/* icon circle */}
        <div
          className={`${modeClasses[mode]} ${sizeClasses[size]} flex size-fit flex-row gap-2 rounded-[240px] p-4`}
        >
          <Icon />
        </div>
        {/* inside content */}
        <div className="font-inter flex w-[311px] flex-col gap-4 text-center font-medium">
          <h2 className="text-md text-neutral-50">{heading}</h2>
          <p className="text-[14px] text-neutral-400 leading-6">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureThing;
