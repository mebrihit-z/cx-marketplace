// Image assets
const imgScreenshot1 = "http://localhost:3845/assets/8bdc6cc66d33e8a3c198d296d365b23c58ab1828.png";
const imgScreenshot2 = "http://localhost:3845/assets/07c69373f1ea35febf9b475960d85d6aa5c9d625.png";
const imgScreenshot3 = "http://localhost:3845/assets/8c1f7562884f860e91e1f67f9470f55dde4eabd9.png";
const imgRadioIcon = "http://localhost:3845/assets/1eebb2433c6a78bd9a43e3118ca592786e745ba1.svg";
const imgRadioSelected = "http://localhost:3845/assets/6d05347e7901e7fe252d31c08c434dfd1a47a4b4.svg";
const imgArrowOutward = "http://localhost:3845/assets/8076c6dc332fb2ce4eb47e36413658636034a160.svg";
const imgCheckIcon = "http://localhost:3845/assets/f02dfb67e3a918722a08349fa3e8e98d82f7fdc0.svg";
const imgBackArrow = "http://localhost:3845/assets/7b3e619d741509d9537815b561969526c32d0a5e.svg";

interface RadioButtonProps {
  selected?: boolean;
}

function RadioButton({ selected = false }: RadioButtonProps) {
  return (
    <button className="block cursor-pointer relative size-full">
      <div className="absolute content-stretch flex items-start justify-start left-1/2 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
            <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-5">
              <img alt="" className="block max-w-none size-full" src={imgRadioIcon} />
            </div>
          </div>
        </div>
      </div>
      {selected && (
        <div className="absolute inset-[18.75%]">
          <img alt="" className="block max-w-none size-full" src={imgRadioSelected} />
        </div>
      )}
    </button>
  );
}

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
}

function Button({ text, variant = "primary", showArrow = false }: ButtonProps) {
  if (variant === "secondary") {
    return (
      <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start px-6 py-2.5 relative rounded-[8px] size-full">
        <div className="absolute border border-[#0a7c00] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap">
          <p className="leading-[20px] whitespace-pre">{text}</p>
        </div>
        {showArrow && (
          <div className="relative shrink-0 size-5">
            <img alt="" className="block max-w-none size-full" src={imgArrowOutward} />
          </div>
        )}
      </div>
    );
  }
  
  return (
    <div className="bg-[#0a7c00] box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] size-full">
      <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

export default function SaaS() {
  return (
    <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-32 relative size-full">
      {/* Back Button */}
      <div className="absolute box-border content-stretch flex gap-2 items-center justify-start left-32 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] top-[84px]">
        <div className="relative shrink-0 size-5">
          <img alt="" className="block max-w-none size-full" src={imgBackArrow} />
        </div>
        <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#075300] text-[16px] text-nowrap">
          <p className="leading-[20px] whitespace-pre">Back</p>
        </div>
      </div>

      {/* Main Container */}
      <div className="box-border content-stretch flex gap-20 items-start justify-start px-32 py-0 relative shrink-0 w-full">
        {/* Image Container */}
        <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-[696px]">
          <div className="content-start flex flex-wrap gap-4 items-start justify-start relative shrink-0 w-full">
            {/* Main Screenshot */}
            <div className="bg-[#4dd58c] box-border content-stretch flex flex-col gap-2.5 items-start justify-start overflow-clip p-[40px] relative rounded-[16px] shrink-0 w-[696px]">
              <div 
                className="aspect-[1810/1180] bg-center bg-cover bg-no-repeat rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full"
                style={{ backgroundImage: `url('${imgScreenshot1}')` }}
              />
            </div>
            
            {/* Secondary Screenshot */}
            <div className="bg-[#4dd58c] box-border content-stretch flex flex-col gap-2.5 items-start justify-center overflow-clip pl-10 pr-0 py-0 relative rounded-[16px] shrink-0 size-[376px]">
              <div 
                className="aspect-[1762/1448] basis-0 bg-no-repeat bg-size-[100%_100%] bg-top-left grow min-h-px min-w-px shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0"
                style={{ backgroundImage: `url('${imgScreenshot2}')` }}
              />
            </div>
            
            {/* Third Screenshot */}
            <div className="aspect-[304/248] basis-0 bg-[#4dd58c] box-border content-stretch flex flex-col gap-2.5 grow items-center justify-center min-h-px min-w-px overflow-clip pb-10 pt-0 px-0 relative rounded-[16px] shrink-0">
              <div 
                className="aspect-[1900/1260] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0"
                style={{ backgroundImage: `url('${imgScreenshot3}')` }}
              />
            </div>
          </div>
        </div>

        {/* Text Container */}
        <div className="content-stretch flex flex-col gap-12 items-start justify-center relative shrink-0 w-[480px]">
          {/* Title and Description */}
          <div className="content-stretch flex flex-col gap-6 h-[280px] items-start justify-start relative shrink-0 w-full">
            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#22252b] text-[48px] w-full">
              <p className="leading-[56px]">SaaS 1.0</p>
            </div>
            
            <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
              <div className="font-['Inter:regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#333740] text-[18px]">
                <p className="leading-[24px]">
                  The SaaS template is perfect for tech organizations and product teams. It's sleek, responsive, SEO-friendly, and designed to showcase highly functional solutions with a clean layout, smooth animations, and a conversion-focused approach.
                </p>
              </div>
              
              {/* Tags */}
              <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0">
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#737780] text-[16px] text-nowrap">
                  <p className="leading-[20px] whitespace-pre">Tags</p>
                </div>
                <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0">
                  <div className="bg-[#e7f6e5] box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-3 py-[5px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0">
                    <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0a7c00] text-[14px] text-nowrap">
                      <p className="leading-[18px] whitespace-pre">Business</p>
                    </div>
                  </div>
                  <div className="bg-[#e7f6e5] box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-3 py-[5px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0">
                    <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0a7c00] text-[14px] text-nowrap">
                      <p className="leading-[18px] whitespace-pre">Tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skin Customization */}
          <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
            <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[18px] text-nowrap">
              <p className="leading-[24px] whitespace-pre">Customize skin</p>
            </div>
            
            <div className="bg-white relative rounded-[8px] shrink-0 w-[420px]">
              <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative w-[420px]">
                {/* Default Option */}
                <div className="bg-[#e7f6e5] relative shrink-0 w-full">
                  <div className="box-border content-stretch flex items-center justify-between overflow-clip px-4 py-3.5 relative w-full">
                    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <button className="block cursor-pointer overflow-visible relative shrink-0 size-5">
                        <RadioButton selected={true} />
                      </button>
                      <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0">
                        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                          <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0a7c00] text-[14px] text-nowrap">
                            <p className="leading-[18px] whitespace-pre">Default</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
                      <div className="bg-[#031f1f] rounded-[4px] shrink-0 size-5" />
                      <div className="bg-[#009179] rounded-[4px] shrink-0 size-5" />
                      <div className="bg-[#7be385] rounded-[4px] shrink-0 size-5" />
                    </div>
                  </div>
                  <div className="absolute border-[#d0d1d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                </div>

                {/* Winter Blues Option */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex items-center justify-between overflow-clip px-4 py-3.5 relative w-full">
                    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <button className="block cursor-pointer overflow-visible relative shrink-0 size-5">
                        <RadioButton />
                      </button>
                      <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0">
                        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                          <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[14px] text-nowrap">
                            <p className="leading-[18px] whitespace-pre">Winter Blues</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
                      <div className="bg-[#032654] rounded-[4px] shrink-0 size-5" />
                      <div className="bg-[#097dbb] rounded-[4px] shrink-0 size-5" />
                      <div className="bg-[#97e3e5] rounded-[4px] shrink-0 size-5" />
                    </div>
                  </div>
                  <div className="absolute border-[#d0d1d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                </div>

                {/* Spring Garden Option */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex items-center justify-between overflow-clip px-4 py-3.5 relative w-full">
                    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <button className="block cursor-pointer overflow-visible relative shrink-0 size-5">
                        <RadioButton />
                      </button>
                      <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0">
                        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                          <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[14px] text-nowrap">
                            <p className="leading-[18px] whitespace-pre">Spring Garden</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
                      <div className="bg-[#082e00] rounded-[4px] shrink-0 size-5" />
                      <div className="bg-[#1f7f41] rounded-[4px] shrink-0 size-5" />
                      <div className="bg-[#f96b96] rounded-[4px] shrink-0 size-5" />
                    </div>
                  </div>
                  <div className="absolute border-[#d0d1d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                </div>

                {/* Summer Sunset Option */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex items-center justify-between overflow-clip px-4 py-3.5 relative w-full">
                    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <button className="block cursor-pointer overflow-visible relative shrink-0 size-5">
                        <RadioButton />
                      </button>
                      <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0">
                        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                          <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[14px] text-nowrap">
                            <p className="leading-[18px] whitespace-pre">Summer Sunset</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
                      <div className="bg-[#230672] rounded-[4px] shrink-0 size-5" />
                      <div className="bg-[#ae25c9] rounded-[4px] shrink-0 size-5" />
                      <div className="bg-[#ff7543] rounded-[4px] shrink-0 size-5" />
                    </div>
                  </div>
                  <div className="absolute border-[#d0d1d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                </div>

                {/* Autumn Leaves Option */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex items-center justify-between overflow-clip px-4 py-3.5 relative w-full">
                    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <button className="block cursor-pointer overflow-visible relative shrink-0 size-5">
                        <RadioButton />
                      </button>
                      <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0">
                        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                          <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[14px] text-nowrap">
                            <p className="leading-[18px] whitespace-pre">Autumn Leaves</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
                      <div className="bg-[#2e1307] rounded-[4px] shrink-0 size-5" />
                      <div className="bg-[#244524] rounded-[4px] shrink-0 size-5" />
                      <div className="bg-[#ffb701] rounded-[4px] shrink-0 size-5" />
                    </div>
                  </div>
                  <div className="absolute border-[#d0d1d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                </div>

                {/* Custom Option */}
                <div className="relative shrink-0 w-full">
                  <div className="box-border content-stretch flex items-center justify-between overflow-clip px-4 py-3.5 relative w-full">
                    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <button className="block cursor-pointer overflow-visible relative shrink-0 size-5">
                        <RadioButton />
                      </button>
                      <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0">
                        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                          <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[14px] text-nowrap">
                            <p className="leading-[18px] whitespace-pre">Custom</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
                      <div className="bg-[#e90000] rounded-[4px] shrink-0 size-5" />
                      <div className="bg-[#0033ed] rounded-[4px] shrink-0 size-5" />
                      <div className="bg-[#f9e000] rounded-[4px] shrink-0 size-5" />
                    </div>
                  </div>
                  <div className="absolute border-[#d0d1d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                </div>
              </div>
              <div className="absolute border border-[#d0d1d4] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0">
            <div className="bg-[#0a7c00] box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0">
              <Button text="Get a quote" />
            </div>
            <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start px-6 py-2.5 relative rounded-[8px] shrink-0">
              <Button text="Preview" variant="secondary" showArrow={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="box-border content-stretch flex items-center justify-start overflow-clip px-32 py-0 relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-6 grow items-center justify-center min-h-px min-w-px relative shrink-0">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#22252b] text-[32px] tracking-[-1px] w-full">
            <p className="leading-[40px]">Features included</p>
          </div>
          
          <div className="gap-6 grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[72px] relative shrink-0 w-full">
            {/* Row 1 */}
            <div className="[grid-area:1_/_1] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[18px]">
                <p className="leading-[24px]">Product overview</p>
              </div>
            </div>
            
            <div className="[grid-area:1_/_2] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[18px]">
                <p className="leading-[24px]">Feature(s) highlight</p>
              </div>
            </div>
            
            <div className="[grid-area:1_/_3] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[18px]">
                <p className="leading-[24px]">Case studies</p>
              </div>
            </div>
            
            <div className="[grid-area:1_/_4] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[18px]">
                <p className="leading-[24px]">Testimonials</p>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="[grid-area:2_/_1] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[18px]">
                <p className="leading-[24px]">Pricing table & comparisons</p>
              </div>
            </div>
            
            <div className="[grid-area:2_/_2] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[18px]">
                <p className="leading-[24px]">Log in/registration form</p>
              </div>
            </div>
            
            <div className="[grid-area:2_/_3] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[18px]">
                <p className="leading-[24px]">FAQ & help center</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Templates Section */}
      <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-32 relative size-full">
        <div className="box-border content-stretch flex items-end justify-start px-32 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[800px]">
            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#22252b] text-[48px] w-full">
              <p className="leading-[56px]">More templates like this</p>
            </div>
          </div>
        </div>
        <div className="box-border content-stretch flex gap-4 items-start justify-start px-32 py-0 relative shrink-0 w-full">
          <div className="aspect-[500/400] basis-0 box-border content-stretch flex flex-col gap-3 grow items-start justify-end min-h-px min-w-px overflow-clip p-[32px] relative rounded-[16px] shrink-0">
            <div className="absolute bg-[#236e84] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#001619] top-0">
              <div 
                className="aspect-[1860/1212] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#001619]"
                style={{ backgroundImage: `url('http://localhost:3845/assets/9987b1fe5c9ccc92afba601e7a862cc95dae3f0c.png')` }}
              />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-white w-48">
                <p className="leading-[28px]">SaaS 2.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start p-[10px] relative rounded-[8px] shrink-0">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="relative shrink-0 size-5">
                  <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/35f56b629603a8d763e79d4485e01d5ecb3a9978.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-[500/400] basis-0 box-border content-stretch flex flex-col gap-3 grow items-start justify-end min-h-px min-w-px overflow-clip p-[32px] relative rounded-[16px] shrink-0">
            <div className="absolute bg-[#bd550f] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#421e06] top-0">
              <div 
                className="aspect-[1726/1124] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#421e06]"
                style={{ backgroundImage: `url('http://localhost:3845/assets/108731de4ec8ba9c535f9681d049a24dafeabd30.png')` }}
              />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
                <p className="leading-[28px] whitespace-pre">Startup 1.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start p-[10px] relative rounded-[8px] shrink-0">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="relative shrink-0 size-5">
                  <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/35f56b629603a8d763e79d4485e01d5ecb3a9978.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-[500/400] basis-0 box-border content-stretch flex flex-col gap-3 grow items-start justify-end min-h-px min-w-px overflow-clip p-[32px] relative rounded-[16px] shrink-0">
            <div className="absolute bg-[#42ab18] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#0f2b04] top-0">
              <div 
                className="aspect-[1666/1084] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#0f2b04]"
                style={{ backgroundImage: `url('http://localhost:3845/assets/615d974f64d41350899523a937a01de725e28ef1.png')` }}
              />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-white w-48">
                <p className="leading-[28px]">Startup 2.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start p-[10px] relative rounded-[8px] shrink-0">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="relative shrink-0 size-5">
                  <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/35f56b629603a8d763e79d4485e01d5ecb3a9978.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
