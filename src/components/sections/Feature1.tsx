import Button from '../ui/Button';
import FeatureThing from '../utils/FeatureThing';
import { ArrowRight, Globe } from 'lucide-react';

export default function Feature1() {
  return (
    <section className="flex flex-row gap-2 self-center px-8 py-16">
      {/* container */}
      <div className="flex flex-col gap-12">
        {/* subtitle center align */}
        <div className="flex w-[334px] flex-col items-center gap-8">
          {/* content */}
          <div className="flex w-[343px] flex-col gap-4 text-center md:w-160 lg:w-208">
            <h1 className="font-manrope text-3xl leading-12 font-semibold text-neutral-50 md:text-[62px] md:leading-[62px] lg:leading-18">
              Elevating Card Programs with Cutting-Edge Technology
            </h1>
            <p className="font-inter text-lg leading-7 text-neutral-400">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </div>
          <Button
            mode="link"
            size="medium"
            icon="lagging"
            iconImage={ArrowRight}
            iconSettings="text-primary-400"
          >
            Compare all Pro features
          </Button>
        </div>
        {/* column */}
        <div className="flex flex-col gap-8">
          <FeatureThing
            size="large"
            mode="primary"
            Icon={Globe}
            heading="Globally Accepted"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
          ></FeatureThing>
        </div>
      </div>
    </section>
  );
}
