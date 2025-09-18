// Image assets for comparison table
const imgImage46 = "images/comparison-table-bg-image.svg";
const imgLine7 = "icons/line-image.svg";
const imgLine15 = "icons/line-white-image.png";
const imgMaterialSymbolsCheckRounded = "icons/green-check-icon.svg";
const xIcon = "icons/x-icon.svg";

export default function ComparisonTable() {
  return (
    <div className="bg-[#020d10] box-border content-stretch flex flex-col gap-12 items-start justify-start px-0 py-16 relative size-full" data-name="Section Container" data-node-id="8306:40159">
      <div className="absolute flex h-[1054px] items-center justify-center left-[-35px] top-0 hidden lg:block">
        <div className="flex-none rotate-[180deg]">
          <div className="bg-center bg-cover bg-no-repeat h-[1054px] opacity-70" data-name="image 46" data-node-id="8306:40160" style={{ backgroundImage: `url('${imgImage46}')` }} />
        </div>
      </div>
      <div className="box-border content-stretch flex items-start justify-start px-4 sm:px-8 lg:px-32 py-0 relative shrink-0 w-full" data-name="Header" data-node-id="8306:40161">
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full lg:w-[480px]" data-name="Title Container" data-node-id="8306:40162">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[32px] sm:text-[40px] lg:text-[48px] text-white w-full" data-node-id="8306:40163">
            <p className="leading-[40px] sm:leading-[48px] lg:leading-[56px]">Compare packages</p>
          </div>
        </div>
      </div>
      
      {/* Mobile Table */}
      <div className="box-border content-stretch flex items-center justify-center pr-4 pl-8 py-0 relative shrink-0 w-full lg:hidden" data-name="Mobile Container" data-node-id="8307:40236">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-[402px] ml-4" data-name="Mobile Table Container" data-node-id="8390:51388">
          {/* Top Headings */}
          <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[91.5px] mt-[0.001px] place-items-start relative" data-name="Top Headings" data-node-id="8650:42365">
            <div className="[grid-area:1_/_1] bg-[#737780] h-[82px] ml-0 mt-0 opacity-30 relative rounded-tl-[16px] rounded-tr-[16px] w-[278px]" data-node-id="8390:51392">
              <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-tl-[16.5px] rounded-tr-[16.5px]" />
            </div>
            <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center ml-[45.852px] mt-[40.999px] not-italic relative text-[14px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[42.703px]" data-node-id="8390:51396">
              <p className="leading-[18px]">Basic</p>
            </div>
            <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center ml-[138.985px] mt-[40.999px] not-italic relative text-[14px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[26.97px]" data-node-id="8390:51397">
              <p className="leading-[18px]">Pro</p>
            </div>
            <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center ml-[231.775px] mt-[40.999px] not-italic relative text-[14px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[68.55px]" data-node-id="8390:51398">
              <p className="leading-[18px]">Premium</p>
            </div>
          </div>
          
          {/* Lines */}
          <div className="[grid-area:1_/_1] h-[432px] ml-px mt-[154.005px] relative w-[368px]" data-name="Lines" data-node-id="8650:42364">
            <div className="absolute bottom-0 left-0 right-0 top-[-0.23%]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          
          {/* Horizontal Lines */}
          <div className="[grid-area:1_/_1] h-0 ml-[92px] mt-[154px] relative w-[278px]" data-name="Horizontal Line 0">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-[92px] mt-[226px] relative w-[278px]" data-name="Horizontal Line 1">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-[92px] mt-[298px] relative w-[278px]" data-name="Horizontal Line 2">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-[92px] mt-[370px] relative w-[278px]" data-name="Horizontal Line 3">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-[92px] mt-[442px] relative w-[278px]" data-name="Horizontal Line 4">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-[92px] mt-[514px] relative w-[278px]" data-name="Horizontal Line 5">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-[92px] mt-[586px] relative w-[278px]" data-name="Horizontal Line 6">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          
          {/* Vertical Lines in Left Column */}
          <div className="[grid-area:1_/_1] h-0 ml-0 mt-[154px] relative w-[92px]" data-name="Vertical Line 1">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine15} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-0 mt-[226px] relative w-[92px]" data-name="Vertical Line 2">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine15} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-0 mt-[298px] relative w-[92px]" data-name="Vertical Line 3">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine15} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-0 mt-[370px] relative w-[92px]" data-name="Vertical Line 4">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine15} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-0 mt-[442px] relative w-[92px]" data-name="Vertical Line 5">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine15} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-0 mt-[514px] relative w-[92px]" data-name="Vertical Line 6">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine15} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-0 mt-[586px] relative w-[92px]" data-name="Vertical Line 7">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine15} />
            </div>
          </div>
          
          {/* Left Headings */}
          <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[82.003px] place-items-start relative" data-name="Left Headings" data-node-id="8390:51406">
            <div className="[grid-area:1_/_1] bg-[#737780] h-[580px] ml-0 mt-0 opacity-30 relative rounded-bl-[16px] rounded-tl-[16px] w-[92px]" data-node-id="8390:51390">
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-bl-[16px] rounded-tl-[16px]" />
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[42.5px] mt-[27.001px] not-italic relative text-[12px] text-center text-white translate-x-[-50%] w-[79px]" data-node-id="8390:51416">
              <p className="leading-[18px]">Total pages</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[42.5px] mt-[90.001px] not-italic relative text-[12px] text-center text-white translate-x-[-50%] w-[79px]" data-node-id="8390:51417">
              <p className="leading-[18px]">Authorized users</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[46px] mt-[161.001px] not-italic relative text-[12px] text-center text-white translate-x-[-50%] w-[86px]" data-node-id="8390:51418">
              <p className="leading-[18px]">Customization options</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[42.5px] mt-[233.001px] not-italic relative text-[12px] text-center text-white translate-x-[-50%] w-[79px]" data-node-id="8390:51419">
              <p className="leading-[18px]">SEO optimization</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[42.5px] mt-[305.001px] not-italic relative text-[12px] text-center text-white translate-x-[-50%] w-[79px]" data-node-id="8390:51420">
              <p className="leading-[18px]">CRM integration</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[42.5px] mt-[377.001px] not-italic relative text-[12px] text-center text-white translate-x-[-50%] w-[79px]" data-node-id="8390:51421">
              <p className="leading-[18px]">Analytics dashboard</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-11 mt-[450.001px] not-italic relative text-[12px] text-center text-white translate-x-[-50%] w-[82px]" data-node-id="8390:51422">
              <p className="leading-[18px]">Web/graphic designer</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[42.5px] mt-[522.001px] not-italic relative text-[12px] text-center text-white translate-x-[-50%] w-[79px]" data-node-id="8390:51423">
              <p className="leading-[18px]">Custom template</p>
            </div>
          </div>
          
          {/* Column 1 - Basic */}
          <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[91px] mt-[0.005px] place-items-start relative" data-name="Column 1" data-node-id="8650:42363">
            <div className="[grid-area:1_/_1] bg-[#737780] h-[662px] ml-0 mt-0 opacity-[0.15] relative rounded-tl-[12px] w-[93px]" data-node-id="8390:51391">
              <div aria-hidden="true" className="absolute border-[0px_1px_1px] border-solid border-white inset-0 pointer-events-none rounded-tl-[12px]" />
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[46.5px] mt-[108.999px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51424">
              <p className="leading-[18px] whitespace-pre">Up to 100</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[47px] mt-[179.999px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51425">
              <p className="leading-[18px] whitespace-pre">Up to 10</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[47px] mt-[251.999px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51426">
              <p className="leading-[18px] whitespace-pre">Limited</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[46.5px] mt-[467px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51435">
              <p className="leading-[18px] whitespace-pre">Basic</p>
            </div>
            <div className="[grid-area:1_/_1] ml-[35px] mt-[392.999px] relative size-6" data-name="material-symbols:close-rounded" data-node-id="8483:51646">
              <img alt="" className="block max-w-none size-full" src={xIcon} />
            </div>
            <div className="[grid-area:1_/_1] ml-[35px] mt-[320.999px] relative size-6" data-name="material-symbols:close-rounded" data-node-id="8483:51641">
              <img alt="" className="block max-w-none size-full" src={xIcon} />
            </div>
            <div className="[grid-area:1_/_1] ml-[35px] mt-[537.999px] relative size-6" data-name="material-symbols:close-rounded" data-node-id="8483:51658">
              <img alt="" className="block max-w-none size-full" src={xIcon} />
            </div>
            <div className="[grid-area:1_/_1] ml-[35px] mt-[609.999px] relative size-6" data-name="material-symbols:close-rounded" data-node-id="8483:51664">
              <img alt="" className="block max-w-none size-full" src={xIcon} />
            </div>
          </div>
          
          {/* Column 2 - Pro */}
          <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[184px] mt-0 place-items-start relative" data-name="Column 2" data-node-id="8650:42356">
            <div className="[grid-area:1_/_1] bg-[#737780] h-[661px] ml-0 mt-0 opacity-[0.15] relative w-[92px]" data-node-id="8390:51393">
              <div aria-hidden="true" className="absolute border-[0px_1px_1px] border-solid border-white bottom-[-1px] left-[-1px] pointer-events-none right-[-1px] top-0" />
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[46.5px] mt-[109.004px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51436">
              <p className="leading-[18px] whitespace-pre">Up to 500</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[46px] mt-[180.004px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51437">
              <p className="leading-[18px] whitespace-pre">Up to 20</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[46.5px] mt-[252.004px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51438">
              <p className="leading-[18px] whitespace-pre">Advanced</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[46.5px] mt-[324.004px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51439">
              <p className="leading-[18px] whitespace-pre">Basic</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[46.5px] mt-[467.004px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51446">
              <p className="leading-[18px] whitespace-pre">Advanced</p>
            </div>
            <div className="[grid-area:1_/_1] ml-[34px] mt-[393.004px] relative size-6" data-name="material-symbols:close-rounded" data-node-id="8483:51655">
              <img alt="" className="block max-w-none size-full" src={xIcon} />
            </div>
            <div className="[grid-area:1_/_1] ml-[34px] mt-[610.004px] relative size-6" data-name="material-symbols:close-rounded" data-node-id="8483:51667">
              <img alt="" className="block max-w-none size-full" src={xIcon} />
            </div>
            <div className="[grid-area:1_/_1] ml-[34px] mt-[538.004px] relative size-6" data-name="material-symbols:check-rounded" data-node-id="8483:51670">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
            </div>
          </div>
          
          {/* Column 3 - Premium */}
          <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[276px] mt-[0.005px] place-items-start relative" data-name="Column 3" data-node-id="8650:42355">
            <div className="[grid-area:1_/_1] bg-[#737780] h-[662px] ml-0 mt-0 opacity-[0.15] relative rounded-br-[12px] rounded-tr-[12px] w-[94px]" data-node-id="8390:51389">
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-br-[12px] rounded-tr-[12px]" />
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[47.5px] mt-[108.999px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51447">
              <p className="leading-[18px] whitespace-pre">Up to 1000</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[47px] mt-[179.999px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51448">
              <p className="leading-[18px] whitespace-pre">Up to 30</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[47px] mt-[251.999px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51449">
              <p className="leading-[18px] whitespace-pre">Full</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[47.5px] mt-[324px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51450">
              <p className="leading-[18px] whitespace-pre">Advanced</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal ml-[47px] mt-[467px] not-italic relative text-[12px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8390:51455">
              <p className="leading-[18px] whitespace-pre">Intelligent</p>
            </div>
            <div className="[grid-area:1_/_1] ml-[35px] mt-[392.999px] relative size-6" data-name="material-symbols:check-rounded" data-node-id="8483:51684">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
            </div>
            <div className="[grid-area:1_/_1] ml-[35px] mt-[537.999px] relative size-6" data-name="material-symbols:check-rounded" data-node-id="8483:51690">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
            </div>
            <div className="[grid-area:1_/_1] ml-[35px] mt-[609.999px] relative size-6" data-name="material-symbols:check-rounded" data-node-id="8483:51693">
              <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop Table */}
      <div className="box-border content-stretch flex gap-[120px] items-center justify-center overflow-x-auto px-4 sm:px-8 lg:px-32 py-0 relative shrink-0 w-full hidden lg:flex" data-name="Desktop Container" data-node-id="8306:40164">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 min-w-[1200px]" data-name="Table Container" data-node-id="8306:40165">
          <div className="[grid-area:1_/_1] bg-[#737780] h-[662px] ml-[928px] mt-0 opacity-[0.15] relative rounded-br-[16px] rounded-tr-[16px] w-[309px]" data-node-id="8306:40166">
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-br-[16px] rounded-tr-[16px]" />
          </div>
          <div className="[grid-area:1_/_1] bg-[#737780] h-[580px] ml-0 mt-[82px] opacity-30 relative rounded-bl-[16px] rounded-tl-[16px] w-[309px]" data-node-id="8306:40167">
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-bl-[16px] rounded-tl-[16px]" />
          </div>
          <div className="[grid-area:1_/_1] bg-[#737780] h-[662px] ml-[308px] mt-0 opacity-[0.15] relative rounded-tl-[16px] w-[311px]" data-node-id="8306:40168">
            <div aria-hidden="true" className="absolute border-[0px_1px_1px] border-solid border-white inset-0 pointer-events-none rounded-tl-[16px]" />
          </div>
          <div className="[grid-area:1_/_1] bg-[#737780] h-[82px] ml-[308.5px] mt-0 opacity-30 relative rounded-tl-[16px] rounded-tr-[16px] w-[929px]" data-node-id="8306:40169">
            <div aria-hidden="true" className="absolute border border-solid border-white inset-[-0.5px] pointer-events-none rounded-tl-[16.5px] rounded-tr-[16.5px]" />
          </div>
          <div className="[grid-area:1_/_1] bg-[#737780] h-[662px] ml-[619px] mt-0 opacity-[0.15] relative w-[309px]" data-node-id="8306:40170">
            <div aria-hidden="true" className="absolute border-[0px_1px_1px] border-solid border-white inset-0 pointer-events-none" />
          </div>
          <div className="[grid-area:1_/_1] ml-[1066.5px] mt-[606px] relative size-8" data-name="material-symbols:check-rounded" data-node-id="8306:40171">
            <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
          </div>
          <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center ml-[464px] mt-[41px] not-italic relative text-[32px] text-center text-nowrap text-white tracking-[-1px] translate-x-[-50%] translate-y-[-50%]" data-node-id="8306:40175">
            <p className="leading-[40px] whitespace-pre">Basic</p>
          </div>
          <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center ml-[774.5px] mt-[41px] not-italic relative text-[32px] text-center text-nowrap text-white tracking-[-1px] translate-x-[-50%] translate-y-[-50%]" data-node-id="8306:40176">
            <p className="leading-[40px] whitespace-pre">Pro</p>
          </div>
          <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center ml-[1084.5px] mt-[41px] not-italic relative text-[32px] text-center text-nowrap text-white tracking-[-1px] translate-x-[-50%] translate-y-[-50%]" data-node-id="8306:40177">
            <p className="leading-[40px] whitespace-pre">Premium</p>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[154px] relative w-[928px]" data-node-id="8306:40178">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[226px] relative w-[928px]" data-node-id="8306:40179">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[298px] relative w-[928px]" data-node-id="8306:40180">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[370px] relative w-[928px]" data-node-id="8306:40181">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[442px] relative w-[928px]" data-node-id="8306:40182">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[514px] relative w-[928px]" data-node-id="8306:40183">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] h-0 ml-[309px] mt-[586px] relative w-[928px]" data-node-id="8306:40184">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <img alt="" className="block max-w-none size-full" src={imgLine7} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-px mt-[106px] place-items-start relative" data-node-id="8306:40185">
            <div className="[grid-area:1_/_1] h-0 ml-0 mt-12 relative w-[308px]" data-node-id="8306:40187">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine15} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] h-0 ml-0 mt-[120px] relative w-[308px]" data-node-id="8306:40188">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine15} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] h-0 ml-0 mt-48 relative w-[308px]" data-node-id="8306:40189">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine15} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] h-0 ml-0 mt-[264px] relative w-[308px]" data-node-id="8306:40190">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine15} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] h-0 ml-0 mt-[336px] relative w-[308px]" data-node-id="8306:40191">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine15} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] h-0 ml-0 mt-[408px] relative w-[308px]" data-node-id="8306:40192">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine15} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] h-0 ml-0 mt-[480px] relative w-[308px]" data-node-id="8306:40193">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img alt="" className="block max-w-none size-full" src={imgLine15} />
              </div>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-0 not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40195">
              <p className="leading-[24px] whitespace-pre">Total pages</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-[72px] not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40196">
              <p className="leading-[24px] whitespace-pre">Authorized users</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-36 not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40197">
              <p className="leading-[24px] whitespace-pre">Customization options</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-[216px] not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40198">
              <p className="leading-[24px] whitespace-pre">SEO optimization</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-72 not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40199">
              <p className="leading-[24px] whitespace-pre">CRM integration</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-[360px] not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40200">
              <p className="leading-[24px] whitespace-pre">Analytics dashboard</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-[432px] not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40201">
              <p className="leading-[24px] whitespace-pre">Web/graphic designer</p>
            </div>
            <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-[25px] mt-[504px] not-italic relative text-[20px] text-nowrap text-white" data-node-id="8306:40202">
              <p className="leading-[24px] whitespace-pre">Custom template</p>
            </div>
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[463.5px] mt-[108px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40203">
            <p className="leading-[20px] whitespace-pre">Up to 100</p>
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[463.5px] mt-[180px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40204">
            <p className="leading-[20px] whitespace-pre">Up to 10</p>
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[463.5px] mt-[252px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40205">
            <p className="leading-[20px] whitespace-pre">Limited</p>
          </div>
          <div className="[grid-area:1_/_1] ml-[447.5px] mt-[534px] relative size-8" data-name="material-symbols:close-rounded" data-node-id="8310:44794">
            <img alt="" className="block max-w-none size-full" src={xIcon} />
          </div>
          <div className="[grid-area:1_/_1] ml-[447.5px] mt-[390px] relative size-8" data-name="material-symbols:close-rounded" data-node-id="8306:40208">
            <img alt="" className="block max-w-none size-full" src={xIcon} />
          </div>
          <div className="[grid-area:1_/_1] ml-[447.5px] mt-[318px] relative size-8" data-name="material-symbols:close-rounded" data-node-id="8306:40210">
            <img alt="" className="block max-w-none size-full" src={xIcon} />
          </div>
          <div className="[grid-area:1_/_1] ml-[447.5px] mt-[606px] relative size-8" data-name="material-symbols:close-rounded" data-node-id="8306:40212">
            <img alt="" className="block max-w-none size-full" src={xIcon} />
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[463px] mt-[468px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8310:44754">
            <p className="leading-[20px] whitespace-pre">Basic</p>
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[773.5px] mt-[108px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40216">
            <p className="leading-[20px] whitespace-pre">Up to 500</p>
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[773.5px] mt-[180px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40217">
            <p className="leading-[20px] whitespace-pre">Up to 20</p>
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[773.5px] mt-[252px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40218">
            <p className="leading-[20px] whitespace-pre">Advanced</p>
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[774px] mt-[324px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40219">
            <p className="leading-[20px] whitespace-pre">Basic</p>
          </div>
          <div className="[grid-area:1_/_1] ml-[757.5px] mt-[534px] relative size-8" data-name="material-symbols:check-rounded" data-node-id="8306:40220">
            <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
          </div>
          <div className="[grid-area:1_/_1] ml-[757.5px] mt-[606px] relative size-8" data-name="material-symbols:close-rounded" data-node-id="8306:40222">
            <img alt="" className="block max-w-none size-full" src={xIcon} />
          </div>
          <div className="[grid-area:1_/_1] ml-[757.5px] mt-[390px] relative size-8" data-name="material-symbols:close-rounded" data-node-id="8306:40224">
            <img alt="" className="block max-w-none size-full" src={xIcon} />
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[773.5px] mt-[468px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40226">
            <p className="leading-[20px] whitespace-pre">Advanced</p>
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[1082.5px] mt-[108px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40227">
            <p className="leading-[20px] whitespace-pre">Up to 1000</p>
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[1082px] mt-[180px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40228">
            <p className="leading-[20px] whitespace-pre">Up to 30</p>
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[1082.5px] mt-[252px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40229">
            <p className="leading-[20px] whitespace-pre">Full</p>
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[1082.5px] mt-[324px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40230">
            <p className="leading-[20px] whitespace-pre">Advanced</p>
          </div>
          <div className="[grid-area:1_/_1] ml-[1066.5px] mt-[389px] relative size-8" data-name="material-symbols:check-rounded" data-node-id="8306:40231">
            <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
          </div>
          <div className="[grid-area:1_/_1] ml-[1066.5px] mt-[534px] relative size-8" data-name="material-symbols:check-rounded" data-node-id="8306:40233">
            <img alt="" className="block max-w-none size-full" src={imgMaterialSymbolsCheckRounded} />
          </div>
          <div className="[grid-area:1_/_1] font-['Inter:regular',_sans-serif] ml-[1082px] mt-[468px] not-italic relative text-[16px] text-center text-nowrap text-white translate-x-[-50%]" data-node-id="8306:40235">
            <p className="leading-[20px] whitespace-pre">Intelligent</p>
          </div>
        </div>
      </div>
    </div>
  );
}
