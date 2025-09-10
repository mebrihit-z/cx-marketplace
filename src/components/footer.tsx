export default function Footer() {
  const logoIcon = "icons/logo-icon.svg";
  return (
    <div 
      className="box-border content-start flex flex-wrap gap-0 items-start justify-center px-4 sm:px-6 py-8 sm:py-10 relative size-full"
      style={{ 
        backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 358.23\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(47.521 27.794 -27.794 47.521 634.5 0.000010398)\\'><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(1,7,8,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(2,13,16,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(0,20,12,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
      }}
    >
      <div className="content-stretch flex flex-col gap-6 sm:gap-10 items-center justify-start max-w-[1440px] relative shrink-0 w-full px-4 sm:px-0">
        <div className="box-border content-stretch flex flex-col gap-4 sm:gap-6 items-center justify-center px-4 sm:px-20 lg:px-80 py-0 relative shrink-0 w-full">
          {/* Logo Section */}
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-4 items-center justify-start ml-0 mt-0 relative">
              {/* Logo Icon */}
              <div className="bg-[#8cc63f] overflow-clip relative rounded-[94.118px] shrink-0 size-6 sm:size-8">
                <div>
                  <img alt="Logo icon" className="block size-full" src={logoIcon} />
                </div>
              </div>
              {/* Marketplace Text */}
              <div className="h-[20px] sm:h-[24.228px] relative shrink-0 w-[120px] sm:w-[138.445px] flex items-center justify-center">
                <span className="text-white text-base sm:text-lg font-medium">Marketplace</span>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="box-border content-stretch flex flex-col gap-2.5 min-h-[46px] items-center justify-center px-2.5 py-0 relative shrink-0 w-full">
            <div className="content-stretch flex flex-wrap gap-4 sm:gap-8 items-center justify-center relative shrink-0 w-full">
              <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0">
                <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                  <p className="leading-[20px] whitespace-pre">Home</p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0">
                <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                  <p className="leading-[20px] whitespace-pre">Gallery</p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0">
                <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                  <p className="leading-[20px] whitespace-pre">Pricing</p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0">
                <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                  <p className="leading-[20px] whitespace-pre">FAQs</p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0">
                <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                  <p className="leading-[20px] whitespace-pre">Training</p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0">
                <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                  <p className="leading-[20px] whitespace-pre">Contact Us</p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0">
                <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                  <p className="leading-[20px] whitespace-pre">My Account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-0 max-w-[1440px] relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <div className="block max-w-none size-full bg-gray-600 h-px"></div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="content-stretch flex flex-col sm:flex-row gap-4 sm:gap-0 min-h-6 items-center justify-between relative shrink-0 w-full">
          {/* Copyright */}
          <div className="h-[18px] relative shrink-0 w-full sm:w-[400px] flex justify-center sm:justify-start">
            <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic text-[#a1a4aa] text-[14px] text-center sm:text-left">
              <p className="leading-[18px]">Copyright © 2025 CX Studios. All right reserved.</p>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="h-6 relative shrink-0 w-full sm:w-[400px] flex justify-center">
            <div className="content-stretch flex gap-1 items-center justify-center">
              <div className="overflow-clip relative shrink-0 size-6">
                <div className="absolute bg-[rgba(255,255,255,0)] inset-0" />
                <div className="absolute inset-[15%_14.99%_15%_15.01%]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="block max-w-none size-full text-white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-6">
                <div className="absolute bg-[rgba(255,255,255,0)] left-0 size-10 top-0" />
                <div className="absolute inset-[15%_14.99%_15%_15.01%]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="block max-w-none size-full text-white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </div>
              <div className="overflow-clip relative shrink-0 size-6">
                <div className="absolute bg-[rgba(255,255,255,0)] left-0 size-10 top-0" />
                <div className="absolute inset-[20%]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="block max-w-none size-full text-white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="h-[18px] relative shrink-0 w-full sm:w-[400px] flex justify-center sm:justify-end">
            <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic text-[#a1a4aa] text-[14px] text-center sm:text-right">
              <p className="leading-[18px]">
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#a1a4aa] underline">Terms and Conditions</span>
                <span>{` | `}</span>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#a1a4aa] underline">Privacy Policy</span>
                <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#a1a4aa]">{` | `}</span>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#a1a4aa] underline">Cookies</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}