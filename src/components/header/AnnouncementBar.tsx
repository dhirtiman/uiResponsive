import Button from '../ui/Button';

export default function AnnouncementBar() {
  return (
    <div className="border-neutral-1000 flex h-auto w-full flex-col items-center-safe gap-2 border-b p-2 md:px-8 lg:w-full">
      {/* container */}
      <div className="flex w-full min-w-90 flex-col gap-2 md:min-w-176 lg:w-304">
        {/* Content */}
        <div className="flex w-[359px] flex-row gap-4 self-center md:w-[568px]">
          <Button mode="grey" size="smallest" icon="none" className="">
            Announcement
          </Button>
          <p className="font-inter text-sm font-medium text-neutral-50 md:text-[14px]">
            We are happy to announce that we raise $2 Million in Seed Funding
          </p>
        </div>
      </div>
    </div>
  );
}
