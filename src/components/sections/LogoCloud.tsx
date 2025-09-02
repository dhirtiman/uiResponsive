import LogoItem from "./LogoItem";


export default function LogoCloud() {
  return (
    <section className="flex h-auto w-full flex-col gap-2 border px-4 py-16">
      {/* container */}
      <div className="flex flex-col w-[343px] gap-8">
        {/* logo container */}
        <div className="flex flex-col gap-6">
            {/* row 1 */}
            <div className="flex flex-row w-[343px] justify-between">
                <LogoItem company='nuxt'></LogoItem>
                <LogoItem company='miro'></LogoItem>
                <LogoItem company='lottlefiles'></LogoItem>
                <LogoItem company='wise'></LogoItem>
            </div>
            {/* row 2 */}
            <div className="flex flex-row w-[343px] justify-between">
                <LogoItem company='dribble'></LogoItem>
                <LogoItem company='kinsta'></LogoItem>
                <LogoItem company='angellist'></LogoItem>
                <LogoItem company='behance'></LogoItem>
            </div>
        </div>
      </div>
    </section>
  );
}
