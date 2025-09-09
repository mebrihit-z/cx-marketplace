export default function PromiseSection() {
  const img = "images/leader-image.svg";

  return (
    <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-32 relative size-full">
      <div className="box-border content-stretch flex items-start justify-between px-32 py-0 relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[480px]">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#22252b] text-[48px] w-full">
            <p className="leading-[56px]">Our promise to you</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-10 items-start justify-center relative shrink-0 w-[640px]">
          <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[18px] w-full">
            <p className="leading-[24px]">We are committed to making your website's customer experience seamless, accessible, and professional.</p>
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex gap-[120px] items-center justify-center overflow-clip px-32 py-0 relative shrink-0 w-full">
        <div className="basis-0 bg-white box-border content-stretch flex gap-16 grow items-center justify-start min-h-px min-w-px overflow-clip px-16 py-8 relative rounded-[16px] shrink-0 shadow-lg">
          <div className="absolute h-[413px] left-0 opacity-25 translate-y-[-50%] w-[1272px] bg-gradient-to-r bg-[linear-gradient(242deg,#569800_4%,#E7FFC9_43.62%,#00A748_85.58%)]" style={{ top: "calc(50% + 0.324px)" }} />
          <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
              <img alt="arrow" className="block max-w-none size-full" src={img} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic relative shrink-0 w-[800px]">
            <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold gap-2 items-center justify-center relative shrink-0 w-full">
              <div className="relative shrink-0 text-[#22252b] text-[24px] w-full">
                <p className="leading-[28px]">Bibhakar Pandey</p>
              </div>
              <div className="relative shrink-0 text-[#0a7c00] text-[20px] w-full">
                <p className="leading-[24px]">Co-Founder & CEO of CX Studios</p>
              </div>
            </div>
            <div className="font-['Inter:regular',_sans-serif] relative shrink-0 text-[#333740] text-[0px] w-full">
              <p className="font-['Inter:Italic',_sans-serif] font-normal italic leading-[24px] text-[18px]">
                "Modernizing your website ordering process isn't just about keeping up with the times; it's about prioritizing the customer experience. In today's digital age, your website is often the first interaction a customer has with your brand. CX Studios is committed to making the Marketplace seamless and memorable—an experience that truly connects with and captivates your customers."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
