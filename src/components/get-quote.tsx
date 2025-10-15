import { useState } from 'react';
import type { ActiveSection } from '../types';

const imgBackArrow = "icons/green-left-arrow.svg";
const imgError = "icons/info-icon.svg";

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
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L10.472 5.528L16 8L10.472 10.472L8 16L5.528 10.472L0 8L5.528 5.528L8 0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};


export default function GetQuote({ setActiveSection }: GetQuoteProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedPageOption, setSelectedPageOption] = useState<string>('');
  const [selectedUserOption, setSelectedUserOption] = useState<string>('');
  const [selectedCustomizationOption, setSelectedCustomizationOption] = useState<string>('');
  const [selectedExtraFunctionality, setSelectedExtraFunctionality] = useState<string[]>([]);
  const [selectedDesignServices, setSelectedDesignServices] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
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
    // Handle view summary logic
    console.log('=== Quote Summary ===');
    console.log('Selected categories:', selectedCategories);
    console.log('Selected features:', selectedFeatures);
    console.log('Selected page option:', selectedPageOption);
    console.log('Selected user option:', selectedUserOption);
    console.log('Selected customization option:', selectedCustomizationOption);
    console.log('Selected extra functionality:', selectedExtraFunctionality);
    console.log('Selected design services:', selectedDesignServices);
  };

  const handleBack = () => {
    setActiveSection('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f9f5] to-white">
      {/* Back Button */}
      <div className="pt-8 px-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-[#0a7c00] hover:opacity-80 transition-opacity"
        >
          <img src={imgBackArrow} alt="back" className="size-5" />
          <span className="font-['Inter:regular',_sans-serif] text-[16px] leading-[20px]">Back to Home</span>
        </button>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="flex items-start justify-between gap-8">
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
                <div className="flex flex-col gap-8 items-start max-w-[940px] w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl max-w-[646px]">
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
                          onClick={() => toggleCategory(category.id)}
                          className={`bg-white border ${
                            selectedCategories.includes(category.id)
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
                            {selectedCategories.includes(category.id) && (
                              <div className="absolute right-4 size-4 top-4">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                          onClick={() => toggleCategory(category.id)}
                          className={`bg-white border ${
                            selectedCategories.includes(category.id)
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
                            {selectedCategories.includes(category.id) && (
                              <div className="absolute right-4 size-4 top-4">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                          onClick={() => toggleCategory(category.id)}
                          className={`bg-white border ${
                            selectedCategories.includes(category.id)
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
                            {selectedCategories.includes(category.id) && (
                              <div className="absolute right-4 size-4 top-4">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                <div className="flex flex-col gap-8 items-start max-w-[940px] w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl max-w-[646px]">
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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                <div className="flex flex-col gap-8 items-start max-w-[940px] w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl max-w-[646px]">
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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
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
                <div className="flex flex-col gap-8 items-start max-w-[940px] w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl max-w-[646px]">
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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
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
                <div className="flex flex-col gap-8 items-start max-w-[940px] w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl max-w-[646px]">
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
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
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
                <div className="flex flex-col gap-8 items-start max-w-[940px] w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl max-w-[646px]">
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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
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
                <div className="flex flex-col gap-8 items-start max-w-[940px] w-full">
                  <div className="flex flex-col gap-0.5 items-start w-full">
                    <div className="flex gap-2 items-start">
                      <MarketplaceLogo />
                      <div className="bg-white border border-[#d5d5d5] rounded-bl-2xl rounded-br-2xl rounded-tr-2xl max-w-[646px]">
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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#0a7c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
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
                      <span className="font-['Inter:regular',_sans-serif] text-[16px] leading-[20px] text-[#22252b]">Previous</span>
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

                {/* Right Container - Next/View Summary Button */}
                <div className="flex gap-10 items-center justify-end w-[320px]">
                  {currentStep < totalSteps ? (
                    <button
                      onClick={handleNext}
                      className="bg-[#0a7c00] flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg shadow-sm hover:bg-[#096d00] transition-colors"
                    >
                      <span className="font-['Inter:regular',_sans-serif] text-[16px] leading-[20px] text-white">Next</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleViewSummary}
                      className="bg-[#0a7c00] flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg shadow-sm hover:bg-[#096d00] transition-colors"
                    >
                      <span className="font-['Inter:regular',_sans-serif] text-[16px] leading-[20px] text-white">View summary</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Quote Sidebar */}
          <div className="bg-white border border-[#d0d1d4] border-solid rounded-[16px] w-[339px] h-[730px] flex-shrink-0 sticky top-8">
            <div className="box-border flex flex-col items-center overflow-clip p-[24px] rounded-[inherit] h-full">
              <div className="flex flex-col gap-[32px] items-start w-full h-full">
                {/* Top Frame */}
                <div className="flex flex-col gap-[16px] items-start w-full h-[325px]">
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
                    <div className="flex gap-[4px] items-center shrink-0 w-full">
                      <div className="shrink-0 size-[20px]">
                        <img alt="" className="block max-w-none size-full" src={imgError} />
                      </div>
                      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic shrink-0 text-[#737780] text-[12px]">
                        Need more information to suggest template
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-[16px] items-start w-full h-[325px]">
                  <div className="h-0 shrink-0 w-full">
                    <div className="border-t border-[#d0d1d4]" />
                  </div>
                  <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
                    <p className="font-['Inter:regular',_sans-serif] leading-[20px] not-italic shrink-0 text-[#333740] text-[16px] w-full">
                      Pricing Package
                    </p>
                    <div className="flex gap-[4px] items-center shrink-0 w-full">
                      <div className="shrink-0 size-[20px]">
                        <img alt="" className="block max-w-none size-full" src={imgError} />
                      </div>
                      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic shrink-0 text-[#737780] text-[12px]">
                        Need more information to show pricing
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
  );
}

