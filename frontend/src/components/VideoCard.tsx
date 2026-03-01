interface VideoCardProps {
  embedUrl: string;
  title: string;
}

export default function VideoCard({ embedUrl, title }: VideoCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-200">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-stone-800 text-sm leading-snug">{title}</h3>
      </div>
    </div>
  );
}
