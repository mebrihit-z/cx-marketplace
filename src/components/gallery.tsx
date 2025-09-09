import '../App.css'
import CTASection from './cta-section';

const imgLineRoundedSearch = "http://localhost:3845/assets/7953949d658286013aeb2389729b8a7196e8bad5.svg";
const img = "http://localhost:3845/assets/d175eae51f6aa8e5877053d30fe273fc613c8bdb.png";
const img2 = "http://localhost:3845/assets/108731de4ec8ba9c535f9681d049a24dafeabd30.png";
const img3 = "http://localhost:3845/assets/27e1b59357b9d99f7b0cdf356c120915c4ec4815.png";
const img4 = "http://localhost:3845/assets/9fa9289fd8d14fa7dcd7df11c3061cf36bf64663.png";
const img5 = "http://localhost:3845/assets/19143bd939c2395febcaaf44e30b8c09b9ba9856.png";
const img6 = "http://localhost:3845/assets/8bdc6cc66d33e8a3c198d296d365b23c58ab1828.png";
const imgMaterialSymbolsKeyboardArrowDownRounded = "http://localhost:3845/assets/eacea545fb9d391dc079785c3412b3ff45e428a3.svg";
const img1 = "http://localhost:3845/assets/35f56b629603a8d763e79d4485e01d5ecb3a9978.svg";

interface ButtonProps {
  text?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  state?: "Default" | "Hover" | "Pressed" | "Disabled";
  buttonType?: "Default" | "Tertiary Right Icon" | "Tertiary" | "Primary Right Icon" | "Primary Left Icon" | "Secondary" | "Secondary Left Icon" | "Secondary Right Icon" | "Button Link" | "Button Link Right Icon" | "Button Link Left Icon" | "Tertiary Left Icon";
}

function Button({ text = "Button", leftIcon = true, rightIcon = true, state = "Default", buttonType = "Default" }: ButtonProps) {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] size-full" data-name="State=Default, Button Type=Default" data-node-id="3781:18356">
      <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="3490:20338">
        <p className="leading-[20px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start pb-16 pt-32 px-0 relative size-full" data-name="Section Container" data-node-id="8084:56888">
      <div className="box-border content-stretch flex items-start justify-between px-32 py-0 relative shrink-0 w-full" data-name="Header" data-node-id="8084:57041">
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[480px]" data-name="Title Container" data-node-id="8084:57042">
          <div className="font-['Inter:semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#22252b] text-[60px] w-full" data-node-id="8084:57043">
            <p className="leading-[72px]">Gallery</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-12 items-start justify-center relative shrink-0 w-[640px]" data-name="Subtitle Container" data-node-id="8084:57044">
          <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[18px] w-full" data-node-id="8084:57045">
            <p className="leading-[24px]">Explore a diverse collection of sleek and versatile website templates designed to elevate your online presence effortlessly.</p>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-node-id="8249:58500">
            <div className="basis-0 bg-white box-border content-stretch flex grow h-10 items-center justify-start min-h-[39px] min-w-px pl-3 pr-1.5 py-1.5 relative rounded-[8px] shrink-0" data-name="Input Text" data-node-id="8088:57618">
              <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Placeholder Wrapper" data-node-id="8088:57619">
                <div className="relative shrink-0 size-3.5" data-name="Line Rounded/Search" data-node-id="8088:57620">
                  <img alt="line rounded search" className="block max-w-none size-full" src={imgLineRoundedSearch} />
                </div>
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#737780] text-[14px] text-nowrap" data-node-id="8088:57622">
                  <p className="leading-[18px] whitespace-pre">Search for templates...</p>
                </div>
              </div>
            </div>
            <div className="bg-[#0a7c00] box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0" data-name="Button" data-node-id="8249:58498">
              <Button text="Search" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Filter and Sort Section */}
      <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start px-0 py-16 relative size-full" data-name="Section Container" data-node-id="8084:57047">
        <div className="box-border content-start flex flex-wrap items-start justify-between px-32 py-0 relative shrink-0 w-full" data-name="Actions" data-node-id="8141:20610">
          <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-[960px]" data-name="Selections" data-node-id="8141:20611">
            <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[18px] text-nowrap" data-node-id="8141:20612">
              <p className="leading-[24px] whitespace-pre">Filter by features</p>
            </div>
            <div className="content-end cursor-pointer flex flex-wrap gap-2 items-end justify-start relative shrink-0 w-full" data-name="Container" data-node-id="8141:20613">
              <button className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center overflow-visible px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" data-node-id="8194:34427">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap" id="node-I8194_34427-4138_11613">
                  <p className="leading-[20px] whitespace-pre">Advanced search</p>
                </div>
              </button>
              <button className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center overflow-visible px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" data-node-id="8141:20620">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap" id="node-I8141_20620-4138_11613">
                  <p className="leading-[20px] whitespace-pre">Blog integration</p>
                </div>
              </button>
              <button className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center overflow-visible px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" data-node-id="8260:62164">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap" id="node-I8260_62164-4138_11613">
                  <p className="leading-[20px] whitespace-pre">Calendar/booking tool</p>
                </div>
              </button>
              <button className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center overflow-visible px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" data-node-id="8141:20615">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap" id="node-I8141_20615-4138_11613">
                  <p className="leading-[20px] whitespace-pre">Case studies</p>
                </div>
              </button>
              <button className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center overflow-visible px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" data-node-id="8260:62313">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap" id="node-I8260_62313-4138_11613">
                  <p className="leading-[20px] whitespace-pre">Image gallery</p>
                </div>
              </button>
              <button className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center overflow-visible px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" data-node-id="8141:20619">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap" id="node-I8141_20619-4138_11613">
                  <p className="leading-[20px] whitespace-pre">Log in/registration</p>
                </div>
              </button>
              <button className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center overflow-visible px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" data-node-id="8141:20623">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap" id="node-I8141_20623-4138_11613">
                  <p className="leading-[20px] whitespace-pre">Newsletter signup</p>
                </div>
              </button>
              <button className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center overflow-visible px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" data-node-id="8141:20618">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap" id="node-I8141_20618-4138_11613">
                  <p className="leading-[20px] whitespace-pre">Pricing table</p>
                </div>
              </button>
              <button className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center overflow-visible px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" data-node-id="8141:20616">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap" id="node-I8141_20616-4138_11613">
                  <p className="leading-[20px] whitespace-pre">Shopping cart</p>
                </div>
              </button>
              <button className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center overflow-visible px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" data-node-id="8141:20622">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap" id="node-I8141_20622-4138_11613">
                  <p className="leading-[20px] whitespace-pre">Social media feed</p>
                </div>
              </button>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0" data-name="Input with label" data-node-id="8141:20625">
            <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[18px] text-nowrap" data-node-id="8141:20626">
              <p className="leading-[24px] whitespace-pre">Sort by</p>
            </div>
            <button className="bg-white box-border content-stretch cursor-pointer flex gap-4 items-center justify-start overflow-visible px-3.5 py-2.5 relative rounded-[8px] shrink-0" data-name="Input" data-node-id="8141:20627">
              <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-[100px]" data-name="Content" data-node-id="8141:20628">
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[14px] text-nowrap" data-node-id="8141:20629">
                  <p className="leading-[18px] whitespace-pre">Most Popular</p>
                </div>
              </div>
              <div className="relative shrink-0 size-5" data-name="material-symbols:keyboard-arrow-down-rounded" data-node-id="8219:81226">
                <img alt="material symbols keyboard arrow down rounded" className="block max-w-none size-full" src={imgMaterialSymbolsKeyboardArrowDownRounded} />
              </div>
            </button>
          </div>
        </div>
        
        {/* Template Grid */}
        <div className="box-border gap-4 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[668.8px] px-32 py-0 relative shrink-0 w-full" data-name="Grid" data-node-id="8084:57052">
          <div className="[grid-area:1_/_2] aspect-[500/400] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8084:57053">
            <div className="absolute bg-[#6d83d9] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#131d45] top-0" data-name="Image Container" id="node-I8084_57053-8645_39400">
              <div className="aspect-[1842/1198] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#131d45]" data-name="Screenshot 2025-08-24 at 9.37.58 PM 1" id="node-I8084_57053-8674_34586" style={{ backgroundImage: `url('${img}')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8084_57053-8645_39407">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white" id="node-I8084_57053-8645_39408">
                <p className="leading-[28px] whitespace-pre">E-commerce 1.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start p-[10px] relative rounded-[8px] shrink-0" data-name="Button" id="node-I8084_57053-8645_39409">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" id="node-I8084_57053-8645_39409-8219_81567">
                  <img alt="arrow forward rounded" className="block max-w-none size-full" src={img1} />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:1_/_3] aspect-[500/400] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8084:57055">
            <div className="absolute bg-[#bd550f] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#421e06] top-0" data-name="Image Container" id="node-I8084_57055-8645_39411">
              <div className="aspect-[1726/1124] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#421e06]" data-name="Screenshot 2025-08-24 at 9.11.56 PM 1" id="node-I8084_57055-8674_17389" style={{ backgroundImage: `url('${img2}')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8084_57055-8645_39416">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white" id="node-I8084_57055-8645_39417">
                <p className="leading-[28px] whitespace-pre">Startup 1.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start p-[10px] relative rounded-[8px] shrink-0" data-name="Button" id="node-I8084_57055-8645_39418">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" id="node-I8084_57055-8645_39418-8219_81567">
                  <img alt="arrow forward rounded" className="block max-w-none size-full" src={img1} />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:2_/_1] aspect-[500/400] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8263:73712">
            <div className="absolute bg-[#e9d101] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#4d4000] top-0" data-name="Image Container" id="node-I8263_73712-8645_40947">
              <div className="aspect-[437.565/285.348] basis-0 bg-[position:0%_0%,_100%_100%] bg-gradient-to-b bg-size-[auto,100.23%_100.23%] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#4d4000]" data-name="Screenshot 2025-08-24 at 11.58.42 PM 1" id="node-I8263_73712-8701_5416" style={{ backgroundImage: `url('${img3}')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8263_73712-8645_40954">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-white w-48" id="node-I8263_73712-8645_40955">
                <p className="leading-[28px]">Portfolio 1.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start p-[10px] relative rounded-[8px] shrink-0" data-name="Button" id="node-I8263_73712-8645_40956">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" id="node-I8263_73712-8645_40956-8219_81567">
                  <img alt="arrow forward rounded" className="block max-w-none size-full" src={img1} />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:2_/_2] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8650:41119">
            <div className="absolute bg-[#8b0b68] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#2c0321] top-0" data-name="Image Container" id="node-I8650_41119-8645_39451">
              <div className="aspect-[1756/1144] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#2c0321]" data-name="Screenshot 2025-08-24 at 10.35.46 PM 1" id="node-I8650_41119-8684_17874" style={{ backgroundImage: `url('${img4}')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8650_41119-8645_39458">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white" id="node-I8650_41119-8645_39459">
                <p className="leading-[28px] whitespace-pre">Event 1.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start p-[10px] relative rounded-[8px] shrink-0" data-name="Button" id="node-I8650_41119-8645_39460">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" id="node-I8650_41119-8645_39460-8219_81567">
                  <img alt="arrow forward rounded" className="block max-w-none size-full" src={img1} />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:2_/_3] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8650:41130">
            <div className="absolute bg-[#0f1aaa] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#030529] top-0" data-name="Image Container" id="node-I8650_41130-8645_39462">
              <div className="aspect-[1740/1132] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-[#030529]" data-name="Screenshot 2025-08-24 at 11.02.40 PM 1" id="node-I8650_41130-8689_18843" style={{ backgroundImage: `url('${img5}')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8650_41130-8645_39469">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white" id="node-I8650_41130-8645_39470">
                <p className="leading-[28px] whitespace-pre">Agency 1.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start p-[10px] relative rounded-[8px] shrink-0" data-name="Button" id="node-I8650_41130-8645_39471">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" id="node-I8650_41130-8645_39471-8219_81567">
                  <img alt="arrow forward rounded" className="block max-w-none size-full" src={img1} />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:1_/_1] aspect-[500/400] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8263:73698">
            <div className="absolute bg-[#4dd58c] box-border content-stretch flex flex-col from-[#00000000] gap-2.5 h-[326px] items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 to-85% to-[#04261e] top-0 w-[427px]" data-name="Image Container" id="node-I8263_73698-8645_39378">
              <div className="aspect-[1810/1180] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#04261e]" data-name="Screenshot 2025-08-24 at 7.40.15 PM 1" id="node-I8263_73698-8671_18822" style={{ backgroundImage: `url('${img6}')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8263_73698-8645_39385">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white" id="node-I8263_73698-8645_39386">
                <p className="leading-[28px] whitespace-pre">SaaS 1.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start p-[10px] relative rounded-[8px] shrink-0" data-name="Button" id="node-I8263_73698-8645_39387">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" id="node-I8263_73698-8645_39387-8219_81567">
                  <img alt="arrow forward rounded" className="block max-w-none size-full" src={img1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      
      {/* Additional Gallery Section */}
      <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start pb-32 pt-16 px-0 relative size-full" data-name="Section Container" data-node-id="8200:41786">
        <div className="box-border gap-4 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[1011.2px] px-32 py-0 relative shrink-0 w-full" data-name="Grid" data-node-id="8200:41807">
          <div className="[grid-area:1_/_1] aspect-[500/400] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8200:41831">
            <div className="absolute bg-[#5a581c] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#272413] top-0" data-name="Image Container" id="node-I8200_41831-8645_40807">
              <div className="aspect-[1666/1084] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#272413]" data-name="Screenshot 2025-08-24 at 11.39.54 PM 1" id="node-I8200_41831-8696_19294" style={{ backgroundImage: `url('http://localhost:3845/assets/b2ef186fd623de1389a80b6618f32de97e95306a.png')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8200_41831-8645_40814">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white" id="node-I8200_41831-8645_40815">
                <p className="leading-[28px] whitespace-pre">E-commerce 2.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" id="node-I8200_41831-8645_40816">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="4138:11633">
                  <p className="leading-[20px] whitespace-pre">View</p>
                </div>
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" data-node-id="8219:81567">
                  <img alt className="block max-w-none size-full" src="http://localhost:3845/assets/35f56b629603a8d763e79d4485e01d5ecb3a9978.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:2_/_1] aspect-[500/400] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8200:41860">
            <div className="absolute bg-[#42ab18] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#0f2b04] top-0" data-name="Image Container" id="node-I8200_41860-8645_40863">
              <div className="aspect-[1666/1084] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#0f2b04]" data-name="Screenshot 2025-08-25 at 1.03.26 AM 1" id="node-I8200_41860-8709_4293" style={{ backgroundImage: `url('http://localhost:3845/assets/615d974f64d41350899523a937a01de725e28ef1.png')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8200_41860-8645_40870">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-white w-48" id="node-I8200_41860-8645_40871">
                <p className="leading-[28px]">Startup 2.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" id="node-I8200_41860-8645_40872">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="4138:11633">
                  <p className="leading-[20px] whitespace-pre">View</p>
                </div>
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" data-node-id="8219:81567">
                  <img alt className="block max-w-none size-full" src="http://localhost:3845/assets/35f56b629603a8d763e79d4485e01d5ecb3a9978.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:2_/_2] aspect-[500/400] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8200:41861">
            <div className="absolute bg-[#236e84] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#001619] top-0" data-name="Image Container" id="node-I8200_41861-8645_40891">
              <div className="aspect-[1860/1212] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#001619]" data-name="Screenshot 2025-08-25 at 1.08.35 AM 1" id="node-I8200_41861-8709_4317" style={{ backgroundImage: `url('http://localhost:3845/assets/9987b1fe5c9ccc92afba601e7a862cc95dae3f0c.png')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8200_41861-8645_40898">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-white w-48" id="node-I8200_41861-8645_40899">
                <p className="leading-[28px]">SaaS 2.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start p-[10px] relative rounded-[8px] shrink-0" data-name="Button" id="node-I8200_41861-8645_40900">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" id="node-I8200_41861-8645_40900-8219_81567">
                  <img alt className="block max-w-none size-full" src="http://localhost:3845/assets/35f56b629603a8d763e79d4485e01d5ecb3a9978.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:1_/_2] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8650:41163">
            <div className="absolute bg-[#7c33e2] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#120028] top-0" data-name="Image Container" id="node-I8650_41163-8645_40835">
              <div className="aspect-[1818/1184] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#120028]" data-name="Screenshot 2025-08-24 at 11.22.41 PM 1" id="node-I8650_41163-8692_19053" style={{ backgroundImage: `url('http://localhost:3845/assets/5a1aa44d77bd07dc80070009be91cec5bc0b4421.png')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8650_41163-8645_40842">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white" id="node-I8650_41163-8645_40843">
                <p className="leading-[28px] whitespace-pre">Portfolio 2.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" id="node-I8650_41163-8645_40844">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="4138:11633">
                  <p className="leading-[20px] whitespace-pre">View</p>
                </div>
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" data-node-id="8219:81567">
                  <img alt className="block max-w-none size-full" src="http://localhost:3845/assets/35f56b629603a8d763e79d4485e01d5ecb3a9978.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:2_/_3] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8650:41152">
            <div className="absolute bg-[#6e0d0d] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#2c0404] top-0" data-name="Image Container" id="node-I8650_41152-8645_40919">
              <div className="aspect-[1900/1238] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#2c0404d9]" data-name="Screenshot 2025-08-25 at 1.15.19 AM 1" id="node-I8650_41152-8709_17594" style={{ backgroundImage: `url('http://localhost:3845/assets/9e4a123b8e888fe7ea156c5fc2a391b963ca299b.png')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8650_41152-8645_40926">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-white w-48" id="node-I8650_41152-8645_40927">
                <p className="leading-[28px]">Business 1.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" id="node-I8650_41152-8645_40928">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="4138:11633">
                  <p className="leading-[20px] whitespace-pre">View</p>
                </div>
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" data-node-id="8219:81567">
                  <img alt className="block max-w-none size-full" src="http://localhost:3845/assets/35f56b629603a8d763e79d4485e01d5ecb3a9978.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:1_/_3] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8650:41174">
            <div className="absolute bg-[#8fa2a3] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#1f2829] top-0" data-name="Image Container" id="node-I8650_41174-8645_40975">
              <div className="aspect-[1842/1200] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#1f2829]" data-name="Screenshot 2025-08-25 at 12.23.13 AM 1" id="node-I8650_41174-8701_5361" style={{ backgroundImage: `url('http://localhost:3845/assets/314c7e8d0a9db376aa0985803ebd94319a8fba31.png')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8650_41174-8645_40982">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-white w-48" id="node-I8650_41174-8645_40983">
                <p className="leading-[28px]">News 1.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" id="node-I8650_41174-8645_40984">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="4138:11633">
                  <p className="leading-[20px] whitespace-pre">View</p>
                </div>
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" data-node-id="8219:81567">
                  <img alt className="block max-w-none size-full" src="http://localhost:3845/assets/35f56b629603a8d763e79d4485e01d5ecb3a9978.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:3_/_1] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8650:41141">
            <div className="absolute bg-[#c03c1b] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#4c1d11] top-0" data-name="Image Container" id="node-I8650_41141-8645_39440">
              <div className="aspect-[1916/1248] basis-0 bg-[position:0%_0%,_50%_50%] bg-gradient-to-b bg-size-[auto,cover] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#4c1d11]" data-name="Screenshot 2025-08-24 at 10.10.11 PM 1" id="node-I8650_41141-8682_4393" style={{ backgroundImage: `url('http://localhost:3845/assets/31d8e3f6049063e6376fcb9b6388caf64698ce77.png')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8650_41141-8645_39447">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white" id="node-I8650_41141-8645_39448">
                <p className="leading-[28px] whitespace-pre">Blog 1.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" id="node-I8650_41141-8645_39449">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="4138:11633">
                  <p className="leading-[20px] whitespace-pre">View</p>
                </div>
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" data-node-id="8219:81567">
                  <img alt className="block max-w-none size-full" src="http://localhost:3845/assets/35f56b629603a8d763e79d4485e01d5ecb3a9978.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="[grid-area:3_/_2] box-border content-stretch flex flex-col gap-3 items-start justify-end overflow-clip p-[32px] relative rounded-[16px] shrink-0" data-name="Card" data-node-id="8650:41185">
            <div className="absolute bg-[#27274e] bottom-0 box-border content-stretch flex flex-col from-[#00000000] gap-2.5 items-start justify-start left-0 overflow-clip pb-0 pl-10 pr-0 pt-10 right-[-4.8%] to-85% to-[#0f0f1f] top-0" data-name="Image Container" id="node-I8650_41185-8645_41003">
              <div className="aspect-[438.214/285.349] basis-0 bg-[position:0%_0%,_100%_100%] bg-gradient-to-b bg-size-[auto,100.23%_100.23%] from-[#00000000] grow min-h-px min-w-px rounded-tl-[4px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 to-85% to-[#0f0f1f]" data-name="Screenshot 2025-08-24 at 11.00.04 PM 1" id="node-I8650_41185-8701_5441" style={{ backgroundImage: `url('http://localhost:3845/assets/f3380ba25fdf81ac603cf59085464a932a1e520c.png')` }} />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" id="node-I8650_41185-8645_41010">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white" id="node-I8650_41185-8645_41011">
                <p className="leading-[28px] whitespace-pre">Agency 2.0</p>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-start px-6 py-2.5 relative rounded-[8px] shrink-0" data-name="Button" id="node-I8650_41185-8645_41012">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="4138:11633">
                  <p className="leading-[20px] whitespace-pre">View</p>
                </div>
                <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" data-node-id="8219:81567">
                  <img alt className="block max-w-none size-full" src="http://localhost:3845/assets/35f56b629603a8d763e79d4485e01d5ecb3a9978.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}