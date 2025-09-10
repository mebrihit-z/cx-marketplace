import '../App.css'
import CTASection from './cta-section';
import GalleryGrid from './GalleryGrid';
import { templateData, additionalTemplates } from '../data/templates';
import type { Template } from '../data/templates';

const imgLineRoundedSearch = "icons/search-icon.svg";
const imgMaterialSymbolsKeyboardArrowDownRounded = "icons/keyboard-arrow-down-icon.svg";

interface ButtonProps {
  text?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  state?: "Default" | "Hover" | "Pressed" | "Disabled";
  buttonType?: "Default" | "Tertiary Right Icon" | "Tertiary" | "Primary Right Icon" | "Primary Left Icon" | "Secondary" | "Secondary Left Icon" | "Secondary Right Icon" | "Button Link" | "Button Link Right Icon" | "Button Link Left Icon" | "Tertiary Left Icon";
}

function Button({ text = "Button" }: ButtonProps) {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] size-full" data-name="State=Default, Button Type=Default" data-node-id="3781:18356">
      <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="3490:20338">
        <p className="leading-[20px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const handleCardClick = (template: Template) => {
    console.log('Template clicked:', template);
    // You can add navigation, modal opening, or other actions here
  };

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
            <div className="bg-[#0a7c00] box-border content-stretch flex gap-2.5 items-center justify-center px-6 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0" data-name="Button" data-node-id="8249:58498">
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
        <GalleryGrid 
          templates={templateData} 
          onCardClick={handleCardClick}
        />
      </div>
      <CTASection />
      
      {/* Additional Gallery Section */}
      <GalleryGrid 
        templates={additionalTemplates} 
        onCardClick={handleCardClick}
        className="grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[1000px]"
      />
    </div>
  );
}