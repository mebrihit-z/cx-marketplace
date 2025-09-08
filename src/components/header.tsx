import '../App.css'

// Image assets from Figma
const logoIcon = "http://localhost:3845/assets/d07b19d6d0626a7614de42145ee3cb234b123703.svg";
const logoText = "http://localhost:3845/assets/80e338fdedad3da44a758b02d8e2eeac6c05ec3e.svg";

interface AvatarProps {
  property1?: "Adam" | "Chris" | "Joanna" | "Vahida" | "Jamie";
  size?: "Default" | "Sm";
}

function Avatar({ property1 = "Chris", size = "Default" }: AvatarProps) {
  if (property1 === "Chris" && size === "Default") {
    return (
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[200px] size-full">
        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#0a7c00] text-[14px] text-nowrap">
          <p className="leading-[20px] whitespace-pre">C</p>
        </div>
      </div>
    );
  }
  return null;
}

export default function Header() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-6 py-0 relative size-full bg-gray-900">
      <div className="basis-0 content-stretch flex grow items-center justify-between max-w-[1440px] min-h-px min-w-px relative shrink-0">
        {/* Left Container - Logo */}
        <div className="h-[88px] relative shrink-0 w-[306px]">
          <button className="absolute box-border content-stretch cursor-pointer flex gap-2 items-end justify-start left-0 overflow-visible p-0 top-1/2 translate-y-[-50%]">
            <div className="bg-[#8cc63f] overflow-clip relative rounded-[94.118px] shrink-0 size-8">
              <div className="absolute left-1/2 size-[1.772px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <img alt="Logo icon" className="block max-w-none size-full" src={logoIcon} />
              </div>
            </div>
            <div className="h-[24.228px] relative shrink-0 w-[138.445px]">
              <img alt="Marketplace" className="block max-w-none size-full" src={logoText} />
            </div>
          </button>
        </div>

        {/* Primary Navigation */}
        <div className="box-border content-stretch flex gap-8 h-[88px] items-center justify-center px-4 py-0 relative shrink-0">
          <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0 cursor-pointer hover:bg-gray-800 rounded-md transition-colors">
            <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
              <p className="leading-[20px] whitespace-pre">Gallery</p>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0 cursor-pointer hover:bg-gray-800 rounded-md transition-colors">
            <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
              <p className="leading-[20px] whitespace-pre">Pricing</p>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0 cursor-pointer hover:bg-gray-800 rounded-md transition-colors">
            <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
              <p className="leading-[20px] whitespace-pre">FAQs</p>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0 cursor-pointer hover:bg-gray-800 rounded-md transition-colors">
            <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
              <p className="leading-[20px] whitespace-pre">Training</p>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-2.5 py-2 relative shrink-0 cursor-pointer hover:bg-gray-800 rounded-md transition-colors">
            <div className="flex flex-col font-['Inter:regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
              <p className="leading-[20px] whitespace-pre">Contact</p>
            </div>
          </div>
        </div>

        {/* Right Container - CTA Button and Avatar */}
        <div className="content-stretch flex gap-[22px] h-[88px] items-center justify-end relative shrink-0 w-[306px]">
          <div className="bg-[#0a7c00] box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 cursor-pointer hover:bg-[#0a6b00] transition-colors">
            <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
              <p className="leading-[20px] whitespace-pre">Get a quote</p>
            </div>
          </div>
          <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
            <div className="bg-[#e7f6e5] content-stretch flex flex-col items-center justify-center relative rounded-[200px] shrink-0 size-10">
              <Avatar property1="Chris" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}