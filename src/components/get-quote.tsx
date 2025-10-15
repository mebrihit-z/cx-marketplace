import { useState } from 'react';
import type { ActiveSection } from '../types';

const imgArrowForward = "icons/white-right-arrow.svg";
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

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'link';
  icon?: boolean;
}

const Button = ({ text, onClick, variant = 'primary', icon = false }: ButtonProps) => {
  if (variant === 'link') {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-lg shadow-sm hover:opacity-80 transition-opacity"
      >
        <span className="font-['Inter:regular',_sans-serif] text-[16px] leading-[20px] text-[#075300]">{text}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="bg-[#0a7c00] flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg shadow-sm hover:bg-[#096d00] transition-colors"
    >
      <span className="font-['Inter:regular',_sans-serif] text-[16px] leading-[20px] text-white">{text}</span>
      {icon && (
        <div className="size-5">
          <img alt="" className="block max-w-none size-full" src={imgArrowForward} />
        </div>
      )}
    </button>
  );
};

export default function GetQuote({ setActiveSection }: GetQuoteProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentStep] = useState(1);
  const totalSteps = 7;

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleNext = () => {
    // Handle next step logic
    console.log('Selected categories:', selectedCategories);
  };

  const handleSkip = () => {
    // Handle skip logic
    console.log('Skipped step');
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
              {/* Prompt Box */}
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

              {/* Actions */}
              <div className="flex items-center justify-between w-full">
                <div className="h-10 w-[320px]" />
                
                {/* Progress Indicators */}
                <div className="flex gap-1 items-center">
                  {Array.from({ length: totalSteps }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-10 rounded-sm ${
                        index === currentStep - 1
                          ? 'bg-[#0da500]'
                          : 'bg-[#737780] opacity-15'
                      }`}
                    />
                  ))}
                </div>

                {/* Right Container */}
                <div className="flex gap-10 items-center justify-end w-[320px]">
                  <Button text="Skip" variant="link" onClick={handleSkip} />
                  <Button text="Next" variant="primary" icon={true} onClick={handleNext} />
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

