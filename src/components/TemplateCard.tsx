interface TemplateCardProps {
  title: string;
  backgroundImage: string;
  backgroundColor: string;
  gradientTo: string;
  aspectRatio?: string;
  onClick?: () => void;
}

export default function TemplateCard({ 
  title, 
  backgroundImage, 
  backgroundColor, 
  gradientTo,
  aspectRatio = "aspect-[1860/1212]",
  onClick 
}: TemplateCardProps) {
  return (
    <div 
      className="aspect-[500/400] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[12px] lg:rounded-[16px] shrink-0 w-full lg:basis-0 lg:grow lg:min-h-px lg:min-w-px cursor-pointer"
      onClick={onClick}
    >
      <div 
        className="absolute bg-[#236e84] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#001619] top-0"
        style={{ backgroundColor }}
      >
        <div 
          className={`${aspectRatio} basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#001619]`}
          style={{ 
            backgroundImage: `url('${backgroundImage}')`,
            background: `linear-gradient(to bottom, transparent 0%, ${gradientTo} 85%), url('${backgroundImage}')`
          }}
        />
      </div>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[20px] lg:text-[24px] text-white w-48">
          <p className="leading-[24px] lg:leading-[28px]">{title}</p>
        </div>
        <div className="box-border content-stretch flex gap-2 items-center justify-start p-[10px] relative rounded-[8px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
          <div className="relative shrink-0 size-5">
            <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/35f56b629603a8d763e79d4485e01d5ecb3a9978.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
