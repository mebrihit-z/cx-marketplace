const img1 = "/images/saas-card-bg.svg";
const img2 = "/images/e-commerce-card-bg-image.svg";
const img3 = "/images/startup-card-bg-image.svg";
const img4 = "/images/portfolio-card-bg-image.svg";
const img = "/images/white-stars-icon.svg";

const templates = [
  { id: 1, name: "SaaS 1.0", image: img1, bgColor: "#4dd58c", gradientTo: "#04261e" },
  { id: 2, name: "E-commerce 1.0", image: img2, bgColor: "#6d83d9", gradientTo: "#131d45" },
  { id: 3, name: "Startup 1.0", image: img3, bgColor: "#bd550f", gradientTo: "#421e06" },
];

export default function GallerySection() {
  return (
    <>
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full px-4 md:px-8 lg:px-16 pt-16 md:pt-24 lg:pt-32 gap-6 lg:gap-0" data-name="Header" data-node-id="8071:32925">
      <div className="flex flex-col items-start justify-center w-full lg:max-w-3xl" data-name="Title Container" data-node-id="8071:32926">
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic text-[#22252b] text-2xl md:text-3xl lg:text-4xl xl:text-[48px]" data-node-id="8071:32927">
          <p className="leading-tight md:leading-[40px] lg:leading-[48px] xl:leading-[56px]">Explore our gallery of website templates</p>
        </div>
      </div>
      <div className="bg-[#0a7c00] flex gap-2 items-center justify-start px-6 py-2.5 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-full sm:w-auto" data-name="Button" data-node-id="8071:32969">
        <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic text-[16px] text-nowrap text-white" id="node-I8071_32969-3966_10348">
          <p className="leading-[20px] whitespace-pre">View all</p>
        </div>
        <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" id="node-I8071_32969-8200_44164">
          <img alt="arrow" className="block max-w-none size-full" src={img} />
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 items-center justify-start px-2 pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32 w-full" data-name="Section Container" data-node-id="8067:23051">
      <div className="h-[300px] md:h-[350px] lg:h-[400px] overflow-x-auto overflow-y-hidden w-full" data-name="Automatic Scroll" data-node-id="8266:74152">
        <div className="flex gap-4 md:gap-6 h-full min-w-max">
          {templates.map((template) => (
            <div key={template.id} className="flex flex-col gap-3 h-full items-start justify-end p-6 md:p-8 lg:p-10 rounded-[16px] relative overflow-hidden min-w-[280px] md:min-w-[320px] lg:min-w-[400px]" data-name="Card">
              <div 
                className="absolute inset-0 rounded-[16px]"
                style={{ 
                  background: `linear-gradient(to bottom, ${template.bgColor} 0%, ${template.gradientTo} 85%)`
                }}
              />
              <div 
                className="absolute inset-0 rounded-[16px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${template.image}')` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
