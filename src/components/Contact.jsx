// src/components/Contact.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper, { fadeInUp } from './SectionWrapper';
import Button from './Button';
import {
  HiMail,
  HiLocationMarker,
  HiPhone,
  HiCheckCircle,
  HiPaperAirplane,
} from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const contactInfo = [
  { icon: HiMail, label: 'Email', value: 'jayachandran.ffw@gmail.com', href: 'mailto:jayachandran.ffw@gmail.com' },
  { icon: HiPhone, label: 'Phone', value: '+91 7339361301', href: 'tel:+917339361301' },
  { icon: HiLocationMarker, label: 'Location', value: 'Tiruchirappalli, Tamil Nadu, India', href: null },
];

const socials = [
  { icon: SiGithub, label: 'GitHub', href: 'https://github.com/jayachandran-ffw' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com/in/jayachandran-ffw' },
  { icon: FaXTwitter, label: 'X / Twitter', href: 'https://x.com/jayachandran-ffw' },
];

// Reusable input field component
const InputField = ({ label, id, error, textarea = false, ...props }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </label>
    {textarea ? (
      <textarea
        id={id}
        rows={5}
        className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-600 border text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none ${
          error
            ? 'border-red-400 focus:ring-red-400'
            : 'border-gray-200 dark:border-white/10'
        }`}
        {...props}
      />
    ) : (
      <input
        id={id}
        className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-600 border text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
          error
            ? 'border-red-400 focus:ring-red-400'
            : 'border-gray-200 dark:border-white/10'
        }`}
        {...props}
      />
    )}
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="text-xs text-red-400"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    
    setSending(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "aeb13ee7-ba33-4079-9d5a-6b15509dbe08",
          name: form.name,
          email: form.email,
          subject: form.subject || "New Portfolio Message",
          message: form.message
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("Form submission failed:", result);
        alert("Something went wrong while sending the message. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind? Let's build something amazing together"
    >
      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left – contact info */}
        <motion.div variants={fadeInUp} className="lg:col-span-2 flex flex-col gap-6">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities. Feel free to reach out through any channel.
          </p>

          <div className="flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-primary-500 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div>
            <p className="text-xs text-gray-400 mb-3">Find me on</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-500/10 hover:text-primary-500 hover:border-primary-500/30 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right – form */}
        <motion.div variants={fadeInUp} className="lg:col-span-3">
          <div className="bg-white dark:bg-dark-700 rounded-2xl p-6 sm:p-8 shadow-card dark:shadow-card-dark border border-gray-100 dark:border-white/10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  >
                    <HiCheckCircle size={64} className="text-green-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <Button variant="secondary" onClick={() => setSent(false)}>
                    Send Another
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label="Your Name *"
                      id="name"
                      type="text"
                      placeholder="Jaya Chandran"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                    />
                    <InputField
                      label="Email Address *"
                      id="email"
                      type="email"
                      placeholder="jaya@example.com"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                  </div>
                  <InputField
                    label="Subject"
                    id="subject"
                    type="text"
                    placeholder="Project collaboration"
                    value={form.subject}
                    onChange={handleChange}
                    error={errors.subject}
                  />
                  <InputField
                    label="Message *"
                    id="message"
                    textarea
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={sending ? null : <HiPaperAirplane />}
                    className="w-full"
                  >
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
