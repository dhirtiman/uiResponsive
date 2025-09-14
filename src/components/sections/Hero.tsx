import Button from '../ui/Button';
import rightArrow from '../../assets/icons/arrowRight.svg'
import mesh from '../../assets/hero/mesh.svg';

export default function Hero() {
  return (
    <section className="relative flex h-119 w-full flex-col items-center-safe md:h-140 lg:h-133">
      {/* hero section stuff */}
      <div className="-top-6 flex flex-row gap-2 px-4 pt-16 pb-8 md:-top-9 md:px-8 md:pt-8 md:pb-8 lg:px-20 lg:pt-32">
        {/* container */}
        <div className="flex flex-col gap-8 md:gap-2 md:px-8">
          {/* content 1 */}
          <div className="flex flex-col gap-4">
            <h2 className="text-md font-inter text-primary-400 text-center font-medium">
              Seamless experience
            </h2>
            {/* content1.1 */}
            <div className="flex w-[343px] flex-col gap-4 text-center md:w-160 lg:w-208">
              <h1 className="font-manrope text-3xl leading-12 font-semibold text-neutral-50 md:text-[62px] md:leading-[62px] lg:leading-18">
                Unleashing the Next Generation of Card Solutions
              </h1>
              <p className="font-inter text-lg leading-7 text-neutral-400">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud
              </p>
            </div>
          </div>
          {/* content 2 */}
          <div className="flex flex-col items-center gap-4">
            <Button
              mode="primary"
              size="large"
              icon="lagging"
              iconImage={rightArrow}
              className="w-[343px] md:w-[193px]"
            >
              Unlock your Card
            </Button>
            <p className="font-inter text-center text-[14px] font-medium text-neutral-400">
              *No credit card required
            </p>
          </div>
        </div>
      </div>
      {/* mesh */}
      <img
        className=" object-cover absolute top-25 -z-10 h-50 w-[343px] md:-top-1 md:h-[394px] md:w-[538px] lg:top-28 lg:h-115 lg:w-[631px]"
        src={mesh}
        alt="bg mesh"
      />
    </section>
  );
}

/// make the mesh bg
