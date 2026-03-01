import LessonCard from '../components/LessonCard';
import ItalianAccent from '../components/ItalianAccent';

const beginnerLessons = [
  {
    title: 'The Italian Alphabet',
    description: 'Learn all 21 letters of the Italian alphabet with correct pronunciation. A must-know foundation for every beginner.',
    icon: '🔤',
  },
  {
    title: 'Common Italian Greetings',
    description: 'Master essential greetings: Ciao, Buongiorno, Buonasera, Arrivederci, and more for everyday conversations.',
    icon: '👋',
  },
  {
    title: 'Introducing Yourself',
    description: 'Learn how to say your name, where you\'re from, and basic personal information in Italian.',
    icon: '🙋',
  },
  {
    title: 'Numbers 1–20',
    description: 'Count from uno to venti! Essential for shopping, telling time, and navigating daily life in Italian.',
    icon: '🔢',
  },
  {
    title: 'Days & Months',
    description: 'Learn the days of the week (lunedì, martedì...) and months of the year in Italian.',
    icon: '📅',
  },
];

const vocabularyLessons = [
  {
    title: 'Food & Drinks Vocabulary',
    description: 'Discover Italian food words: pasta, pizza, caffè, vino, and more. Perfect for dining out in Italy!',
    icon: '🍝',
  },
  {
    title: 'Colors in Italian',
    description: 'Learn all the colors — rosso, verde, blu, giallo, bianco, nero — and how to use them in sentences.',
    icon: '🎨',
  },
  {
    title: 'Body Parts',
    description: 'Vocabulary for body parts: testa, mano, occhi, naso, bocca. Useful for health and daily conversations.',
    icon: '🫀',
  },
  {
    title: 'Family Members',
    description: 'Learn Italian words for family: madre, padre, fratello, sorella, nonno, nonna, and more.',
    icon: '👨‍👩‍👧',
  },
  {
    title: 'Common Adjectives',
    description: 'Describe people and things with adjectives: grande, piccolo, bello, brutto, buono, cattivo.',
    icon: '✨',
  },
];

const grammarLessons = [
  {
    title: 'Italian Articles',
    description: 'Understand definite (il, la, i, le) and indefinite (un, una) articles and when to use them.',
    icon: '📖',
  },
  {
    title: 'Subject Pronouns',
    description: 'Learn io, tu, lui/lei, noi, voi, loro — the building blocks of Italian sentences.',
    icon: '👤',
  },
  {
    title: 'Present Tense Verbs',
    description: 'Conjugate regular -are, -ere, and -ire verbs in the present tense. The most important grammar lesson!',
    icon: '⚡',
  },
  {
    title: 'Past Tense (Passato Prossimo)',
    description: 'Learn how to talk about past events using the passato prossimo with avere and essere.',
    icon: '⏮️',
  },
  {
    title: 'Question Words',
    description: 'Ask questions using chi, cosa, dove, quando, come, perché, quanto — essential for conversations.',
    icon: '❓',
  },
];

interface LessonSectionProps {
  title: string;
  subtitle: string;
  lessons: { title: string; description: string; icon: string }[];
  accentColor: string;
  badgeColor: string;
}

function LessonSection({ title, subtitle, lessons, accentColor, badgeColor }: LessonSectionProps) {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-1 h-12 rounded-full ${accentColor}`} />
          <div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${badgeColor}`}>{subtitle}</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-800 mt-0.5">{title}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.title} {...lesson} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Lessons() {
  return (
    <div className="bg-neutral-bg">
      {/* Page Header */}
      <div className="bg-white border-b border-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-italian-green text-sm font-semibold uppercase tracking-wider">All Lessons</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mt-2 mb-4">
            Italian Lessons 📚
          </h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Structured lessons designed for Indian beginners. Start from the basics and build your way up to fluency — at your own pace, completely free.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {['Beginner', 'Vocabulary', 'Grammar'].map((cat) => (
              <span key={cat} className="px-4 py-1.5 bg-green-50 text-italian-green text-sm font-medium rounded-full border border-green-100">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      <LessonSection
        title="Beginner Lessons"
        subtitle="Start Here"
        lessons={beginnerLessons}
        accentColor="bg-italian-green"
        badgeColor="text-italian-green"
      />

      <ItalianAccent className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      <LessonSection
        title="Vocabulary Lessons"
        subtitle="Build Your Word Bank"
        lessons={vocabularyLessons}
        accentColor="bg-amber-400"
        badgeColor="text-amber-600"
      />

      <ItalianAccent className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      <LessonSection
        title="Grammar Lessons"
        subtitle="Master the Structure"
        lessons={grammarLessons}
        accentColor="bg-italian-red"
        badgeColor="text-italian-red"
      />
    </div>
  );
}
