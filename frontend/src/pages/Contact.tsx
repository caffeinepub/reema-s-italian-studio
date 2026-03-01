import { useState } from 'react';
import { SiYoutube, SiInstagram, SiFacebook } from 'react-icons/si';
import { Mail, MapPin, CheckCircle2 } from 'lucide-react';
import ItalianAccent from '../components/ItalianAccent';

const socialLinks = [
  {
    icon: SiYoutube,
    label: 'YouTube',
    handle: '@ReemaItalianStudio',
    href: 'https://youtube.com/@reemas-italian-studio',
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
  {
    icon: SiInstagram,
    label: 'Instagram',
    handle: '@reemas.italian',
    href: 'https://instagram.com',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
  },
  {
    icon: SiFacebook,
    label: 'Facebook',
    handle: 'Reema\'s Italian Studio',
    href: 'https://facebook.com',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate a brief delay for UX
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-neutral-bg">
      {/* Page Header */}
      <div className="bg-white border-b border-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-italian-green text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mt-2 mb-4">
            Contact Us ✉️
          </h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say Ciao? We'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <h2 className="font-display text-2xl font-bold text-stone-800 mb-1">Send a Message</h2>
              <p className="text-stone-500 text-sm mb-6">Fill out the form below and we'll get back to you soon.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-italian-green" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-stone-800 mb-2">Grazie mille! 🎉</h3>
                  <p className="text-stone-500 text-sm max-w-xs">
                    Your message has been received. We'll get back to you within 24–48 hours. In the meantime, check out our latest lessons!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-5 py-2 text-sm text-italian-green border border-italian-green rounded-full hover:bg-green-50 transition-colors font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1.5">
                      Full Name <span className="text-italian-red">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full px-4 py-3 rounded-xl border text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-italian-green/30 transition-all ${
                        errors.name ? 'border-italian-red bg-red-50' : 'border-stone-200 bg-stone-50 focus:border-italian-green focus:bg-white'
                      }`}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-italian-red">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">
                      Email Address <span className="text-italian-red">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="e.g. priya@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-italian-green/30 transition-all ${
                        errors.email ? 'border-italian-red bg-red-50' : 'border-stone-200 bg-stone-50 focus:border-italian-green focus:bg-white'
                      }`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-italian-red">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">
                      Message <span className="text-italian-red">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded-xl border text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-italian-green/30 transition-all resize-none ${
                        errors.message ? 'border-italian-red bg-red-50' : 'border-stone-200 bg-stone-50 focus:border-italian-green focus:bg-white'
                      }`}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-italian-red">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-italian-green text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message ✉️'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
              <h3 className="font-display font-bold text-stone-800 text-lg mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-italian-green" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-400 font-medium uppercase tracking-wider">Email</div>
                    <div className="text-stone-700 text-sm mt-0.5">reema@italianstudio.in</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-italian-green" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-400 font-medium uppercase tracking-wider">Based In</div>
                    <div className="text-stone-700 text-sm mt-0.5">India 🇮🇳 (Teaching Worldwide)</div>
                  </div>
                </div>
              </div>
            </div>

            <ItalianAccent />

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
              <h3 className="font-display font-bold text-stone-800 text-lg mb-4">Follow Us</h3>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, handle, href, color, bg, border }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl border ${bg} ${border} hover:shadow-sm transition-all duration-200 group`}
                  >
                    <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`${color} text-lg`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-stone-800 text-sm font-semibold">{label}</div>
                      <div className="text-stone-400 text-xs truncate">{handle}</div>
                    </div>
                    <span className="text-stone-300 group-hover:text-stone-500 transition-colors text-xs">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
              <div className="text-2xl mb-2">⏱️</div>
              <h4 className="font-semibold text-stone-800 text-sm mb-1">Quick Response</h4>
              <p className="text-stone-500 text-xs leading-relaxed">
                We typically respond to all messages within 24–48 hours. For urgent queries, reach out via Instagram DM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
