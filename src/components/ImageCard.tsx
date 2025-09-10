interface ImageCardProps {
  id: string;
  src: string;
  alt: string;
  gridArea?: string;
  aspectRatio?: string;
  className?: string;
  onClick?: () => void;
}

export default function ImageCard({ 
  id, 
  src, 
  alt, 
  gridArea, 
  aspectRatio = "aspect-[500/400]", 
  className = "",
  onClick 
}: ImageCardProps) {
  return (
    <div 
      className={`${gridArea ? `[grid-area:${gridArea}]` : ''} ${aspectRatio} box-border content-stretch flex flex-col gap-2 md:gap-3 items-start justify-end overflow-clip p-4 md:p-6 lg:p-[32px] relative rounded-[12px] md:rounded-[14px] lg:rounded-[16px] shrink-0 cursor-pointer hover:shadow-lg transition-shadow duration-200 ${className}`}
      data-name="Card"
      data-node-id={id}
      onClick={onClick}
    >
      <div className="" data-name="Image Container">
        <img alt={alt} className="block max-w-none size-full" src={src} />
      </div>
    </div>
  );
}
