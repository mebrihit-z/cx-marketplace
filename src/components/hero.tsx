const imgDesktopCreate11 = "images/desktop-bg-image.png";
const imgVector = "icons/star-black.svg";
const heroBg = "images/hero-bg-home.svg";

interface ButtonProps {
  text?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  state?: "Default" | "Hover" | "Pressed" | "Disabled";
  buttonType?: "Default" | "Tertiary Right Icon" | "Tertiary" | "Primary Right Icon" | "Primary Left Icon" | "Secondary" | "Secondary Left Icon" | "Secondary Right Icon" | "Button Link" | "Button Link Right Icon" | "Button Link Left Icon" | "Tertiary Left Icon";
}

function Button({ text = "Button", state = "Default", buttonType = "Default" }: ButtonProps) {
  if (state === "Default" && buttonType === "Secondary Left Icon") {
    return (
      <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start px-6 py-2.5 rounded-[8px] size-full" data-name="State=Default, Button Type=Secondary Left Icon" data-node-id="4138:11594">
        <div aria-hidden="true" className="absolute border border-[#0a7c00] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        <div className="relative shrink-0 size-[18.333px]" data-name="Vector" data-node-id="4138:11595">
          <img alt="vector" className="block max-w-none size-full" src={imgVector} />
        </div>
        <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#111215] text-[16px] text-nowrap" data-node-id="4138:11596">
          <p className="leading-[20px] whitespace-pre">{text}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] size-full" data-name="State=Default, Button Type=Default" data-node-id="3781:18356">
      <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="3490:20338">
        <p className="leading-[20px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 md:gap-12 lg:gap-20 items-center justify-start pb-6 pt-16 md:pt-24 lg:pt-32 px-4 md:px-8 lg:px-16 xl:px-60 relative size-full" data-name="Hero" data-node-id="8213:78184" style={{ backgroundImage: `url('${heroBg}')` }}>
      <div className="content-stretch flex flex-col gap-8 md:gap-10 lg:gap-12 items-center justify-start shrink-0 w-full" data-name="Header Wrapper" data-node-id="8213:78185">
        <div className="content-stretch flex flex-col gap-4 md:gap-6 items-center justify-start shrink-0 w-full" data-name="Header" data-node-id="8213:78186">
          <div className="content-stretch flex flex-col items-center justify-center shrink-0 w-full" data-name="Title Container" data-node-id="8213:78187">
            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic shrink-0 text-3xl md:text-4xl lg:text-5xl xl:text-[72px] text-center text-white w-full" data-node-id="8213:78188">
              <p className="leading-tight md:leading-[56px] lg:leading-[70px] xl:leading-[84px]">Supporting your freedom to create with Marketplace</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center shrink-0 w-full max-w-2xl lg:max-w-[720px]" data-name="Subtitle Container" data-node-id="8213:78189">
            <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-base md:text-lg text-center text-white w-full" data-node-id="8213:78190">
              <p className="leading-relaxed md:leading-[24px]">With ready-made and fully customizable templates, Marketplace helps bring your ideal website to life—faster and smarter. Whether you are migrating a current site or building a new one, we are here to guide you on your website journey.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col sm:flex-row gap-4 items-center justify-center shrink-0 w-full" data-name="Button Group" data-node-id="8213:78191">
          <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0 pointer-events-none" />
          <div className="bg-[#0a7c00] box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-2.5 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 w-full sm:w-auto" data-name="Button" data-node-id="8213:78192">
            <Button text="Get a quote" leftIcon={false} rightIcon={false} />
          </div>
          <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start px-6 py-2.5 relative rounded-[8px] shrink-0 w-full sm:w-auto" data-name="Button" data-node-id="8213:78193">
            <Button text="Create template" leftIcon={false} rightIcon={false} buttonType="Secondary Left Icon" />
          </div>
        </div>
      </div>
      <div className="aspect-[3024/1892] bg-center bg-cover bg-no-repeat relative rounded-[16px] shrink-0 w-full max-w-4xl relative top-20 lg:top-30" data-name="Desktop - Create - 1 1" data-node-id="8719:44627" style={{ backgroundImage: `url('${imgDesktopCreate11}')`} }>
        <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_5px_20px_0px_rgba(0,0,0,0.15)]" />
      </div>
    </div>
  );
}
