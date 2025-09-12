import { useState } from 'react';
import TemplateCard from './TemplateCard';
import { moreTemplates } from '../data/templates';

type ActiveSection = 'home' | 'gallery' | 'pricing' | 'faqs' | 'training' | 'contact' | 'saas';

interface SaaSProps {
  setActiveSection: (section: ActiveSection) => void;
}

// Image assets
const imgScreenshot1 = "images/saas-card-lg.png";
const imgScreenshot2 = "images/saas-card-md.png";
const imgScreenshot3 = "images/saas-card-sm.png";
const imgRadioIcon = "icons/green-circle-icon.svg";
const imgRadioSelected = "icons/green-dot-icon.svg";
const imgArrowOutward = "icons/black-45-arrow.svg";
const imgCheckIcon = "icons/black-check-icon.svg";
const imgBackArrow = "icons/green-left-arrow.svg";

// Skin color schemes
const skinThemes = {
  default: {
    primary: '#4dd58c',
    secondary: '#e7f6e5',
    text: '#0a7c00'
  },
  winterBlues: {
    primary: '#97e3e5',
    secondary: '#e3f7f7',
    text: '#097dbb'
  },
  springGarden: {
    primary: '#f96b96',
    secondary: '#fde8f0',
    text: '#1f7f41'
  },
  summerSunset: {
    primary: '#ff7543',
    secondary: '#fff0eb',
    text: '#ae25c9'
  },
  autumnLeaves: {
    primary: '#ffb701',
    secondary: '#fff8e6',
    text: '#244524'
  },
  custom: {
    primary: '#f9e000',
    secondary: '#fffce6',
    text: '#0033ed'
  }
};

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
    <div className="bg-[#0a7c00] box-border content-stretch flex gap-2.5 items-center justify-center px-6  relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] size-full">
      <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

export default function SaaS({ setActiveSection }: SaaSProps) {
  const [selectedSkin, setSelectedSkin] = useState<keyof typeof skinThemes>('default');
  const currentTheme = skinThemes[selectedSkin];

  const handleSkinChange = (skin: keyof typeof skinThemes) => {
    setSelectedSkin(skin);
  };

  return (
    <div className="box-border content-stretch flex flex-col gap-12 lg:gap-20 items-start justify-start px-0 py-16 lg:py-32 relative size-full">
      {/* Back Button */}
      <div 
        className="absolute box-border content-stretch flex gap-2 items-center justify-start left-4 lg:left-32 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] top-7 lg:top-[84px] cursor-pointer"
        onClick={() => setActiveSection('home')}
      >
        <div className="relative shrink-0 size-5">
          <img alt="" className="block max-w-none size-full" src={imgBackArrow} />
        </div>
        <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#075300] text-[16px] text-nowrap">
          <p className="leading-[20px] whitespace-pre">Back</p>
        </div>
      </div>

      {/* Main Container */}
      <div className="box-border content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-start px-4 lg:px-32 py-0 relative shrink-0 w-full">
        {/* Image Container - Mobile Second, Laptop First */}
        <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full lg:w-[696px] order-2 lg:order-1">
          <div className="content-start flex flex-wrap gap-4 items-start justify-start relative shrink-0 w-full">
            {/* Main Screenshot */}
            <div 
              className="bg-[#4dd58c] box-border content-stretch flex flex-col gap-2.5 items-start justify-start overflow-clip p-[40px] relative rounded-[12px] lg:rounded-[16px] shrink-0 w-full lg:w-[696px]"
              style={{ backgroundColor: currentTheme.primary }}
            >
              <div 
                className="aspect-[1810/1180] bg-center bg-cover bg-no-repeat rounded-[4px] lg:rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full"
                style={{ backgroundImage: `url('${imgScreenshot1}')` }}
              />
            </div>
            
            {/* Secondary Screenshot */}
            <div 
              className="bg-[#4dd58c] box-border content-stretch flex flex-col gap-2.5 items-start justify-center overflow-clip pl-10 pr-0 py-0 relative rounded-[12px] lg:rounded-[16px] shrink-0 size-[376px]"
              style={{ backgroundColor: currentTheme.primary }}
            >
              <div 
                className="aspect-[1762/1448] basis-0 bg-no-repeat bg-size-[100%_100%] bg-top-left grow min-h-px min-w-px shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0"
                style={{ backgroundImage: `url('${imgScreenshot2}')` }}
              />
            </div>
            
            {/* Third Screenshot */}
            <div 
              className="aspect-[304/248] basis-0 bg-[#4dd58c] box-border content-stretch flex flex-col gap-2.5 grow items-center justify-center min-h-px min-w-px overflow-clip pb-10 pt-0 px-0 relative rounded-[12px] lg:rounded-[16px] shrink-0"
              style={{ backgroundColor: currentTheme.primary }}
            >
              <div 
                className="aspect-[1900/1260] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0"
                style={{ backgroundImage: `url('${imgScreenshot3}')` }}
              />
            </div>
          </div>
        </div>

        {/* Text Container - Mobile First, Laptop Second */}
        <div className="content-stretch flex flex-col gap-12 items-start justify-center relative shrink-0 w-full lg:w-[480px] order-1 lg:order-2">
          {/* Title and Description */}
          <div className="content-stretch flex flex-col gap-6 h-[280px] items-start justify-start relative shrink-0 w-full">
            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#22252b] text-[32px] lg:text-[48px] w-full">
              <p className="leading-[40px] lg:leading-[56px]">SaaS 1.0</p>
            </div>
            
            <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
              <div className="font-['Inter:regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#333740] text-[16px] lg:text-[18px]" style={{ width: "min-content" }}>
                <p className="leading-[20px] lg:leading-[24px]">
                  The SaaS template is perfect for tech organizations and product teams. It's sleek, responsive, SEO-friendly, and designed to showcase highly functional solutions with a clean layout, smooth animations, and a conversion-focused approach.
                </p>
              </div>
              
              {/* Tags */}
              <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0">
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#737780] text-[14px] lg:text-[16px] text-nowrap">
                  <p className="leading-[18px] lg:leading-[20px] whitespace-pre">Tags</p>
                </div>
                <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0">
                  <div 
                    className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-3 py-[5px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0"
                    style={{ backgroundColor: currentTheme.secondary }}
                  >
                    <div 
                      className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap"
                      style={{ color: currentTheme.text }}
                    >
                      <p className="leading-[18px] whitespace-pre">Business</p>
                    </div>
                  </div>
                  <div 
                    className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-3 py-[5px] relative rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0"
                    style={{ backgroundColor: currentTheme.secondary }}
                  >
                    <div 
                      className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap"
                      style={{ color: currentTheme.text }}
                    >
                      <p className="leading-[18px] whitespace-pre">Tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skin Customization */}
          <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
            <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[16px] lg:text-[18px] text-nowrap">
              <p className="leading-[20px] lg:leading-[24px] whitespace-pre">Customize skin</p>
            </div>
            
            <div className="bg-white relative rounded-[8px] shrink-0 w-full lg:w-[420px]">
              <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative w-full">
                {/* Default Option */}
                <div 
                  className="relative shrink-0 w-full"
                  style={{ backgroundColor: selectedSkin === 'default' ? skinThemes.default.secondary : 'transparent' }}
                >
                  <div 
                    className="box-border content-stretch flex items-center justify-between overflow-clip px-4 py-3.5 relative w-full cursor-pointer"
                    onClick={() => handleSkinChange('default')}
                  >
                    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <button className="block cursor-pointer overflow-visible relative shrink-0 size-5">
                        <RadioButton selected={selectedSkin === 'default'} />
                      </button>
                      <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0">
                        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                          <div 
                            className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap"
                            style={{ color: selectedSkin === 'default' ? skinThemes.default.text : '#111215' }}
                          >
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
                <div 
                  className="relative shrink-0 w-full"
                  style={{ backgroundColor: selectedSkin === 'winterBlues' ? skinThemes.winterBlues.secondary : 'transparent' }}
                >
                  <div 
                    className="box-border content-stretch flex items-center justify-between overflow-clip px-4 py-3.5 relative w-full cursor-pointer"
                    onClick={() => handleSkinChange('winterBlues')}
                  >
                    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <button className="block cursor-pointer overflow-visible relative shrink-0 size-5">
                        <RadioButton selected={selectedSkin === 'winterBlues'} />
                      </button>
                      <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0">
                        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                          <div 
                            className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap"
                            style={{ color: selectedSkin === 'winterBlues' ? skinThemes.winterBlues.text : '#111215' }}
                          >
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
                <div 
                  className="relative shrink-0 w-full"
                  style={{ backgroundColor: selectedSkin === 'springGarden' ? skinThemes.springGarden.secondary : 'transparent' }}
                >
                  <div 
                    className="box-border content-stretch flex items-center justify-between overflow-clip px-4 py-3.5 relative w-full cursor-pointer"
                    onClick={() => handleSkinChange('springGarden')}
                  >
                    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <button className="block cursor-pointer overflow-visible relative shrink-0 size-5">
                        <RadioButton selected={selectedSkin === 'springGarden'} />
                      </button>
                      <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0">
                        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                          <div 
                            className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap"
                            style={{ color: selectedSkin === 'springGarden' ? skinThemes.springGarden.text : '#111215' }}
                          >
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
                <div 
                  className="relative shrink-0 w-full"
                  style={{ backgroundColor: selectedSkin === 'summerSunset' ? skinThemes.summerSunset.secondary : 'transparent' }}
                >
                  <div 
                    className="box-border content-stretch flex items-center justify-between overflow-clip px-4 py-3.5 relative w-full cursor-pointer"
                    onClick={() => handleSkinChange('summerSunset')}
                  >
                    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <button className="block cursor-pointer overflow-visible relative shrink-0 size-5">
                        <RadioButton selected={selectedSkin === 'summerSunset'} />
                      </button>
                      <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0">
                        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                          <div 
                            className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap"
                            style={{ color: selectedSkin === 'summerSunset' ? skinThemes.summerSunset.text : '#111215' }}
                          >
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
                <div 
                  className="relative shrink-0 w-full"
                  style={{ backgroundColor: selectedSkin === 'autumnLeaves' ? skinThemes.autumnLeaves.secondary : 'transparent' }}
                >
                  <div 
                    className="box-border content-stretch flex items-center justify-between overflow-clip px-4 py-3.5 relative w-full cursor-pointer"
                    onClick={() => handleSkinChange('autumnLeaves')}
                  >
                    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <button className="block cursor-pointer overflow-visible relative shrink-0 size-5">
                        <RadioButton selected={selectedSkin === 'autumnLeaves'} />
                      </button>
                      <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0">
                        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                          <div 
                            className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap"
                            style={{ color: selectedSkin === 'autumnLeaves' ? skinThemes.autumnLeaves.text : '#333740' }}
                          >
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
                <div 
                  className="relative shrink-0 w-full"
                  style={{ backgroundColor: selectedSkin === 'custom' ? skinThemes.custom.secondary : 'transparent' }}
                >
                  <div 
                    className="box-border content-stretch flex items-center justify-between overflow-clip px-4 py-3.5 relative w-full cursor-pointer"
                    onClick={() => handleSkinChange('custom')}
                  >
                    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <button className="block cursor-pointer overflow-visible relative shrink-0 size-5">
                        <RadioButton selected={selectedSkin === 'custom'} />
                      </button>
                      <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0">
                        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
                          <div 
                            className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap"
                            style={{ color: selectedSkin === 'custom' ? skinThemes.custom.text : '#333740' }}
                          >
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
            <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0 pointer-events-none" />
            <div className="bg-[#0a7c00] box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0">
              <Button text="Get a quote" />
            </div>
            <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start px-6  relative rounded-[8px] shrink-0">
              <Button text="Preview" variant="secondary" showArrow={true} />
            </div>
          </div>
        </div>

      </div>

      {/* Features Section */}
      <div className="box-border content-stretch flex items-center justify-start overflow-clip px-4 lg:px-32 py-0 relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-4 lg:gap-6 grow items-center justify-center min-h-px min-w-px relative shrink-0">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#22252b] text-[20px] lg:text-[32px] tracking-[-1px] w-full">
            <p className="leading-[24px] lg:leading-[40px]">Features included</p>
          </div>
          
          {/* Mobile: Single column, Desktop: Grid */}
          <div className="content-stretch flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-6 lg:h-[72px] relative shrink-0 w-full">
            {/* Row 1 */}
            <div className="lg:[grid-area:1_/_1] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-full lg:w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[16px] lg:text-[18px]">
                <p className="leading-[20px] lg:leading-[24px]">Product overview</p>
              </div>
            </div>
            
            <div className="lg:[grid-area:1_/_2] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-full lg:w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[16px] lg:text-[18px]">
                <p className="leading-[20px] lg:leading-[24px]">Feature(s) highlight</p>
              </div>
            </div>
            
            <div className="lg:[grid-area:1_/_3] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-full lg:w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[16px] lg:text-[18px]">
                <p className="leading-[20px] lg:leading-[24px]">Case studies</p>
              </div>
            </div>
            
            <div className="lg:[grid-area:1_/_4] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-full lg:w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[16px] lg:text-[18px]">
                <p className="leading-[20px] lg:leading-[24px]">Testimonials</p>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="lg:[grid-area:2_/_1] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-full lg:w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[16px] lg:text-[18px]">
                <p className="leading-[20px] lg:leading-[24px]">Pricing table & comparisons</p>
              </div>
            </div>
            
            <div className="lg:[grid-area:2_/_2] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-full lg:w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[16px] lg:text-[18px]">
                <p className="leading-[20px] lg:leading-[24px]">Log in/registration form</p>
              </div>
            </div>
            
            <div className="lg:[grid-area:2_/_3] content-stretch flex gap-2 items-center justify-start relative self-start shrink-0 w-full lg:w-[296px]">
              <div className="relative shrink-0 size-6">
                <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
              </div>
              <div className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[16px] lg:text-[18px]">
                <p className="leading-[20px] lg:leading-[24px]">FAQ & help center</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Templates Section */}
      <div className="box-border content-stretch flex flex-col gap-12 lg:gap-20 items-start justify-start px-0 py-16 lg:py-32 relative size-full">
        {/* Header */}
        <div className="box-border content-stretch flex items-end justify-start px-4 lg:px-32 py-0 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full lg:w-[800px]">
            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#22252b] text-[32px] lg:text-[48px] w-full">
              <p className="leading-[40px] lg:leading-[56px]">More templates like this</p>
            </div>
          </div>
        </div>
        
        {/* Grid - Mobile: Single column, Desktop: Multi-column */}
        <div className="box-border content-stretch flex flex-col lg:flex-row gap-3 lg:gap-4 items-start justify-start px-4 lg:px-32 py-0 relative shrink-0 w-full">
          {moreTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              backgroundImage={template.backgroundImage}
              backgroundColor={template.backgroundColor}
              gradientTo={template.gradientTo}
              aspectRatio={template.aspectRatio}
              onClick={() => {
                // Handle template click - you can add navigation logic here
                console.log(`Clicked on ${template.title}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
