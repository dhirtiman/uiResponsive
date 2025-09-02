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

  return (
    <div className={`flex flex-col gap-2 p-2 ${className}`}>
      <img className="" src={companyImage[company]} alt={`${company} logo`} />
    </div>
  );
};

export default LogoItem;
