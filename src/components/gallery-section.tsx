import { moreTemplates } from '../data/templates';
import TemplateCard from './TemplateCard';
import type { MoreTemplate } from '../data/templates';
import type { ActiveSection } from '../types';
const img = "/images/white-stars-icon.svg";

interface GallerySectionProps {
  setActiveSection: (section: ActiveSection) => void;
  setSelectedTemplate: (template: MoreTemplate) => void;
}

export default function GallerySection({ setActiveSection, setSelectedTemplate }: GallerySectionProps) {
  return (
    <>
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full px-4 md:px-8 lg:px-16 pt-24 md:pt-30 lg:pt-40 gap-6 lg:gap-0" data-name="Header" data-node-id="8071:32925">
      <div className="flex flex-col items-start justify-center w-full lg:max-w-3xl" data-name="Title Container" data-node-id="8071:32926">
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic text-[#22252b] text-2xl md:text-3xl lg:text-4xl xl:text-[48px]" data-node-id="8071:32927">
          <p className="leading-tight md:leading-[40px] lg:leading-[48px] xl:leading-[56px]">Explore our gallery of website templates</p>
        </div>
      </div>
      <div className="bg-[#0a7c00] flex gap-2 items-center justify-start px-6 py-2.5 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]  w-fit self-start" data-name="Button" data-node-id="8071:32969">
        <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic text-[16px] text-nowrap text-white" id="node-I8071_32969-3966_10348">
          <p className="leading-[20px] whitespace-pre">View all</p>
        </div>
        <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" id="node-I8071_32969-8200_44164">
          <img alt="arrow" className="block max-w-none size-full" src={img} />
        </div>
      </div>
    </div>
    {/* Grid - Mobile: Single column, Desktop: Multi-column */}
    <div className="box-border content-stretch flex flex-col lg:flex-row gap-3 lg:gap-4 items-start justify-start px-4 lg:px-32 py-0 relative shrink-0 w-full my-10 lg:my-24">
          {moreTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              tag={template.tag}
              title={template.title}
              backgroundImage={template.backgroundImage}
              backgroundColor={template.backgroundColor}
              gradientTo={template.gradientTo}
              aspectRatio={template.aspectRatio}
              onClick={() => {
                // Set the selected template and navigate to SaaS component
                setSelectedTemplate(template);
                setActiveSection('saas');
              }}
            />
          ))}
        </div>
    </>
  );
}
