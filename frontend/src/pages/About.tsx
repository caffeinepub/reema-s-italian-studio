import { CheckCircle2, Globe, Brain, Briefcase, Heart, Music } from 'lucide-react';
import ItalianAccent from '../components/ItalianAccent';
import { Link } from '@tanstack/react-router';

const benefits = [
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description: 'Italian is valuable in fashion, design, music, culinary arts, and international business. Open new professional doors.',
  },
  {
    icon: Globe,
    title: 'Travel with Confidence',
    description: 'Explore Italy like a local! Communicate with locals, read menus, and navigate cities with ease.',
  },
  {
    icon: Brain,
    title: 'Cognitive Benefits',
    description: 'Learning a new language boosts memory, problem-solving skills, and keeps your brain sharp.',
  },
  {
    icon: Heart,
    title: 'Cultural Enrichment',
    description: 'Appreciate Italian art, cinema, literature, and cuisine on a deeper level by understanding the language.',
  },
  {
    icon: Music,
    title: 'Music & Opera',
    description: 'Understand the world\'s most beautiful operas and classical music in their original Italian language.',
  },
  {
    icon: CheckCircle2,
    title: 'Gateway to Romance Languages',
    description: 'Italian makes it easier to learn Spanish, French, and Portuguese — expanding your linguistic horizons.',
  },
];

export default function About() {
  return (
    <div className="bg-neutral-bg">
      {/* Page Header */}
      <div className="bg-white border-b border-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-italian-green text-sm font-semibold uppercase tracking-wider">Our Story</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mt-2 mb-4">
            About Us 🇮🇹
          </h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Discover the story behind Reema's Italian Studio and our mission to bring the beauty of Italian to every Indian learner.
          </p>
        </div>
      </div>

      {/* Meet Your Teacher */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-shrink-0 text-center">
              <div className="relative inline-block">
                <img
                  src="/assets/generated/teacher-avatar.dim_400x400.png"
                  alt="Reema - Italian Language Teacher"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-white ring-4 ring-green-100"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-italian-green text-white text-sm font-bold px-5 py-1.5 rounded-full shadow-md whitespace-nowrap">
                  🎓 Italian Educator
                </div>
              </div>
            </div>

            <div className="flex-1">
              <span className="text-italian-green text-sm font-semibold uppercase tracking-wider">Meet Your Teacher</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-800 mt-2 mb-5">
                Ciao! I'm Reema 👩‍🏫
              </h2>
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  I'm a passionate Italian language educator with a deep love for Italian culture, art, and cuisine. My journey with Italian began over a decade ago, and I've been teaching ever since — helping hundreds of Indian students discover the joy of speaking Italian.
                </p>
                <p>
                  Having grown up in India, I understand the unique challenges Indian learners face when approaching a European language. That's why I've designed my lessons specifically for Indian students — using relatable examples, familiar teaching methods, and a patient, encouraging approach.
                </p>
                <p>
                  My goal is simple: to make Italian accessible, enjoyable, and achievable for every Indian learner, regardless of their background or prior language experience.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {['10+ Years Teaching', 'Native-Level Italian', 'India-Focused Curriculum', '10,000+ Students'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-green-50 text-italian-green text-xs font-semibold rounded-full border border-green-100">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ItalianAccent className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      {/* Our Mission */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-italian-red text-sm font-semibold uppercase tracking-wider">Our Purpose</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-800 mt-2 mb-6">Our Mission</h2>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-stone-100">
              <div className="text-5xl mb-5">🎯</div>
              <p className="text-stone-600 text-lg leading-relaxed mb-5">
                At <strong className="text-stone-800">Reema's Italian Studio</strong>, our mission is to break down the barriers between Indian learners and the Italian language. We believe that language learning should be <em>free, accessible, and enjoyable</em> for everyone.
              </p>
              <p className="text-stone-500 leading-relaxed mb-5">
                We create structured, high-quality Italian lessons tailored specifically for Indian students — taking into account the linguistic background, learning styles, and cultural context of our audience. From complete beginners to intermediate learners, we have something for everyone.
              </p>
              <p className="text-stone-500 leading-relaxed">
                Through our YouTube channel and this website, we provide free lessons covering vocabulary, grammar, pronunciation, and conversational Italian — everything you need to go from zero to confident speaker.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ItalianAccent className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />

      {/* Why Learn Italian */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-italian-green text-sm font-semibold uppercase tracking-wider">Reasons to Start</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-800 mt-2 mb-3">
              Why Learn Italian? 🇮🇹
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Italian is one of the world's most beautiful and rewarding languages to learn. Here's why you should start today:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-neutral-bg rounded-2xl p-6 border border-stone-100 hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-italian-green" />
                </div>
                <h3 className="font-display font-semibold text-stone-800 text-base mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/lessons"
              className="inline-flex items-center gap-2 px-8 py-4 bg-italian-green text-white font-bold rounded-full hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Start Your Italian Journey →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
