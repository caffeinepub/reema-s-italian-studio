import VideoCard from '../components/VideoCard';
import ItalianAccent from '../components/ItalianAccent';

const videos = [
  {
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Italian Alphabet Tutorial — Learn to Pronounce Every Letter',
  },
  {
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Learn Italian Greetings — Ciao, Buongiorno & More!',
  },
  {
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Italian Numbers 1–100 — Count Like a Native Speaker',
  },
  {
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Common Italian Phrases for Beginners — Everyday Conversations',
  },
  {
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Italian Pronunciation Guide — Sound Like an Italian!',
  },
  {
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Italian Verb Conjugation Basics — Present Tense Made Easy',
  },
  {
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Italian Food Vocabulary — Eat Your Way Through Italy',
  },
  {
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Italian Articles Explained — Il, La, Un, Una & More',
  },
  {
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Italian Past Tense — Passato Prossimo for Beginners',
  },
];

export default function Videos() {
  return (
    <div className="bg-neutral-bg">
      {/* Page Header */}
      <div className="bg-white border-b border-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-italian-red text-sm font-semibold uppercase tracking-wider">Watch & Learn</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mt-2 mb-4">
            Video Lessons 🎬
          </h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Watch our free Italian video lessons on YouTube. Visual, engaging, and designed for Indian learners. Subscribe to never miss a new lesson!
          </p>
          <a
            href="https://youtube.com/@reemas-italian-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-italian-red text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-stone-800">All Video Lessons</h2>
            <p className="text-stone-500 text-sm mt-1">{videos.length} videos available</p>
          </div>
          <ItalianAccent className="w-24 hidden sm:flex" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={index} embedUrl={video.embedUrl} title={video.title} />
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-stone-100 shadow-sm">
          <div className="text-4xl mb-3">🎥</div>
          <h3 className="font-display text-xl font-bold text-stone-800 mb-2">More Videos on YouTube</h3>
          <p className="text-stone-500 text-sm mb-5 max-w-md mx-auto">
            We upload new Italian lessons every week! Subscribe to our YouTube channel to get notified when new videos are published.
          </p>
          <a
            href="https://youtube.com/@reemas-italian-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-italian-red text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
          >
            Visit YouTube Channel →
          </a>
        </div>
      </div>
    </div>
  );
}
