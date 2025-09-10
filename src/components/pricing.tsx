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
const imgImage19 = "images/black-card-bg-image.svg";
const greenCardBgImage = "images/green-card-bg-image.svg";
const imgInfo = "icons/check-white-icon.svg";
const imgDivider = "http://localhost:3845/assets/4d161f8a3dc0da028fc6520ce54a678cd2ef6444.svg";
const imgMaterialSymbolsCheckRounded = "icons/check-white-icon.svg";
const imgInfo1 = "http://localhost:3845/assets/d580b21692ededd1094df79e8007ebfbae134163.svg";
const imgMaterialSymbolsAttachMoneyRounded = "http://localhost:3845/assets/7e67f2f6385ff030d4ff80c07acbfdd80a0d5a64.svg";

// Comparison table image assets
const imgImage46 = "http://localhost:3845/assets/7e2f4b13b8101d455a2fe962796591ee30c6e36e.png";
const imgLine7 = "http://localhost:3845/assets/a3e48a0411e58ca0738ffdb7738dccce8374c0f7.svg";
const imgLine15 = "http://localhost:3845/assets/29a91ea6fe856958e9a569248623f536085c50bf.svg";
const imgMaterialSymbolsCloseRounded = "http://localhost:3845/assets/5f9c2984e4f8a487a6d71bfce4353cad4d020779.svg";

export default function Pricing() {
    return (
    <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start pb-16 pt-32 px-0 relative size-full" data-name="Section Container" data-node-id="8102:60508">
      <div className="box-border content-stretch flex items-start justify-between px-32 py-0 relative shrink-0 w-full" data-name="Header" data-node-id="8102:60509">
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[480px]" data-name="Title Container" data-node-id="8102:60510">
          <div className="font-['Inter:semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#22252b] text-[60px] w-full" data-node-id="8102:60511">
            <p className="leading-[72px]">Pricing</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-12 items-start justify-center relative shrink-0 w-[640px]" data-name="Subtitle Container" data-node-id="8102:60512">
          <div className="font-['Inter:regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#333740] text-[18px]" data-node-id="8102:60513" style={{ width: "min-content" }}>
            <p className="leading-[24px]">We offer a range of packages to suit your content needs. Get started with a quote and customize your plan accordingly. Don't hesitate to reach out to our Sales team with any questions.</p>
          </div>
          <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" data-node-id="8207:44615">
            <Button text="Contact sales" buttonType="Secondary" />
          </div>
        </div>
      </div>
      
      {/* Pricing Cards Section */}
      <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start pb-32 pt-16 px-0 relative size-full" data-name="Section Container" data-node-id="8102:60523">
        <div className="box-border content-stretch flex flex-col gap-12 items-center justify-start overflow-clip px-32 py-0 relative shrink-0 w-full" data-name="Container" data-node-id="8272:91887">
          <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0" data-name="Pricing Cards" data-node-id="8272:96386">
            {/* Basic Plan */}
            <div className="bg-[#032900] box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip px-8 py-10 relative rounded-[16px] shrink-0 w-[400px]" data-name="_Pricing tier card" data-node-id="8272:92105">
              <div className="absolute bg-gradient-to-b from-[#569800] h-[526px] left-1/2 opacity-40 to-[#00a748] top-1/2 translate-x-[-50%] translate-y-[-50%] via-50% via-[#e7ffc9] w-[400px]" data-name="Background" data-node-id="8272:92257" />
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
              <div className="h-0 relative shrink-0 w-full" data-name="Divider" data-node-id="8272:92114">
                <div className="absolute inset-[-0.5px_-0.15%]" style={{ "--stroke-0": "rgba(208, 209, 212, 1)" } as React.CSSProperties}>
                  <img alt='' className="block max-w-none size-full" src={imgDivider} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Package Includes Container" data-node-id="8272:92115">
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-full" data-node-id="8272:92116">
                  <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[16px]">Includes:</p>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92117">
                  <div className="relative shrink-0" data-name="material-symbols:check-rounded" data-node-id="8272:92118">
                    <img alt='' src={imgMaterialSymbolsCheckRounded} />
                  </div>
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92120">
                    <p className="leading-[20px] whitespace-pre">Up to 100 pages</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92121">
                  <div className="" data-name="material-symbols:check-rounded" data-node-id="8272:92122">
                    <img alt='' src={imgMaterialSymbolsCheckRounded} />
                  </div>
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92124">
                    <p className="leading-[20px] whitespace-pre">Up to 10 authorized users</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92212">
                  <div data-name="material-symbols:check-rounded" data-node-id="8272:92213">
                    <img alt='' src={imgMaterialSymbolsCheckRounded} />
                  </div>
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92215">
                    <p className="leading-[20px] whitespace-pre">Limited customization options</p>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-name="Divider" data-node-id="8272:92125">
                <div className="absolute inset-[-0.5px_-0.15%]" style={{ "--stroke-0": "rgba(208, 209, 212, 1)" } as React.CSSProperties}>
                  <img alt='' className="block max-w-none size-full" src={imgDivider} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Package Includes Container" data-node-id="8272:92126">
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-full" data-node-id="8272:92127">
                  <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[16px]">Bonus features</p>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8310:44739">
                  <div className="relative shrink-0 size-6" data-name="material-symbols:check-rounded" data-node-id="8310:44740">
                    <img alt='' className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8310:44742">
                    <p className="leading-[20px]">Basic analytics dashboard</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white relative rounded-[16px] shrink-0 w-[400px]" data-name="_Pricing tier card" data-node-id="8272:92217">
              <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip px-8 py-10 relative w-[400px] rounded-[16px]">
                <div className="absolute bg-center bg-cover bg-no-repeat h-[585px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[400px] bg-cover bg-center" data-name="image 19" data-node-id="8272:92218" style={{ top: "calc(50% - 0.5px)", backgroundImage: `url('${imgImage19}')` }} />
                <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[40px] text-white" data-node-id="8272:92219" style={{ width: "min-content" }}>
                  <p className="leading-[48px]">Pro</p>
                </div>
                <div className="content-stretch flex flex-col gap-1 items-start justify-center relative shrink-0 w-full" data-name="Price" data-node-id="8272:92220">
                  <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-node-id="8272:92221">
                    <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[12px] text-center text-nowrap" data-node-id="8272:92222">
                      <p className="leading-[18px] whitespace-pre">Estimated cost</p>
                    </div>
                    <div className="relative shrink-0 size-3" data-name="Info" data-node-id="8272:92223">
                      <img alt='' className="block max-w-none size-full" src={imgInfo1} />
                    </div>
                  </div>
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[32px] text-nowrap text-white tracking-[-1px]" data-node-id="8272:92225">
                    <p className="leading-[40px] whitespace-pre">$$</p>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-name="Divider" data-node-id="8272:92226">
                  <div className="absolute inset-[-0.5px_-0.15%]" style={{ "--stroke-0": "rgba(208, 209, 212, 1)" } as React.CSSProperties}>
                    <img alt='' className="block max-w-none size-full" src={imgDivider} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Package Includes Container" data-node-id="8272:92227">
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-full" data-node-id="8272:92228">
                    <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[16px]">Includes everything in Basic, plus:</p>
                  </div>
                  <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92229">
                    <div data-name="material-symbols:check-rounded" data-node-id="8272:92230">
                      <img alt='' src={imgMaterialSymbolsCheckRounded} />
                    </div>
                    <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92232">
                      <p className="leading-[20px] whitespace-pre">Up to 500 pages</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92233">
                    <div data-name="material-symbols:check-rounded" data-node-id="8272:92234">
                      <img alt='' src={imgMaterialSymbolsCheckRounded} />
                    </div>
                    <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92236">
                      <p className="leading-[20px] whitespace-pre">Up to 20 authorized users</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92237">
                    <div data-name="material-symbols:check-rounded" data-node-id="8272:92238">
                      <img alt=''src={imgMaterialSymbolsCheckRounded} />
                    </div>
                    <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92240">
                      <p className="leading-[20px] whitespace-pre">Advanced customization options</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92259">
                    <div data-name="material-symbols:check-rounded" data-node-id="8272:92260">
                      <img alt='' src={imgMaterialSymbolsCheckRounded} />
                    </div>
                    <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92262">
                      <p className="leading-[20px] whitespace-pre">Basic SEO optimization</p>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-name="Divider" data-node-id="8272:92241">
                  <div className="absolute inset-[-0.5px_-0.15%]" style={{ "--stroke-0": "rgba(208, 209, 212, 1)" } as React.CSSProperties}>
                    <img alt='' className="block max-w-none size-full" src={imgDivider} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Package Includes Container" data-node-id="8272:92242">
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-full" data-node-id="8272:92243">
                    <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[16px]">Bonus features</p>
                  </div>
                  <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92248">
                    <div className="relative shrink-0 size-6" data-name="material-symbols:check-rounded" data-node-id="8272:92249">
                      <img alt='' className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
                    </div>
                    <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92251">
                      <p className="leading-[20px]">Advanced analytics dashboard</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92244">
                    <div className="relative shrink-0 size-6" data-name="material-symbols:check-rounded" data-node-id="8272:92245">
                      <img alt='' className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
                    </div>
                    <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92247">
                      <p className="leading-[20px]">Web/graphic designer as needed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[16px]" />
            </div>

            {/* Premium Plan */}
            <div className="bg-white box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip px-8 py-10 relative rounded-[16px] shrink-0 w-[400px]" data-name="_Pricing tier card" data-node-id="8272:92161">
              <div className="absolute flex h-[1078.625px] items-center justify-center translate-x-[-50%] translate-y-[-50%] w-[1078.625px]" style={{ top: "calc(50% + 0.322px)", left: "calc(50% - 0.102px)" }}>
                <div className="flex-none">
                  <div className="bg-[#00000066] bg-[position:0%_0%,_0%_26.01%] bg-size-[auto,100%_100%] h-[704.407px] w-[821.027px]  bg-cover bg-center" data-name="photo-1636011497948-13d7aaa84f31 1" data-node-id="8272:92162" style={{ backgroundImage: `url('${greenCardBgImage}')` }} />
                </div>
              </div>
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[40px] text-white" data-node-id="8272:92163" style={{ width: "min-content" }}>
                <p className="leading-[48px]">Premium</p>
              </div>
              <div className="content-stretch flex flex-col gap-1 items-start justify-center relative shrink-0 w-full" data-name="Price" data-node-id="8272:92164">
                <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-node-id="8272:92165">
                  <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[12px] text-center text-nowrap" data-node-id="8272:92166">
                    <p className="leading-[18px] whitespace-pre">Estimated cost</p>
                  </div>
                  <div className="relative shrink-0 size-3" data-name="Info" data-node-id="8272:92167">
                    <img alt='' className="block max-w-none size-full" src={imgInfo1} />
                  </div>
                </div>
                <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[32px] text-nowrap text-white tracking-[-1px]" data-node-id="8272:92169">
                  <p className="leading-[40px] whitespace-pre">$$$</p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-name="Divider" data-node-id="8272:92170">
                <div className="absolute inset-[-0.5px_-0.15%]" style={{ "--stroke-0": "rgba(208, 209, 212, 1)" } as React.CSSProperties}>
                  <img alt= '' className="block max-w-none size-full" src={imgDivider} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Package Includes Container" data-node-id="8272:92171">
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-[259px]" data-node-id="8272:92172">
                  <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[16px]">Includes everything in Pro, plus:</p>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92197">
                  <div className="relative shrink-0 size-6" data-name="material-symbols:check-rounded" data-node-id="8272:92198">
                    <img alt="material symbols check rounded" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92200">
                    <p className="leading-[20px]">Up to 1000 pages</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92202">
                  <div className="relative shrink-0 size-6" data-name="material-symbols:check-rounded" data-node-id="8272:92203">
                    <img alt="material symbols check rounded" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92205">
                    <p className="leading-[20px]">Up to 30 authorized users</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92173">
                  <div className="relative shrink-0 size-6" data-name="material-symbols:check-rounded" data-node-id="8272:92174">
                    <img alt="material symbols check rounded" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92176">
                    <p className="leading-[20px]">Full brand and style customization</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92264">
                  <div data-name="material-symbols:check-rounded" data-node-id="8272:92265">
                    <img alt="material symbols check rounded" src={imgMaterialSymbolsCheckRounded} />
                  </div>
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92267">
                    <p className="leading-[20px] whitespace-pre">Advanced SEO optimization</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92177">
                  <div className="relative shrink-0 size-6" data-name="material-symbols:check-rounded" data-node-id="8272:92178">
                    <img alt="material symbols check rounded" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92180">
                    <p className="leading-[20px]">CRM integration</p>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-name="Divider" data-node-id="8272:92181">
                <div className="absolute inset-[-0.5px_-0.15%]" style={{ "--stroke-0": "rgba(208, 209, 212, 1)" } as React.CSSProperties}>
                  <img alt="divider" className="block max-w-none size-full" src={imgDivider} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Package Includes Container" data-node-id="8272:92182">
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-white w-[259px]" data-node-id="8272:92183">
                  <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[16px]">Bonus features</p>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92188">
                  <div data-name="material-symbols:check-rounded" data-node-id="8272:92189">
                    <img alt="material symbols check rounded" src={imgMaterialSymbolsCheckRounded} />
                  </div>
                  <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="8272:92191">
                    <p className="leading-[20px] whitespace-pre">Intelligent analytics dashboard</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92192">
                  <div className="relative shrink-0 size-6" data-name="material-symbols:check-rounded" data-node-id="8272:92193">
                    <img alt="material symbols check rounded" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92195">
                    <p className="leading-[20px]">Web/graphic designer as needed</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name="List Item" data-node-id="8272:92184">
                  <div className="relative shrink-0 size-6" data-name="material-symbols:check-rounded" data-node-id="8272:92185">
                    <img alt="material symbols check rounded" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
                  </div>
                  <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" data-node-id="8272:92187">
                    <p className="leading-[20px]">Custom template built with AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0" data-node-id="8272:96387">
            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#333740] text-[20px] text-center text-nowrap" data-node-id="8272:96388">
              <p className="leading-[24px] whitespace-pre">Additional charges for each package may incur</p>
            </div>
            <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0 w-full" data-node-id="8272:96389">
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
      <div className="bg-[#020d10] box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-32 relative size-full" data-name="Section Container" data-node-id="8306:40159">
        <div className="absolute flex h-[1054px] items-center justify-center left-[-35px] top-0 w-[1581px]">
          <div className="flex-none rotate-[180deg]">
            <div className="bg-center bg-cover bg-no-repeat h-[1054px] opacity-70 w-[1581px]" data-name="image 46" data-node-id="8306:40160" style={{ backgroundImage: `url('${imgImage46}')` }} />
          </div>
        </div>
        <div className="box-border content-stretch flex items-start justify-start px-32 py-0 relative shrink-0 w-full" data-name="Header" data-node-id="8306:40161">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[480px]" data-name="Title Container" data-node-id="8306:40162">
            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[48px] text-white w-full" data-node-id="8306:40163">
              <p className="leading-[56px]">Compare packages</p>
            </div>
          </div>
        </div>
        <div className="box-border content-stretch flex gap-[120px] items-center justify-center overflow-clip px-32 py-0 relative shrink-0 w-full" data-name="Container" data-node-id="8306:40164">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Table Container" data-node-id="8306:40165">
            <div className="[grid-area:1_/_1] bg-[#737780] h-[662px] ml-[928px] mt-0 opacity-[0.15] relative rounded-br-[16px] rounded-tr-[16px] w-[309px]" data-node-id="8306:40166">
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-br-[16px] rounded-tr-[16px]" />
            </div>
            <div className="[grid-area:1_/_1] bg-[#737780] h-[580px] ml-0 mt-[82px] opacity-30 relative rounded-bl-[16px] rounded-tl-[16px] w-[309px]" data-node-id="8306:40167">
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-bl-[16px] rounded-tl-[16px]" />
            </div>
            <div className="[grid-area:1_/_1] bg-[#737780] h-[662px] ml-[308px] mt-0 opacity-[0.15] relative rounded-tl-[16px] w-[311px]" data-node-id="8306:40168">
              <div aria-hidden="true" className="absolute border-[0px_1px_1px] border-solid border-white inset-0 pointer-events-none rounded-tl-[16px]" />
            </div>
            <div className="[grid-area:1_/_1] bg-[#737780] h-[82px] ml-[308.5px] mt-0 opacity-30 relative rounded-tl-[16px] rounded-tr-[16px] w-[929px]" data-node-id="8306:40169">
              <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-tl-[16.5px] rounded-tr-[16.5px]" />
            </div>
            <div className="[grid-area:1_/_1] bg-[#737780] h-[662px] ml-[619px] mt-0 opacity-[0.15] relative w-[309px]" data-node-id="8306:40170">
              <div aria-hidden="true" className="absolute border-[0px_1px_1px] border-solid border-white inset-0 pointer-events-none" />
            </div>
            <div className="[grid-area:1_/_1] ml-[1066.5px] mt-[606px] relative size-8" data-name="material-symbols:check-rounded" data-node-id="8306:40171">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
            </div>
            <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center ml-[464px] mt-[41px] not-italic relative text-[32px] text-center text-nowrap text-white tracking-[-1px] translate-x-[-50%] translate-y-[-50%]" data-node-id="8306:40175">
              <p className="leading-[40px] whitespace-pre">Basic</p>
            </div>
            <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center ml-[774.5px] mt-[41px] not-italic relative text-[32px] text-center text-nowrap text-white tracking-[-1px] translate-x-[-50%] translate-y-[-50%]" data-node-id="8306:40176">
              <p className="leading-[40px] whitespace-pre">Pro</p>
            </div>
            <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center ml-[1084.5px] mt-[41px] not-italic relative text-[32px] text-center text-nowrap text-white tracking-[-1px] translate-x-[-50%] translate-y-[-50%]" data-node-id="8306:40177">
              <p className="leading-[40px] whitespace-pre">Premium</p>
            </div>
            <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[154px] relative w-[928px]" data-node-id="8306:40178">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine7} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[226px] relative w-[928px]" data-node-id="8306:40179">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine7} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[298px] relative w-[928px]" data-node-id="8306:40180">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine7} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[370px] relative w-[928px]" data-node-id="8306:40181">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine7} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[442px] relative w-[928px]" data-node-id="8306:40182">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine7} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[514px] relative w-[928px]" data-node-id="8306:40183">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine7} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[586px] relative w-[928px]" data-node-id="8306:40184">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine7} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-px mt-[106px] place-items-start relative" data-node-id="8306:40185">
              <div className="[grid-area:1_/_1] h-0 ml-0 mt-12 relative w-[308px]" data-node-id="8306:40187">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <img alt="" className="block max-w-none size-full" src={imgLine15} />
                </div>
              </div>
              <div className="[grid-area:1_/_1] h-0 ml-0 mt-[120px] relative w-[308px]" data-node-id="8306:40188">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <img alt="" className="block max-w-none size-full" src={imgLine15} />
                </div>
              </div>
              <div className="[grid-area:1_/_1] h-0 ml-0 mt-48 relative w-[308px]" data-node-id="8306:40189">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <img alt="" className="block max-w-none size-full" src={imgLine15} />
                </div>
              </div>
              <div className="[grid-area:1_/_1] h-0 ml-0 mt-[264px] relative w-[308px]" data-node-id="8306:40190">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <img alt="" className="block max-w-none size-full" src={imgLine15} />
                </div>
              </div>
              <div className="[grid-area:1_/_1] h-0 ml-0 mt-[336px] relative w-[308px]" data-node-id="8306:40191">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <img alt="" className="block max-w-none size-full" src={imgLine15} />
                </div>
              </div>
              <div className="[grid-area:1_/_1] h-0 ml-0 mt-[408px] relative w-[308px]" data-node-id="8306:40192">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <img alt="" className="block max-w-none size-full" src={imgLine15} />
                </div>
              </div>
              <div className="[grid-area:1_/_1] h-0 ml-0 mt-[480px] relative w-[308px]" data-node-id="8306:40193">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <img alt="" className="block max-w-none size-full" src={imgLine15} />
                </div>
              </div>
              <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-0 not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40195">
                <p className="leading-[24px] whitespace-pre">Total pages</p>
              </div>
              <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-[72px] not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40196">
                <p className="leading-[24px] whitespace-pre">Authorized users</p>
              </div>
              <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-36 not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40197">
                <p className="leading-[24px] whitespace-pre">Customization options</p>
              </div>
              <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-[216px] not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40198">
                <p className="leading-[24px] whitespace-pre">SEO optimization</p>
              </div>
              <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-72 not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40199">
                <p className="leading-[24px] whitespace-pre">CRM integration</p>
              </div>
              <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-[360px] not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40200">
                <p className="leading-[24px] whitespace-pre">Analytics dashboard</p>
              </div>
              <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-[432px] not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40201">
                <p className="leading-[24px] whitespace-pre">Web/graphic designer</p>
              </div>
              <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-[504px] not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40202">
                <p className="leading-[24px] whitespace-pre">Custom template</p>
              </div>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[463.5px] mt-[108px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40203">
              <p className="leading-[20px] whitespace-pre">Up to 100</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[463.5px] mt-[180px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40204">
              <p className="leading-[20px] whitespace-pre">Up to 10</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[463.5px] mt-[252px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40205">
              <p className="leading-[20px] whitespace-pre">Limited</p>
            </div>
            <div className="[grid-area:1_/_1] ml-[447.5px] mt-[534px] relative size-8" data-name="material-symbols:close-rounded" data-node-id="8310:44794">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCloseRounded} />
            </div>
            <div className="[grid-area:1_/_1] ml-[447.5px] mt-[390px] relative size-8" data-name="material-symbols:close-rounded" data-node-id="8306:40208">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCloseRounded} />
            </div>
            <div className="[grid-area:1_/_1] ml-[447.5px] mt-[318px] relative size-8" data-name="material-symbols:close-rounded" data-node-id="8306:40210">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCloseRounded} />
            </div>
            <div className="[grid-area:1_/_1] ml-[447.5px] mt-[606px] relative size-8" data-name="material-symbols:close-rounded" data-node-id="8306:40212">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCloseRounded} />
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[463px] mt-[468px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8310:44754">
              <p className="leading-[20px] whitespace-pre">Basic</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[773.5px] mt-[108px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40216">
              <p className="leading-[20px] whitespace-pre">Up to 500</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[773.5px] mt-[180px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40217">
              <p className="leading-[20px] whitespace-pre">Up to 20</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[773.5px] mt-[252px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40218">
              <p className="leading-[20px] whitespace-pre">Advanced</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[774px] mt-[324px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40219">
              <p className="leading-[20px] whitespace-pre">Basic</p>
            </div>
            <div className="[grid-area:1_/_1] ml-[757.5px] mt-[534px] relative size-8" data-name="material-symbols:check-rounded" data-node-id="8306:40220">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
            </div>
            <div className="[grid-area:1_/_1] ml-[757.5px] mt-[606px] relative size-8" data-name="material-symbols:close-rounded" data-node-id="8306:40222">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCloseRounded} />
            </div>
            <div className="[grid-area:1_/_1] ml-[757.5px] mt-[390px] relative size-8" data-name="material-symbols:close-rounded" data-node-id="8306:40224">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCloseRounded} />
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[773.5px] mt-[468px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40226">
              <p className="leading-[20px] whitespace-pre">Advanced</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[1082.5px] mt-[108px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40227">
              <p className="leading-[20px] whitespace-pre">Up to 1000</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[1082px] mt-[180px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40228">
              <p className="leading-[20px] whitespace-pre">Up to 30</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[1082.5px] mt-[252px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40229">
              <p className="leading-[20px] whitespace-pre">Full</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[1082.5px] mt-[324px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40230">
              <p className="leading-[20px] whitespace-pre">Advanced</p>
            </div>
            <div className="[grid-area:1_/_1] ml-[1066.5px] mt-[389px] relative size-8" data-name="material-symbols:check-rounded" data-node-id="8306:40231">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
            </div>
            <div className="[grid-area:1_/_1] ml-[1066.5px] mt-[534px] relative size-8" data-name="material-symbols:check-rounded" data-node-id="8306:40233">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[1082px] mt-[468px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40235">
              <p className="leading-[20px] whitespace-pre">Intelligent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}