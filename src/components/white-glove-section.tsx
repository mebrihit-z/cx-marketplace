interface WhiteGlovesTabsProps {
  property1?: "Default" | "Variant2" | "Variant3";
}

function WhiteGlovesTabs({ property1 = "Default" }: WhiteGlovesTabsProps) {
  const dollarIcon = "icons/dollar-icon.svg";
  const starRibbonIcon = "icons/star-ribbon.svg";
  const customerSupportIcon = "icons/support-icon.svg";
  return (
    <div className="content-stretch flex gap-20 items-start justify-start relative size-full">
      <div className="basis-0 bg-[rgba(231,246,229,0.5)] box-border content-stretch flex flex-col gap-3 grow items-start justify-center min-h-px min-w-px overflow-clip p-[12px] relative rounded-[16px] shrink-0">
        <div className="box-border content-stretch flex gap-2 items-center justify-start overflow-clip p-[24px] relative rounded-[12px] shrink-0 w-full bg-[linear-gradient(242deg,rgba(86,152,0,0.35)_4%,rgba(231,255,201,0.35)_44.79%,rgba(0,167,72,0.35)_85.58%)]">
          <div className="absolute h-[121px] left-1/2 opacity-[0.35] translate-x-[-50%] translate-y-[-50%] w-[400px] bg-gradient-to-r from-green-50 to-blue-50" style={{ top: "calc(50% + 0.5px)" }} />
          <div className="overflow-clip relative shrink-0 size-6">
            <img alt="arrow" className="block max-w-none size-full" src={dollarIcon} />
          </div>
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111215] text-[20px] text-center text-nowrap">
            <p className="leading-[24px] whitespace-pre">Best Price Guaranteed</p>
          </div>
        </div>
        <button className="box-border content-stretch cursor-pointer flex gap-2 h-[72px] items-center justify-start overflow-visible p-[24px] relative rounded-[10px] shrink-0 w-full hover:bg-white/50 transition-colors">
          <div className="overflow-clip relative shrink-0 size-6">
            <img alt="arrow" className="block max-w-none size-full" src={starRibbonIcon} />
          </div>
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111215] text-[20px] text-center text-nowrap">
            <p className="leading-[24px] whitespace-pre">Premium Talent & Services</p>
          </div>
        </button>
        <button className="box-border content-stretch cursor-pointer flex gap-2 h-[72px] items-center justify-start overflow-visible p-[24px] relative rounded-[10px] shrink-0 w-full hover:bg-white/50 transition-colors">
          <div className="opacity-[0.98] relative shrink-0 size-6">
            <img alt="arrow" className="block max-w-none size-full" src={customerSupportIcon} />
          </div>
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#111215] text-[20px] text-center text-nowrap">
            <p className="leading-[24px] whitespace-pre">Customer Support</p>
          </div>
        </button>
      </div>
      <div className="content-stretch flex flex-col gap-12 items-start justify-start relative shrink-0 w-[800px]">
        <div className="font-['Inter:regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#333740] text-[18px]" style={{ width: "min-content" }}>
          <p className="leading-[24px]">Whether you are creating a new website or migrating an existing one, based on page views, storage, development complexity, and number of web content admins and authors, we offer pricing packages that match your budget.</p>
        </div>
        <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] shrink-0 border border-[#0a7c00] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
          <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhiteGloveSection() {
  return (
    <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-32 relative size-full">
      <div className="box-border content-stretch flex items-end justify-start px-32 py-0 relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[960px]">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#22252b] text-[48px] w-full">
            <p className="leading-[56px]">White glove service that scales</p>
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex items-start justify-start overflow-clip px-32 py-0 relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex gap-20 grow items-start justify-start min-h-px min-w-px relative shrink-0">
          <WhiteGlovesTabs />
        </div>
      </div>
    </div>
  );
}
