const imgImage25 = "images/ai-bg-image.png";
const imgVector = "icons/star-white.svg";

interface ButtonProps {
  text?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  state?: "Default" | "Hover" | "Pressed" | "Disabled";
  buttonType?: "Default" | "Tertiary Right Icon" | "Tertiary" | "Primary Right Icon" | "Primary Left Icon" | "Secondary" | "Secondary Left Icon" | "Secondary Right Icon" | "Button Link" | "Button Link Right Icon" | "Button Link Left Icon" | "Tertiary Left Icon";
}

function Button({ text = "Button", leftIcon = true, rightIcon = true, state = "Default", buttonType = "Default" }: ButtonProps) {
  if (state === "Default" && buttonType === "Primary Left Icon") {
    return (
      <div className="box-border content-stretch flex gap-2 items-center justify-start px-6 py-2.5 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] size-full" data-name="State=Default, Button Type=Primary Left Icon" data-node-id="3904:19140">
        <div className="relative shrink-0 size-[18.333px]" data-name="Vector" data-node-id="3904:19148">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
        <div className="font-['Inter:regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="3904:19141">
          <p className="leading-[20px] whitespace-pre">{text}</p>
        </div>
      </div>
    );
  }
}

export default function AISection() {
  return (
    <div className="bg-gradient-to-t box-border content-stretch flex flex-col from-[#00120c] gap-6 items-center justify-center px-0 py-16 md:py-24 lg:py-32 relative size-full to-[#000000] min-h-[400px] md:min-h-[450px] lg:min-h-[500px] overflow-hidden" data-name="Section Container" data-node-id="8207:44618">
      <div className="absolute bg-center bg-cover bg-no-repeat h-full left-[-1px] opacity-30 top-[-9.27px] w-full" data-name="image 25" data-node-id="8249:58715" style={{ backgroundImage: `url('${imgImage25}')` }} />
      <div className="box-border content-stretch flex flex-col gap-8 md:gap-10 lg:gap-12 items-center justify-center overflow-clip px-4 md:px-8 lg:px-16 xl:px-32 py-0 relative shrink-0 w-full" data-name="Container" data-node-id="8207:44620">
        <div className="content-stretch flex flex-col gap-4 md:gap-6 items-center justify-start leading-[0] not-italic relative shrink-0 text-white w-full max-w-4xl" data-name="Text Container" data-node-id="8207:44621">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-2xl md:text-3xl lg:text-4xl xl:text-[48px] w-full text-center" data-node-id="8207:44622">
            <p className="leading-tight md:leading-[40px] lg:leading-[48px] xl:leading-[56px]">Get creative with Marketplace AI</p>
          </div>
          <div className="font-['Inter:regular',_sans-serif] relative shrink-0 text-base md:text-lg w-full text-center" data-node-id="8207:44623">
            <p className="leading-relaxed md:leading-[24px]">Looking for a unique solution? Marketplace AI helps you design a custom website template from the ground up—based on your brand, your style, your preferences. Bring your vision to life without limits.</p>
          </div>
        </div>
        <div className="bg-[#0a7c00] box-border content-stretch flex gap-2 items-center justify-start px-6 py-2.5 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] shrink-0 w-full sm:w-auto" data-name="Button" data-node-id="8207:44625">
          <Button text="Create template" buttonType="Primary Left Icon" />
        </div>
      </div>
    </div>
  );
}
