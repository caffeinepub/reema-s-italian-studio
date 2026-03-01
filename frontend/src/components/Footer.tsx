import { Link } from '@tanstack/react-router';
import { SiYoutube, SiInstagram, SiFacebook } from 'react-icons/si';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Lessons', path: '/lessons' },
  { label: 'Videos', path: '/videos' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: SiYoutube, label: 'YouTube', href: 'https://youtube.com', color: 'hover:text-red-400' },
  { icon: SiInstagram, label: 'Instagram', href: 'https://instagram.com', color: 'hover:text-pink-400' },
  { icon: SiFacebook, label: 'Facebook', href: 'https://facebook.com', color: 'hover:text-blue-400' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'reemas-italian-studio');

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Italian flag accent */}
      <div className="h-1 flex">
        <div className="flex-1 bg-italian-green" />
        <div className="flex-1 bg-white/20" />
        <div className="flex-1 bg-italian-red" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🇮🇹</span>
              <div>
                <span className="font-display font-bold text-white text-lg">Reema's</span>
                <span className="font-display font-bold text-italian-red text-lg ml-1">Italian Studio</span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Making Italian accessible to every Indian learner — one lesson at a time. Learn, speak, and love the Italian language!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-stone-400 hover:text-italian-green transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Follow Us</h3>
            <div className="flex gap-4 mb-4">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-stone-400 ${color} transition-colors text-xl`}
                >
                  <Icon />
                </a>
              ))}
            </div>
            <p className="text-stone-500 text-xs leading-relaxed">
              Subscribe to our YouTube channel for free Italian lessons every week!
            </p>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {year} Reema's Italian Studio. All rights reserved.</p>
          <p>
            Built with{' '}
            <span className="text-italian-red">♥</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
