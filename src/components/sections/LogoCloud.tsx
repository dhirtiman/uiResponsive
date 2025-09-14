import LogoItem from './LogoItem';

export default function LogoCloud() {
  return (
    <section className="flex h-auto w-full flex-col gap-2 px-4 py-16 md:px-8 md:py-24 lg:px-20">
      {/* container */}
      <div className="mx-auto flex w-full flex-col gap-8 md:max-w-[704px] md:gap-16 md:px-8 lg:max-w-[1280px]">
        {/* logo container */}
        <div className="flex flex-col items-center gap-6 ">
          {/* row 1 */}
          <div className="flex w-[343px] flex-row justify-between md:w-160 lg:w-[1216px]">
            <LogoItem company="nuxt" />
            <LogoItem company="miro" />
            <LogoItem company="lottlefiles" />
            <LogoItem company="wise" />
            <LogoItem className="hidden md:flex" company="dribble" />
            <LogoItem className="hidden lg:flex" company="angellist" />
            <LogoItem className="hidden lg:flex" company="kinsta" />
            <LogoItem className="hidden lg:flex" company="behance" />
          </div>
          {/* row 2 */}
          <div className="flex w-[343px] flex-row justify-between">
            <LogoItem className="flex md:hidden" company="dribble" />
            <LogoItem className="flex lg:hidden" company="kinsta" />
            <LogoItem className="flex lg:hidden" company="angellist" />
            <LogoItem className="flex lg:hidden" company="behance" />
          </div>
        </div>
      </div>
    </section>
  );
}
