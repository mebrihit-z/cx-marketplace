import { useState } from 'react';
import '../App.css'

// Image assets from Figma
const logoIcon = "icons/logo-icon.svg";
const logoText = "icons/logo-text.svg";

type ActiveSection = 'home' | 'gallery' | 'pricing' | 'faqs' | 'training' | 'contact'

interface HeaderProps {
  activeSection: ActiveSection
  setActiveSection: (section: ActiveSection) => void
}

interface AvatarProps {
  property1?: "Adam" | "Chris" | "Joanna" | "Vahida" | "Jamie";
  size?: "Default" | "Sm";
}

function Avatar({ property1 = "Chris", size = "Default" }: AvatarProps) {
  if (property1 === "Chris" && size === "Default") {
    return (
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[200px] size-full">
        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#0a7c00] text-[14px] text-nowrap">
          <p className="leading-[20px] whitespace-pre">MP</p>
        </div>
      </div>
    );
  }
  return null;
}

// Hamburger Menu Icon Component
function HamburgerIcon({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer p-1 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
      onClick={onClick}
      aria-label="Toggle mobile menu"
    >
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </button>
  );
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSectionClick = (section: ActiveSection) => {
    setActiveSection(section);
    closeMobileMenu();
  };

  return (
    <>
      <div className="box-border content-stretch flex items-center justify-center px-6 py-0 relative size-full bg-gray-900 sticky top-0 z-50">
        <div className="basis-0 content-stretch flex grow items-center justify-between max-w-[1440px] min-h-px min-w-px relative shrink-0">
          {/* Left Container - Logo */}
          <div className="h-[88px] relative shrink-0 w-[306px] md:w-[306px] w-auto min-w-0">
            <button 
              className="absolute box-border content-stretch cursor-pointer flex gap-2 items-end justify-start left-0 overflow-visible p-0 top-1/2 translate-y-[-50%]"
              onClick={() => handleSectionClick('home')}
            >
              <div className="bg-[#8cc63f] overflow-clip relative rounded-[94.118px] shrink-0 size-8">
                <div >
                  <img alt="Logo icon" className="block size-full" src={logoIcon} />
                </div>
              </div>
              <div className="h-[24.228px] relative shrink-0 w-[138.445px]">
                <img alt="Marketplace" className="block max-w-none size-full" src={logoText} />
              </div>
            </button>
          </div>

          {/* Primary Navigation - Hidden on mobile */}
          <div className="hidden md:flex box-border content-stretch gap-8 h-[88px] items-center justify-center px-4 py-0 relative shrink-0">
            <button 
              className={`box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0 cursor-pointer hover:bg-gray-800 rounded-md transition-colors ${
                activeSection === 'gallery' ? 'bg-gray-800' : ''
              }`}
              onClick={() => handleSectionClick('gallery')}
            >
              <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                <p className="leading-[20px] whitespace-pre">Gallery</p>
              </div>
            </button>
            <button 
              className={`box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0 cursor-pointer hover:bg-gray-800 rounded-md transition-colors ${
                activeSection === 'pricing' ? 'bg-gray-800' : ''
              }`}
              onClick={() => handleSectionClick('pricing')}
            >
              <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                <p className="leading-[20px] whitespace-pre">Pricing</p>
              </div>
            </button>
            <button 
              className={`box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0 cursor-pointer hover:bg-gray-800 rounded-md transition-colors ${
                activeSection === 'faqs' ? 'bg-gray-800' : ''
              }`}
              onClick={() => handleSectionClick('faqs')}
            >
              <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                <p className="leading-[20px] whitespace-pre">FAQs</p>
              </div>
            </button>
            <button 
              className={`box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0 cursor-pointer hover:bg-gray-800 rounded-md transition-colors ${
                activeSection === 'training' ? 'bg-gray-800' : ''
              }`}
              onClick={() => handleSectionClick('training')}
            >
              <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                <p className="leading-[20px] whitespace-pre">Training</p>
              </div>
            </button>
            <button 
              className={`box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0 cursor-pointer hover:bg-gray-800 rounded-md transition-colors ${
                activeSection === 'contact' ? 'bg-gray-800' : ''
              }`}
              onClick={() => handleSectionClick('contact')}
            >
              <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                <p className="leading-[20px] whitespace-pre">Contact</p>
              </div>
            </button>
          </div>

          {/* Right Container - CTA Button, Avatar, and Hamburger Menu */}
          <div className="content-stretch flex gap-[22px] h-[88px] items-center justify-end relative shrink-0 w-[306px] md:w-[306px] w-auto min-w-0">
            {/* CTA Button - Hidden on mobile, visible on desktop */}
            <button className="!hidden md:!inline-flex btn btn-primary shrink-0 text-sm md:text-base px-4 md:px-6">
              Get a quote
            </button>

            {/* Avatar - Hidden on mobile */}
            <div className="hidden md:flex content-stretch gap-3 items-center justify-start relative shrink-0">
              <div className="bg-[#e7f6e5] content-stretch flex flex-col items-center justify-center relative rounded-[200px] shrink-0 size-10">
                <Avatar property1="Chris" />
              </div>
            </div>
            
            {/* Hamburger Menu - Only visible on mobile */}
            <HamburgerIcon isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMobileMenu}>
          <div className="fixed top-[88px] left-0 right-0 bg-gray-900 shadow-lg z-50" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col">
                <button 
                  className={`px-6 py-4 text-left text-white hover:bg-gray-800 transition-colors ${
                    activeSection === 'gallery' ? 'bg-gray-800' : ''
                  }`}
                  onClick={() => handleSectionClick('gallery')}
                >
                  Gallery
                </button>
                <button 
                  className={`px-6 py-4 text-left text-white hover:bg-gray-800 transition-colors ${
                    activeSection === 'pricing' ? 'bg-gray-800' : ''
                  }`}
                  onClick={() => handleSectionClick('pricing')}
                >
                  Pricing
                </button>
                <button 
                  className={`px-6 py-4 text-left text-white hover:bg-gray-800 transition-colors ${
                    activeSection === 'faqs' ? 'bg-gray-800' : ''
                  }`}
                  onClick={() => handleSectionClick('faqs')}
                >
                  FAQs
                </button>
                <button 
                  className={`px-6 py-4 text-left text-white hover:bg-gray-800 transition-colors ${
                    activeSection === 'training' ? 'bg-gray-800' : ''
                  }`}
                  onClick={() => handleSectionClick('training')}
                >
                  Training
                </button>
                <button 
                  className={`px-6 py-4 text-left text-white hover:bg-gray-800 transition-colors ${
                    activeSection === 'contact' ? 'bg-gray-800' : ''
                  }`}
                  onClick={() => handleSectionClick('contact')}
                >
                  Contact
                </button>
                
                {/* CTA Button - Visible mobile*/}
                <button className="btn btn-primary shrink-0 text-sm md:text-base px-4 md:px-6  w-fit self-start mb-4">
                  Get a quote
                </button>
              </div>
              
              {/* Mobile Avatar */}
              <div className="px-6 py-4 border-t border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="bg-[#e7f6e5] content-stretch flex flex-col items-center justify-center relative rounded-[200px] shrink-0 size-10">
                    <Avatar property1="Chris" />
                  </div>
                  <span className="text-white text-sm">MP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}