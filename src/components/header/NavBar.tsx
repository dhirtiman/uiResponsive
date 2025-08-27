import type React from 'react';
import modeUILogo from '../../assets/logos/modeuiLogo.svg';
const NavBar = () => {
  return (
    <section className="border-neutral-1000 flex h-auto w-[375px] flex-col gap-2 border-b px-4 py-5">
      {/* container */}
      <div className="flex w-[343px] flex-row justify-between">
        {/* logo */}
        <div className="flex flex-col gap-2 p-2">
          <div className="flex flex-col gap-2 px-2 py-1">
            <img className="h-4 w-21" src={modeUILogo} alt="modeUI logo" />
          </div>
        </div>
        {/* content */}
        <div className='flex flex-row gap-4'>
            
        </div>
      </div>
    </section>
  );
};

export default NavBar;
