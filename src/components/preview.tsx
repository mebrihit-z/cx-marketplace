const heroBgImage = "images/saas-preview-hero-bg.svg";
const logoPreview = "icons/logo-preview.svg";
const imgVector5 = "http://localhost:3845/assets/15201e9ad1d338c03541a332b177176dcb60e6ae.png";
const imgVector7 = "http://localhost:3845/assets/b35ba9f3eb353572f61af85912fbcbf4509d2e66.png";
const imgVector11 = "http://localhost:3845/assets/d69caff5595c4cfe51519045497a835c44c8c8c8.png";
const imgImage1 = "http://localhost:3845/assets/961a2c0de390d9b9ca10331c8116707cea0a83e3.png";
const imgVector = "icons/black-right-arrow.svg";
const imgVector2 = "http://localhost:3845/assets/6348ba033db2e59b006eed51e647d6836cfa44fc.svg";
const imgVector3 = "http://localhost:3845/assets/0416f3a5da6ad6c577b19f6a3e1bbdc2af3228e9.svg";
const imgVector4 = "http://localhost:3845/assets/f5c255f8593ad7418ec22c4886f9d92f868b153d.svg";
const imgVector6 = "http://localhost:3845/assets/309a244151dbf8d80686166e704fd880c9883845.svg";
const imgVector8 = "http://localhost:3845/assets/6cb789336b300d8ddd13da64a9964a6ff74609e0.svg";
const imgVector9 = "http://localhost:3845/assets/421e3d9db86b8423ecc55ad755cf5fd6cf3d4a95.svg";
const imgVector10 = "http://localhost:3845/assets/aac2e9166f05614859d73b0378728d38c3071873.svg";
const imgEllipse963 = "http://localhost:3845/assets/aab4459e21f6f63a53064fb6caff3ad5cf78be5a.svg";
const imgVuesaxLinearArrowRight = "icons/black-right-arrow.svg";
const imgLine317 = "http://localhost:3845/assets/55522919f569ec35e182328f464604d6a71de6cb.svg";
const imgFictionalCompanyLogo = "http://localhost:3845/assets/2078b3cdb8f92eea47993166ce43b3276a2bf4f9.svg";
const imgFictionalCompanyLogo1 = "http://localhost:3845/assets/fa9abe922bcc2150d680b8131ceea8b2f37c59d4.svg";
const imgFictionalCompanyLogo2 = "http://localhost:3845/assets/8d88b1f490208c59354e270ca05b2524f7926e32.svg";
const imgCloseIcon = "icons/x-icon.svg";

interface Template {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}

interface PreviewProps {
  isOpen: boolean;
  onClose: () => void;
  template: Template;
}

export default function Preview({ isOpen, onClose, template }: PreviewProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Content */}
      <div className="relative bg-[#041117] w-full h-full max-w-7xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-lg shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
        >
          <img alt="Close" className="w-6 h-6" src={imgCloseIcon} />
        </button>
        
        {/* Template Info Header */}
        <div className="bg-[#041117] border-b border-gray-700 p-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2">{template.title}</h2>
            <p className="text-gray-400">Category: {template.category}</p>
          </div>
        </div>
        
        {/* Template Preview Content */}
        <div className="bg-[#041117] relative w-full min-h-full overflow-hidden" data-name="Sections" data-node-id="8671:26042">
      <div className="absolute blur-[90.541px] filter h-[1248px] opacity-[0.08] right-[314.06px] translate-y-[-50%] w-[1250.94px]" data-node-id="8671:26043" style={{ top: "calc(50% + 814px)" }}>
        <div className="absolute h-[1248px] left-0 top-0 w-[1250.94px]" data-node-id="8671:26044">
          <div className="absolute inset-0" data-name="Vector" data-node-id="8671:26045">
            <img alt="" className="block max-w-none size-full" src={logoPreview} />
          </div>
          <div className="absolute bottom-0 left-[33.65%] right-0 top-[33.73%]" data-name="Vector" data-node-id="8671:26046">
            <img alt="" className="block max-w-none size-full" height="827.094" src={logoPreview} width="830.038" />
          </div>
          <div className="absolute bottom-[36.56%] left-[67.19%] right-0 top-[33.68%]" data-node-id="8671:26047">
            <img alt="" className="block max-w-none size-full" src={imgVector2} />
          </div>
          <div className="absolute bottom-[33.72%] flex items-center justify-center left-0 right-[71.88%] top-[33.68%]">
            <div className="flex-none h-[351.828px] rotate-[90deg] scale-y-[-100%] w-[406.861px]">
              <div className="relative size-full" data-node-id="8671:26048">
                <img alt="" className="block max-w-none size-full" src={imgVector3} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-[33.65%] right-0 top-[33.73%]" data-name="Vector" data-node-id="8671:26049">
            <img alt="" className="block max-w-none size-full" src={imgVector4} />
          </div>
          <div className="absolute bottom-[33.73%] left-0 right-[33.88%] top-0" data-name="Vector" data-node-id="8671:26050">
            <img alt="" className="block max-w-none size-full" height="827.094" src={imgVector5} width="827.094" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-center justify-between left-1/2 top-14 translate-x-[-50%] w-[1160px]" data-name="Header" data-node-id="8671:26051">
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
                  <div className="absolute bottom-0 left-[33.65%] right-0 top-[33.73%]" data-name="Vector" data-node-id="8671:26059">
                    <img alt="" className="block max-w-none size-full" height="17.695" src={imgVector7} width="17.758" />
                  </div>
                  <div className="absolute bottom-[36.56%] left-[67.19%] right-0 top-[33.68%]" data-node-id="8671:26060">
                    <img alt="" className="block max-w-none size-full" src={imgVector8} />
                  </div>
                  <div className="absolute bottom-[33.72%] flex items-center justify-center left-0 right-[71.88%] top-[33.68%]">
                    <div className="flex-none h-[7.527px] rotate-[90deg] scale-y-[-100%] w-[8.705px]">
                      <div className="relative size-full" data-node-id="8671:26061">
                        <img alt="" className="block max-w-none size-full" src={imgVector9} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-[33.65%] right-0 top-[33.73%]" data-name="Vector" data-node-id="8671:26062">
                    <img alt="" className="block max-w-none size-full" src={imgVector10} />
                  </div>
                  <div className="absolute bottom-[33.73%] left-0 right-[33.88%] top-0" data-name="Vector" data-node-id="8671:26063">
                    <img alt="" className="block max-w-none size-full" height="17.695" src={imgVector11} width="17.695" />
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
              <div className="relative shrink-0 size-[7px]" data-node-id="8671:26068">
                <img alt="" className="block max-w-none size-full" src={imgEllipse963} />
              </div>
              <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26069" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.7] whitespace-pre">About</p>
              </div>
            </div>
            <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26070">
              <div className="relative shrink-0 size-[7px]" data-node-id="8671:26071">
                <img alt="" className="block max-w-none size-full" src={imgEllipse963} />
              </div>
              <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26072" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.7] whitespace-pre">Integration</p>
              </div>
            </div>
            <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26073">
              <div className="relative shrink-0 size-[7px]" data-node-id="8671:26074">
                <img alt="" className="block max-w-none size-full" src={imgEllipse963} />
              </div>
              <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26075" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.7] whitespace-pre">Pricing</p>
              </div>
            </div>
            <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26076">
              <div className="relative shrink-0 size-[7px]" data-node-id="8671:26077">
                <img alt="" className="block max-w-none size-full" src={imgEllipse963} />
              </div>
              <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#576165] text-[16px] text-center text-nowrap tracking-[-0.3px]" data-node-id="8671:26078" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.7] whitespace-pre">Contact</p>
              </div>
            </div>
            <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-3 relative shrink-0" data-name="Tab" data-node-id="8671:26079">
              <div className="relative shrink-0 size-[7px]" data-node-id="8671:26080">
                <img alt="" className="block max-w-none size-full" src={imgEllipse963} />
              </div>
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
      <div className="absolute box-border content-stretch flex flex-col gap-8 items-start justify-start left-[140px] px-0 py-10 top-[193px]" data-name="text" data-node-id="8671:26120">
        <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] relative shrink-0" data-name="title" data-node-id="8671:26121">
          <div className="font-['Recoleta:Regular',_sans-serif] not-italic relative shrink-0 text-[#f2fcf3] text-[0px] tracking-[-2px] w-[592px]" data-node-id="8671:26122">
            <p className="leading-[1.1] text-[72px]">
              <span className="">{`Design unique `}</span>
              <span className="font-['Recoleta:SemiBold',_sans-serif] not-italic text-[#7be385] tracking-[-2px]">ideas</span>
              <span className="">, elevate results.</span>
            </p>
          </div>
          <div className="font-['Roboto:Regular',_sans-serif] font-normal relative shrink-0 text-[#b1b6b8] text-[18px] tracking-[-0.3px] w-[569px]" data-node-id="8671:26123" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.65]">Transform your workflow with unique designs that boost creativity, improve efficiency, and drive results.</p>
          </div>
        </div>
        <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0" data-node-id="8671:26124">
          <div className="bg-white box-border content-stretch flex gap-3 items-center justify-center px-6 py-4 relative rounded-[12px] shrink-0" data-name="Button" data-node-id="8671:26125">
            <div className="flex flex-col font-['Roboto:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#041117] text-[16px] text-center text-nowrap" data-node-id="8671:26144" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[1.5] whitespace-pre">Book a Demo</p>
            </div>
          </div>
          <div className="bg-[#7be385] box-border content-stretch flex gap-3 items-center justify-center px-6 py-4 relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] shrink-0" data-name="Button" data-node-id="8671:26156" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 187 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.9329 -4.8454 30.996 7.8709 148.74 46.309)\\\'><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0.4)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
            <div className="flex flex-col font-['Roboto:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#041117] text-[16px] text-center text-nowrap" data-node-id="8671:26166" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[1.5] whitespace-pre">Start Free Trial</p>
            </div>
            <div className="relative shrink-0 size-5" data-name="Icons" data-node-id="8671:26167">
              <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right" data-node-id="8671:26168">
                <img alt="" className="block max-w-none size-full" src={imgVuesaxLinearArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-center bg-cover bg-no-repeat h-[954.567px] left-[545px] top-[193px] w-[1084px]" data-name="image 1" data-node-id="8671:26173" style={{ backgroundImage: `url('${heroBgImage}')` }} />
      <div className="absolute bg-[#364247] h-[184px] left-[140px] opacity-[0.12] rounded-[32px] top-[704px] w-[609px]" data-name="LOGOSBACKGROUND" data-node-id="8671:26174" />
      <div className="absolute box-border content-stretch flex flex-col gap-6 items-start justify-end left-[142px] p-[32px] top-[738px] w-[1160px]" data-node-id="8671:26175">
        <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0" data-node-id="8671:26176">
          <div className="font-['Recoleta:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-1px]" data-node-id="8671:26177">
            <p className="leading-[34px] whitespace-pre">Thrive with 3,500+ businesses</p>
          </div>
          <div className="h-0 relative shrink-0 w-[66px]" data-node-id="8671:26178">
            <div className="absolute inset-[-5.77px_-8.08%_-5.77px_-8.75%]">
              <img alt="" className="block max-w-none size-full" src={imgLine317} />
            </div>
          </div>
        </div>
        <div className="content-center flex flex-wrap gap-8 items-center justify-start relative shrink-0" data-name="Logos" data-node-id="8671:26179">
          <div className="h-7 relative shrink-0 w-[99.166px]" data-name="Fictional company logo" data-node-id="8671:26180">
            <img alt="" className="block max-w-none size-full" src={imgFictionalCompanyLogo} />
          </div>
          <div className="h-7 relative shrink-0 w-[114.916px]" data-name="Fictional company logo" data-node-id="8671:26184">
            <img alt="" className="block max-w-none size-full" src={imgFictionalCompanyLogo1} />
          </div>
          <div className="h-7 relative shrink-0 w-[97.416px]" data-name="Fictional company logo" data-node-id="8671:26188">
            <img alt="" className="block max-w-none size-full" src={imgFictionalCompanyLogo2} />
          </div>
        </div>
        <div className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[0] left-8 text-[#7be385] text-[14px] top-0 w-80" data-node-id="8671:26192" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.45]">Trusted By</p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
