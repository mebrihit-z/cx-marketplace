// Image assets from Figma
// const imgXIcon = "assets/images/x-icon.svg";
// const imgVector6 = "images/preview-log.svg";
// const imgVuesaxLinearArrowRight = "images/black-right-arrow.svg";

const imgLogo1 = "images/Logomark_spark.svg";
const imgLogo2 = "images/Logomark_hexa.svg";
const imgLogo3 = "images/Logomark_cube.svg";
const imgHero = "images/herocardview.png";

export default function PreviewHero() {
  return (
    <>
      {/* Header menu*/}
      {/* <div className="bg-[#041117] w-full">
        <div className="w-full bg-[#041117] px-40 py-10 fixed content-stretch flex items-center justify-between z-50" data-name="Header" data-node-id="8671:26051">
              <div className="content-stretch flex gap-16 items-center justify-start relative shrink-0" data-name="Left" data-node-id="8671:26052">
                <div className="h-[33.455px] relative shrink-0 w-[92px]" data-name="Original Logo" data-node-id="8671:26053">
                  <div className="absolute bottom-0 left-0 right-[0.91%] top-0" data-name="Original Logo" data-node-id="8671:26054">
                    <div className="absolute bottom-[-1.63%] font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[36.7%] not-italic right-[-12.38%] text-[26.764px] text-nowrap text-white top-0 tracking-[-0.8364px]" data-node-id="8671:26055">
                      <p className="leading-[1.25] whitespace-pre">Stain.</p>
                    </div>
                    <div className="absolute bottom-[12.07%] left-0 right-[70.64%] top-[8.12%]" data-node-id="8671:26056">
                      <div className="absolute h-[26.701px] left-0 top-0 w-[26.764px]" data-node-id="8671:26057">
                        <div className="absolute inset-0" data-name="Vector" data-node-id="8671:26058">
                          <img alt="" className="block max-w-none size-full" src={imgVector6} />
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="menu" data-node-id="8671:26064">
                  <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26065">
                    <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#7be385] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26066" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.7] whitespace-pre">Home</p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26067">
                    <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26069" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.7] whitespace-pre">About</p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26070">
                    <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26072" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.7] whitespace-pre">Integration</p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26073">
                    <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26075" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.7] whitespace-pre">Pricing</p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26076">
                    <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26078" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.7] whitespace-pre">Contact</p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26079">
                    <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26081" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.7] whitespace-pre">Blog</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-8 items-center justify-center relative shrink-0" data-name="button" data-node-id="8671:26082">
                <div className="box-border content-stretch flex gap-3 items-center justify-center px-0 py-0.5 relative shrink-0" data-name="Button" data-node-id="8671:26083">
                  <div className="flex flex-col font-['Roboto:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f2fcf3] text-[16px] text-center text-nowrap" data-node-id="8671:26093" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.5] whitespace-pre">Sign In</p>
                  </div>
                </div>
                <div className="bg-[#7be385] box-border content-stretch flex gap-3 items-center justify-center px-6 py-4 relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Button" data-node-id="8671:26103" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 187 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.9329 -4.8454 30.996 7.8709 148.74 46.309)\\\'><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0.4)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
                  <div className="flex flex-col font-['Roboto:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#041117] text-[16px] text-center text-nowrap" data-node-id="8671:26113" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.5] whitespace-pre">Start Free Trial</p>
                  </div>
                  <div className="relative shrink-0 size-5" data-name="Icons" data-node-id="8671:26114">
                    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right" data-node-id="8671:26115">
                      <img alt="" className="block max-w-none size-full" src={imgVuesaxLinearArrowRight} />
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div> */}
      <div className='text-white text-2xl font-bold py-20 pl-40 bg-[#041117] w-full box-border content-stretch'>
        <div className="grid grid-cols-2 gap-4">
          <div className="hero__left">
            <h1 className="heading text-[72px] font-normal mb-8">
              Design unique <span className="text-[#7BE385]">ideas</span>, elevate results.
            </h1>
            <p className="text-[18px] text-[#B1B6B8] mb-8">
              Transform your workflow with a unique design that boosts creativity,
              improves efficiency, and drives results.
            </p>
            <div className="flex gap-4 mb-20">
            <div className="bg-[#FFFFFF] box-border content-stretch flex gap-3 items-center justify-center px-6 py-4 relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Button" data-node-id="8671:26103" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 187 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.9329 -4.8454 30.996 7.8709 148.74 46.309)\\\'><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0.4)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
                    <div className="flex flex-col font-['Roboto:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#041117] text-[16px] text-center text-nowrap" data-node-id="8671:26113" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.5] whitespace-pre">Book a Demo</p>
                    </div>
                  </div>
              <div className="bg-[#7be385] box-border content-stretch flex gap-3 items-center justify-center px-6 py-4 relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Button" data-node-id="8671:26103" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 187 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.9329 -4.8454 30.996 7.8709 148.74 46.309)\\\'><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0.4)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
                    <div className="flex flex-col font-['Roboto:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#041117] text-[16px] text-center text-nowrap" data-node-id="8671:26113" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.5] whitespace-pre">Start Free Trial</p>
                    </div>
                    <div className="relative shrink-0 size-5" data-name="Icons" data-node-id="8671:26114">
                      <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right" data-node-id="8671:26115">
                        <img alt="" className="block max-w-none size-full" src="images/arrowblack.svg" />
                      </div>
                    </div>
                  </div>
            </div>

            <div className="trust mb-8">
              <div className="text-[14px] text-[#7be385] mb-4">Trusted by</div>
              <div className="heading text-[24px] mb-4">Thrive with 3,500+ businesses <span className="inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="78" height="12" viewBox="0 0 78 12" fill="none">
    <path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM66.6667 6C66.6667 8.94552 69.0545 11.3333 72 11.3333C74.9455 11.3333 77.3333 8.94552 77.3333 6C77.3333 3.05448 74.9455 0.666667 72 0.666667C69.0545 0.666667 66.6667 3.05448 66.6667 6ZM6 6V7H72V6V5H6V6Z" fill="#7BE385"/>
    <path d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM66.6667 6C66.6667 8.94552 69.0545 11.3333 72 11.3333C74.9455 11.3333 77.3333 8.94552 77.3333 6C77.3333 3.05448 74.9455 0.666667 72 0.666667C69.0545 0.666667 66.6667 3.05448 66.6667 6ZM6 6V7H72V6V5H6V6Z" fill="url(#paint0_radial_8671_26178)" fill-opacity="0.2"/>
    <defs>
    <radialGradient id="paint0_radial_8671_26178" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39 6.5) scale(33 0.5)">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="white" stop-opacity="0.4"/>
    </radialGradient>
    </defs>
    </svg>
    </span>
    </div>
              <div className="flex gap-4">
                <div className="inline-flex gap-8 items-center pt-2 pb-2">
                <img className="" src={imgLogo1} alt=""/>
                  {/* BioShift */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="67" height="14" viewBox="0 0 67 14" fill="none">
      <path d="M0.304688 12.7806V10.7506H1.91468V2.56058H0.304688V0.530584H6.60465C7.35131 0.530584 7.99881 0.658917 8.54714 0.915584C9.10713 1.16058 9.5388 1.51642 9.84213 1.98308C10.1571 2.43808 10.3146 2.98642 10.3146 3.62808V3.80308C10.3146 4.36308 10.2096 4.82392 9.99963 5.18559C9.78963 5.53559 9.5388 5.80975 9.24713 6.00809C8.96713 6.19475 8.6988 6.32892 8.44214 6.41058V6.72558C8.6988 6.79559 8.9788 6.92975 9.28213 7.12809C9.58546 7.31475 9.84213 7.58892 10.0521 7.95059C10.2738 8.31225 10.3846 8.78475 10.3846 9.36809V9.54309C10.3846 10.2198 10.2271 10.8031 9.91213 11.2931C9.59713 11.7714 9.15963 12.1389 8.59964 12.3956C8.05131 12.6523 7.40964 12.7806 6.67465 12.7806H0.304688ZM4.22466 10.6806H6.39465C6.89631 10.6806 7.29881 10.5581 7.60214 10.3131C7.91714 10.0681 8.07464 9.71809 8.07464 9.26309V9.08809C8.07464 8.63309 7.92297 8.28309 7.61964 8.03809C7.31631 7.79309 6.90798 7.67059 6.39465 7.67059H4.22466V10.6806ZM4.22466 5.57059H6.35965C6.83798 5.57059 7.22881 5.44808 7.53214 5.20308C7.84714 4.95808 8.00464 4.61975 8.00464 4.18808V4.01308C8.00464 3.56975 7.85297 3.23142 7.54964 2.99808C7.24631 2.75308 6.84965 2.63058 6.35965 2.63058H4.22466V5.57059Z" fill="#D6F6D9"/>
      <path d="M0.304688 12.7806V10.7506H1.91468V2.56058H0.304688V0.530584H6.60465C7.35131 0.530584 7.99881 0.658917 8.54714 0.915584C9.10713 1.16058 9.5388 1.51642 9.84213 1.98308C10.1571 2.43808 10.3146 2.98642 10.3146 3.62808V3.80308C10.3146 4.36308 10.2096 4.82392 9.99963 5.18559C9.78963 5.53559 9.5388 5.80975 9.24713 6.00809C8.96713 6.19475 8.6988 6.32892 8.44214 6.41058V6.72558C8.6988 6.79559 8.9788 6.92975 9.28213 7.12809C9.58546 7.31475 9.84213 7.58892 10.0521 7.95059C10.2738 8.31225 10.3846 8.78475 10.3846 9.36809V9.54309C10.3846 10.2198 10.2271 10.8031 9.91213 11.2931C9.59713 11.7714 9.15963 12.1389 8.59964 12.3956C8.05131 12.6523 7.40964 12.7806 6.67465 12.7806H0.304688ZM4.22466 10.6806H6.39465C6.89631 10.6806 7.29881 10.5581 7.60214 10.3131C7.91714 10.0681 8.07464 9.71809 8.07464 9.26309V9.08809C8.07464 8.63309 7.92297 8.28309 7.61964 8.03809C7.31631 7.79309 6.90798 7.67059 6.39465 7.67059H4.22466V10.6806ZM4.22466 5.57059H6.35965C6.83798 5.57059 7.22881 5.44808 7.53214 5.20308C7.84714 4.95808 8.00464 4.61975 8.00464 4.18808V4.01308C8.00464 3.56975 7.85297 3.23142 7.54964 2.99808C7.24631 2.75308 6.84965 2.63058 6.35965 2.63058H4.22466V5.57059Z" fill="url(#paint0_radial_8671_26183)" fill-opacity="0.2"/>
      <path d="M15.6007 13.0256C14.7374 13.0256 13.9615 12.8506 13.2732 12.5006C12.5849 12.1506 12.0424 11.6431 11.6457 10.9781C11.249 10.3131 11.0507 9.51392 11.0507 8.58059V8.30059C11.0507 7.36725 11.249 6.56809 11.6457 5.90309C12.0424 5.23808 12.5849 4.73058 13.2732 4.38058C13.9615 4.03058 14.7374 3.85558 15.6007 3.85558C16.464 3.85558 17.2398 4.03058 17.9282 4.38058C18.6165 4.73058 19.159 5.23808 19.5557 5.90309C19.9523 6.56809 20.1507 7.36725 20.1507 8.30059V8.58059C20.1507 9.51392 19.9523 10.3131 19.5557 10.9781C19.159 11.6431 18.6165 12.1506 17.9282 12.5006C17.2398 12.8506 16.464 13.0256 15.6007 13.0256ZM15.6007 11.0656C16.2773 11.0656 16.8373 10.8498 17.2807 10.4181C17.724 9.97475 17.9457 9.34475 17.9457 8.52809V8.35309C17.9457 7.53642 17.724 6.91225 17.2807 6.48059C16.849 6.03725 16.289 5.81559 15.6007 5.81559C14.924 5.81559 14.364 6.03725 13.9207 6.48059C13.4774 6.91225 13.2557 7.53642 13.2557 8.35309V8.52809C13.2557 9.34475 13.4774 9.97475 13.9207 10.4181C14.364 10.8498 14.924 11.0656 15.6007 11.0656Z" fill="#D6F6D9"/>
      <path d="M15.6007 13.0256C14.7374 13.0256 13.9615 12.8506 13.2732 12.5006C12.5849 12.1506 12.0424 11.6431 11.6457 10.9781C11.249 10.3131 11.0507 9.51392 11.0507 8.58059V8.30059C11.0507 7.36725 11.249 6.56809 11.6457 5.90309C12.0424 5.23808 12.5849 4.73058 13.2732 4.38058C13.9615 4.03058 14.7374 3.85558 15.6007 3.85558C16.464 3.85558 17.2398 4.03058 17.9282 4.38058C18.6165 4.73058 19.159 5.23808 19.5557 5.90309C19.9523 6.56809 20.1507 7.36725 20.1507 8.30059V8.58059C20.1507 9.51392 19.9523 10.3131 19.5557 10.9781C19.159 11.6431 18.6165 12.1506 17.9282 12.5006C17.2398 12.8506 16.464 13.0256 15.6007 13.0256ZM15.6007 11.0656C16.2773 11.0656 16.8373 10.8498 17.2807 10.4181C17.724 9.97475 17.9457 9.34475 17.9457 8.52809V8.35309C17.9457 7.53642 17.724 6.91225 17.2807 6.48059C16.849 6.03725 16.289 5.81559 15.6007 5.81559C14.924 5.81559 14.364 6.03725 13.9207 6.48059C13.4774 6.91225 13.2557 7.53642 13.2557 8.35309V8.52809C13.2557 9.34475 13.4774 9.97475 13.9207 10.4181C14.364 10.8498 14.924 11.0656 15.6007 11.0656Z" fill="url(#paint1_radial_8671_26183)" fill-opacity="0.2"/>
      <path d="M21.311 12.7806V0.530584H23.516V12.7806H21.311Z" fill="#D6F6D9"/>
      <path d="M21.311 12.7806V0.530584H23.516V12.7806H21.311Z" fill="url(#paint2_radial_8671_26183)" fill-opacity="0.2"/>
      <path d="M28.4094 12.7806C27.8377 12.7806 27.371 12.6056 27.0094 12.2556C26.6594 11.8939 26.4844 11.4156 26.4844 10.8206V5.92059H24.3144V4.10058H26.4844V1.40558H28.6894V4.10058H31.0694V5.92059H28.6894V10.4356C28.6894 10.7856 28.8527 10.9606 29.1794 10.9606H30.8594V12.7806H28.4094Z" fill="#D6F6D9"/>
      <path d="M28.4094 12.7806C27.8377 12.7806 27.371 12.6056 27.0094 12.2556C26.6594 11.8939 26.4844 11.4156 26.4844 10.8206V5.92059H24.3144V4.10058H26.4844V1.40558H28.6894V4.10058H31.0694V5.92059H28.6894V10.4356C28.6894 10.7856 28.8527 10.9606 29.1794 10.9606H30.8594V12.7806H28.4094Z" fill="url(#paint3_radial_8671_26183)" fill-opacity="0.2"/>
      <path d="M35.7953 13.0256C34.6636 13.0256 33.7361 12.7806 33.0128 12.2906C32.2895 11.8006 31.852 11.1006 31.7003 10.1906L33.7303 9.66559C33.812 10.0739 33.9461 10.3948 34.1328 10.6281C34.3311 10.8614 34.5703 11.0306 34.8503 11.1356C35.142 11.2289 35.457 11.2756 35.7953 11.2756C36.3086 11.2756 36.6878 11.1881 36.9328 11.0131C37.1778 10.8264 37.3003 10.5989 37.3003 10.3306C37.3003 10.0623 37.1836 9.85809 36.9503 9.71809C36.7169 9.56642 36.3436 9.44392 35.8303 9.35059L35.3403 9.26309C34.7336 9.14642 34.1795 8.98892 33.6778 8.79059C33.1761 8.58059 32.7736 8.29475 32.4703 7.93309C32.167 7.57142 32.0153 7.10475 32.0153 6.53309C32.0153 5.66975 32.3303 5.01058 32.9603 4.55558C33.5903 4.08892 34.4186 3.85558 35.4453 3.85558C36.4136 3.85558 37.2186 4.07142 37.8603 4.50308C38.5019 4.93475 38.9219 5.50059 39.1203 6.20059L37.0728 6.83059C36.9794 6.38725 36.7869 6.07225 36.4953 5.88558C36.2153 5.69892 35.8653 5.60559 35.4453 5.60559C35.0253 5.60559 34.7045 5.68142 34.4828 5.83308C34.2611 5.97308 34.1503 6.17142 34.1503 6.42808C34.1503 6.70809 34.267 6.91809 34.5003 7.05808C34.7336 7.18642 35.0486 7.28558 35.4453 7.35559L35.9353 7.44309C36.5886 7.55975 37.1778 7.71725 37.7028 7.91559C38.2394 8.10225 38.6594 8.37642 38.9628 8.73809C39.2778 9.08809 39.4353 9.56642 39.4353 10.1731C39.4353 11.0831 39.1028 11.7889 38.4378 12.2906C37.7844 12.7806 36.9036 13.0256 35.7953 13.0256Z" fill="#D6F6D9"/>
      <path d="M35.7953 13.0256C34.6636 13.0256 33.7361 12.7806 33.0128 12.2906C32.2895 11.8006 31.852 11.1006 31.7003 10.1906L33.7303 9.66559C33.812 10.0739 33.9461 10.3948 34.1328 10.6281C34.3311 10.8614 34.5703 11.0306 34.8503 11.1356C35.142 11.2289 35.457 11.2756 35.7953 11.2756C36.3086 11.2756 36.6878 11.1881 36.9328 11.0131C37.1778 10.8264 37.3003 10.5989 37.3003 10.3306C37.3003 10.0623 37.1836 9.85809 36.9503 9.71809C36.7169 9.56642 36.3436 9.44392 35.8303 9.35059L35.3403 9.26309C34.7336 9.14642 34.1795 8.98892 33.6778 8.79059C33.1761 8.58059 32.7736 8.29475 32.4703 7.93309C32.167 7.57142 32.0153 7.10475 32.0153 6.53309C32.0153 5.66975 32.3303 5.01058 32.9603 4.55558C33.5903 4.08892 34.4186 3.85558 35.4453 3.85558C36.4136 3.85558 37.2186 4.07142 37.8603 4.50308C38.5019 4.93475 38.9219 5.50059 39.1203 6.20059L37.0728 6.83059C36.9794 6.38725 36.7869 6.07225 36.4953 5.88558C36.2153 5.69892 35.8653 5.60559 35.4453 5.60559C35.0253 5.60559 34.7045 5.68142 34.4828 5.83308C34.2611 5.97308 34.1503 6.17142 34.1503 6.42808C34.1503 6.70809 34.267 6.91809 34.5003 7.05808C34.7336 7.18642 35.0486 7.28558 35.4453 7.35559L35.9353 7.44309C36.5886 7.55975 37.1778 7.71725 37.7028 7.91559C38.2394 8.10225 38.6594 8.37642 38.9628 8.73809C39.2778 9.08809 39.4353 9.56642 39.4353 10.1731C39.4353 11.0831 39.1028 11.7889 38.4378 12.2906C37.7844 12.7806 36.9036 13.0256 35.7953 13.0256Z" fill="url(#paint4_radial_8671_26183)" fill-opacity="0.2"/>
      <path d="M40.4925 12.7806V0.530584H42.6975V5.16808H43.0125C43.1058 4.98142 43.2517 4.79475 43.45 4.60809C43.6483 4.42142 43.9108 4.26975 44.2375 4.15308C44.5758 4.02475 45.0016 3.96059 45.515 3.96059C46.1916 3.96059 46.7808 4.11808 47.2825 4.43308C47.7958 4.73642 48.1925 5.16225 48.4725 5.71059C48.7525 6.24725 48.8925 6.87725 48.8925 7.60059V12.7806H46.6875V7.77559C46.6875 7.12225 46.5241 6.63225 46.1975 6.30559C45.8825 5.97892 45.4275 5.81559 44.8325 5.81559C44.1558 5.81559 43.6308 6.04309 43.2575 6.49809C42.8842 6.94142 42.6975 7.56559 42.6975 8.37059V12.7806H40.4925Z" fill="#D6F6D9"/>
      <path d="M40.4925 12.7806V0.530584H42.6975V5.16808H43.0125C43.1058 4.98142 43.2517 4.79475 43.45 4.60809C43.6483 4.42142 43.9108 4.26975 44.2375 4.15308C44.5758 4.02475 45.0016 3.96059 45.515 3.96059C46.1916 3.96059 46.7808 4.11808 47.2825 4.43308C47.7958 4.73642 48.1925 5.16225 48.4725 5.71059C48.7525 6.24725 48.8925 6.87725 48.8925 7.60059V12.7806H46.6875V7.77559C46.6875 7.12225 46.5241 6.63225 46.1975 6.30559C45.8825 5.97892 45.4275 5.81559 44.8325 5.81559C44.1558 5.81559 43.6308 6.04309 43.2575 6.49809C42.8842 6.94142 42.6975 7.56559 42.6975 8.37059V12.7806H40.4925Z" fill="url(#paint5_radial_8671_26183)" fill-opacity="0.2"/>
      <path d="M50.4011 12.7806V4.10058H52.6061V12.7806H50.4011ZM51.5036 3.08558C51.107 3.08558 50.7686 2.95725 50.4886 2.70058C50.2203 2.44392 50.0861 2.10558 50.0861 1.68558C50.0861 1.26558 50.2203 0.927251 50.4886 0.670584C50.7686 0.413917 51.107 0.285583 51.5036 0.285583C51.912 0.285583 52.2503 0.413917 52.5186 0.670584C52.787 0.927251 52.9211 1.26558 52.9211 1.68558C52.9211 2.10558 52.787 2.44392 52.5186 2.70058C52.2503 2.95725 51.912 3.08558 51.5036 3.08558Z" fill="#D6F6D9"/>
      <path d="M50.4011 12.7806V4.10058H52.6061V12.7806H50.4011ZM51.5036 3.08558C51.107 3.08558 50.7686 2.95725 50.4886 2.70058C50.2203 2.44392 50.0861 2.10558 50.0861 1.68558C50.0861 1.26558 50.2203 0.927251 50.4886 0.670584C50.7686 0.413917 51.107 0.285583 51.5036 0.285583C51.912 0.285583 52.2503 0.413917 52.5186 0.670584C52.787 0.927251 52.9211 1.26558 52.9211 1.68558C52.9211 2.10558 52.787 2.44392 52.5186 2.70058C52.2503 2.95725 51.912 3.08558 51.5036 3.08558Z" fill="url(#paint6_radial_8671_26183)" fill-opacity="0.2"/>
      <path d="M55.6095 12.7806V5.92059H53.4046V4.10058H55.6095V2.49058C55.6095 1.89558 55.7845 1.42308 56.1345 1.07308C56.4962 0.711417 56.9629 0.530584 57.5345 0.530584H59.8095V2.35058H58.3045C57.9779 2.35058 57.8145 2.52558 57.8145 2.87558V4.10058H60.0895V5.92059H57.8145V12.7806H55.6095Z" fill="#D6F6D9"/>
      <path d="M55.6095 12.7806V5.92059H53.4046V4.10058H55.6095V2.49058C55.6095 1.89558 55.7845 1.42308 56.1345 1.07308C56.4962 0.711417 56.9629 0.530584 57.5345 0.530584H59.8095V2.35058H58.3045C57.9779 2.35058 57.8145 2.52558 57.8145 2.87558V4.10058H60.0895V5.92059H57.8145V12.7806H55.6095Z" fill="url(#paint7_radial_8671_26183)" fill-opacity="0.2"/>
      <path d="M64.0757 12.7806C63.504 12.7806 63.0373 12.6056 62.6757 12.2556C62.3257 11.8939 62.1507 11.4156 62.1507 10.8206V5.92059H59.9807V4.10058H62.1507V1.40558H64.3557V4.10058H66.7356V5.92059H64.3557V10.4356C64.3557 10.7856 64.519 10.9606 64.8456 10.9606H66.5256V12.7806H64.0757Z" fill="#D6F6D9"/>
      <path d="M64.0757 12.7806C63.504 12.7806 63.0373 12.6056 62.6757 12.2556C62.3257 11.8939 62.1507 11.4156 62.1507 10.8206V5.92059H59.9807V4.10058H62.1507V1.40558H64.3557V4.10058H66.7356V5.92059H64.3557V10.4356C64.3557 10.7856 64.519 10.9606 64.8456 10.9606H66.5256V12.7806H64.0757Z" fill="url(#paint8_radial_8671_26183)" fill-opacity="0.2"/>
      <defs>
        <radialGradient id="paint0_radial_8671_26183" cx="0" cy="0" r="1" gradientTransform="matrix(77.0501 10.8926 -1.32552 14.7765 -12.2577 0.104961)" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint1_radial_8671_26183" cx="0" cy="0" r="1" gradientTransform="matrix(77.0501 10.8926 -1.32552 14.7765 -12.2577 0.104961)" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint2_radial_8671_26183" cx="0" cy="0" r="1" gradientTransform="matrix(77.0501 10.8926 -1.32552 14.7765 -12.2577 0.104961)" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint3_radial_8671_26183" cx="0" cy="0" r="1" gradientTransform="matrix(77.0501 10.8926 -1.32552 14.7765 -12.2577 0.104961)" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint4_radial_8671_26183" cx="0" cy="0" r="1" gradientTransform="matrix(77.0501 10.8926 -1.32552 14.7765 -12.2577 0.104961)" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint5_radial_8671_26183" cx="0" cy="0" r="1" gradientTransform="matrix(77.0501 10.8926 -1.32552 14.7765 -12.2577 0.104961)" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint6_radial_8671_26183" cx="0" cy="0" r="1" gradientTransform="matrix(77.0501 10.8926 -1.32552 14.7765 -12.2577 0.104961)" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint7_radial_8671_26183" cx="0" cy="0" r="1" gradientTransform="matrix(77.0501 10.8926 -1.32552 14.7765 -12.2577 0.104961)" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint8_radial_8671_26183" cx="0" cy="0" r="1" gradientTransform="matrix(77.0501 10.8926 -1.32552 14.7765 -12.2577 0.104961)" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
      </defs>
    </svg>
                </div>
                <div className="inline-flex gap-8 items-center pt-2 pb-2">
                <img className="" src={imgLogo2} alt=""/>
                  {/* GlobalBank */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="84" height="13" viewBox="0 0 84 13" fill="none">
      <path d="M6.11371 12.9738C7.6887 12.9738 8.9837 12.1688 9.38619 10.9613V12.8338H11.7137V8.10884C11.7137 7.04134 10.8737 6.13134 9.73619 6.13134H6.41121V8.10884H8.7737C9.07119 8.10884 9.26369 8.30134 9.26369 8.59884C9.26369 9.73634 7.7587 10.8388 6.23621 10.8388C4.20622 10.8388 2.59623 9.24634 2.59623 6.70884C2.59623 4.17134 4.20622 2.70134 6.28871 2.70134C7.8637 2.70134 8.9487 3.55884 9.14119 4.87134H11.7487C11.5912 2.24634 9.38619 0.443836 6.30621 0.443836C3.06873 0.443836 0.09375 2.52634 0.09375 6.70884C0.09375 10.8913 2.98123 12.9738 6.11371 12.9738Z" fill="#D6F6D9"/>
      <path d="M6.11371 12.9738C7.6887 12.9738 8.9837 12.1688 9.38619 10.9613V12.8338H11.7137V8.10884C11.7137 7.04134 10.8737 6.13134 9.73619 6.13134H6.41121V8.10884H8.7737C9.07119 8.10884 9.26369 8.30134 9.26369 8.59884C9.26369 9.73634 7.7587 10.8388 6.23621 10.8388C4.20622 10.8388 2.59623 9.24634 2.59623 6.70884C2.59623 4.17134 4.20622 2.70134 6.28871 2.70134C7.8637 2.70134 8.9487 3.55884 9.14119 4.87134H11.7487C11.5912 2.24634 9.38619 0.443836 6.30621 0.443836C3.06873 0.443836 0.09375 2.52634 0.09375 6.70884C0.09375 10.8913 2.98123 12.9738 6.11371 12.9738Z" fill="url(#paint0_radial_8671_26187)" fill-opacity="0.2"/>
      <path d="M12.7128 12.8338H15.1453V0.181335H12.7128V12.8338Z" fill="#D6F6D9"/>
      <path d="M12.7128 12.8338H15.1453V0.181335H12.7128V12.8338Z" fill="url(#paint1_radial_8671_26187)" fill-opacity="0.2"/>
      <path d="M20.3924 12.9738C23.1049 12.9738 25.0474 11.0488 25.0474 8.42384C25.0474 5.79884 23.1049 3.87384 20.3924 3.87384C17.6799 3.87384 15.7374 5.79884 15.7374 8.42384C15.7374 11.0488 17.6799 12.9738 20.3924 12.9738ZM20.3924 10.8738C19.0799 10.8738 18.1874 9.87634 18.1874 8.42384C18.1874 6.95384 19.0799 5.95634 20.3924 5.95634C21.7049 5.95634 22.5974 6.95384 22.5974 8.42384C22.5974 9.87634 21.7049 10.8738 20.3924 10.8738Z" fill="#D6F6D9"/>
      <path d="M20.3924 12.9738C23.1049 12.9738 25.0474 11.0488 25.0474 8.42384C25.0474 5.79884 23.1049 3.87384 20.3924 3.87384C17.6799 3.87384 15.7374 5.79884 15.7374 8.42384C15.7374 11.0488 17.6799 12.9738 20.3924 12.9738ZM20.3924 10.8738C19.0799 10.8738 18.1874 9.87634 18.1874 8.42384C18.1874 6.95384 19.0799 5.95634 20.3924 5.95634C21.7049 5.95634 22.5974 6.95384 22.5974 8.42384C22.5974 9.87634 21.7049 10.8738 20.3924 10.8738Z" fill="url(#paint2_radial_8671_26187)" fill-opacity="0.2"/>
      <path d="M30.4904 12.9738C33.0979 12.9738 34.6553 11.1713 34.6553 8.42384C34.6553 5.67634 33.0979 3.87384 30.5254 3.87384C29.4229 3.87384 28.5654 4.29384 28.0754 4.94134V0.181335H25.6429V12.8338H28.0754V11.8713C28.5654 12.5538 29.4754 12.9738 30.4904 12.9738ZM30.1054 10.8738C28.7929 10.8738 27.9354 9.89384 27.9354 8.42384C27.9354 6.93634 28.7929 5.95634 30.1054 5.95634C31.3829 5.95634 32.2579 6.93634 32.2579 8.42384C32.2579 9.89384 31.3829 10.8738 30.1054 10.8738Z" fill="#D6F6D9"/>
      <path d="M30.4904 12.9738C33.0979 12.9738 34.6553 11.1713 34.6553 8.42384C34.6553 5.67634 33.0979 3.87384 30.5254 3.87384C29.4229 3.87384 28.5654 4.29384 28.0754 4.94134V0.181335H25.6429V12.8338H28.0754V11.8713C28.5654 12.5538 29.4754 12.9738 30.4904 12.9738ZM30.1054 10.8738C28.7929 10.8738 27.9354 9.89384 27.9354 8.42384C27.9354 6.93634 28.7929 5.95634 30.1054 5.95634C31.3829 5.95634 32.2579 6.93634 32.2579 8.42384C32.2579 9.89384 31.3829 10.8738 30.1054 10.8738Z" fill="url(#paint3_radial_8671_26187)" fill-opacity="0.2"/>
      <path d="M38.7272 3.87384C36.3122 3.87384 34.8772 5.29134 34.7722 7.05884H36.9422C36.9772 6.32384 37.5197 5.65884 38.5872 5.65884C39.5847 5.65884 40.1622 6.16634 40.1622 6.90134C40.1622 7.26884 39.9347 7.54884 39.4972 7.54884H38.0097C36.0847 7.54884 34.7897 8.59884 34.7897 10.3313C34.7897 11.8363 35.9622 12.9738 37.6772 12.9738C38.8847 12.9738 39.8647 12.4313 40.1622 11.6088V12.8338H42.5772V7.16384C42.5772 5.16884 40.9497 3.87384 38.7272 3.87384ZM38.2897 11.2063C37.6072 11.2063 37.1172 10.8038 37.1172 10.2263C37.1172 9.54384 37.6422 9.08884 38.3772 9.08884H40.1622V9.21134C40.1622 10.3313 39.4797 11.2063 38.2897 11.2063Z" fill="#D6F6D9"/>
      <path d="M38.7272 3.87384C36.3122 3.87384 34.8772 5.29134 34.7722 7.05884H36.9422C36.9772 6.32384 37.5197 5.65884 38.5872 5.65884C39.5847 5.65884 40.1622 6.16634 40.1622 6.90134C40.1622 7.26884 39.9347 7.54884 39.4972 7.54884H38.0097C36.0847 7.54884 34.7897 8.59884 34.7897 10.3313C34.7897 11.8363 35.9622 12.9738 37.6772 12.9738C38.8847 12.9738 39.8647 12.4313 40.1622 11.6088V12.8338H42.5772V7.16384C42.5772 5.16884 40.9497 3.87384 38.7272 3.87384ZM38.2897 11.2063C37.6072 11.2063 37.1172 10.8038 37.1172 10.2263C37.1172 9.54384 37.6422 9.08884 38.3772 9.08884H40.1622V9.21134C40.1622 10.3313 39.4797 11.2063 38.2897 11.2063Z" fill="url(#paint4_radial_8671_26187)" fill-opacity="0.2"/>
      <path d="M43.5119 12.8338H45.9444V0.181335H43.5119V12.8338Z" fill="#D6F6D9"/>
      <path d="M43.5119 12.8338H45.9444V0.181335H43.5119V12.8338Z" fill="url(#paint5_radial_8671_26187)" fill-opacity="0.2"/>
      <path d="M47.2365 12.8338H52.2415C54.8315 12.8338 56.6165 11.5038 56.6165 9.17634C56.6165 7.56634 55.6715 6.58634 54.5515 6.14884C55.269 5.76384 55.9865 4.88884 55.9865 3.73384C55.9865 1.68634 54.324 0.583836 52.1015 0.583836H47.2365V12.8338ZM49.8265 5.25634V2.66634H51.8565C53.029 2.66634 53.554 3.13884 53.554 3.96134C53.554 4.78384 53.029 5.25634 51.909 5.25634H49.8265ZM49.8265 10.5588V7.47884H52.014C53.4665 7.47884 54.114 8.03884 54.114 9.03634C54.114 10.0338 53.4665 10.5588 52.014 10.5588H49.8265Z" fill="#D6F6D9"/>
      <path d="M47.2365 12.8338H52.2415C54.8315 12.8338 56.6165 11.5038 56.6165 9.17634C56.6165 7.56634 55.6715 6.58634 54.5515 6.14884C55.269 5.76384 55.9865 4.88884 55.9865 3.73384C55.9865 1.68634 54.324 0.583836 52.1015 0.583836H47.2365V12.8338ZM49.8265 5.25634V2.66634H51.8565C53.029 2.66634 53.554 3.13884 53.554 3.96134C53.554 4.78384 53.029 5.25634 51.909 5.25634H49.8265ZM49.8265 10.5588V7.47884H52.014C53.4665 7.47884 54.114 8.03884 54.114 9.03634C54.114 10.0338 53.4665 10.5588 52.014 10.5588H49.8265Z" fill="url(#paint6_radial_8671_26187)" fill-opacity="0.2"/>
      <path d="M60.8482 3.87384C58.4332 3.87384 56.9982 5.29134 56.8932 7.05884H59.0632C59.0982 6.32384 59.6407 5.65884 60.7082 5.65884C61.7057 5.65884 62.2832 6.16634 62.2832 6.90134C62.2832 7.26884 62.0557 7.54884 61.6182 7.54884H60.1307C58.2057 7.54884 56.9107 8.59884 56.9107 10.3313C56.9107 11.8363 58.0832 12.9738 59.7982 12.9738C61.0057 12.9738 61.9857 12.4313 62.2832 11.6088V12.8338H64.6982V7.16384C64.6982 5.16884 63.0707 3.87384 60.8482 3.87384ZM60.4107 11.2063C59.7282 11.2063 59.2382 10.8038 59.2382 10.2263C59.2382 9.54384 59.7632 9.08884 60.4982 9.08884H62.2832V9.21134C62.2832 10.3313 61.6007 11.2063 60.4107 11.2063Z" fill="#D6F6D9"/>
      <path d="M60.8482 3.87384C58.4332 3.87384 56.9982 5.29134 56.8932 7.05884H59.0632C59.0982 6.32384 59.6407 5.65884 60.7082 5.65884C61.7057 5.65884 62.2832 6.16634 62.2832 6.90134C62.2832 7.26884 62.0557 7.54884 61.6182 7.54884H60.1307C58.2057 7.54884 56.9107 8.59884 56.9107 10.3313C56.9107 11.8363 58.0832 12.9738 59.7982 12.9738C61.0057 12.9738 61.9857 12.4313 62.2832 11.6088V12.8338H64.6982V7.16384C64.6982 5.16884 63.0707 3.87384 60.8482 3.87384ZM60.4107 11.2063C59.7282 11.2063 59.2382 10.8038 59.2382 10.2263C59.2382 9.54384 59.7632 9.08884 60.4982 9.08884H62.2832V9.21134C62.2832 10.3313 61.6007 11.2063 60.4107 11.2063Z" fill="url(#paint7_radial_8671_26187)" fill-opacity="0.2"/>
      <path d="M65.4929 12.8338H67.9429V8.00384C67.9429 6.86634 68.6954 6.04384 69.7629 6.04384C70.7779 6.04384 71.4604 6.81384 71.4604 7.88134V12.8338H73.9103V7.33884C73.9103 5.30884 72.6153 3.87384 70.6204 3.87384C69.4129 3.87384 68.4329 4.38134 67.9429 5.23884V4.01384H65.4929V12.8338Z" fill="#D6F6D9"/>
      <path d="M65.4929 12.8338H67.9429V8.00384C67.9429 6.86634 68.6954 6.04384 69.7629 6.04384C70.7779 6.04384 71.4604 6.81384 71.4604 7.88134V12.8338H73.9103V7.33884C73.9103 5.30884 72.6153 3.87384 70.6204 3.87384C69.4129 3.87384 68.4329 4.38134 67.9429 5.23884V4.01384H65.4929V12.8338Z" fill="url(#paint8_radial_8671_26187)" fill-opacity="0.2"/>
      <path d="M80.8929 12.8338H83.8329L80.0354 7.47884L83.5529 4.01384H80.4729L77.4105 7.02384V0.181335H74.9605V12.8338H77.4105V10.0688L78.3904 9.10634L80.8929 12.8338Z" fill="#D6F6D9"/>
      <path d="M80.8929 12.8338H83.8329L80.0354 7.47884L83.5529 4.01384H80.4729L77.4105 7.02384V0.181335H74.9605V12.8338H77.4105V10.0688L78.3904 9.10634L80.8929 12.8338Z" fill="url(#paint9_radial_8671_26187)" fill-opacity="0.2"/>
      <defs>
        <radialGradient id="paint0_radial_8671_26187" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-15.7417 -3.09268e-05) rotate(6.42516) scale(97.7389 14.9312)">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint1_radial_8671_26187" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-15.7417 -3.09268e-05) rotate(6.42516) scale(97.7389 14.9312)">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint2_radial_8671_26187" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-15.7417 -3.09268e-05) rotate(6.42516) scale(97.7389 14.9312)">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint3_radial_8671_26187" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-15.7417 -3.09268e-05) rotate(6.42516) scale(97.7389 14.9312)">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint4_radial_8671_26187" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-15.7417 -3.09268e-05) rotate(6.42516) scale(97.7389 14.9312)">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint5_radial_8671_26187" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-15.7417 -3.09268e-05) rotate(6.42516) scale(97.7389 14.9312)">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint6_radial_8671_26187" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-15.7417 -3.09268e-05) rotate(6.42516) scale(97.7389 14.9312)">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint7_radial_8671_26187" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-15.7417 -3.09268e-05) rotate(6.42516) scale(97.7389 14.9312)">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint8_radial_8671_26187" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-15.7417 -3.09268e-05) rotate(6.42516) scale(97.7389 14.9312)">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint9_radial_8671_26187" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-15.7417 -3.09268e-05) rotate(6.42516) scale(97.7389 14.9312)">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
      </defs>
    </svg>
                </div>
                <div className="inline-flex gap-8 items-center pt-2 pb-2">              
                <img className="" src={imgLogo3} alt=""/>
                  {/* Lightbox */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="69" height="18" viewBox="0 0 69 18" fill="none">
      <path d="M3.33581 10.7015H6.86379V12.7805H0.642578V1.72398H3.33581V10.7015Z" fill="#D6F6D9"/>
      <path d="M3.33581 10.7015H6.86379V12.7805H0.642578V1.72398H3.33581V10.7015Z" fill="url(#paint0_radial_8671_26191)"/>
      <path d="M9.34538 3.07848C8.87288 3.07848 8.48439 2.94198 8.17989 2.66898C7.88589 2.38548 7.73889 2.03898 7.73889 1.62948C7.73889 1.20948 7.88589 0.862984 8.17989 0.589984C8.48439 0.306484 8.87288 0.164734 9.34538 0.164734C9.80738 0.164734 10.1854 0.306484 10.4794 0.589984C10.7839 0.862984 10.9361 1.20948 10.9361 1.62948C10.9361 2.03898 10.7839 2.38548 10.4794 2.66898C10.1854 2.94198 9.80738 3.07848 9.34538 3.07848ZM10.6841 3.99199V12.7805H7.99089V3.99199H10.6841Z" fill="#D6F6D9"/>
      <path d="M9.34538 3.07848C8.87288 3.07848 8.48439 2.94198 8.17989 2.66898C7.88589 2.38548 7.73889 2.03898 7.73889 1.62948C7.73889 1.20948 7.88589 0.862984 8.17989 0.589984C8.48439 0.306484 8.87288 0.164734 9.34538 0.164734C9.80738 0.164734 10.1854 0.306484 10.4794 0.589984C10.7839 0.862984 10.9361 1.20948 10.9361 1.62948C10.9361 2.03898 10.7839 2.38548 10.4794 2.66898C10.1854 2.94198 9.80738 3.07848 9.34538 3.07848ZM10.6841 3.99199V12.7805H7.99089V3.99199H10.6841Z" fill="url(#paint1_radial_8671_26191)"/>
      <path d="M15.8174 3.86598C16.4369 3.86598 16.9776 3.99198 17.4396 4.24398C17.9121 4.49599 18.2743 4.82674 18.5263 5.23624V3.99199H21.2196V12.7647C21.2196 13.5732 21.0568 14.303 20.7313 14.954C20.4163 15.6155 19.9281 16.1405 19.2666 16.529C18.6156 16.9175 17.8018 17.1117 16.8254 17.1117C15.5234 17.1117 14.4681 16.802 13.6596 16.1825C12.8511 15.5735 12.3891 14.744 12.2736 13.694H14.9354C15.0194 14.03 15.2189 14.2925 15.5339 14.4815C15.8489 14.681 16.2374 14.7807 16.6994 14.7807C17.2558 14.7807 17.6968 14.618 18.0223 14.2925C18.3583 13.9775 18.5263 13.4682 18.5263 12.7647V11.5205C18.2638 11.93 17.9016 12.266 17.4396 12.5285C16.9776 12.7805 16.4369 12.9065 15.8174 12.9065C15.0929 12.9065 14.4366 12.7227 13.8486 12.3552C13.2606 11.9772 12.7934 11.447 12.4469 10.7645C12.1109 10.0715 11.9429 9.27349 11.9429 8.37049C11.9429 7.46749 12.1109 6.67474 12.4469 5.99224C12.7934 5.30974 13.2606 4.78474 13.8486 4.41724C14.4366 4.04973 15.0929 3.86598 15.8174 3.86598ZM18.5263 8.38624C18.5263 7.71424 18.3373 7.18399 17.9593 6.79549C17.5919 6.40699 17.1404 6.21274 16.6049 6.21274C16.0694 6.21274 15.6126 6.40699 15.2346 6.79549C14.8671 7.17349 14.6834 7.69849 14.6834 8.37049C14.6834 9.04249 14.8671 9.57799 15.2346 9.97699C15.6126 10.3655 16.0694 10.5597 16.6049 10.5597C17.1404 10.5597 17.5919 10.3655 17.9593 9.97699C18.3373 9.58849 18.5263 9.05824 18.5263 8.38624Z" fill="#D6F6D9"/>
      <path d="M15.8174 3.86598C16.4369 3.86598 16.9776 3.99198 17.4396 4.24398C17.9121 4.49599 18.2743 4.82674 18.5263 5.23624V3.99199H21.2196V12.7647C21.2196 13.5732 21.0568 14.303 20.7313 14.954C20.4163 15.6155 19.9281 16.1405 19.2666 16.529C18.6156 16.9175 17.8018 17.1117 16.8254 17.1117C15.5234 17.1117 14.4681 16.802 13.6596 16.1825C12.8511 15.5735 12.3891 14.744 12.2736 13.694H14.9354C15.0194 14.03 15.2189 14.2925 15.5339 14.4815C15.8489 14.681 16.2374 14.7807 16.6994 14.7807C17.2558 14.7807 17.6968 14.618 18.0223 14.2925C18.3583 13.9775 18.5263 13.4682 18.5263 12.7647V11.5205C18.2638 11.93 17.9016 12.266 17.4396 12.5285C16.9776 12.7805 16.4369 12.9065 15.8174 12.9065C15.0929 12.9065 14.4366 12.7227 13.8486 12.3552C13.2606 11.9772 12.7934 11.447 12.4469 10.7645C12.1109 10.0715 11.9429 9.27349 11.9429 8.37049C11.9429 7.46749 12.1109 6.67474 12.4469 5.99224C12.7934 5.30974 13.2606 4.78474 13.8486 4.41724C14.4366 4.04973 15.0929 3.86598 15.8174 3.86598ZM18.5263 8.38624C18.5263 7.71424 18.3373 7.18399 17.9593 6.79549C17.5919 6.40699 17.1404 6.21274 16.6049 6.21274C16.0694 6.21274 15.6126 6.40699 15.2346 6.79549C14.8671 7.17349 14.6834 7.69849 14.6834 8.37049C14.6834 9.04249 14.8671 9.57799 15.2346 9.97699C15.6126 10.3655 16.0694 10.5597 16.6049 10.5597C17.1404 10.5597 17.5919 10.3655 17.9593 9.97699C18.3373 9.58849 18.5263 9.05824 18.5263 8.38624Z" fill="url(#paint2_radial_8671_26191)"/>
      <path d="M28.4127 3.89749C29.4207 3.89749 30.2292 4.23349 30.8382 4.90549C31.4472 5.56699 31.7517 6.48049 31.7517 7.64599V12.7805H29.0742V8.00824C29.0742 7.42024 28.922 6.96349 28.6175 6.63799C28.313 6.31249 27.9035 6.14974 27.389 6.14974C26.8745 6.14974 26.465 6.31249 26.1605 6.63799C25.856 6.96349 25.7037 7.42024 25.7037 8.00824V12.7805H23.0105V1.12548H25.7037V5.17324C25.9767 4.78474 26.3495 4.47498 26.822 4.24398C27.2945 4.01298 27.8247 3.89749 28.4127 3.89749Z" fill="#D6F6D9"/>
      <path d="M28.4127 3.89749C29.4207 3.89749 30.2292 4.23349 30.8382 4.90549C31.4472 5.56699 31.7517 6.48049 31.7517 7.64599V12.7805H29.0742V8.00824C29.0742 7.42024 28.922 6.96349 28.6175 6.63799C28.313 6.31249 27.9035 6.14974 27.389 6.14974C26.8745 6.14974 26.465 6.31249 26.1605 6.63799C25.856 6.96349 25.7037 7.42024 25.7037 8.00824V12.7805H23.0105V1.12548H25.7037V5.17324C25.9767 4.78474 26.3495 4.47498 26.822 4.24398C27.2945 4.01298 27.8247 3.89749 28.4127 3.89749Z" fill="url(#paint3_radial_8671_26191)"/>
      <path d="M38.364 10.4967V12.7805H36.9937C36.0172 12.7805 35.256 12.5442 34.71 12.0717C34.164 11.5887 33.891 10.8065 33.891 9.72499V6.22849H32.82V3.99199H33.891V1.84999H36.5842V3.99199H38.3482V6.22849H36.5842V9.75649C36.5842 10.019 36.6472 10.208 36.7732 10.3235C36.8992 10.439 37.1092 10.4967 37.4032 10.4967H38.364Z" fill="#D6F6D9"/>
      <path d="M38.364 10.4967V12.7805H36.9937C36.0172 12.7805 35.256 12.5442 34.71 12.0717C34.164 11.5887 33.891 10.8065 33.891 9.72499V6.22849H32.82V3.99199H33.891V1.84999H36.5842V3.99199H38.3482V6.22849H36.5842V9.75649C36.5842 10.019 36.6472 10.208 36.7732 10.3235C36.8992 10.439 37.1092 10.4967 37.4032 10.4967H38.364Z" fill="url(#paint4_radial_8671_26191)"/>
      <path d="M42.3999 5.23624C42.6519 4.82674 43.0141 4.49599 43.4866 4.24398C43.9591 3.99198 44.4999 3.86598 45.1088 3.86598C45.8333 3.86598 46.4896 4.04973 47.0776 4.41724C47.6656 4.78474 48.1276 5.30974 48.4636 5.99224C48.8101 6.67474 48.9833 7.46749 48.9833 8.37049C48.9833 9.27349 48.8101 10.0715 48.4636 10.7645C48.1276 11.447 47.6656 11.9772 47.0776 12.3552C46.4896 12.7227 45.8333 12.9065 45.1088 12.9065C44.4894 12.9065 43.9486 12.7857 43.4866 12.5442C43.0246 12.2922 42.6624 11.9615 42.3999 11.552V12.7805H39.7066V1.12548H42.3999V5.23624ZM46.2428 8.37049C46.2428 7.69849 46.0538 7.17349 45.6758 6.79549C45.3083 6.40699 44.8516 6.21274 44.3056 6.21274C43.7701 6.21274 43.3134 6.40699 42.9354 6.79549C42.5679 7.18399 42.3841 7.71424 42.3841 8.38624C42.3841 9.05824 42.5679 9.58849 42.9354 9.97699C43.3134 10.3655 43.7701 10.5597 44.3056 10.5597C44.8411 10.5597 45.2978 10.3655 45.6758 9.97699C46.0538 9.57799 46.2428 9.04249 46.2428 8.37049Z" fill="#D6F6D9"/>
      <path d="M42.3999 5.23624C42.6519 4.82674 43.0141 4.49599 43.4866 4.24398C43.9591 3.99198 44.4999 3.86598 45.1088 3.86598C45.8333 3.86598 46.4896 4.04973 47.0776 4.41724C47.6656 4.78474 48.1276 5.30974 48.4636 5.99224C48.8101 6.67474 48.9833 7.46749 48.9833 8.37049C48.9833 9.27349 48.8101 10.0715 48.4636 10.7645C48.1276 11.447 47.6656 11.9772 47.0776 12.3552C46.4896 12.7227 45.8333 12.9065 45.1088 12.9065C44.4894 12.9065 43.9486 12.7857 43.4866 12.5442C43.0246 12.2922 42.6624 11.9615 42.3999 11.552V12.7805H39.7066V1.12548H42.3999V5.23624ZM46.2428 8.37049C46.2428 7.69849 46.0538 7.17349 45.6758 6.79549C45.3083 6.40699 44.8516 6.21274 44.3056 6.21274C43.7701 6.21274 43.3134 6.40699 42.9354 6.79549C42.5679 7.18399 42.3841 7.71424 42.3841 8.38624C42.3841 9.05824 42.5679 9.58849 42.9354 9.97699C43.3134 10.3655 43.7701 10.5597 44.3056 10.5597C44.8411 10.5597 45.2978 10.3655 45.6758 9.97699C46.0538 9.57799 46.2428 9.04249 46.2428 8.37049Z" fill="url(#paint5_radial_8671_26191)"/>
      <path d="M54.2392 12.9065C53.3782 12.9065 52.6012 12.7227 51.9083 12.3552C51.2258 11.9877 50.685 11.4627 50.286 10.7802C49.8975 10.0977 49.7033 9.29974 49.7033 8.38624C49.7033 7.48324 49.9028 6.69049 50.3018 6.00799C50.7008 5.31499 51.2468 4.78474 51.9398 4.41724C52.6327 4.04973 53.4097 3.86598 54.2707 3.86598C55.1317 3.86598 55.9087 4.04973 56.6017 4.41724C57.2947 4.78474 57.8407 5.31499 58.2397 6.00799C58.6387 6.69049 58.8382 7.48324 58.8382 8.38624C58.8382 9.28924 58.6335 10.0872 58.224 10.7802C57.825 11.4627 57.2737 11.9877 56.5702 12.3552C55.8772 12.7227 55.1002 12.9065 54.2392 12.9065ZM54.2392 10.5755C54.7537 10.5755 55.1895 10.3865 55.5465 10.0085C55.914 9.63049 56.0977 9.08974 56.0977 8.38624C56.0977 7.68274 55.9192 7.14199 55.5622 6.76399C55.2157 6.38599 54.7852 6.19699 54.2707 6.19699C53.7457 6.19699 53.31 6.38599 52.9635 6.76399C52.617 7.13149 52.4437 7.67224 52.4437 8.38624C52.4437 9.08974 52.6117 9.63049 52.9477 10.0085C53.2942 10.3865 53.7247 10.5755 54.2392 10.5755Z" fill="#D6F6D9"/>
      <path d="M54.2392 12.9065C53.3782 12.9065 52.6012 12.7227 51.9083 12.3552C51.2258 11.9877 50.685 11.4627 50.286 10.7802C49.8975 10.0977 49.7033 9.29974 49.7033 8.38624C49.7033 7.48324 49.9028 6.69049 50.3018 6.00799C50.7008 5.31499 51.2468 4.78474 51.9398 4.41724C52.6327 4.04973 53.4097 3.86598 54.2707 3.86598C55.1317 3.86598 55.9087 4.04973 56.6017 4.41724C57.2947 4.78474 57.8407 5.31499 58.2397 6.00799C58.6387 6.69049 58.8382 7.48324 58.8382 8.38624C58.8382 9.28924 58.6335 10.0872 58.224 10.7802C57.825 11.4627 57.2737 11.9877 56.5702 12.3552C55.8772 12.7227 55.1002 12.9065 54.2392 12.9065ZM54.2392 10.5755C54.7537 10.5755 55.1895 10.3865 55.5465 10.0085C55.914 9.63049 56.0977 9.08974 56.0977 8.38624C56.0977 7.68274 55.9192 7.14199 55.5622 6.76399C55.2157 6.38599 54.7852 6.19699 54.2707 6.19699C53.7457 6.19699 53.31 6.38599 52.9635 6.76399C52.617 7.13149 52.4437 7.67224 52.4437 8.38624C52.4437 9.08974 52.6117 9.63049 52.9477 10.0085C53.2942 10.3865 53.7247 10.5755 54.2392 10.5755Z" fill="url(#paint6_radial_8671_26191)"/>
      <path d="M65.307 12.7805L63.6217 10.3392L62.2043 12.7805H59.2905L62.1885 8.29174L59.2118 3.99199H62.2358L63.921 6.41749L65.3385 3.99199H68.2522L65.307 8.41774L68.331 12.7805H65.307Z" fill="#D6F6D9"/>
      <path d="M65.307 12.7805L63.6217 10.3392L62.2043 12.7805H59.2905L62.1885 8.29174L59.2118 3.99199H62.2358L63.921 6.41749L65.3385 3.99199H68.2522L65.307 8.41774L68.331 12.7805H65.307Z" fill="url(#paint7_radial_8671_26191)"/>
      <defs>
        <radialGradient id="paint0_radial_8671_26191" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.10864 0.875032) rotate(4.83042) scale(93.5197 23.4143)">
          <stop stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint1_radial_8671_26191" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.10864 0.875032) rotate(4.83042) scale(93.5197 23.4143)">
          <stop stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint2_radial_8671_26191" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.10864 0.875032) rotate(4.83042) scale(93.5197 23.4143)">
          <stop stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint3_radial_8671_26191" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.10864 0.875032) rotate(4.83042) scale(93.5197 23.4143)">
          <stop stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint4_radial_8671_26191" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.10864 0.875032) rotate(4.83042) scale(93.5197 23.4143)">
          <stop stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint5_radial_8671_26191" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.10864 0.875032) rotate(4.83042) scale(93.5197 23.4143)">
          <stop stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint6_radial_8671_26191" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.10864 0.875032) rotate(4.83042) scale(93.5197 23.4143)">
          <stop stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="paint7_radial_8671_26191" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3.10864 0.875032) rotate(4.83042) scale(93.5197 23.4143)">
          <stop stop-color="white" stop-opacity="0"/>
          <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </radialGradient>
      </defs>
    </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__right">
              <img className="" src={imgHero} alt=""/>
          </div>
        </div>
      </div>
    </>
  );
}