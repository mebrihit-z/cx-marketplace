import { useState } from 'react';
import type { ActiveSection } from '../types';
import QuoteSummary from './quote-summary';

const imgError = "icons/info-icon.svg";
const whiteInfoIcon = "icons/white-info-icon.svg";
const imgCheckmark = "icons/green-check-icon.svg";

interface GetQuoteProps {
  setActiveSection: (section: ActiveSection) => void;
}

interface CategoryOption {
  id: string;
  label: string;
}

const categories: CategoryOption[] = [
  { id: 'saas', label: 'SaaS' },
  { id: 'ecommerce', label: 'eCommerce' },
  { id: 'startup', label: 'Startup' },
  { id: 'blog', label: 'Blog' },
  { id: 'event', label: 'Event' },
  { id: 'agency', label: 'Agency' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'news', label: 'News' },
  { id: 'business', label: 'Business' },
];

const features: CategoryOption[] = [
  { id: 'product-overview', label: 'Product overview' },
  { id: 'feature-highlight', label: 'Feature(s) highlight' },
  { id: 'about-us', label: 'About us' },
  { id: 'team-bios', label: 'Team/speaker bios' },
  { id: 'case-studies', label: 'Case studies' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'calendar-booking', label: 'Calendar/booking tool' },
  { id: 'lead-generation', label: 'Lead generation form' },
  { id: 'careers', label: 'Careers directory' },
];

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

const MarketplaceLogo = () => {
  return (
    <div className="flex items-center gap-4 shrink-0">
      <div className="bg-[#8cc63f] overflow-hidden rounded-full shrink-0 size-[32px] flex items-center justify-center">
      <img alt="Logo icon" className="block size-full" src="icons/logo-icon.svg" />
      </div>
    </div>
  );
};


export default function GetQuote({ setActiveSection }: GetQuoteProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedPageOption, setSelectedPageOption] = useState<string>('');
  const [selectedUserOption, setSelectedUserOption] = useState<string>('');
  const [selectedCustomizationOption, setSelectedCustomizationOption] = useState<string>('');
  const [selectedExtraFunctionality, setSelectedExtraFunctionality] = useState<string[]>([]);
  const [selectedDesignServices, setSelectedDesignServices] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSummary, setShowSummary] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const totalSteps = 7;

  const selectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const selectPageOption = (optionId: string) => {
    setSelectedPageOption(optionId);
    setImageLoaded(false); // Reset image loaded state when package changes
  };

  const selectUserOption = (optionId: string) => {
    setSelectedUserOption(optionId);
  };

  const selectCustomizationOption = (optionId: string) => {
    setSelectedCustomizationOption(optionId);
  };

  const toggleExtraFunctionality = (functionalityId: string) => {
    setSelectedExtraFunctionality(prev =>
      prev.includes(functionalityId)
        ? prev.filter(id => id !== functionalityId)
        : [...prev, functionalityId]
    );
  };

  const toggleDesignService = (serviceId: string) => {
    setSelectedDesignServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleViewSummary = () => {
    setShowSummary(true);
  };

  const handleRestart = () => {
    // Reset all selections
    setSelectedCategory('');
    setSelectedFeatures([]);
    setSelectedPageOption('');
    setSelectedUserOption('');
    setSelectedCustomizationOption('');
    setSelectedExtraFunctionality([]);
    setSelectedDesignServices([]);
    setCurrentStep(1);
    setShowSummary(false);
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

  // Show summary if user clicked "View summary"
  if (showSummary) {
    return (
      <QuoteSummary
        setActiveSection={setActiveSection}
        selectedCategories={selectedCategory ? [selectedCategory] : []}
        selectedFeatures={selectedFeatures}
        selectedPageOption={selectedPageOption}
        selectedUserOption={selectedUserOption}
        selectedCustomizationOption={selectedCustomizationOption}
        selectedExtraFunctionality={selectedExtraFunctionality}
        selectedDesignServices={selectedDesignServices}
        onRestart={handleRestart}
        onBack={() => setShowSummary(false)}
      />
    );
  }

  return (
    <div className="flex flex-col" style={{ background: 'linear-gradient(242.27deg, rgba(86, 152, 0, 0.1) 4%, rgba(231, 255, 201, 0.1) 43.62%, rgba(0, 167, 72, 0.1) 85.58%)' }}>
      <div className="max-w-[1400px] mx-auto px-8 py-12 flex-1 flex flex-col">
        <div className="flex items-stretch justify-between gap-8 flex-1">
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col items-start justify-between">
            {/* Text Container */}
            <div className="flex flex-col gap-6 items-start w-full mb-8">
              <h1 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[40px] leading-[48px] text-[#22252b] w-full">
                Get a personalized quote, instantly.
              </h1>
              <p className="font-['Inter:regular',_sans-serif] text-[18px] leading-[24px] text-[#333740] w-full">
                Let us help you find the right website template and pricing package for your content needs.
              </p>
            </div>

            {/* Content Container */}
            <div className="flex flex-col gap-20 items-start w-full flex-1">
              {/* Question 1 - Website Type */}
              {currentStep === 1 && (
              <div className="flex flex-col gap-10 items-start w-full">
                {/* Message */}
                <div className="flex flex-col gap-8 items-start w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl w-[646px]">
                        <div className="flex flex-col gap-1 items-start p-4">
                          <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740]">
                            What type of website are you looking for?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Answers */}
                <div className="flex flex-col gap-2.5 items-end w-full">
                  <div className="flex flex-col gap-4 items-center justify-center">
                    {/* Row 1 */}
                    <div className="flex gap-4 items-start">
                      {categories.slice(0, 3).map(category => (
                        <button
                          key={category.id}
                          onClick={() => selectCategory(category.id)}
                          className={`bg-white border ${
                            selectedCategory === category.id
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#22252b] w-full text-left">
                                {category.label}
                              </p>
                            </div>
                            {selectedCategory === category.id && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex gap-4 items-start">
                      {categories.slice(3, 6).map(category => (
                        <button
                          key={category.id}
                          onClick={() => selectCategory(category.id)}
                          className={`bg-white border ${
                            selectedCategory === category.id
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#22252b] w-full text-left">
                                {category.label}
                              </p>
                            </div>
                            {selectedCategory === category.id && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex gap-4 items-start">
                      {categories.slice(6, 9).map(category => (
                        <button
                          key={category.id}
                          onClick={() => selectCategory(category.id)}
                          className={`bg-white border ${
                            selectedCategory === category.id
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#22252b] w-full text-left">
                                {category.label}
                              </p>
                            </div>
                            {selectedCategory === category.id && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              )}

              {/* Question 2 - Features */}
              {currentStep === 2 && (
              <div className="flex flex-col gap-10 items-start w-full">
                {/* Message */}
                <div className="flex flex-col gap-8 items-start w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl w-[646px]">
                        <div className="flex flex-col gap-1 items-start p-4">
                          <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740]">
                            What features does your startup website need?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Answers */}
                <div className="flex flex-col gap-2.5 items-end w-full">
                  <div className="flex flex-col gap-4 items-center justify-center">
                    {/* Row 1 */}
                    <div className="flex gap-4 items-start">
                      {features.slice(0, 3).map(feature => (
                        <button
                          key={feature.id}
                          onClick={() => toggleFeature(feature.id)}
                          className={`bg-white border ${
                            selectedFeatures.includes(feature.id)
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                                {feature.label}
                              </p>
                            </div>
                            {selectedFeatures.includes(feature.id) && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex gap-4 items-start">
                      {features.slice(3, 6).map(feature => (
                        <button
                          key={feature.id}
                          onClick={() => toggleFeature(feature.id)}
                          className={`bg-white border ${
                            selectedFeatures.includes(feature.id)
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                                {feature.label}
                              </p>
                            </div>
                            {selectedFeatures.includes(feature.id) && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex gap-4 items-start">
                      {features.slice(6, 9).map(feature => (
                        <button
                          key={feature.id}
                          onClick={() => toggleFeature(feature.id)}
                          className={`bg-white border ${
                            selectedFeatures.includes(feature.id)
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                                {feature.label}
                              </p>
                            </div>
                            {selectedFeatures.includes(feature.id) && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              )}

              {/* Question 3 - Page Count */}
              {currentStep === 3 && (
              <div className="flex flex-col gap-10 items-start w-full">
                {/* Message */}
                <div className="flex flex-col gap-8 items-start w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl w-[646px]">
                        <div className="flex flex-col gap-1 items-start p-4">
                          <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740]">
                            What is the total number of desired pages across your website?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Answers */}
                <div className="flex flex-col gap-2.5 items-end w-full">
                  <div className="flex flex-col gap-4 items-end justify-center">
                    {/* Row 1 */}
                    <div className="flex gap-4 items-start">
                      {pageOptions.slice(0, 3).map(option => (
                        <button
                          key={option.id}
                          onClick={() => selectPageOption(option.id)}
                          className={`bg-white border ${
                            selectedPageOption === option.id
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                                {option.label}
                              </p>
                            </div>
                            {selectedPageOption === option.id && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Row 2 - Wider option */}
                    <div className="flex gap-4 items-start">
                      <button
                        onClick={() => selectPageOption('not-sure')}
                        className={`bg-white border ${
                          selectedPageOption === 'not-sure'
                            ? 'border-[#0a7c00] bg-[#f0f9ee]'
                            : 'border-[#d0d1d4]'
                        } rounded-lg w-[400px] relative hover:border-[#0a7c00] transition-colors`}
                      >
                        <div className="flex gap-4 items-center px-4 py-6 relative">
                          <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                            <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                              I'm not sure right now.
                            </p>
                          </div>
                          {selectedPageOption === 'not-sure' && (
                            <div className="absolute right-4 size-4 top-4">
                              <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                            </div>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              )}

              {/* Question 4 - Authorized Users */}
              {currentStep === 4 && (
              <div className="flex flex-col gap-10 items-start w-full">
                {/* Message */}
                <div className="flex flex-col gap-8 items-start w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl w-[646px]">
                        <div className="flex flex-col gap-1 items-start p-4">
                          <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740]">
                            How many authorized users will manage your website?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Answers */}
                <div className="flex flex-col gap-2.5 items-end w-full">
                  <div className="flex flex-col gap-4 items-end justify-center">
                    {/* Row 1 */}
                    <div className="flex gap-4 items-start">
                      {userOptions.slice(0, 3).map(option => (
                        <button
                          key={option.id}
                          onClick={() => selectUserOption(option.id)}
                          className={`bg-white border ${
                            selectedUserOption === option.id
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                                {option.label}
                              </p>
                            </div>
                            {selectedUserOption === option.id && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Row 2 - Wider option */}
                    <div className="flex gap-4 items-start">
                      <button
                        onClick={() => selectUserOption('not-sure-users')}
                        className={`bg-white border ${
                          selectedUserOption === 'not-sure-users'
                            ? 'border-[#0a7c00] bg-[#f0f9ee]'
                            : 'border-[#d0d1d4]'
                        } rounded-lg w-[400px] relative hover:border-[#0a7c00] transition-colors`}
                      >
                        <div className="flex gap-4 items-center px-4 py-6 relative">
                          <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                            <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                              I'm not sure right now.
                            </p>
                          </div>
                          {selectedUserOption === 'not-sure-users' && (
                            <div className="absolute right-4 size-4 top-4">
                              <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                            </div>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              )}

              {/* Question 5 - Customization Level */}
              {currentStep === 5 && (
              <div className="flex flex-col gap-10 items-start w-full">
                {/* Message */}
                <div className="flex flex-col gap-8 items-start w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl w-[646px]">
                        <div className="flex flex-col gap-1 items-start p-4">
                          <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740]">
                            What level of customization do you prefer?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Answers */}
                <div className="flex flex-col gap-2.5 items-end w-full">
                  <div className="flex flex-col gap-4 items-end justify-center">
                    {customizationOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => selectCustomizationOption(option.id)}
                        className={`bg-white border ${
                          selectedCustomizationOption === option.id
                            ? 'border-[#0a7c00] bg-[#f0f9ee]'
                            : 'border-[#d0d1d4]'
                        } rounded-lg w-[400px] relative hover:border-[#0a7c00] transition-colors`}
                      >
                        <div className="flex gap-4 items-center px-4 py-6 relative">
                          <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                            <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                              {option.label}
                            </p>
                          </div>
                          {selectedCustomizationOption === option.id && (
                            <div className="absolute right-4 size-4 top-4">
                              <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              )}

              {/* Question 6 - Extra Functionality */}
              {currentStep === 6 && (
              <div className="flex flex-col gap-10 items-start w-full">
                {/* Message */}
                <div className="flex flex-col gap-8 items-start w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl w-[646px]">
                        <div className="flex flex-col gap-1 items-start p-4">
                          <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740]">
                            Does your website need any extra functionality?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Answers */}
                <div className="flex flex-col gap-2.5 items-end w-full">
                  <div className="flex flex-col gap-4 items-end justify-center">
                    {/* Row 1 */}
                    <div className="flex gap-4 items-start">
                      {extraFunctionalityOptions.slice(0, 3).map(option => (
                        <button
                          key={option.id}
                          onClick={() => toggleExtraFunctionality(option.id)}
                          className={`bg-white border ${
                            selectedExtraFunctionality.includes(option.id)
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                                {option.label}
                              </p>
                            </div>
                            {selectedExtraFunctionality.includes(option.id) && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex gap-4 items-start">
                      {extraFunctionalityOptions.slice(3, 6).map(option => (
                        <button
                          key={option.id}
                          onClick={() => toggleExtraFunctionality(option.id)}
                          className={`bg-white border ${
                            selectedExtraFunctionality.includes(option.id)
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                                {option.label}
                              </p>
                            </div>
                            {selectedExtraFunctionality.includes(option.id) && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex gap-4 items-start">
                      {extraFunctionalityOptions.slice(6, 9).map(option => (
                        <button
                          key={option.id}
                          onClick={() => toggleExtraFunctionality(option.id)}
                          className={`bg-white border ${
                            selectedExtraFunctionality.includes(option.id)
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                                {option.label}
                              </p>
                            </div>
                            {selectedExtraFunctionality.includes(option.id) && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Row 4 - Wider option */}
                    <div className="flex gap-4 items-start">
                      <button
                        onClick={() => toggleExtraFunctionality('none-basics')}
                        className={`bg-white border ${
                          selectedExtraFunctionality.includes('none-basics')
                            ? 'border-[#0a7c00] bg-[#f0f9ee]'
                            : 'border-[#d0d1d4]'
                        } rounded-lg w-[400px] relative hover:border-[#0a7c00] transition-colors`}
                      >
                        <div className="flex gap-4 items-center px-4 py-6 relative">
                          <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                            <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                              None for now, just the basics!
                            </p>
                          </div>
                          {selectedExtraFunctionality.includes('none-basics') && (
                            <div className="absolute right-4 size-4 top-4">
                              <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                            </div>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              )}

              {/* Question 7 - Design Services */}
              {currentStep === 7 && (
              <div className="flex flex-col gap-10 items-start w-full">
                {/* Message */}
                <div className="flex flex-col gap-8 items-start w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl w-[646px]">
                        <div className="flex flex-col gap-1 items-start p-4">
                          <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740]">
                            Are you in need of any additional design services?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Answers */}
                <div className="flex flex-col gap-2.5 items-end w-full">
                  <div className="flex flex-col gap-4 items-end justify-center">
                    {/* Row 1 */}
                    <div className="flex gap-4 items-start">
                      {designServicesOptions.slice(0, 3).map(option => (
                        <button
                          key={option.id}
                          onClick={() => toggleDesignService(option.id)}
                          className={`bg-white border ${
                            selectedDesignServices.includes(option.id)
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                                {option.label}
                              </p>
                            </div>
                            {selectedDesignServices.includes(option.id) && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex gap-4 items-start">
                      {designServicesOptions.slice(3, 6).map(option => (
                        <button
                          key={option.id}
                          onClick={() => toggleDesignService(option.id)}
                          className={`bg-white border ${
                            selectedDesignServices.includes(option.id)
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                                {option.label}
                              </p>
                            </div>
                            {selectedDesignServices.includes(option.id) && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Row 3 */}
                    <div className="flex gap-4 items-start">
                      {designServicesOptions.slice(6, 9).map(option => (
                        <button
                          key={option.id}
                          onClick={() => toggleDesignService(option.id)}
                          className={`bg-white border ${
                            selectedDesignServices.includes(option.id)
                              ? 'border-[#0a7c00] bg-[#f0f9ee]'
                              : 'border-[#d0d1d4]'
                          } rounded-lg w-[240px] relative hover:border-[#0a7c00] transition-colors`}
                        >
                          <div className="flex gap-4 items-center px-4 py-6 relative">
                            <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                              <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                                {option.label}
                              </p>
                            </div>
                            {selectedDesignServices.includes(option.id) && (
                              <div className="absolute right-4 size-4 top-4">
                                <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Row 4 - Wider option */}
                    <div className="flex gap-4 items-start">
                      <button
                        onClick={() => toggleDesignService('no-extras')}
                        className={`bg-white border ${
                          selectedDesignServices.includes('no-extras')
                            ? 'border-[#0a7c00] bg-[#f0f9ee]'
                            : 'border-[#d0d1d4]'
                        } rounded-lg w-[400px] relative hover:border-[#0a7c00] transition-colors`}
                      >
                        <div className="flex gap-4 items-center px-4 py-6 relative">
                          <div className="flex-1 flex flex-col gap-1.5 items-start justify-center">
                            <p className="font-['Inter:regular',_sans-serif] text-[14px] leading-[18px] text-[#333740] w-full text-left">
                              No extras, I'll handle it in-house.
                            </p>
                          </div>
                          {selectedDesignServices.includes('no-extras') && (
                            <div className="absolute right-4 size-4 top-4">
                              <img src="icons/green-circle-check-mark.svg" alt="Check" className="size-4" />
                            </div>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between w-full">
                {/* Left Container - Previous Button */}
                <div className="h-10 w-[320px]">
                  {currentStep > 1 && (
                    <button
                      onClick={handlePrevious}
                      className="bg-white border border-[#d0d1d4] flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                    >
                      <img src="icons/black-back-arrow.svg" alt="Previous" />
                      <span className="font-['Inter:regular',_sans-serif] text-[16px] leading-[20px] text-[#22252b]">Back</span>
                    </button>
                  )}
                </div>
                
                {/* Progress Indicators */}
                <div className="flex gap-1 items-center">
                  {Array.from({ length: totalSteps }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-10 rounded-sm ${
                        index < currentStep
                          ? 'bg-[#0da500]'
                          : 'bg-[#737780] opacity-15'
                      }`}
                    />
                  ))}
                </div>

                {/* Right Container - Skip and Next/View Summary Buttons */}
                <div className="flex gap-10 items-center justify-end w-[320px]">
                  {/* Skip Button - Only show if not on last step */}
                  {currentStep < totalSteps && (
                    <button
                      onClick={handleNext}
                      className="flex items-center justify-center gap-2.5 px-0 py-2.5 rounded-lg hover:underline transition-all"
                    >
                      <span className="font-['Inter:regular',_sans-serif] text-[16px] leading-[20px] text-[#075300]">Skip</span>
                    </button>
                  )}
                  
                  {/* Next/View Summary Button with Arrow */}
                  {currentStep < totalSteps ? (
                    <button
                      onClick={handleNext}
                      className="bg-[#0a7c00] flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg shadow-sm hover:bg-[#096d00] transition-colors"
                    >
                      <span className="font-['Inter:regular',_sans-serif] text-[16px] leading-[20px] text-white">Next</span>
                      <div className="size-5">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </button>
                  ) : (
                    <button
                      onClick={handleViewSummary}
                      className="bg-[#0a7c00] flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg shadow-sm hover:bg-[#096d00] transition-colors"
                    >
                      <span className="font-['Inter:regular',_sans-serif] text-[16px] leading-[20px] text-white">View summary</span>
                      <div className="size-5">
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Quote Sidebar */}
          <div className="bg-white border border-[#d0d1d4] border-solid rounded-[16px] w-[339px] flex-shrink-0 max-h-[calc(100vh-96px)] flex flex-col overflow-y-auto">
            <div className="box-border flex flex-col items-center p-[24px] rounded-[inherit] flex-1">
              <div className="flex flex-col gap-[32px] items-start w-full min-h-full">
                {/* Top Frame */}
                <div className="basis-0 flex flex-col gap-[16px] grow items-start min-w-px shrink-0 w-full">
                  <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic shrink-0 text-[#22252b] text-[20px] w-full">
                    Quote Summary
                  </p>
                  <div className="h-0 shrink-0 w-full">
                    <div className="border-t border-[#d0d1d4]" />
                  </div>
                  
                  {/* Template Container */}
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="font-['Inter:regular',_sans-serif] leading-[20px] min-w-full not-italic shrink-0 text-[#333740] text-[16px] w-[min-content]">
                      Template
                    </p>
                    {selectedCategory ? (
                      <div className="bg-white border border-[#d0d1d4] rounded-lg overflow-hidden w-full h-[68px]">
                        <div className="flex items-center h-full">
                          {/* Left: Image Container */}
                          <div className={`flex flex-col gap-[10px] h-full items-start overflow-hidden pb-0 pl-[10px] pr-0 pt-[10px] relative shrink-0 w-[120px] ${
                            selectedCategory === 'startup' ? 'bg-[#42ab18]' :
                            selectedCategory === 'saas' ? 'bg-[#4a90e2]' :
                            selectedCategory === 'ecommerce' ? 'bg-[#f5a623]' :
                            selectedCategory === 'blog' ? 'bg-[#bd10e0]' :
                            selectedCategory === 'event' ? 'bg-[#50e3c2]' :
                            selectedCategory === 'portfolio' ? 'bg-[#9013fe]' :
                            selectedCategory === 'news' ? 'bg-[#d0021b]' :
                            selectedCategory === 'business' ? 'bg-[#417505]' :
                            selectedCategory === 'agency' ? 'bg-[#ac7010]' :
                            'bg-[#ac7010]'
                          }`}>
                            <div className="flex-1 relative w-full rounded-tl-[2px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                              <img 
                                alt="" 
                                className="absolute inset-0 w-full h-full object-cover rounded-tl-[2px]" 
                                src={
                                  selectedCategory === 'startup' ? 'images/spark-card-lg.svg' :
                                  selectedCategory === 'saas' ? 'images/pulse-card-lg.svg' :
                                  selectedCategory === 'ecommerce' ? 'images/canvas-card-lg.svg' :
                                  selectedCategory === 'blog' ? 'images/nova-card-lg.svg' :
                                  selectedCategory === 'event' ? 'images/summit-card-lg.svg' :
                                  selectedCategory === 'portfolio' ? 'images/prism-card-lg.svg' :
                                  selectedCategory === 'news' ? 'images/nexus-card-lg.svg' :
                                  selectedCategory === 'business' ? 'images/horizon-card-lg.svg' :
                                  selectedCategory === 'agency' ? 'images/atlas-card-lg.svg' :
                                  'images/atlas-card-lg.svg'
                                } 
                              />
                            </div>
                          </div>
                          
                          {/* Right: Text and Button */}
                          <div className="flex-1 flex items-start justify-between h-full p-[12px]">
                            <div className="flex flex-col gap-[4px] justify-center h-full">
                              <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[24px] text-[#22252b] text-[18px]">
                                {selectedCategory === 'startup' ? 'Spark' :
                                 selectedCategory === 'saas' ? 'Pulse' :
                                 selectedCategory === 'ecommerce' ? 'Canvas' :
                                 selectedCategory === 'blog' ? 'Nova' :
                                 selectedCategory === 'event' ? 'Summit' :
                                 selectedCategory === 'portfolio' ? 'Prism' :
                                 selectedCategory === 'news' ? 'Nexus' :
                                 selectedCategory === 'business' ? 'Horizon' :
                                 selectedCategory === 'agency' ? 'Atlas' :
                                 'Custom'}
                              </p>
                              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] text-[#737780] text-[12px]">
                                {categories.find(c => c.id === selectedCategory)?.label}
                              </p>
                            </div>
                            <div className="flex items-end h-full">
                              <div className="border border-[#d0d1d4] border-solid flex gap-[8px] items-center p-[10px] rounded-[8px]">
                                <div className="size-[20px]">
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334" stroke="#22252b" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-[4px] items-center shrink-0 w-full">
                        <div className="shrink-0 size-[20px]">
                          <img alt="" className="block max-w-none size-full" src={imgError} />
                        </div>
                        <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic shrink-0 text-[#737780] text-[12px]">
                          Need more information to suggest template
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Features included */}
                  {selectedFeatures.length > 0 && (
                    <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
                      <p className="font-['Inter:Bold',_sans-serif] font-bold h-[18px] leading-[18px] not-italic shrink-0 text-[#333740] text-[14px] w-full">
                        Features included
                      </p>
                      {selectedFeatures.map(featureId => {
                        const feature = features.find(f => f.id === featureId);
                        return feature ? (
                          <div key={featureId} className="flex gap-[8px] items-center shrink-0 w-full">
                            <div className="shrink-0 size-[24px]">
                              <img alt="" className="block max-w-none size-full" src={imgCheckmark} />
                            </div>
                            <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[18px] min-h-px min-w-px not-italic shrink-0 text-[#333740] text-[14px]">
                              {feature.label}
                            </p>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="basis-0 flex flex-col gap-[16px] grow items-start min-w-px shrink-0 w-full">
                  <div className="h-0 shrink-0 w-full">
                    <div className="border-t border-[#d0d1d4]" />
                  </div>

                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="font-['Inter:regular',_sans-serif] leading-[20px] not-italic shrink-0 text-[#333740] text-[16px] w-full">
                      Pricing Package
                    </p>
                    {/* Check if we have enough information to show pricing */}
                    {!selectedCategory || !selectedPageOption ? (
                      // Warning state - Not enough information
                      <div className="flex gap-[4px] items-center shrink-0 w-full">
                        <div className="shrink-0 size-[20px]">
                          <img alt="" className="block max-w-none size-full" src={imgError} />
                        </div>
                        <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic shrink-0 text-[#737780] text-[12px]">
                          Need more information to show pricing
                        </p>
                      </div>
                    ) : (
                      // Premium Pricing Card
                      <div className="box-border flex flex-col gap-[16px] items-start overflow-hidden px-[16px] py-[24px] relative rounded-[16px] shrink-0 w-full bg-gradient-to-br from-gray-700 to-gray-800">
                        {/* Background Image */}
                        <div className="absolute inset-0 pointer-events-none">
                          <img 
                            alt="" 
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            src={`images/${getPricingPackage().toLowerCase()}-card-bg-image.svg`}
                            onLoad={() => setImageLoaded(true)}
                          />
                          <div className={`absolute bg-[rgba(0,0,0,0.3)] inset-0 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} />
                        </div>

                        {/* Pricing Package Title */}
                        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content] z-10">
                          {getPricingPackage()}
                        </p>

                        {/* Price */}
                        <div className="flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full z-10">
                          <div className="flex gap-[4px] items-center relative shrink-0">
                            <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[12px] text-center text-nowrap">
                              <p className="leading-[18px] whitespace-pre">Estimated cost</p>
                            </div>
                            <div className="relative shrink-0 size-[12px]">
                              <img alt="" className="block max-w-none size-full brightness-200" src={whiteInfoIcon} />
                            </div>
                          </div>
                          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">
                            $$$–$$$$
                          </p>
                        </div>

                        {/* Divider */}
                        <div className="h-0 relative shrink-0 w-full z-10">
                          <div className="border-t border-[#d0d1d4] w-full" />
                        </div>

                        {/* Includes */}
                        <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-full z-10">
                          <p className="font-['Inter:Bold',_sans-serif] font-bold h-[18px] leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-full">
                            Includes:
                          </p>
                          
                          {/* Page Option */}
                          {selectedPageOption && (
                            <div className="flex gap-[8px] items-center relative shrink-0 w-full">
                              <div className="relative shrink-0 size-[24px]">
                                <img src="icons/white-check-icon.svg" alt="Check"/>
                              </div>
                              <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">
                                {pageOptions.find(p => p.id === selectedPageOption)?.label}
                              </p>
                            </div>
                          )}

                          {/* User Option */}
                          {selectedUserOption && (
                            <div className="flex gap-[8px] items-center relative shrink-0 w-full">
                              <div className="relative shrink-0 size-[24px]">
                                <img src="icons/white-check-icon.svg" alt="Check"/>
                              </div>
                              <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">
                                {userOptions.find(u => u.id === selectedUserOption)?.label}
                              </p>
                            </div>
                          )}

                          {/* Customization Option */}
                          {selectedCustomizationOption && (
                            <div className="flex gap-[8px] items-center relative shrink-0 w-full">
                              <div className="relative shrink-0 size-[24px]">
                                <img src="icons/white-check-icon.svg" alt="Check"/>
                              </div>
                              <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">
                                {customizationOptions.find(c => c.id === selectedCustomizationOption)?.label}
                              </p>
                            </div>
                          )}

                          {/* Extra Functionality */}
                          {selectedExtraFunctionality.map(funcId => {
                            const func = extraFunctionalityOptions.find(f => f.id === funcId);
                            return func ? (
                              <div key={funcId} className="flex gap-[8px] items-center relative shrink-0 w-full">
                                <div className="relative shrink-0 size-[24px]">
                                  <img src="icons/white-check-icon.svg" alt="Check"/>
                                </div>
                                <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">
                                  {func.label}
                                </p>
                              </div>
                            ) : null;
                          })}

                          {/* Design Services */}
                          {selectedDesignServices.map(serviceId => {
                            const service = designServicesOptions.find(s => s.id === serviceId);
                            return service ? (
                              <div key={serviceId} className="flex gap-[8px] items-center relative shrink-0 w-full">
                                <div className="relative shrink-0 size-[24px]">
                                  <img src="icons/white-check-icon.svg" alt="Check"/>
                                </div>
                                <p className="basis-0 font-['Inter:regular',_sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">
                                  {service.label}
                                </p>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
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

