import modeUILogo from '../../assets/logos/modeuiLogo.svg';
import loginIcon from '../../assets/icons/loginIcon.svg';
import menuIcon from '../../assets/icons/menuIcon.svg';
import chevronDown from '../../assets/icons/chevronDown.svg';
import Button from '../ui/Button';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ListItem = ({
    href,
    children,
    iconImage,
  }: {
    href: string;
    children: React.ReactNode;
    iconImage?: string;
  }) => {
    return (
      <li className="gap-2 p-2">
        <Button mode="default" icon="lagging" iconImage={iconImage} className=''>
          {children}
        </Button>
      </li>
    );
  };

  return (
    <section className="border-neutral-1000 flex h-auto w-full flex-col gap-2 border-b px-4 py-5 md:w-full md:px-8 lg:w-full">
      {/* container */}
      <div className="flex w-[343px] flex-row justify-between gap-2 self-center md:w-160 md:px-8 lg:w-full lg:px-20">
        {/* logo */}
        <div className="flex flex-col gap-2 p-2">
          <div className="flex flex-col gap-2 px-2 py-1">
            <img className="h-4 w-21" src={modeUILogo} alt="modeUI logo" />
          </div>
        </div>
        {/* menu */}
        <ul className="hidden flex-row gap-4 lg:flex">
          <ListItem href="#" iconImage={chevronDown}>
            Card acccess
          </ListItem>
          <ListItem href="#">Banking</ListItem>
          <ListItem href="#">Processing</ListItem>
          <ListItem href="#">About</ListItem>
          <ListItem href="#">Carrier</ListItem>
          <ListItem href="#">Contact</ListItem>
        </ul>
        {/* content */}
        <div className="flex flex-row gap-4">
          <Button mode="grey" size="small" icon="lagging" iconImage={loginIcon}>
            Login
          </Button>
          <button className="flex cursor-pointer flex-row gap-2 p-2 lg:hidden">
            <img className="size-6" src={menuIcon} alt="menu icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
