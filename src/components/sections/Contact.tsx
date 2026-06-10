import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeader from '../ui/SectionHeader';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Mail, Instagram, MessageCircle, XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Animated SVG checkmark
function AnimatedCheckmark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <motion.circle
        cx="16"
        cy="16"
        r="14"
        stroke="var(--neon)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.path
        d="M9 16.5L13.5 21L23 11"
        stroke="var(--neon)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const contactSchema = z.object({
    name: z.string().min(2, t('contact.form.name_label')),
    email: z.string().email(t('contact.form.email_label')),
    message: z.string().min(10, t('contact.form.message_label')),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [notification, setNotification] = React.useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
        title: "New Agency Inquiry",
        time: new Date().toLocaleString(),
      };

      await emailjs.send('service_lj009fn', 'template_jf16fwx', templateParams, 'y8QhHz6fvBdv9FXJ3');

      setNotification({ type: 'success', message: t('contact.form.success') });
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setNotification({ type: 'error', message: t('contact.form.error') });
    } finally {
      setTimeout(() => setNotification({ type: null, message: '' }), 5000);
    }
  };

  const socialCards = [
    {
      icon: Mail,
      label: t('contact.email_label'),
      value: 'whagency01@gmail.com',
      color: 'var(--neon)',
      hoverBorder: 'hover:border-[var(--neon)]/50',
      bgColor: 'bg-[var(--neon)]/10',
      textColor: 'text-[var(--neon)]',
    },
    {
      icon: Instagram,
      label: t('contact.follow_label'),
      value: '@wh__agency',
      color: '#E1306C',
      hoverBorder: 'hover:border-[#E1306C]/50',
      bgColor: 'bg-[#E1306C]/10',
      textColor: 'text-[#E1306C]',
    },
    {
      icon: MessageCircle,
      label: t('contact.dm_label'),
      value: 'TikTok / Instagram',
      color: '#00f2ff',
      hoverBorder: 'hover:border-[#00f2ff]/50',
      bgColor: 'bg-[#00f2ff]/10',
      textColor: 'text-[#00f2ff]',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* ── Background personnalisé Contact ── */}
      {/* Warm violet orbe gauche */}
      <div className="absolute -top-10 -left-20 w-[500px] h-[500px] rounded-full bg-[var(--violet-glow)] opacity-[0.05] blur-[130px] pointer-events-none" />
      {/* Neon orbe droite */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[var(--neon)] opacity-[0.04] blur-[120px] pointer-events-none" />
      {/* Centre horizontal glow line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--violet-glow)]/15 to-transparent pointer-events-none" />
      {/* Subtle 45° grid */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, rgba(189,0,255,0.5) 0px, rgba(189,0,255,0.5) 1px, transparent 1px, transparent 50px)',
        }}
      />
      <div className="container mx-auto px-6">
        <SectionHeader
          title={t('contact.subtitle')}
          subtitle={t('contact.description')}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto mt-16">
          {/* Left: Social Cards */}
          <div className="space-y-6">
            {socialCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 4 }}
                className={`group relative p-6 rounded-3xl bg-white/5 border border-white/10 ${card.hoverBorder} backdrop-blur-xl transition-all duration-500`}
              >
                <div className="flex items-center gap-6">
                  <motion.div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.bgColor} ${card.textColor}`}
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <card.icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1">{card.label}</p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{card.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Form with animated border */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Animated border draw */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ borderRadius: '2rem' }}
              aria-hidden="true"
            >
              <motion.rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="30"
                ry="30"
                fill="none"
                stroke="rgba(0, 242, 255, 0.4)"
                strokeWidth="1.5"
                strokeDasharray="2000"
                initial={{ strokeDashoffset: 2000 }}
                animate={isInView ? { strokeDashoffset: 0 } : {}}
                transition={{ duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.3 }}
              />
            </svg>

            <div className="bg-black/5 dark:bg-[#0b0e14]/40 backdrop-blur-2xl border border-[var(--neon)]/20 dark:border-[var(--neon)]/30 rounded-[2rem] p-8 shadow-[0_0_30px_rgba(0,242,255,0.1)] hover:shadow-[0_0_45px_rgba(0,242,255,0.2)] transition-all duration-500">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                    {t('contact.form.name_label')}
                  </label>
                  <input
                    {...register("name")}
                    className="input-glow"
                    placeholder={t('contact.form.name_placeholder')}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-[10px] mt-1 ml-1"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                    {t('contact.form.email_label')}
                  </label>
                  <input
                    {...register("email")}
                    className="input-glow"
                    placeholder={t('contact.form.email_placeholder')}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-[10px] mt-1 ml-1"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                    {t('contact.form.message_label')}
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="input-glow resize-none"
                    placeholder={t('contact.form.message_placeholder')}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-[10px] mt-1 ml-1"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit — liquid gradient */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-liquid w-full py-4 text-xs font-bold uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isSubmitting ? (
                      <motion.span
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        {t('contact.form.submitting')}
                      </motion.span>
                    ) : (
                      <motion.span
                        key="submit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {t('contact.form.submit')}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Notification */}
      <AnimatePresence>
        {notification.type && (
          <motion.div
            initial={{ opacity: 0, y: 60, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 right-8 z-50 max-w-sm"
          >
            <div className={`glass p-5 rounded-2xl flex items-center space-x-4 shadow-2xl border-l-4 ${
              notification.type === 'success' ? 'border-l-[var(--neon)]' : 'border-l-red-500'
            }`}>
              <div className="flex-shrink-0">
                {notification.type === 'success' ? (
                  <AnimatedCheckmark />
                ) : (
                  <XCircle className="text-red-500 h-8 w-8" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground">
                  {notification.type === 'success' ? 'Success!' : 'Error'}
                </p>
                <p className="text-sm text-muted-foreground leading-tight">{notification.message}</p>
              </div>
              <button
                onClick={() => setNotification({ type: null, message: '' })}
                className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <XCircle size={16} className="opacity-50" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
