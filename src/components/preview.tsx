
import React from 'react';
import PreviewHero from './preview-hero.tsx'; 
import GrowthSolutions from './growth-solutions';
import IntegrationsSection from './integrations-section';
import LeadOrganization from './lead-organization';
import Testimonials from './testimonials';
import BlogSections from './blog-section'; 
// Image assets from Figma
const imgXIcon = "icons/x-icon.svg";
const imgVector6 = "icons/preview-log.svg";
const imgVuesaxLinearArrowRight = "icons/black-right-arrow.svg";

interface PreviewProps {
  isOpen: boolean;
  onClose: () => void;
  template: {
    id: string;
    src: string;
    alt: string;
    title: string;
    category: string;
  };
}

export default function Preview({ isOpen, onClose, template }: PreviewProps) {
  if (!isOpen) return null;
  
  // Note: template parameter is available for future customization
  // Currently using static Figma design content
  console.log('Preview opened for template:', template.title);
  
  // Handle escape key to close modal
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  
  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto overflow-x-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* Modal Overlay with Backdrop Blur */}
      <div 
        className="inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Content Container */}
      <div className="bg-[#041117] w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
        {/* Modal Header and Close Button*/}
        <div className='flex items-center justify-between p-4'>
          {/* Modal Header */}
          <div className="z-10 bg-gradient-to-b from-black/20 to-transparent p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white text-xl font-semibold">{template.title} Preview</h2>
                <p className="text-gray-300 text-sm">Live preview of your template</p>
              </div>
            </div>
          </div>
           {/* Close Button */}
          <button
            onClick={onClose}
            className="z-20 bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
            aria-label="Close preview"
          >
            <img alt="Close" className="w-5 h-5 group-hover:scale-110 transition-transform" src={imgXIcon} />
          </button>
        </div>
        {/* Header menu*/}
        <div className="fixed content-stretch flex items-center justify-between left-1/2 top-35 translate-x-[-50%] w-[1160px]" data-name="Header" data-node-id="8671:26051">
            <div className="content-stretch flex gap-16 items-center justify-start relative shrink-0" data-name="Left" data-node-id="8671:26052">
              <div className="h-[33.455px] relative shrink-0 w-[92px]" data-name="Original Logo" data-node-id="8671:26053">
                <div className="absolute bottom-0 left-0 right-[0.91%] top-0" data-name="Original Logo" data-node-id="8671:26054">
                  <div className="absolute bottom-[-1.63%] font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[36.7%] not-italic right-[-12.38%] text-[26.764px] text-nowrap text-white top-0 tracking-[-0.8364px]" data-node-id="8671:26055">
                    <p className="leading-[1.25] whitespace-pre">Stain.</p>
                  </div>
                  <div className="absolute bottom-[12.07%] left-0 right-[70.64%] top-[8.12%]" data-node-id="8671:26056">
                    <div className="absolute h-[26.701px] left-0 top-0 w-[26.764px]" data-node-id="8671:26057">
                      <div className="absolute inset-0" data-name="Vector" data-node-id="8671:26058">
                        <img alt="" className="block max-w-none size-full" src={imgVector6} />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="menu" data-node-id="8671:26064">
                <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26065">
                  <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#7be385] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26066" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.7] whitespace-pre">Home</p>
                  </div>
                </div>
                <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26067">
                  <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26069" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.7] whitespace-pre">About</p>
                  </div>
                </div>
                <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26070">
                  <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26072" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.7] whitespace-pre">Integration</p>
                  </div>
                </div>
                <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26073">
                  <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26075" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.7] whitespace-pre">Pricing</p>
                  </div>
                </div>
                <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26076">
                  <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26078" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.7] whitespace-pre">Contact</p>
                  </div>
                </div>
                <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26079">
                  <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26081" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.7] whitespace-pre">Blog</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-8 items-center justify-center relative shrink-0" data-name="button" data-node-id="8671:26082">
              <div className="box-border content-stretch flex gap-3 items-center justify-center px-0 py-0.5 relative shrink-0" data-name="Button" data-node-id="8671:26083">
                <div className="flex flex-col font-['Roboto:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f2fcf3] text-[16px] text-center text-nowrap" data-node-id="8671:26093" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[1.5] whitespace-pre">Sign In</p>
                </div>
              </div>
              <div className="bg-[#7be385] box-border content-stretch flex gap-3 items-center justify-center px-6 py-4 relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Button" data-node-id="8671:26103" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 187 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.9329 -4.8454 30.996 7.8709 148.74 46.309)\\\'><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0.4)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
                <div className="flex flex-col font-['Roboto:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#041117] text-[16px] text-center text-nowrap" data-node-id="8671:26113" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[1.5] whitespace-pre">Start Free Trial</p>
                </div>
                <div className="relative shrink-0 size-5" data-name="Icons" data-node-id="8671:26114">
                  <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right" data-node-id="8671:26115">
                    <img alt="" className="block max-w-none size-full" src={imgVuesaxLinearArrowRight} />
                  </div>
                </div>
              </div>
            </div>
        </div>
          
          <div className="w-full h-full  overflow-auto">
          {/* Hero Section */}
          <PreviewHero />
          <GrowthSolutions />
          <LeadOrganization />
          <IntegrationsSection />
          <Testimonials />
          <BlogSections />
        </div>
        
      </div>
    </div>
  );
}
