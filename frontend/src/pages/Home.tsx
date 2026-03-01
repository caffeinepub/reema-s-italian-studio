import { Link } from '@tanstack/react-router';
import { Star, ChevronRight, Play } from 'lucide-react';
import LessonCard from '../components/LessonCard';
import ItalianAccent from '../components/ItalianAccent';

const featuredLessons = [
  {
    title: 'Italian Alphabet & Pronunciation',
    description: 'Master the Italian alphabet and learn how each letter sounds — the perfect starting point for beginners.',
    icon: '🔤',
    category: 'Beginner',
  },
  {
    title: 'Common Italian Greetings',
    description: 'Learn essential greetings like Ciao, Buongiorno, and Arrivederci to start conversations confidently.',
    icon: '👋',
    category: 'Beginner',
  },
  {
    title: 'Numbers 1–20 in Italian',
    description: 'Count from uno to venti! Numbers are essential for shopping, telling time, and everyday life in Italy.',
    icon: '🔢',
    category: 'Vocabulary',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    quote: 'Reema\'s teaching style is so clear and friendly! I went from zero to holding basic conversations in just 2 months. Grazie mille!',
    rating: 5,
    avatar: 'PS',
  },
  {
    name: 'Arjun Mehta',
    location: 'Delhi, India',
    quote: 'The lessons are perfectly structured for Indian learners. Reema explains grammar in a way that actually makes sense. Highly recommended!',
    rating: 5,
    avatar: 'AM',
  },
  {
    name: 'Kavya Reddy',
    location: 'Hyderabad, India',
    quote: 'I was always intimidated by Italian, but this channel made it so approachable. The vocabulary lessons are especially helpful!',
    rating: 5,
    avatar: 'KR',
  },
  {
    name: 'Rohan Gupta',
    location: 'Bangalore, India',
    quote: 'Best free Italian learning resource for Indians! The pronunciation guides helped me sound much more natural. Bellissimo!',
    rating: 5,
    avatar: 'RG',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-red-50 py-20 md:py-28">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/generated/hero-banner.dim_1200x500.png')" }}
        />
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-italian-green/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-italian-red/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-green-100 rounded-full px-4 py-1.5 text-sm text-italian-green font-medium mb-6 shadow-xs">
            <span>🇮🇹</span>
            <span>Free Italian Lessons for Indian Learners</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-stone-800 leading-tight mb-6">
            Learn Italian Easily —{' '}
            <span className="text-italian-green">Step by Step</span>{' '}
            🇮🇹
          </h1>

          <p className="text-stone-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of Indian learners mastering Italian with Reema — your friendly guide to the beautiful language of Italy. From alphabet to conversations, we've got you covered!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/lessons"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-italian-green text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-base"
            >
              Start Learning <ChevronRight size={18} />
            </Link>
            <a
              href="https://youtube.com/@reemas-italian-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-italian-red font-semibold rounded-full border-2 border-italian-red hover:bg-red-50 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-base"
            >
              <Play size={18} fill="currentColor" /> Watch on YouTube
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: '50+', label: 'Free Lessons' },
              { value: '10K+', label: 'Students' },
              { value: '4.9★', label: 'Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-2xl text-stone-800">{stat.value}</div>
                <div className="text-stone-500 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ItalianAccent className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-0" />

      {/* Teacher Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src="/assets/generated/teacher-avatar.dim_400x400.png"
                  alt="Reema - Italian Teacher"
                  className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg border-4 border-white ring-4 ring-green-100"
                />
                <div className="absolute -bottom-2 -right-2 bg-italian-green text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Your Teacher
                </div>
              </div>
            </div>
            <div>
              <span className="text-italian-green text-sm font-semibold uppercase tracking-wider">Meet Your Guide</span>
              <h2 className="font-display text-3xl font-bold text-stone-800 mt-1 mb-4">Ciao! I'm Reema 👩‍🏫</h2>
              <p className="text-stone-500 leading-relaxed max-w-xl">
                I'm a passionate Italian language educator dedicated to making Italian accessible to every Indian learner. With years of teaching experience and a deep love for Italian culture, I've designed these lessons specifically for Indian students — using familiar examples and a step-by-step approach that actually works.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1 mt-4 text-italian-green font-medium hover:underline text-sm"
              >
                Learn more about me <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lessons */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-italian-green text-sm font-semibold uppercase tracking-wider">Start Here</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-800 mt-1">Featured Lessons</h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto">
              Hand-picked lessons to get you started on your Italian journey right away.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredLessons.map((lesson) => (
              <LessonCard key={lesson.title} {...lesson} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/lessons"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-italian-green text-italian-green font-semibold rounded-full hover:bg-italian-green hover:text-white transition-all duration-200"
            >
              View All Lessons <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <ItalianAccent className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-italian-green text-sm font-semibold uppercase tracking-wider">Student Stories</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-800 mt-1">What Our Students Say</h2>
            <p className="text-stone-500 mt-3">Real feedback from real learners across India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-neutral-bg rounded-2xl p-6 border border-stone-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-italian-green text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800 text-sm">{t.name}</div>
                    <div className="text-stone-400 text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-italian-green to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Speak Italian? 🇮🇹
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of Indian learners who are already on their Italian journey. It's free, fun, and effective!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/lessons"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-italian-green font-bold rounded-full hover:bg-green-50 transition-all duration-200 shadow-md"
            >
              Start Learning Free <ChevronRight size={18} />
            </Link>
            <a
              href="https://youtube.com/@reemas-italian-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              <Play size={18} fill="currentColor" /> Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
