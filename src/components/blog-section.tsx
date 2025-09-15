import { useState } from 'react';

// Image assets - using local images from public/images directory
const imgPexelsMartProduction7550581 = "/images/experiments-improve.svg";
const imgPexelsMartProduction7550583 = "/images/the-power-of-real-time.svg";
const imgPexelsMartProduction7550584 = "/images/customizing-your-user-exp.svg";
const imgVector1 = "/images/green-card-bg-image.svg";
const imgVector5 = "/images/white-stars-icon.svg";
const imgPexelsMartProduction7550582 = "/images/experiments-improve.svg"; // Using same image as mask
const img = "/icons/heart-icon.svg";
const imgVuesaxLinearClock = "/icons/white-clock.svg";
const imgVuesaxLinearBook = "/icons/book-icon.svg";
const imgVuesaxOutlineGraph = "/icons/analytics-icon.svg";
const img1 = "/icons/black-star.svg";
const imgVuesaxLinearArrowLeft = "/icons/black-circle-left-arrow.svg";
const imgVuesaxLinearArrowRight = "/icons/green-circle-right-arrow.svg";
const imgVector = "/images/black-star.svg";
const imgVector2 = "/images/black-star.svg";
const imgVector3 = "/images/black-star.svg";
const imgVector4 = "/images/black-star.svg";

// Blog card data
const blogCards = [
  {
    id: 1,
    title: "3 experiments to improve your mobile funnel",
    description: "3 experiments to improve your mobile funnel3 experiments to improve your",
    category: "Designs",
    categoryIcon: img,
    image: imgPexelsMartProduction7550581,
    maskImage: imgPexelsMartProduction7550582,
    date: "April 21, 2023",
    readTime: "1 min to read"
  },
  {
    id: 2,
    title: "The Power of Real-Time Analytics",
    description: "How live data can drive smarter business decisions.",
    category: "Analytics",
    categoryIcon: imgVuesaxOutlineGraph,
    image: imgPexelsMartProduction7550583,
    maskImage: imgPexelsMartProduction7550582,
    date: "April 21, 2023",
    readTime: "1 min to read"
  },
  {
    id: 3,
    title: "Customizing Your User Experience",
    description: "Create a platform that adapts to your specific needs",
    category: "Customization",
    categoryIcon: img1,
    image: imgPexelsMartProduction7550584,
    maskImage: imgPexelsMartProduction7550582,
    date: "April 21, 2023",
    readTime: "1 min to read"
  },
  {
    id: 4,
    title: "Building Scalable Web Applications",
    description: "Learn the best practices for creating robust and scalable web applications that can handle growth.",
    category: "Technology",
    categoryIcon: img,
    image: imgPexelsMartProduction7550581,
    maskImage: imgPexelsMartProduction7550582,
    date: "April 21, 2023",
    readTime: "3 min to read"
  },
  {
    id: 5,
    title: "Modern UI/UX Design Principles",
    description: "Discover the latest trends and principles in modern user interface and user experience design.",
    category: "Design",
    categoryIcon: img1,
    image: imgPexelsMartProduction7550583,
    maskImage: imgPexelsMartProduction7550582,
    date: "April 21, 2023",
    readTime: "2 min to read"
  }
];

export default function Sections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // Show 3 cards at a time
  const maxIndex = blogCards.length - cardsToShow;

  const nextSlide = () => {
    setCurrentIndex(prev => prev < maxIndex ? prev + 1 : 0);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : maxIndex);
  };

  const visibleCards = blogCards.slice(currentIndex, currentIndex + cardsToShow);
  return (
    <div className="bg-[#041117] box-border content-stretch flex flex-col gap-2.5 items-start justify-center px-[140px] py-20 relative size-full" data-name="Sections" data-node-id="8671:26617">
      <div className="content-stretch flex flex-col gap-12 items-start justify-center relative shrink-0 w-full" data-name="Content" data-node-id="8671:26618">
        <div className="content-stretch flex flex-col gap-3 items-start justify-center leading-[0] relative shrink-0 w-full" data-name="Tilte&Subtitle" data-node-id="8671:26619">
          <div className="font-['Roboto:Medium',_sans-serif] font-medium relative shrink-0 text-[#7be385] text-[18px] tracking-[-0.3px] w-[760.5px]" data-node-id="8671:26620" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.65]" dir="auto">
              Our Blogs
            </p>
          </div>
          <div className="font-['Recoleta:Medium',_sans-serif] not-italic relative shrink-0 text-[56px] text-white tracking-[-1px] w-[804px]" data-node-id="8671:26621">
            <p className="leading-[1.15]">Explore Our Latest Resources</p>
          </div>
        </div>
        <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full overflow-hidden" data-name="List" data-node-id="8671:26622">
          {visibleCards.map((card) => (
            <div key={card.id} className="basis-0 box-border content-stretch flex gap-8 grow h-[587.809px] items-center justify-center min-h-px min-w-px p-[32px] relative rounded-[32px] shrink-0 transition-transform duration-300 ease-in-out" data-name="Cards">
              <div aria-hidden="true" className="absolute border-[#606162] border-[0.2px] border-solid inset-0 pointer-events-none rounded-[32px]" />
              <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0" data-name="content">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
                  <div 
                    className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[313.603px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[22.067px_0px] mask-size-[306px_285.093px] ml-[-22.068px] mt-0 rounded-[11.404px] w-[402.361px]" 
                    style={{ backgroundImage: `url('${card.image}')`, maskImage: `url('${card.maskImage}')` }} 
                  />
                </div>
                <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-name="text">
                    <div className="bg-[#65d770] box-border content-stretch flex gap-1 items-center justify-center px-2 py-1 relative rounded-[8px] shrink-0" data-name="Tag">
                      <div className="relative shrink-0 size-4" data-name="Icons">
                        <div className="absolute contents inset-0">
                          <img alt="" className="block max-w-none size-full" src={card.categoryIcon} />
                        </div>
                      </div>
                      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#041117] text-[14px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[1.45] whitespace-pre">{card.category}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 w-full">
                      <div className="flex flex-col font-['Recoleta:SemiBold',_sans-serif] justify-center not-italic relative shrink-0 text-[21.755px] text-white w-[294.787px]">
                        <p className="leading-[normal]">{card.title}</p>
                      </div>
                      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#e6e7e7] text-[16px] tracking-[-0.3px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[1.7]">{card.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0">
                    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
                      <div className="relative shrink-0 size-6" data-name="Icons">
                        <div className="absolute contents inset-0">
                          <img alt="" className="block max-w-none size-full" src={imgVuesaxLinearClock} />
                        </div>
                      </div>
                      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#bec1c2] text-[16px] text-nowrap tracking-[-0.3px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[1.7] whitespace-pre">{card.date}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
                      <div className="relative shrink-0 size-6" data-name="Icons">
                        <div className="absolute contents inset-0">
                          <img alt="" className="block max-w-none size-full" src={imgVuesaxLinearBook} />
                        </div>
                      </div>
                      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#bec1c2] text-[16px] text-nowrap tracking-[-0.3px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[1.7] whitespace-pre">{card.readTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="content-stretch flex gap-8 items-center justify-center relative shrink-0 w-full" data-node-id="8671:26727">
          <button 
            onClick={prevSlide}
            className="relative shrink-0 size-12 hover:opacity-80 transition-opacity cursor-pointer"
            data-name="Icons" 
            data-node-id="8671:26728"
          >
            <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-left" data-node-id="8671:26729">
              <img alt="" className="block max-w-none size-full" src={imgVuesaxLinearArrowLeft} />
            </div>
          </button>
          <button 
            onClick={nextSlide}
            className="relative shrink-0 size-12 hover:opacity-80 transition-opacity cursor-pointer"
            data-name="Icons" 
            data-node-id="8671:26735"
          >
            <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right" data-node-id="8671:26736">
              <img alt="" className="block max-w-none size-full" src={imgVuesaxLinearArrowRight} />
            </div>
          </button>
        </div>
      </div>
      <div className="absolute blur-[90.541px] filter h-[1248px] opacity-[0.08] top-[927.81px] translate-x-[-50%] w-[1250.94px]" data-node-id="8671:26742" style={{ left: "calc(50% + 0.472px)" }}>
        <div className="absolute h-[1248px] left-0 top-0 w-[1250.94px]" data-node-id="8671:26743">
          <div className="absolute inset-0" data-name="Vector" data-node-id="8671:26744">
            <img alt="" className="block max-w-none size-full" src={imgVector} />
          </div>
          <div className="absolute bottom-0 left-[33.65%] right-0 top-[33.73%]" data-name="Vector" data-node-id="8671:26745">
            <img alt="" className="block max-w-none size-full" height="827.094" src={imgVector1} width="830.038" />
          </div>
          <div className="absolute bottom-[36.56%] left-[67.19%] right-0 top-[33.68%]" data-node-id="8671:26746">
            <img alt="" className="block max-w-none size-full" src={imgVector2} />
          </div>
          <div className="absolute bottom-[33.72%] flex items-center justify-center left-0 right-[71.88%] top-[33.68%]">
            <div className="flex-none h-[351.828px] rotate-[90deg] scale-y-[-100%] w-[406.861px]">
              <div className="relative size-full" data-node-id="8671:26747">
                <img alt="" className="block max-w-none size-full" src={imgVector3} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-[33.65%] right-0 top-[33.73%]" data-name="Vector" data-node-id="8671:26748">
            <img alt="" className="block max-w-none size-full" src={imgVector4} />
          </div>
          <div className="absolute bottom-[33.73%] left-0 right-[33.88%] top-0" data-name="Vector" data-node-id="8671:26749">
            <img alt="" className="block max-w-none size-full" height="827.094" src={imgVector5} width="827.094" />
          </div>
        </div>
      </div>
    </div>
  );
}
