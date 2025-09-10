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
      className={`box-border gap-2 md:gap-3 lg:gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-[repeat(2,_minmax(0px,_1fr))] h-auto sm:h-[400px] lg:h-[668.8px] px-4 md:px-8 lg:px-32 py-0 relative shrink-0 w-full ${className}`}
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
