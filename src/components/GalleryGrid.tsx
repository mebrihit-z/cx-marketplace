import ImageCard from './ImageCard';

interface Template {
  id: string;
  src: string;
  alt: string;
  gridArea?: string;
  aspectRatio?: string;
  title?: string;
  category?: string;
}

interface GalleryGridProps {
  templates: Template[];
  className?: string;
  onCardClick?: (template: Template) => void;
}

export default function GalleryGrid({ 
  templates, 
  className = "",
  onCardClick 
}: GalleryGridProps) {
  return (
    <div 
      className={`box-border gap-4 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[668.8px] px-32 py-0 relative shrink-0 w-full ${className}`}
      data-name="Grid"
    >
      {templates.map((template, index) => (
        <ImageCard
          key={template.id || index}
          id={template.id}
          src={template.src}
          alt={template.alt}
          gridArea={template.gridArea}
          aspectRatio={template.aspectRatio}
          onClick={() => onCardClick?.(template)}
        />
      ))}
    </div>
  );
}
