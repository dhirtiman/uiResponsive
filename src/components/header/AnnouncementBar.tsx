import Button from "../ui/Button";


export default function AnnouncementBar() {
  return (
    <div className="border-neutral-1000 flex h-auto w-[375px] flex-col gap-2 border-b p-2">
      <div className="flex w-full min-w-90 flex-col gap-2 ">
        <div className="flex w-[359px]  flex-row gap-4">
          <Button mode='grey' size='small' icon='none' className="">Announcement</Button>
          <p className=" font-inter-medium text-sm text-neutral-50">We are happy to announce that we raise $2 Million in Seed Funding</p>
        </div>
      </div>
    </div>
  );
}


