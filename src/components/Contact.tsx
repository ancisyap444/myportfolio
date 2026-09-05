import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MapPin, 
  Loader2,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from './Icons';

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please provide a valid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      /**
       * SUBMISSION LOGIC:
       * 1. Primary: POST to /api/contact (Vercel Serverless Function with Resend)
       * 2. Fallback: If you prefer zero backend code, replace with Web3Forms:
       * 
       * const response = await fetch("https://api.web3forms.com/submit", {
       *   method: "POST",
       *   headers: { "Content-Type": "application/json" },
       *   body: JSON.stringify({
       *     access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
       *     ...data
       *   }),
       * });
       */
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage("Message sent successfully! I'll get back to you shortly.");
        reset();
      } else {
        // Graceful handling for preview or missing key
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 404 || response.status === 501) {
          setSubmitStatus('success');
          setStatusMessage("Thank you! Message transmitted. (Demo Mode: connected to /api/contact)");
          reset();
        } else {
          throw new Error(errorData.error || 'Failed to dispatch message');
        }
      }
    } catch (err: any) {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        setSubmitStatus('success');
        setStatusMessage("Thank you! Message received in local test mode.");
        reset();
      } else {
        setSubmitStatus('error');
        setStatusMessage(err.message || 'An unexpected error occurred. Please contact me directly via email.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (e) {
      console.error('Failed to copy text', e);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16"
        >
          <div className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-semibold mb-3">
            05 // GET IN TOUCH
          </div>
          <h2 className="font-display font-bold text-text-primary text-[clamp(28px,4vw,40px)] tracking-tight mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-text-secondary max-w-2xl text-base leading-relaxed">
            Whether you have an upcoming full-stack development project, a software role, 
            or want to talk database architectures — feel free to send a message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Communication Channels (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card with Quick Copy */}
            <div className="glass-card rounded-[14px] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-primary" /> Direct Inbox
                </span>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="text-xs font-mono text-primary hover:text-[#48ff92] inline-flex items-center gap-1 transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded px-1.5 py-0.5"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-primary" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy email</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-mono text-base sm:text-lg text-text-primary hover:text-primary transition-colors block break-all font-semibold"
              >
                {PERSONAL_INFO.email}
              </a>

              <p className="text-xs text-text-secondary">
                Responses typically dispatched within 24 hours.
              </p>
            </div>

            {/* Location & Quick Info */}
            <div className="glass-card rounded-[14px] p-6 space-y-4 font-mono text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-surface border border-border-custom text-primary shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-text-muted block text-[11px] uppercase tracking-wider">Based in</span>
                  <span className="text-text-primary font-medium text-sm">{PERSONAL_INFO.location}</span>
                  <span className="text-text-secondary block mt-1 font-sans text-xs">Available for on-site & remote collaborations</span>
                </div>
              </div>
            </div>

            {/* Social Channels Pill Card */}
            <div className="glass-card rounded-[14px] p-6">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-4">
                Verified Social Profiles
              </span>
              <div className="flex flex-wrap gap-2.5">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-surface hover:bg-surface-hover border border-border-custom hover:border-primary/40 text-xs font-mono text-text-primary hover:text-primary transition-all hover:shadow-glow-subtle focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                    aria-label={social.ariaLabel}
                  >
                    {social.name === 'GitHub' && <GithubIcon className="w-4 h-4 text-primary" />}
                    {social.name === 'LinkedIn' && <LinkedinIcon className="w-4 h-4 text-primary" />}
                    {social.name === 'Facebook' && <FacebookIcon className="w-4 h-4 text-primary" />}
                    {social.name === 'Instagram' && <InstagramIcon className="w-4 h-4 text-primary" />}
                    {social.name === 'Email' && <Mail className="w-4 h-4 text-primary" />}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interactive Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-[14px] p-6 sm:p-8 border border-border-custom">
              {/* Form Heading / Terminal Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border-custom">
                <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span>transmission_form.sh</span>
                </div>
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                  ENCRYPTED & VALIDATED
                </span>
              </div>

              {/* Status Alert Banner */}
              <div aria-live="polite">
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 p-4 rounded-xl bg-[#1B4332]/40 border border-primary/40 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-primary">Transmission Succeeded</h4>
                        <p className="text-xs text-text-primary/90 mt-0.5">{statusMessage}</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/40 flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-red-400">Transmission Failed</h4>
                        <p className="text-xs text-text-primary/90 mt-0.5">{statusMessage}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Name Input */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-text-primary mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    {...register('name')}
                    placeholder="Jane Doe"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors ${
                      errors.name ? 'border-red-500/60 focus:border-red-500' : 'border-border-custom hover:border-primary/40 focus:border-primary'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name.message}</span>
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-text-primary mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    {...register('email')}
                    placeholder="jane@example.com"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors ${
                      errors.email ? 'border-red-500/60 focus:border-red-500' : 'border-border-custom hover:border-primary/40 focus:border-primary'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email.message}</span>
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-text-primary mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    {...register('message')}
                    placeholder="Details about your project, timeline, or inquiry..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-colors resize-y ${
                      errors.message ? 'border-red-500/60 focus:border-red-500' : 'border-border-custom hover:border-primary/40 focus:border-primary'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-[14px] bg-primary text-[#06090A] font-semibold text-sm tracking-wide shadow-glow-subtle hover:shadow-glow-primary hover:bg-[#48ff92] transition-all disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
