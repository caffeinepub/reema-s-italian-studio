interface ItalianAccentProps {
  className?: string;
}

export default function ItalianAccent({ className = '' }: ItalianAccentProps) {
  return (
    <div className={`flex h-1 rounded-full overflow-hidden ${className}`}>
      <div className="flex-1 bg-italian-green" />
      <div className="flex-1 bg-stone-200" />
      <div className="flex-1 bg-italian-red" />
    </div>
  );
}
