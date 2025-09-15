const BestPlanVideo = "images/best-plan-video-bg.svg";
export default function IdentifyBestPlan() {
  return (
    <section className="min-h-screen flex items-center py-20"
    style={{ 
        backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1512 358.23\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(47.521 27.794 -27.794 47.521 634.5 0.000010398)\\'><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(1,7,8,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(2,13,16,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(0,20,12,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
      }}
    >
      <div className="max-w-6xl mx-auto px-5 w-full">
        <div className="flex flex-col items-center gap-16">
          <div className="text-center max-w-3xl">
            <div className="text-[#86E09B] text-sm font-medium uppercase tracking-wider mb-5">
              Strategic Solutions
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
              Identify the Best Plan for Your Needs
            </h1>
            <p className="text-[#B0B0B0] text-lg leading-relaxed mb-10 max-w-lg mx-auto">
              Choosing the right plan ensures you meet your objectives while maximizing efficiency and growth.
            </p>
            <button className="bg-[#86E09B] text-[#0A191E] border-none px-8 py-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-[#7DD48A] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(134,224,155,0.3)]">
              Find Your Plan
            </button>
          </div>
          <div className="w-full max-w-4xl">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <div className="w-full h-full relative flex items-center justify-center " style={{ backgroundImage: `url('${BestPlanVideo}')` }}>
                {/* <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] z-10 hover:bg-white hover:scale-110 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}