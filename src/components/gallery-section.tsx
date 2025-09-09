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
    <div className="flex items-end justify-between w-full px-16 pt-32 w-full" data-name="Header" data-node-id="8071:32925">
      <div className="flex flex-col items-start justify-center max-w-3xl" data-name="Title Container" data-node-id="8071:32926">
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic text-[#22252b] text-[48px]" data-node-id="8071:32927">
          <p className="leading-[56px] whitespace-nowrap">Explore our gallery of website templates</p>
        </div>
      </div>
      <div className="bg-[#0a7c00] flex gap-2 items-center justify-start px-6 py-2.5 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" data-name="Button" data-node-id="8071:32969">
        <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic text-[16px] text-nowrap text-white" id="node-I8071_32969-3966_10348">
          <p className="leading-[20px] whitespace-pre">View all</p>
        </div>
        <div className="relative shrink-0 size-5" data-name="material-symbols:arrow-forward-rounded" id="node-I8071_32969-8200_44164">
          <img alt="arrow" className="block max-w-none size-full" src={img} />
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-20 items-center justify-start px-2 pt-16 pb-32 w-full" data-name="Section Container" data-node-id="8067:23051">
      <div className="h-[400px] overflow-x-auto overflow-y-hidden w-full" data-name="Automatic Scroll" data-node-id="8266:74152">
        <div className="flex gap-6 h-full ">
          {templates.map((template) => (
            <div key={template.id} className="flex-1 flex-col gap-3 h-[400px] items-start justify-end p-10 rounded-[16px] relative overflow-hidden" data-name="Card">
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
