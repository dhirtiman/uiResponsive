import angelistImage from '../../assets/logos/company/angellist.svg';
import behanceImage from '../../assets/logos/company/behance.svg';
import dribbleImage from '../../assets/logos/company/dribble.svg';
import kinstaImage from '../../assets/logos/company/kinsta.svg';
import lottlefilesImage from '../../assets/logos/company/lottlefiles.svg';
import miroImage from '../../assets/logos/company/miro.svg';
import nuxtImage from '../../assets/logos/company/nuxt.svg';
import wiseImage from '../../assets/logos/company/wise.svg';

type companies =
  | 'angellist'
  | 'behance'
  | 'dribble'
  | 'kinsta'
  | 'lottlefiles'
  | 'miro'
  | 'nuxt'
  | 'wise';

type LogoItemProps = {
  company: companies;
  className?: string;
};

const LogoItem: React.FC<LogoItemProps> = ({ company, className }) => {
  const companyImage = {
    angellist: angelistImage,
    behance: behanceImage,
    dribble: dribbleImage,
    kinsta: kinstaImage,
    lottlefiles: lottlefilesImage,
    miro: miroImage,
    nuxt: nuxtImage,
    wise: wiseImage,
  };

  const logoClass = {
    angellist: 'w-17 md:w-[102px]',
    behance: 'w-22 md:w-33 ',
    dribble: 'w-16 md:w-[98px] ',
    kinsta: 'w-20 md:w-30 ',
    lottlefiles: 'w-[82px] md:w-31 ',
    miro: 'w-[45px] md:w-17',
    nuxt: 'w-[65px] md:w-[98px] md:h-6',
    wise: 'w-[70px]  md:w-[106px]',
  };

  return (
    <div className={`flex flex-col gap-2 p-2 ${className}`}>
      <img
        className={`${logoClass[company]} h-4 md:h-6`}
        src={companyImage[company]}
        alt={`${company} logo`}
      />
    </div>
  );
};

export default LogoItem;
