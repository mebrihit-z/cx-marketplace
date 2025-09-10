import { useState, useEffect, useRef } from 'react';

const addIcon = "icons/add-icon.svg";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSection {
  id: string;
  title: string;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    id: 'templates',
    title: 'Templates',
    items: [
      {
        id: 'templates-1',
        question: 'Can I customize the templates?',
        answer: 'Absolutely! Most templates are fully customizable, allowing you to adjust colors, fonts, and layouts to fit your needs. You can modify any element to match your brand identity and requirements.'
      },
      {
        id: 'templates-2',
        question: 'What are templates and how can they help me?',
        answer: 'Templates are pre-designed formats that streamline your work, making it easier to create consistent and professional documents. They save time, ensure consistency, and provide a professional starting point for your projects.'
      },
      {
        id: 'templates-3',
        question: 'How do I choose the right template for my project?',
        answer: 'Consider the purpose of your project, the audience, and the type of content you need. Look for templates that align with these factors. Our templates are categorized by industry and use case to help you find the perfect match.'
      },
      {
        id: 'templates-4',
        question: 'Where can I find templates?',
        answer: 'You can find a variety of templates online through design websites, software applications, or even within your document editing tools. Our marketplace offers a curated collection of high-quality templates for various industries and purposes.'
      }
    ]
  },
  {
    id: 'pricing',
    title: 'Pricing',
    items: [
      {
        id: 'pricing-1',
        question: 'What pricing plans do you offer?',
        answer: 'We offer flexible pricing plans to suit different needs, including free templates, premium individual templates, and subscription plans for unlimited access to our entire template library.'
      },
      {
        id: 'pricing-2',
        question: 'Can I get a refund if I\'m not satisfied?',
        answer: 'Yes, we offer a 30-day money-back guarantee for all premium purchases. If you\'re not completely satisfied with your template, you can request a full refund within 30 days of purchase.'
      },
      {
        id: 'pricing-3',
        question: 'Do you offer discounts for bulk purchases?',
        answer: 'Yes, we offer volume discounts for businesses and agencies that need multiple templates. Contact our sales team to discuss custom pricing for your specific needs.'
      },
      {
        id: 'pricing-4',
        question: 'Are there any hidden fees?',
        answer: 'No hidden fees! Our pricing is transparent and includes all features listed. The only additional cost would be any custom modifications you request beyond the standard template.'
      }
    ]
  },
  {
    id: 'process',
    title: 'Process',
    items: [
      {
        id: 'process-1',
        question: 'How does the template delivery process work?',
        answer: 'Once you purchase a template, you\'ll receive an email with download links and access to your template files. You can also access your purchased templates anytime through your account dashboard.'
      },
      {
        id: 'process-2',
        question: 'What file formats do you provide?',
        answer: 'We provide templates in multiple formats including Adobe Photoshop (PSD), Adobe Illustrator (AI), Figma, Sketch, and sometimes HTML/CSS depending on the template type.'
      }
    ]
  },
  {
    id: 'training',
    title: 'Training',
    items: [
      {
        id: 'training-1',
        question: 'Do you provide training on how to use the templates?',
        answer: 'Yes! We offer comprehensive training resources including video tutorials, step-by-step guides, and live webinars to help you get the most out of your templates.'
      },
      {
        id: 'training-2',
        question: 'Is there ongoing support available?',
        answer: 'Absolutely! Our support team is available to help with any questions about using your templates. We also have an active community forum where users share tips and best practices.'
      }
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics',
    items: [
      {
        id: 'analytics-1',
        question: 'What analytics do you provide for template performance?',
        answer: 'We provide detailed analytics on template usage, performance metrics, and user engagement to help you understand how your templates are performing and identify areas for improvement.'
      },
      {
        id: 'analytics-2',
        question: 'Can I track how my templates are being used?',
        answer: 'Yes, our analytics dashboard shows you detailed insights into template usage, including download counts, user engagement, and performance metrics to help you optimize your designs.'
      }
    ]
  }
];

export default function FAQs() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>('templates');
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Add a small offset to account for any fixed headers
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Set up intersection observer to automatically update active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
      }
    );

    // Observe all section elements
    faqData.forEach((section) => {
      const element = sectionRefs.current[section.id];
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
    return (
    <div className="box-border content-stretch flex flex-col gap-20 items-start justify-start pb-16 pt-32 px-0 relative size-full" data-name="Section Container" data-node-id="8141:20154">
      <div className="box-border content-stretch flex items-start justify-between px-32 py-0 relative shrink-0 w-full" data-name="Header" data-node-id="8141:20155">
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[480px]" data-name="Title Container" data-node-id="8141:20156">
          <div className="font-['Inter:semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#22252b] text-[60px] w-full" data-node-id="8141:20157">
            <p className="leading-[72px]">FAQs</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-12 items-start justify-center relative shrink-0 w-[640px]" data-name="Subtitle Container" data-node-id="8141:20158">
          <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[18px] w-full" data-node-id="8141:20159">
            <p className="leading-[24px]">Our support team has compiled a list of the most frequently asked questions so you can easily find the answers you need.</p>
          </div>
        </div>
      </div>
      <div className="box-border content-start flex flex-wrap items-start justify-between px-32 py-0 relative shrink-0 w-full" data-name="Actions" data-node-id="8141:20440">
        <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0" data-name="Jump Links" data-node-id="8141:20609">
          <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#333740] text-[18px] text-nowrap" data-node-id="8141:20443">
            <p className="leading-[24px] whitespace-pre">Jump to topic</p>
          </div>
          <div className="content-end cursor-pointer flex flex-wrap gap-2 items-end justify-start relative shrink-0" data-name="Container" data-node-id="8141:20441">
            {faqData.map((section) => (
              <button 
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`box-border content-stretch flex gap-2.5 items-center justify-center overflow-visible px-6 py-2.5 relative rounded-[8px] shrink-0 transition-colors duration-200 ${
                  activeSection === section.id 
                    ? 'bg-[#0a7c00] text-white' 
                    : 'bg-white text-[#111215] hover:bg-gray-50'
                }`}
                data-name="Button"
              >
                <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ${
                  activeSection === section.id 
                    ? 'border-[#0a7c00]' 
                    : 'border-[#0a7c00]'
                }`} />
                <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap">
                  <p className="leading-[20px] whitespace-pre">{section.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {faqData.map((section, sectionIndex) => (
        <div 
          key={section.id}
          id={section.id}
          ref={(el) => { sectionRefs.current[section.id] = el; }}
          className={`box-border content-stretch flex flex-col gap-6 items-center justify-center px-32 relative size-full ${
            sectionIndex === 0 ? 'py-10' : 
            sectionIndex === faqData.length - 1 ? 'pb-32 pt-10' : 'py-10'
          }`}
          data-name={`Container ${sectionIndex + 1}`}
        >
          <div className="content-stretch flex items-start justify-start relative shrink-0 w-full" data-name="Header">
            <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#22252b] text-[32px] tracking-[-1px] w-full">
                <p className="leading-[40px]">{section.title}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full" data-name="Accordions">
            {section.items.map((item) => {
              const isOpen = openItems.has(item.id);
              return (
                <div key={item.id} className="w-full">
                  <button 
                    onClick={() => toggleItem(item.id)}
                    className="box-border content-stretch flex gap-4 items-start justify-start overflow-visible px-6 py-4 relative rounded-[8px] shrink-0 w-full transition-all duration-200 hover:bg-gray-50"
                    data-name="Accordion Light"
                  >
                    <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="basis-0 content-stretch flex gap-5 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333740] text-[20px] text-left">
                        <p className="leading-[24px]">{item.question}</p>
                      </div>
                      <div className="relative shrink-0 size-5 transition-transform duration-200" data-name="material-symbols:add-2-rounded">
                        <div className="relative w-full h-full">
                          <img 
                            alt="" 
                            className={`block max-w-none size-full transition-all duration-200 ${
                              isOpen ? 'opacity-0' : 'opacity-100'
                            }`} 
                            src={addIcon} 
                          />
                          {isOpen && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-3 h-0.5 bg-[#333740] rounded-sm"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 py-4 border-l-4 border-[#0a7c00] bg-gray-50">
                      <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative text-[#333740] text-[16px]">
                        <p className="leading-[24px]">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
    );
}