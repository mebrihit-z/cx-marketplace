import React from 'react';

interface RoadmapStepProps {
  stepNumber: string;
  title: string;
  description: string;
  image: React.ReactNode;
}

const RoadmapStep: React.FC<RoadmapStepProps> = ({ stepNumber, title, description, image }) => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 items-center justify-start px-4 py-0 w-full">
      <div className="flex flex-col gap-4 items-start justify-center w-full">
        <div className="flex flex-col font-['Inter',_sans-serif] font-semibold gap-1 items-start justify-start text-xl sm:text-2xl w-full">
          <div className="text-[#0da500] text-nowrap">
            <p className="leading-6 sm:leading-7">{stepNumber}</p>
          </div>
          <div className="text-white w-full">
            <p className="leading-6 sm:leading-7">{title}</p>
          </div>
        </div>
        <div className="font-['Inter',_sans-serif] text-sm sm:text-base text-white w-full">
          <p className="leading-5">{description}</p>
        </div>
      </div>
      <div className="max-h-[300px] sm:max-h-[360px] max-w-[300px] sm:max-w-[360px] w-full mx-auto">
        {image}
      </div>
    </div>
  );
};

const Step1Image = () => (
  <div className="relative w-full h-[300px] sm:h-[360px] bg-[#e7f6e5] rounded-lg overflow-hidden">
    {/* Browser header */}
    <div className="absolute top-0 left-0 w-full h-[22px] bg-[#c2e9bf] rounded-t-lg">
      <div className="absolute top-1/2 left-2 -translate-y-1/2 w-7 h-2 bg-[#075300] rounded-sm"></div>
    </div>
    
    {/* Main content area */}
    <div className="absolute top-[49px] left-0 w-full h-[311px]">
      {/* Left sidebar */}
      <div className="absolute top-0 left-[19px] w-[19px] h-[124px] bg-[#075300] rounded-sm"></div>
      <div className="absolute top-0 right-[19px] w-[19px] h-[124px] bg-[#075300] rounded-sm"></div>
      
      {/* Main content blocks */}
      <div className="absolute top-0 left-[38px] w-[284px] h-[124px] bg-[#075300] rounded-sm"></div>
      
      {/* Icons in main content */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[42px] h-[42px] bg-[#0da500] rounded-full flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-sm"></div>
      </div>
      
      {/* Bottom content blocks */}
      <div className="absolute top-[192px] left-[19px] w-[95px] h-[76px] bg-[#075300] rounded-sm"></div>
      <div className="absolute top-[192px] left-[133px] w-[95px] h-[76px] bg-[#075300] rounded-sm"></div>
      <div className="absolute top-[192px] left-[246px] w-[95px] h-[76px] bg-[#075300] rounded-sm"></div>
      
      {/* Icons in bottom blocks */}
      <div className="absolute top-[59%] left-[14%] w-[34px] h-[34px] bg-[#0da500] rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-sm"></div>
      </div>
      <div className="absolute top-[59%] left-[45%] w-[34px] h-[34px] bg-[#0da500] rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-sm"></div>
      </div>
      <div className="absolute top-[59%] left-[77%] w-[34px] h-[34px] bg-[#0da500] rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-sm"></div>
      </div>
      
      {/* Progress bars */}
      <div className="absolute top-[287px] left-[19px] w-[95px] h-[19px] bg-[#0da500] rounded-sm"></div>
      <div className="absolute top-[287px] left-[133px] w-[95px] h-[19px] bg-[#0da500] rounded-sm"></div>
      <div className="absolute top-[287px] left-[246px] w-[95px] h-[19px] bg-[#0da500] rounded-sm"></div>
      
      {/* Secondary progress bars */}
      <div className="absolute top-[316px] left-[28px] w-[76px] h-[19px] bg-[#c2e9bf] rounded-sm"></div>
      <div className="absolute top-[316px] left-[142px] w-[76px] h-[19px] bg-[#c2e9bf] rounded-sm"></div>
      <div className="absolute top-[316px] left-[256px] w-[76px] h-[19px] bg-[#c2e9bf] rounded-sm"></div>
    </div>
  </div>
);

const Step2Image = () => (
  <div className="relative w-full h-[300px] sm:h-[360px] bg-[#e7f6e5] rounded-lg overflow-hidden">
    {/* Browser header */}
    <div className="absolute top-0 left-0 w-full h-[22px] bg-[#c2e9bf] rounded-t-lg">
      <div className="absolute top-1/2 left-2 -translate-y-1/2 w-7 h-2 bg-[#075300] rounded-sm"></div>
    </div>
    
    {/* Main content area */}
    <div className="absolute top-[49px] left-0 w-full h-[311px]">
      {/* Top bar */}
      <div className="absolute top-[9px] left-[115px] w-[133px] h-[19px] bg-[#075300] rounded-sm"></div>
      
      {/* Document cards */}
      <div className="absolute top-[67px] left-[20px] w-[123px] h-[195px] bg-white border-2 border-[#d0d1d4] rounded-sm"></div>
      <div className="absolute top-[67px] left-[217px] w-[123px] h-[195px] bg-white border-2 border-[#d0d1d4] rounded-sm"></div>
      <div className="absolute top-[55px] left-[120px] w-[121px] h-[220px] bg-white border-2 border-[#d0d1d4] rounded-sm"></div>
      
      {/* Document content lines */}
      <div className="absolute top-[78px] left-[40px] w-[63px] h-[18px] bg-[#c2e9bf] rounded-sm"></div>
      <div className="absolute top-[78px] left-[260px] w-[63px] h-[18px] bg-[#c2e9bf] rounded-sm"></div>
      <div className="absolute top-[78px] left-[148px] w-[67px] h-[18px] bg-[#c2e9bf] rounded-sm"></div>
      
      {/* Document icons */}
      <div className="absolute top-[106px] left-[53px] w-[37px] h-[18px] bg-[#075300] rounded-sm"></div>
      <div className="absolute top-[106px] left-[273px] w-[37px] h-[18px] bg-[#075300] rounded-sm"></div>
      <div className="absolute top-[106px] left-[163px] w-[37px] h-[18px] bg-[#075300] rounded-sm"></div>
      
      {/* More content lines */}
      <div className="absolute top-[152px] left-[40px] w-[63px] h-[18px] bg-[#c2e9bf] rounded-sm"></div>
      <div className="absolute top-[152px] left-[260px] w-[63px] h-[18px] bg-[#c2e9bf] rounded-sm"></div>
      <div className="absolute top-[152px] left-[148px] w-[67px] h-[18px] bg-[#c2e9bf] rounded-sm"></div>
      
      <div className="absolute top-[192px] left-[40px] w-[63px] h-[18px] bg-[#c2e9bf] rounded-sm"></div>
      <div className="absolute top-[192px] left-[260px] w-[63px] h-[18px] bg-[#c2e9bf] rounded-sm"></div>
      <div className="absolute top-[192px] left-[148px] w-[67px] h-[18px] bg-[#c2e9bf] rounded-sm"></div>
      
      {/* Buttons */}
      <div className="absolute top-[213px] left-[41px] w-[64px] h-[28px] bg-[#0da500] rounded-sm"></div>
      <div className="absolute top-[213px] left-[255px] w-[63px] h-[28px] bg-[#0da500] rounded-sm"></div>
      <div className="absolute top-[213px] left-[148px] w-[67px] h-[28px] bg-[#0da500] rounded-sm"></div>
    </div>
  </div>
);

const Step3Image = () => (
  <div className="relative w-full h-[300px] sm:h-[360px] bg-[#e7f6e5] rounded-lg overflow-hidden">
    {/* Browser header */}
    <div className="absolute top-0 left-0 w-full h-[22px] bg-[#c2e9bf] rounded-t-lg">
      <div className="absolute top-1/2 left-2 -translate-y-1/2 w-7 h-2 bg-[#075300] rounded-sm"></div>
    </div>
    
    {/* Main content area */}
    <div className="absolute top-[22px] left-0 w-full h-[338px]">
      {/* Form elements */}
      <div className="absolute top-[85px] left-[85px] w-[189px] h-[27px] bg-white border-2 border-[#d0d1d4] rounded-sm"></div>
      <div className="absolute top-[121px] left-[85px] w-[189px] h-[27px] bg-white border-2 border-[#d0d1d4] rounded-sm"></div>
      <div className="absolute top-[157px] left-[85px] w-[189px] h-[27px] bg-[#0da500] rounded-sm"></div>
      
      {/* Labels */}
      <div className="absolute top-[50px] left-[131px] w-[98px] h-[18px] bg-[#075300] rounded-sm"></div>
      <div className="absolute top-[214px] left-[152px] w-[57px] h-[18px] bg-[#075300] rounded-sm"></div>
    </div>
  </div>
);

const Step4Image = () => (
  <div className="relative w-full h-[300px] sm:h-[360px] bg-[#e7f6e5] rounded-lg overflow-hidden">
    {/* Browser header */}
    <div className="absolute top-0 left-0 w-full h-[22px] bg-[#c2e9bf] rounded-t-lg">
      <div className="absolute top-1/2 left-2 -translate-y-1/2 w-7 h-2 bg-[#075300] rounded-sm"></div>
    </div>
    
    {/* Main content area */}
    <div className="absolute top-[22px] left-0 w-full h-[338px]">
      {/* Top content bars */}
      <div className="absolute top-[26px] left-[19px] w-[322px] h-[37px] bg-white border-2 border-[#d0d1d4] rounded-sm"></div>
      <div className="absolute top-[76px] left-[19px] w-[322px] h-[37px] bg-white border-2 border-[#d0d1d4] rounded-sm"></div>
      
      {/* Progress indicators */}
      <div className="absolute top-[35px] left-[28px] w-[277px] h-[19px] bg-[#c2e9bf] rounded-sm"></div>
      <div className="absolute top-[85px] left-[28px] w-[277px] h-[19px] bg-[#c2e9bf] rounded-sm"></div>
      
      {/* Checkmarks */}
      <div className="absolute top-[35px] right-[28px] w-[19px] h-[19px] bg-[#0da500] rounded-sm flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-sm"></div>
      </div>
      <div className="absolute top-[85px] right-[28px] w-[19px] h-[19px] bg-[#0da500] rounded-sm flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-sm"></div>
      </div>
      
      {/* Main content area */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[42px] h-[42px] bg-[#0da500] rounded-full flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-sm"></div>
      </div>
      
      {/* Bottom content blocks */}
      <div className="absolute top-[192px] left-[19px] w-[155px] h-[142px] bg-[#075300] rounded-sm"></div>
      <div className="absolute top-[192px] left-[187px] w-[71px] h-[71px] bg-[#075300] rounded-sm"></div>
      <div className="absolute top-[192px] left-[271px] w-[71px] h-[71px] bg-[#075300] rounded-sm"></div>
      <div className="absolute top-[276px] left-[187px] w-[154px] h-[59px] bg-[#075300] rounded-sm"></div>
      
      {/* Icons in blocks */}
      <div className="absolute top-[68%] left-[22%] w-[34px] h-[34px] bg-[#0da500] rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-sm"></div>
      </div>
      <div className="absolute top-[60%] left-[59%] w-[26px] h-[26px] bg-[#0da500] rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-sm"></div>
      </div>
      <div className="absolute top-[60%] left-[81%] w-[26px] h-[26px] bg-[#0da500] rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-sm"></div>
      </div>
      <div className="absolute top-[81%] left-[70%] w-[26px] h-[26px] bg-[#0da500] rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-sm"></div>
      </div>
      
      {/* Status indicators */}
      <div className="absolute top-[161px] left-[19px] w-[95px] h-[19px] bg-[#0da500] rounded-sm"></div>
      <div className="absolute top-[161px] left-[277px] w-[64px] h-[19px] bg-[#0da500] rounded-sm"></div>
    </div>
  </div>
);

export default function Roadmap() {
  return (
    <div className="bg-[#020d10] flex flex-col gap-8 sm:gap-12 items-start justify-start px-0 py-12 sm:py-16 w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 items-start justify-start px-4 py-0 w-full">
        <div className="flex flex-col items-start justify-center w-full">
          <div className="font-['Inter',_sans-serif] font-semibold text-2xl sm:text-[32px] text-white tracking-[-1px] w-full">
            <p className="leading-8 sm:leading-[40px]">The web launch process</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 items-start justify-center w-full">
          <div className="font-['Inter',_sans-serif] text-sm sm:text-base text-white w-full">
            <p className="leading-5">Building, launching, and maintaining secure, modern, and compliant websites has never been easier. With a streamlined process, we guarantee transparency at every step.</p>
          </div>
          <div className="bg-white flex gap-2.5 items-center justify-center px-4 sm:px-6 py-2.5 rounded-lg">
            <button className="font-['Inter',_sans-serif] text-sm sm:text-base text-[#111215] border border-[#0a7c00] px-4 sm:px-6 py-2.5 rounded-lg hover:bg-[#0a7c00] hover:text-white transition-colors">
              Read our FAQs
            </button>
          </div>
        </div>
      </div>

      {/* Roadmap Steps */}
      <div className="flex flex-col gap-8 sm:gap-12 w-full">
        <RoadmapStep
          stepNumber="01"
          title="Find your template + pricing package"
          description="Explore our Gallery and select a website template that matches your vision, or create a custom template with your unique branding. Still struggling to decide? Click 'Get a quote' and let us help you find the perfect template. We'll then match you to the right pricing package based on your content needs."
          image={<Step1Image />}
        />
        
        <RoadmapStep
          stepNumber="02"
          title="Submit request & sign contract"
          description="Transparency is key. Once you submit your request—whether for a migration or a new website—we'll guide you through every step of the agreement and payment processes. Track your progress easily with status updates sent to your inbox or the My Account dashboard."
          image={<Step2Image />}
        />
        
        <RoadmapStep
          stepNumber="03"
          title="Train your team & build your site"
          description="You're never on your own. Our team will equip your content specialists with hands-on training, so updates to your website are quick and effortless. Need custom features or specific IT requirements? We'll collaborate with you to ensure your website is tailored to your needs, all the way through launch."
          image={<Step3Image />}
        />
        
        <RoadmapStep
          stepNumber="04"
          title="Launch site & track performance"
          description="Once your website is ready and the content is in place, simply give us the green light. Post-launch, you'll have all the tools you'll need to manage content and track site performance. Use your My Account dashboard to monitor key metrics, review billing, and manage authorized users and premium services."
          image={<Step4Image />}
        />
      </div>
    </div>
  );
}
