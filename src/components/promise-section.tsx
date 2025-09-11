export default function PromiseSection() {
  const img = "images/leader-image.svg";

  return (
    <div className="box-border content-stretch flex flex-col gap-12 md:gap-16 lg:gap-20 items-start justify-start px-0 py-16 md:py-24 lg:py-32 relative size-full">
      <div className="box-border content-stretch flex flex-col lg:flex-row lg:items-start lg:justify-between px-4 md:px-8 lg:px-16 xl:px-32 py-0 relative shrink-0 w-full gap-6 lg:gap-0">
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full lg:w-[480px]">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#22252b] text-2xl md:text-3xl lg:text-4xl xl:text-[48px] w-full">
            <p className="leading-tight md:leading-[40px] lg:leading-[48px] xl:leading-[56px]">Our promise to you</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-6 md:gap-8 lg:gap-10 items-start justify-center relative shrink-0 w-full lg:w-[640px]">
          <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-base md:text-lg w-full">
            <p className="leading-relaxed md:leading-[24px]">We are committed to making your website's customer experience seamless, accessible, and professional.</p>
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex gap-8 md:gap-12 lg:gap-[120px] items-center justify-center overflow-clip px-4 md:px-8 lg:px-16 xl:px-32 py-0 relative shrink-0 w-full">
        <div className="bg-white box-border content-stretch flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center justify-start overflow-clip px-6 md:px-12 lg:px-16 py-6 md:py-8 relative rounded-[16px] shrink-0 shadow-lg w-full">
          <div className="absolute h-full lg:h-[413px] left-0 opacity-25 translate-y-[-50%] w-[1272px] bg-gradient-to-r bg-[linear-gradient(242deg,#569800_4%,#E7FFC9_43.62%,#00A748_85.58%)]" style={{ top: "calc(50% + 0.324px)" }} />
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full lg:w-auto">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full max-w-[200px]">
              <img alt="arrow" className="block max-w-none size-full" src={img} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-4 md:gap-6 items-start justify-start leading-[0] not-italic relative shrink-0 w-full">
            <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold gap-2 items-center lg:items-start justify-center relative shrink-0 w-full">
              <div className="relative shrink-0 text-[#22252b] text-lg md:text-xl lg:text-[24px] w-full text-center lg:text-left">
                <p className="leading-tight md:leading-[24px] lg:leading-[28px]">Bibhakar Pandey</p>
              </div>
              <div className="relative shrink-0 text-[#0a7c00] text-base md:text-lg lg:text-[20px] w-full text-center lg:text-left">
                <p className="leading-tight md:leading-[20px] lg:leading-[24px]">Co-Founder & CEO of CX Studios</p>
              </div>
            </div>
            <div className="font-['Inter:regular',_sans-serif] relative shrink-0 text-[#333740] w-full">
              <p className="font-['Inter:Italic',_sans-serif] font-normal italic leading-relaxed md:leading-[24px] text-sm md:text-base lg:text-[18px] text-center lg:text-left">
                "Modernizing your website ordering process isn't just about keeping up with the times; it's about prioritizing the customer experience. In today's digital age, your website is often the first interaction a customer has with your brand. CX Studios is committed to making the Marketplace seamless and memorable—an experience that truly connects with and captivates your customers."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
