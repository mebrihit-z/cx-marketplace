
interface LeadOrganizationProps {
  className?: string;
}
const whiteRightArrow = "/icons/white-right-arrow.svg";
const fourDotsIcon = "/icons/four-dots-icon.svg";
const salesTrackingIcon = "/icons/sales-tracking-icon.svg";
const totalCustomers = "images/total-customers.svg";
const arrorwup = "icons/arrowup.svg";
const graph = "icons/graph.svg";
const dot = "icons/dot.svg";

export default function LeadOrganization({ className = '' }: LeadOrganizationProps) {
  return (
    <div className={`bg-[#041117] relative w-full min-h-screen ${className}`}>
      {/* Background Image - positioned exactly like Figma */}
      <div className="absolute h-[554px] left-[50%] top-[98px]">
        <img 
          alt="Lead Organization Background" 
          className="block max-w-none size-full" 
          height="554" 
          src={totalCustomers} 
          width="555.307" 
        />
      </div>

      <div className="absolute top-[350px] right-[10%] w-[170px] h-[200px] p-[20px]" style={{ borderRadius: '12px', background: 'radial-gradient(290.16% 138.3% at 17.21% -1.6%, #FFF 0%, rgba(255, 255, 255, 0.40) 100%), #7BE385', boxShadow: '0 4px 48px 0 rgba(255, 255, 255, 0.24)' }}>
      
                <div className=" font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic text-[#02080b] text-[14.288px] text-nowrap top-0" data-node-id="8671:26296">
                  <p className="">Total Customers</p>
                </div>
                <div className="float-right pt-[12px]" data-name="Vector" data-node-id="8671:26299">
                      <img alt='' className="block" src={arrorwup} />
                </div>
                <div className=" bottom-0 right-0 " data-name="Vector" data-node-id="8671:26300">
                  <div className="font-['Recoleta',_sans-serif] text-[#041117] text-[56px] font-medium">3,423</div>
                </div>
                <div className=" " data-node-id="8671:26301">
                      <img alt='' className="block" src={graph} />
                </div>
                <div className="absolute top-[140px] right-[60px]" data-node-id="8671:26302">
                      <img alt='' className="block w-3 h-3 " src={dot} />
                    </div>
                
             
      </div> 

      {/* Text Content - positioned exactly like Figma */}
      <div className="absolute box-border content-stretch flex flex-col gap-12 items-start justify-start lg:left-[140px] px-0 py-10 lg:top-20 left-[5px] top-5">
        {/* Title & Subtitle - exact Figma styling */}
        <div className="content-stretch flex flex-col gap-3 items-start justify-center relative shrink-0 w-full">
          <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] opacity-70 relative shrink-0 text-[#7be385] text-[18px] tracking-[-0.3px] w-full">
            <p className="leading-[1.65]">Lead Organization</p>
          </div>
          
          <div className="content-stretch flex flex-col gap-3 items-start justify-start leading-[0] relative shrink-0">
            <div className="font-['Recoleta:Medium',_sans-serif] not-italic relative shrink-0 text-[#f2fcf3] lg:text-[56px] text-[37px] tracking-[-1px]">
              <p className="leading-[1.15]">Track All Your Potential Customers</p>
            </div>
            <div className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#b1b6b8] text-[16px] tracking-[-0.3px]">
              <p className="leading-[1.1]">Efficiently organize and track your leads, ensuring better follow-ups and higher conversion rates.</p>
            </div>
          </div>
        </div>

        {/* Feature Cards - exact Figma styling */}
        <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-[60%]">
          {/* Card 1 - Organize Your Leads */}
          <div className="bg-[rgba(255,255,255,0.04)] box-border content-stretch flex gap-3 items-center justify-center p-[24px] relative rounded-[24px] shrink-0 w-full">
            <div className="basis-0 content-stretch flex gap-6 grow items-center justify-start min-h-px min-w-px relative shrink-0">
              <div className="bg-[#7be385] box-border content-stretch flex gap-[5.556px] items-center justify-center p-[6.667px] relative rounded-[6.667px] shrink-0 size-10" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-0.41346 -3.461 6.6301 5.6221 31.817 33.078)\\'><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,255,255,0.4)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
                <div className="relative shrink-0 size-[22.222px]">
                  <div className="absolute contents inset-0">
                    <img alt="Category icon" className="block max-w-none size-full" src={fourDotsIcon} />
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-2 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0 tracking-[-0.3px]">
                <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#7be385] text-[20px] text-nowrap">
                  <p className="leading-[1.65] whitespace-pre">Organize Your Leads</p>
                </div>
                <div className="font-['Roboto:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[#e6e7e8] text-[16px]">
                  <p className="leading-[1.7]">Streamline your sales process.</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-8">
              <div className="absolute contents inset-0">
                <img alt="Arrow right icon" className="block max-w-none size-full" src={whiteRightArrow} />
              </div>
            </div>
          </div>

          {/* Card 2 - Sales Tracking */}
          <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[24px] relative rounded-[24px] shrink-0 w-full">
            <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0 w-full">
              <div className="bg-[#7be385] box-border content-stretch flex gap-[5.556px] items-center justify-center p-[6.667px] relative rounded-[6.667px] shrink-0 size-10" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(2.0225 3.814 -3.814 8.6641 7.6404 1.8605)\\'><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,255,255,0.4)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
                <div className="relative shrink-0 size-[22.222px]">
                  <div className="absolute contents inset-0">
                    <img alt="Chart icon" className="block max-w-none size-full" src={salesTrackingIcon} />
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-2 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0 tracking-[-0.3px]">
                <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#7be385] text-[20px] text-nowrap">
                  <p className="leading-[1.65] whitespace-pre">Sales Tracking</p>
                </div>
                <div className="font-['Roboto:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[#d6f6d9] text-[16px]">
                  <p className="leading-[1.7]">Track leads for better follow-ups.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}