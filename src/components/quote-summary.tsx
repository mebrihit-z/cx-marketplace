import type { ActiveSection } from '../types';

const imgBackArrow = "icons/black-back-arrow.svg";
const imgCheckmark = "icons/green-check-icon.svg";
const imgInfo = "icons/white-info-icon.svg";

const imgArrowForward = "icons/black-right-arrow.svg";

interface QuoteSummaryProps {
  setActiveSection: (section: ActiveSection) => void;
  selectedCategories: string[];
  selectedFeatures: string[];
  selectedPageOption: string;
  selectedUserOption: string;
  selectedCustomizationOption: string;
  selectedExtraFunctionality: string[];
  selectedDesignServices: string[];
  onRestart: () => void;
  onBack: () => void;
}

interface CategoryOption {
  id: string;
  label: string;
}

const pageOptions: CategoryOption[] = [
  { id: 'up-to-100', label: 'Up to 100 pages' },
  { id: 'up-to-500', label: 'Up to 500 pages' },
  { id: 'up-to-1000', label: 'Up to 1000 pages' },
  { id: 'not-sure', label: "I'm not sure right now." },
];

const userOptions: CategoryOption[] = [
  { id: 'up-to-10', label: 'Up to 10 users' },
  { id: 'up-to-20', label: 'Up to 20 users' },
  { id: 'up-to-30', label: 'Up to 30 users' },
  { id: 'not-sure-users', label: "I'm not sure right now." },
];

const customizationOptions: CategoryOption[] = [
  { id: 'full-control', label: 'I want full control over branding and layout.' },
  { id: 'text-imagery', label: 'I just want to change the text and imagery.' },
  { id: 'need-help', label: "I'll need help with customization." },
];

const extraFunctionalityOptions: CategoryOption[] = [
  { id: 'crm-integration', label: 'CRM integration' },
  { id: 'asset-storage', label: 'Asset storage/management' },
  { id: 'localization', label: 'Localization options' },
  { id: 'multilingual', label: 'Multilingual support' },
  { id: 'live-chatbot', label: 'Live chatbot' },
  { id: 'customer-service', label: 'Customer service ticketing' },
  { id: 'custom-api', label: 'Custom API integration' },
  { id: 'role-based-access', label: 'Role-based access control' },
  { id: 'two-factor-auth', label: 'Two-factor authentication' },
  { id: 'none-basics', label: 'None for now, just the basics!' },
];

const designServicesOptions: CategoryOption[] = [
  { id: 'user-research', label: 'User research' },
  { id: 'heat-map', label: 'Heat map analysis' },
  { id: 'content-strategy', label: 'Content strategy' },
  { id: 'custom-graphics', label: 'Custom graphics' },
  { id: 'copywriting', label: 'Copywriting' },
  { id: 'integration-setup', label: 'Integration setup' },
  { id: 'cms-setup', label: 'CMS setup' },
  { id: 'content-training', label: 'Content author training' },
  { id: 'seo-optimization', label: 'SEO optimization' },
  { id: 'no-extras', label: "No extras, I'll handle it in-house." },
];

// Template preview images
const templateImages = {
  saas: "images/pulse-card-lg.svg",
  startup: "images/spark-card-lg.svg",
  ecommerce: "images/canvas-card-lg.svg",
  blog: "images/nova-card-lg.svg",
  portfolio: "images/prism-card-lg.svg",
  agency: "images/atlas-card-lg.svg",
  event: "images/summit-card-lg.svg",
  news: "images/nexus-card-lg.svg",
  business: "images/horizon-card-lg.svg",
};

const templateBackgrounds = {
  saas: '#4a90e2',
  startup: '#42ab18',
  ecommerce: '#f5a623',
  blog: '#bd10e0',
  portfolio: '#9013fe',
  agency: '#ac7010',
  event: '#50e3c2',
  news: '#d0021b',
  business: '#417505',
};

const getCategoryLabel = (categoryId: string): string => {
  const labels: Record<string, string> = {
    'saas': 'Pulse',
    'ecommerce': 'Canvas',
    'startup': 'Spark',
    'blog': 'Nova',
    'event': 'Summit',
    'agency': 'Atlas',
    'portfolio': 'Prism',
    'news': 'Nexus',
    'business': 'Horizon',
  };
  return labels[categoryId] || categoryId;
};

const getCategoryType = (categoryId: string): string => {
  const types: Record<string, string> = {
    'saas': 'SaaS',
    'ecommerce': 'eCommerce',
    'startup': 'Startup',
    'blog': 'Blog',
    'event': 'Event',
    'agency': 'Agency',
    'portfolio': 'Portfolio',
    'news': 'News',
    'business': 'Business',
  };
  return types[categoryId] || categoryId;
};

const getFeatureLabel = (featureId: string): string => {
  const labels: Record<string, string> = {
    'product-overview': 'Product overview',
    'feature-highlight': 'Feature(s) highlight',
    'about-us': 'About us',
    'team-bios': 'Team/speaker bios',
    'case-studies': 'Case studies',
    'testimonials': 'Testimonials',
    'calendar-booking': 'Calendar/booking tool',
    'lead-generation': 'Lead generation form',
    'careers': 'Careers directory',
  };
  return labels[featureId] || featureId;
};

export default function QuoteSummary({
  setActiveSection,
  selectedCategories,
  selectedFeatures,
  selectedPageOption,
  selectedUserOption,
  selectedCustomizationOption,
  selectedExtraFunctionality,
  selectedDesignServices,
  onRestart,
  onBack,
}: QuoteSummaryProps) {
  
  const handleBack = () => {
    onBack();
  };

  const handleBookCall = () => {
    window.open('https://calendly.com', '_blank');
  };

  const handleRestart = () => {
    onRestart();
  };

  // Function to determine pricing package based on page count
  const getPricingPackage = (): string => {
    switch (selectedPageOption) {
      case 'up-to-100':
        return 'Basic';
      case 'up-to-500':
        return 'Pro';
      case 'up-to-1000':
        return 'Premium';
      case 'not-sure':
        return 'Pro'; // Default to Pro if not sure
      default:
        return 'Premium';
    }
  };

  // Get the primary selected category for template display
  const primaryCategory = selectedCategories[0] || 'startup';
  const templateImage = templateImages[primaryCategory as keyof typeof templateImages] || templateImages.startup;
  const templateName = getCategoryLabel(primaryCategory);
  const templateType = getCategoryType(primaryCategory);
  const templateBg = templateBackgrounds[primaryCategory as keyof typeof templateBackgrounds] || templateBackgrounds.startup;

  return (
    <div className="flex items-center justify-center min-h-screen py-4 sm:py-6 md:py-8" style={{ background: 'linear-gradient(242.27deg, rgba(86, 152, 0, 0.1) 4%, rgba(231, 255, 201, 0.1) 43.62%, rgba(0, 167, 72, 0.1) 85.58%)' }}>
      <div className="box-border flex flex-col lg:flex-row items-start justify-between relative w-full px-4 py-6 sm:p-6 md:p-8 lg:p-12 gap-6 lg:gap-8">
        {/* Left Container */}
        <div className="box-border flex flex-col items-start justify-between relative self-stretch shrink-0 w-full lg:flex-1 gap-6 lg:gap-0">
          {/* Content with fixed width */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 items-start relative shrink-0 w-full lg:w-[640px]">
            {/* Text Container */}
            <div className="flex flex-col gap-4 sm:gap-6 items-start not-italic relative shrink-0 w-full">
              <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] sm:leading-[40px] lg:leading-[48px] relative shrink-0 text-[#22252b] text-[28px] sm:text-[32px] lg:text-[40px] w-full">
                You're all set!
              </p>
              <div className="font-['Inter:regular',_sans-serif] leading-[22px] sm:leading-[24px] relative shrink-0 text-[#333740] text-[16px] sm:text-[18px] w-full">
                <p className="mb-4 sm:mb-5">Here's a summary of your quote, with a website template and pricing package that matches your needs. </p>
                <p>Next step? Connect with our Sales team to discuss making your website dreams come to life. </p>
              </div>
            </div>

            {/* Button Group */}
            <div className="border-0 border-black border-solid box-border flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start relative shrink-0 w-full sm:w-auto">
              <button
                onClick={handleBookCall}
                className="bg-[#0a7c00] box-border flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 hover:bg-[#096d00] transition-colors"
              >
                <p className="font-['Inter:regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] sm:text-[16px] text-nowrap text-white whitespace-pre">
                  Book a call
                </p>
              </button>
              <button
                onClick={handleRestart}
                className="bg-white border border-[#0a7c00] border-solid box-border flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-lg shrink-0 hover:bg-[#f0f9ee] transition-colors"
              >
                <p className="font-['Inter:regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#111215] text-[14px] sm:text-[16px] text-nowrap whitespace-pre">
                  Restart quote
                </p>
              </button>
            </div>
          </div>

          {/* Actions - Back Button */}
          <div className="flex items-center relative shrink-0 w-full mt-6 lg:mt-0">
            <div className="relative shrink-0 w-full sm:w-auto">
              <button
                onClick={handleBack}
                className="bg-white border border-[#d0d1d4] flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 transition-colors w-full sm:w-auto"
              >
                <img src="icons/black-back-arrow.svg" alt="Previous" />
                <span className="font-['Inter:regular',_sans-serif] text-[14px] sm:text-[16px] leading-[20px] text-[#22252b]">Back</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quote Sidebar */}
        <div className="bg-white border border-[#d0d1d4] border-solid relative rounded-2xl shrink-0 overflow-y-auto w-full lg:w-[65%] lg:basis-0 lg:grow lg:min-h-full lg:max-h-full">
        <div className="box-border flex flex-col items-center p-4 sm:p-6 relative rounded-[inherit] w-full">
          <div className="flex flex-col gap-4 sm:gap-6 items-start relative shrink-0 w-full">
            {/* Top Frame */}
            <div className="flex flex-col gap-3 sm:gap-4 items-start relative shrink-0 w-full">
              <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#22252b] text-[18px] sm:text-[20px] w-full">
                Quote Summary
              </p>
              <div className="h-0 relative shrink-0 w-full">
                <div className="border-t border-[#d0d1d4] w-full" />
              </div>
            </div>

            {/* Main Content with Template and Pricing */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-8 items-start relative shrink-0 w-full">
              {/* Left Section - Template & Features */}
              <div className="flex flex-col gap-4 sm:gap-6 items-start w-full lg:flex-[1.1] lg:min-w-[240px] relative lg:self-stretch shrink-0">
                {/* Template Container */}
                <div className="flex flex-col gap-2 items-start relative shrink-0 w-full">
                  <p className="font-['Inter:regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333740] text-[14px] sm:text-[16px] w-full">
                    Template
                  </p>
                  {/* Template Card */}
                  <div className="bg-white border border-[#d0d1d4] border-solid h-[96px] sm:h-[108px] relative rounded-lg shrink-0 w-full">
                    <div className="flex items-center overflow-clip relative rounded-[inherit] size-full">
                      {/* Image Container */}
                      <div 
                        className="box-border flex flex-col gap-2.5 h-full items-start overflow-clip pb-0 pl-2 sm:pl-2.5 pr-0 pt-2 sm:pt-2.5 relative shrink-0 w-[100px] sm:w-[120px]"
                        style={{ backgroundColor: templateBg }}
                      >
                        <div className="aspect-[1726/1124] basis-0 grow min-h-px min-w-px relative rounded-tl-[2px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0">
                          <img 
                            alt="" 
                            className="absolute inset-0 max-w-none object-[50%_50%] object-cover pointer-events-none rounded-tl-[2px] size-full" 
                            src={templateImage} 
                          />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="basis-0 box-border flex grow h-full items-start justify-between min-h-px min-w-px p-2 sm:p-3 relative shrink-0">
                        <div className="basis-0 flex flex-col gap-1 grow h-full items-start min-h-px min-w-px not-italic relative shrink-0">
                          <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] sm:leading-[24px] min-w-full relative shrink-0 text-[#22252b] text-[16px] sm:text-[18px] w-[min-content]">
                            {templateName}
                          </p>
                          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[16px] sm:leading-[18px] relative shrink-0 text-[#737780] text-[11px] sm:text-[12px] text-nowrap whitespace-pre">
                            {templateType}
                          </p>
                        </div>
                        {/* Arrow Button */}
                        <div className="flex flex-col gap-2.5 h-full items-start justify-end relative shrink-0">
                          <div className="border border-[#d0d1d4] border-solid box-border flex gap-2 items-center p-1.5 sm:p-2.5 relative rounded-lg shrink-0">
                            <div className="relative shrink-0 size-4 sm:size-5">
                              <img alt="" className="block max-w-none size-full" src={imgArrowForward} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Checklist */}
                {selectedFeatures.length > 0 && (
                  <div className="flex flex-col gap-1 items-start relative shrink-0 w-full">
                    <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#333740] text-[13px] sm:text-[14px] w-full">
                      Features included
                    </p>
                    {selectedFeatures.map(featureId => (
                      <div key={featureId} className="flex gap-2 items-center relative shrink-0 w-full">
                        <div className="relative shrink-0 size-5 sm:size-6">
                          <img alt="" className="block max-w-none size-full" src={imgCheckmark} />
                        </div>
                        <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[16px] sm:leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[13px] sm:text-[14px]">
                          {getFeatureLabel(featureId)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Section - Pricing Package */}
              <div className="flex flex-col gap-2 sm:gap-[8px] items-start relative shrink-0 w-full lg:flex-1 lg:max-w-[340px]">
                <p className="font-['Inter:regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333740] text-[14px] sm:text-[16px] w-full">
                  Pricing Package
                </p>
                {/* Pricing Card */}
                <div className="box-border flex flex-col gap-3 sm:gap-[16px] items-start overflow-clip px-4 sm:px-[16px] py-5 sm:py-[24px] relative rounded-2xl shrink-0 w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(images/${getPricingPackage().toLowerCase()}-card-bg-image.svg)` }}>
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] rounded-2xl pointer-events-none" />

                    {/* Pricing Package Title */}
                    <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] sm:leading-[28px] not-italic relative z-10 shrink-0 text-[20px] sm:text-[24px] text-white w-full">
                      {getPricingPackage()}
                    </p>

                    {/* Price */}
                    <div className="flex flex-col gap-1 sm:gap-[4px] items-start justify-center relative z-10 shrink-0 w-full">
                      <div className="flex gap-1 sm:gap-[4px] items-center relative shrink-0">
                        <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[11px] sm:text-[12px] text-center text-nowrap">
                          <p className="leading-[16px] sm:leading-[18px] whitespace-pre">Estimated cost</p>
                        </div>
                        <div className="relative shrink-0 size-[11px] sm:size-[12px]">
                          <img alt="" className="block max-w-none size-full brightness-200" src={imgInfo} />
                        </div>
                      </div>
                      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[22px] sm:leading-[24px] not-italic relative shrink-0 text-[18px] sm:text-[20px] text-nowrap text-white whitespace-pre">
                        $$$–$$$$
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-0 relative z-10 shrink-0 w-full">
                      <div className="border-t border-[#d0d1d4] w-full" />
                    </div>

                    {/* Includes */}
                    <div className="flex flex-col gap-1 sm:gap-[4px] items-start relative z-10 shrink-0 w-full">
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[16px] sm:leading-[18px] not-italic relative shrink-0 text-[13px] sm:text-[14px] text-white w-full">
                        Includes:
                      </p>
                      
                      {/* Page Option */}
                      {selectedPageOption && (
                        <div className="flex gap-2 sm:gap-[8px] items-center relative shrink-0 w-full">
                          <div className="relative shrink-0 size-5 sm:size-6">
                            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[16px] sm:leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[13px] sm:text-[14px] text-white">
                            {pageOptions.find(p => p.id === selectedPageOption)?.label}
                          </p>
                        </div>
                      )}

                      {/* User Option */}
                      {selectedUserOption && (
                        <div className="flex gap-2 sm:gap-[8px] items-center relative shrink-0 w-full">
                          <div className="relative shrink-0 size-5 sm:size-6">
                            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[16px] sm:leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[13px] sm:text-[14px] text-white">
                            {userOptions.find(u => u.id === selectedUserOption)?.label}
                          </p>
                        </div>
                      )}

                      {/* Customization Option */}
                      {selectedCustomizationOption && (
                        <div className="flex gap-2 sm:gap-[8px] items-center relative shrink-0 w-full">
                          <div className="relative shrink-0 size-5 sm:size-6">
                            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[16px] sm:leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[13px] sm:text-[14px] text-white">
                            {customizationOptions.find(c => c.id === selectedCustomizationOption)?.label}
                          </p>
                        </div>
                      )}

                      {/* Extra Functionality */}
                      {selectedExtraFunctionality.map(funcId => {
                        const func = extraFunctionalityOptions.find(f => f.id === funcId);
                        return func ? (
                          <div key={funcId} className="flex gap-2 sm:gap-[8px] items-center relative shrink-0 w-full">
                            <div className="relative shrink-0 size-5 sm:size-6">
                              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[16px] sm:leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[13px] sm:text-[14px] text-white">
                              {func.label}
                            </p>
                          </div>
                        ) : null;
                      })}

                      {/* Design Services */}
                      {selectedDesignServices.map(serviceId => {
                        const service = designServicesOptions.find(s => s.id === serviceId);
                        return service ? (
                          <div key={serviceId} className="flex gap-2 sm:gap-[8px] items-center relative shrink-0 w-full">
                            <div className="relative shrink-0 size-5 sm:size-6">
                              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[16px] sm:leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[13px] sm:text-[14px] text-white">
                              {service.label}
                            </p>
                          </div>
                        ) : null;
                      })}
                    </div>

                    {/* Divider */}
                    <div className="h-0 relative z-10 shrink-0 w-full">
                      <div className="border-t border-[#d0d1d4] w-full" />
                    </div>

                    {/* Bonus Features */}
                    <div className="flex flex-col gap-1 sm:gap-[4px] items-start relative z-10 shrink-0 w-full">
                      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[16px] sm:leading-[18px] not-italic relative shrink-0 text-[13px] sm:text-[14px] text-white w-full">
                        Bonus features
                      </p>
                      <div className="flex gap-2 sm:gap-[8px] items-center relative shrink-0 w-full">
                        <div className="relative shrink-0 size-5 sm:size-6">
                          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[16px] sm:leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[13px] sm:text-[14px] text-white">
                          Intelligent analytics dashboard
                        </p>
                      </div>
                      <div className="flex gap-2 sm:gap-[8px] items-center relative shrink-0 w-full">
                        <div className="relative shrink-0 size-5 sm:size-6">
                          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[16px] sm:leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[13px] sm:text-[14px] text-white">
                          Web/graphic designer as needed
                        </p>
                      </div>
                      <div className="flex gap-2 sm:gap-[8px] items-center relative shrink-0 w-full">
                        <div className="relative shrink-0 size-5 sm:size-6">
                          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[16px] sm:leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[13px] sm:text-[14px] text-white">
                          Custom template built with AI
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
