import { BookOpen } from 'lucide-react';
import { Link } from '@tanstack/react-router';

interface LessonCardProps {
  title: string;
  description: string;
  category?: string;
  icon?: string;
  linkTo?: string;
}

export default function LessonCard({ title, description, category, icon, linkTo = '/lessons' }: LessonCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-xl flex-shrink-0">
          {icon || <BookOpen size={18} className="text-italian-green" />}
        </div>
        <div className="flex-1 min-w-0">
          {category && (
            <span className="text-xs font-medium text-italian-green uppercase tracking-wider">{category}</span>
          )}
          <h3 className="font-display font-semibold text-stone-800 text-base leading-snug mt-0.5">{title}</h3>
        </div>
      </div>
      <p className="text-stone-500 text-sm leading-relaxed flex-1 mb-4">{description}</p>
      <Link
        to={linkTo}
        className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-italian-green text-white text-sm font-medium hover:bg-green-700 transition-colors self-start"
      >
        Start Lesson →
      </Link>
    </div>
  );
}
