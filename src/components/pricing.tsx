interface ButtonProps {
  text?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  state?: "Default" | "Hover" | "Pressed" | "Disabled";
  buttonType?: "Default" | "Tertiary Right Icon" | "Tertiary" | "Primary Right Icon" | "Primary Left Icon" | "Secondary" | "Secondary Left Icon" | "Secondary Right Icon" | "Button Link" | "Button Link Right Icon" | "Button Link Left Icon" | "Tertiary Left Icon";
}

function Button({ text = "Button", state = "Default", buttonType = "Default" }: ButtonProps) {
  if (state === "Default" && buttonType === "Secondary") {
    return (
      <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] size-full" data-name="State=Default, Button Type=Secondary" data-node-id="4138:11548">
        <div aria-hidden="true" className="absolute border border-[#0a7c00] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap" data-node-id="4138:11549">
          <p className="leading-[20px] whitespace-pre">{text}</p>
        </div>
      </div>
    );
  }
}

// Image assets
const imgBasicCardBgImage = "images/basic-card-bg-image.svg";
const imgProCardBgImage = "images/pro-card-bg-image.svg";
const imgPremiumCardBgImage = "images/premium-card-bg-image.svg";
const whiteCheckIcon = "icons/white-check-icon.svg";
const imgInfo = "icons/info-icon.svg";
const imgMaterialSymbolsAttachMoneyRounded = "icons/money-icon.svg";

import ComparisonTable from './comparisonTable';

export default function Pricing() {
    return (
    <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start pt-32 px-0 relative size-full" data-name="Section Container" data-node-id="8102:60508">
      <div className="box-border content-stretch flex flex-col lg:flex-row items-start justify-between px-4 sm:px-8 lg:px-32 py-0 relative shrink-0 w-full gap-8 lg:gap-0" data-name="Header" data-node-id="8102:60509">
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full lg:w-[480px]" data-name="Title Container" data-node-id="8102:60510">
          <div className="font-['Inter:semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#22252b] text-[40px] sm:text-[50px] lg:text-[60px] w-full" data-node-id="8102:60511">
            <p className="leading-[48px] sm:leading-[60px] lg:leading-[72px]">Pricing</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-12 items-start justify-center relative shrink-0 w-full lg:w-[640px]" data-name="Subtitle Container" data-node-id="8102:60512">
          <div className="font-['Inter:regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#333740] text-[16px] sm:text-[18px]" data-node-id="8102:60513" style={{ width: "min-content" }}>
            <p className="leading-[22px] sm:leading-[24px]">We offer a range of packages to suit your content needs. Get started with a quote and customize your plan accordingly. Don't hesitate to reach out to our Sales team with any questions.</p>
          </div>
          <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" data-node-id="8207:44615">
            <Button text="Contact sales" buttonType="Secondary" />
          </div>
        </div>
      </div>
      
      {/* Pricing Cards Section */}
      <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start pb-32 pt-8 px-0 relative size-full" data-name="Section Container" data-node-id="8102:60523">
        <div className="box-border content-stretch flex flex-col gap-12 items-center justify-start overflow-clip px-4 sm:px-8 lg:px-32 py-0 relative shrink-0 w-full" data-name="Container" data-node-id="8272:91887">
          <div className="content-stretch flex flex-col lg:flex-row gap-12 items-start justify-center relative shrink-0 w-full" data-name="Pricing Cards" data-node-id="8272:96386">
            {/* Basic Plan */}
            <div className="bg-white box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip px-8 py-10 relative rounded-[16px] shrink-0 w-full lg:w-[400px]" data-name="_Pricing tier card" data-node-id="8272:92105" style={{ top: "calc(50% - 0.5px)", backgroundImage: `url('${imgBasicCardBgImage}')` }}>
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[40px] text-white" data-node-id="8272:92107" style={{ width: "min-content" }}>
                <p className="leading-[48px]">Basic</p>
              </div>
              <div className="content-stretch flex flex-col gap-1 items-start justify-center relative shrink-0 w-full" data-name="Price" data-node-id="8272:92108">
                <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-node-id="8272:92109">
                  <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[12px] text-center text-nowrap" data-node-id="8272:92110">
                    <p className="leading-[18px] whitespace-pre">Estimated cost</p>
                  </div>
                  <div className="relative shrink-0 size-3" data-name="Info" data-node-id="8272:92111">
                    <img alt='' className="block max-w-none size-full" src={imgInfo} />
                  </div>
                </div>
                <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[32px] text-nowrap text-white tracking-[-1px]" data-node-id="8272:92113">
                  <p className="leading-[40px] whitespace-pre">$</p>
                </div>
              </div>
              <div className="h-[0.125px] bg-[#D0D1D4] w-full" data-name="Divider" data-node-id="8272:92114">
              </div>
              <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Package Includes Container" data-node-id="8272:92115">
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-full" data-node-id="8272:92116">
                  <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[16px]">Includes:</p>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92117">
                  <div data-name="material-symbols:check-rounded" data-node-id="8272:92118">
                    <img alt='' src={whiteCheckIcon} />
                  </div>
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92120">
                    <p className="leading-[20px] whitespace-pre">Up to 100 pages</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92121">
                  <div className="" data-name="material-symbols:check-rounded" data-node-id="8272:92122">
                    <img alt='' src={whiteCheckIcon} />
                  </div>
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92124">
                    <p className="leading-[20px] whitespace-pre">Up to 10 authorized users</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92212">
                  <div data-name="material-symbols:check-rounded" data-node-id="8272:92213">
                    <img alt='' src={whiteCheckIcon} />
                  </div>
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92215">
                    <p className="leading-[20px] whitespace-pre">Limited customization options</p>
                  </div>
                </div>
              </div>
              <div className="h-[0.125px] bg-[#D0D1D4]  w-full" data-name="Divider" data-node-id="8272:92125">
              </div>
              <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Package Includes Container" data-node-id="8272:92126">
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-full" data-node-id="8272:92127">
                  <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[16px]">Bonus features</p>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8310:44739">
                  <div data-name="material-symbols:check-rounded" data-node-id="8310:44740">
                    <img alt='' src={whiteCheckIcon} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8310:44742">
                    <p className="leading-[20px]">Basic analytics dashboard</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
               <div className="bg-white box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip px-8 py-10 relative rounded-[16px] shrink-0 w-full lg:w-[400px] " data-name="_Pricing tier card" data-node-id="8272:92161" style={{ top: "calc(50% - 0.5px)", backgroundImage: `url('${imgProCardBgImage}')` }}>
              
                <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[40px] text-white" data-node-id="8272:92219" style={{ width: "min-content" }}> 
                  <p className="leading-[48px]">Pro</p>
                </div>
                <div className="content-stretch flex flex-col gap-1 items-start justify-center relative shrink-0 w-full" data-name="Price" data-node-id="8272:92220">
                  <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-node-id="8272:92221">
                    <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[12px] text-center text-nowrap" data-node-id="8272:92222">
                      <p className="leading-[18px] whitespace-pre">Estimated cost</p>
                    </div>
                    <div className="relative shrink-0 size-3" data-name="Info" data-node-id="8272:92223">
                      <img alt='' className="block max-w-none size-full" src={imgInfo} />
                    </div>
                  </div>
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[32px] text-nowrap text-white tracking-[-1px]" data-node-id="8272:92225">
                    <p className="leading-[40px] whitespace-pre">$$</p>
                  </div>
                </div>
                <div className="h-[0.125px] bg-[#D0D1D4] w-full" data-name="Divider" data-node-id="8272:92226">
                </div>
                <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Package Includes Container" data-node-id="8272:92227">
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-full" data-node-id="8272:92228">
                    <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[16px]">Includes everything in Basic, plus:</p>
                  </div>
                  <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92229">
                    <div data-name="material-symbols:check-rounded" data-node-id="8272:92230">
                      <img alt='' src={whiteCheckIcon} />
                    </div>
                    <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92232">
                      <p className="leading-[20px] whitespace-pre">Up to 500 pages</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92233">
                    <div data-name="material-symbols:check-rounded" data-node-id="8272:92234">
                      <img alt='' src={whiteCheckIcon} />
                    </div>
                    <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92236">
                      <p className="leading-[20px] whitespace-pre">Up to 20 authorized users</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92237">
                    <div data-name="material-symbols:check-rounded" data-node-id="8272:92238">
                      <img alt=''src={whiteCheckIcon} />
                    </div>
                    <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92240">
                      <p className="leading-[20px] whitespace-pre">Advanced customization options</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92259">
                    <div data-name="material-symbols:check-rounded" data-node-id="8272:92260">
                      <img alt='' src={whiteCheckIcon} />
                    </div>
                    <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92262">
                      <p className="leading-[20px] whitespace-pre">Basic SEO optimization</p>
                    </div>
                  </div>
                </div>
                <div className="h-[0.125px] bg-[#D0D1D4] w-full" data-name="Divider" data-node-id="8272:92241">
                </div>
                <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Package Includes Container" data-node-id="8272:92242">
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-full" data-node-id="8272:92243">
                    <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[16px]">Bonus features</p>
                  </div>
                  <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92248">
                    <div data-name="material-symbols:check-rounded" data-node-id="8272:92249">
                      <img alt='' src={whiteCheckIcon} />
                    </div>
                    <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92251">
                      <p className="leading-[20px]">Advanced analytics dashboard</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92244">
                    <div data-name="material-symbols:check-rounded" data-node-id="8272:92245">
                      <img alt='' src={whiteCheckIcon} />
                    </div>
                    <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92247">
                      <p className="leading-[20px]">Web/graphic designer as needed</p>
                    </div>
                  </div>
                </div>
              </div>
            {/* Premium Plan */}
            <div className="bg-white box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip px-8 py-10 relative rounded-[16px] shrink-0 w-full lg:w-[400px]" data-name="_Pricing tier card" data-node-id="8272:92161" style={{ top: "calc(50% - 0.5px)", backgroundImage: `url('${imgPremiumCardBgImage}')` }}>
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[40px] text-white" data-node-id="8272:92163" style={{ width: "min-content" }}>
                <p className="leading-[48px]">Premium</p>
              </div>
              <div className="content-stretch flex flex-col gap-1 items-start justify-center relative shrink-0 w-full" data-name="Price" data-node-id="8272:92164">
                <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-node-id="8272:92165">
                  <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[12px] text-center text-nowrap" data-node-id="8272:92166">
                    <p className="leading-[18px] whitespace-pre">Estimated cost</p>
                  </div>
                  <div className="relative shrink-0 size-3" data-name="Info" data-node-id="8272:92167">
                    <img alt='' className="block max-w-none size-full" src={imgInfo} />
                  </div>
                </div>
                <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[32px] text-nowrap text-white tracking-[-1px]" data-node-id="8272:92169">
                  <p className="leading-[40px] whitespace-pre">$$$</p>
                </div>
              </div>
              <div className="h-[0.125px] bg-[#D0D1D4] w-full" data-name="Divider" data-node-id="8272:92170">
              </div>
              <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Package Includes Container" data-node-id="8272:92171">
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-[259px]" data-node-id="8272:92172">
                  <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[16px]">Includes everything in Pro, plus:</p>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92197">
                  <div data-name="material-symbols:check-rounded" data-node-id="8272:92198">
                    <img alt="material symbols check rounded" src={whiteCheckIcon} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92200">
                    <p className="leading-[20px]">Up to 1000 pages</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92202">
                  <div data-name="material-symbols:check-rounded" data-node-id="8272:92203">
                    <img alt="material symbols check rounded" src={whiteCheckIcon} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92205">
                    <p className="leading-[20px]">Up to 30 authorized users</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92173">
                  <div data-name="material-symbols:check-rounded" data-node-id="8272:92174">
                    <img alt="material symbols check rounded" src={whiteCheckIcon} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92176">
                    <p className="leading-[20px]">Full brand and style customization</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92264">
                  <div data-name="material-symbols:check-rounded" data-node-id="8272:92265">
                    <img alt="material symbols check rounded" src={whiteCheckIcon} />
                  </div>
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92267">
                    <p className="leading-[20px] whitespace-pre">Advanced SEO optimization</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92177">
                  <div data-name="material-symbols:check-rounded" data-node-id="8272:92178">
                    <img alt="material symbols check rounded" src={whiteCheckIcon} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92180">
                    <p className="leading-[20px]">CRM integration</p>
                  </div>
                </div>
              </div>
              <div className="h-[0.5px] bg-[#D0D1D4] w-full" data-name="Divider" data-node-id="8272:92181">
              </div>
              <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Package Includes Container" data-node-id="8272:92182">
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-[259px]" data-node-id="8272:92183">
                  <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[16px]">Bonus features</p>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92188">
                  <div data-name="material-symbols:check-rounded" data-node-id="8272:92189">
                    <img alt="material symbols check rounded" src={whiteCheckIcon} />
                  </div>
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92191">
                    <p className="leading-[20px] whitespace-pre">Intelligent analytics dashboard</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92192">
                  <div data-name="material-symbols:check-rounded" data-node-id="8272:92193">
                    <img alt="material symbols check rounded" src={whiteCheckIcon} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92195">
                    <p className="leading-[20px]">Web/graphic designer as needed</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92184">
                  <div data-name="material-symbols:check-rounded" data-node-id="8272:92185">
                    <img alt="material symbols check rounded" src={whiteCheckIcon} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92187">
                    <p className="leading-[20px]">Custom template built with AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0" data-node-id="8272:96387">
            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#333740] text-[18px] sm:text-[20px] text-center" data-node-id="8272:96388">
              <p className="leading-[22px] sm:leading-[24px]">Additional charges for each package may incur</p>
            </div>
            <div className="content-stretch flex flex-col sm:flex-row gap-4 items-start justify-start relative shrink-0 w-full" data-node-id="8272:96389">
              <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="List Item" data-node-id="8272:96390">
                <div className="relative shrink-0 size-5" data-name="material-symbols:attach-money-rounded" data-node-id="8272:96391">
                  <img alt="material symbols attach money rounded" className="block max-w-none size-full" src={imgMaterialSymbolsAttachMoneyRounded} />
                </div>
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[16px] text-nowrap" data-node-id="8272:96393">
                  <p className="leading-[20px] whitespace-pre">Base package fee</p>
                </div>
              </div>
              <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="List Item" data-node-id="8272:96394">
                <div className="relative shrink-0 size-5" data-name="material-symbols:attach-money-rounded" data-node-id="8272:96395">
                  <img alt="material symbols attach money rounded" className="block max-w-none size-full" src={imgMaterialSymbolsAttachMoneyRounded} />
                </div>
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[16px] text-nowrap" data-node-id="8272:96397">
                  <p className="leading-[20px] whitespace-pre">Migration fee</p>
                </div>
              </div>
              <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="List Item" data-node-id="8272:96398">
                <div className="relative shrink-0 size-5" data-name="material-symbols:attach-money-rounded" data-node-id="8272:96399">
                  <img alt="material symbols attach money rounded" className="block max-w-none size-full" src={imgMaterialSymbolsAttachMoneyRounded} />
                </div>
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[16px] text-nowrap" data-node-id="8272:96401">
                  <p className="leading-[20px] whitespace-pre">Development cost</p>
                </div>
              </div>
              <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="List Item" data-node-id="8272:96402">
                <div className="relative shrink-0 size-5" data-name="material-symbols:attach-money-rounded" data-node-id="8272:96403">
                  <img alt="material symbols attach money rounded" className="block max-w-none size-full" src={imgMaterialSymbolsAttachMoneyRounded} />
                </div>
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[16px] text-nowrap" data-node-id="8272:96405">
                  <p className="leading-[20px] whitespace-pre">Annual licensing cost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table Section */}
      <ComparisonTable />
    </div>
    );
}