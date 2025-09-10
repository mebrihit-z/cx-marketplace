const imgImage7 = "images/ai-bg-image.png";
const starWhiteIcon = "icons/star-white.svg";


export default function CTASection() {
  return (
    <div className="bg-cover bg-no-repeat box-border content-stretch flex flex-col gap-4 md:gap-5 lg:gap-6 items-center justify-center px-0 py-16 md:py-24 lg:py-32 relative size-full" data-name="Section Container" data-node-id="8213:78160" style={{ backgroundImage: `url('${imgImage7}')` }}>
      <div className="box-border content-stretch flex flex-col gap-8 md:gap-10 lg:gap-12 items-start justify-center overflow-clip px-4 md:px-8 lg:px-32 py-0 relative shrink-0 w-full" data-name="Container" data-node-id="8213:78162">
        <div className="content-stretch flex flex-col gap-4 md:gap-5 lg:gap-6 items-center justify-start leading-[0] not-italic relative shrink-0 text-white w-full max-w-[960px]" data-name="Text Container" data-node-id="8213:78163">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[28px] md:text-[36px] lg:text-[48px] w-full" data-node-id="8213:78164">
            <p className="leading-[36px] md:leading-[44px] lg:leading-[56px]">Start fresh with the help of AI</p>
          </div>
          <div className="font-['Inter:regular',_sans-serif] relative shrink-0 text-[16px] md:text-[17px] lg:text-[18px] w-full" data-node-id="8213:78165">
            <p className="leading-[22px] md:leading-[23px] lg:leading-[24px]">Looking for something different? Use Marketplace AI to design a custom website template built around your brand, your content, and your goals. Choose your colors, fonts, features, layouts, and more to craft something truly your own.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col sm:flex-row gap-3 md:gap-4 items-start justify-start relative shrink-0 w-full max-w-[400px] sm:max-w-none" data-name="Button Group" data-node-id="8213:78166">
          <div className="bg-[#0a7c00] box-border content-stretch flex gap-2 items-center justify-center px-6 py-2.5 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 w-full sm:w-auto" data-name="Button" data-node-id="8213:78167">
            <div className="relative shrink-0 size-[18.333px]" data-name="Vector" id="node-I8213_78167-3904_19148">
              <img alt="" className="block max-w-none size-full" src={starWhiteIcon} />
            </div>
            <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" id="node-I8213_78167-3904_19141">
              <p className="leading-[20px] whitespace-pre">Create template</p>
            </div>
          </div>
          <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] shrink-0 w-full sm:w-auto" data-name="Button" data-node-id="8213:78168">
            <div aria-hidden="true" className="absolute border border-[#0a7c00] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap" id="node-I8213_78168-4138_11549">
              <p className="leading-[20px] whitespace-pre">Watch tutorial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}