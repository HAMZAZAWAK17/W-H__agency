import React from 'react';
import emailjs from '@emailjs/browser';
import SectionHeader from '../ui/SectionHeader';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, MessageCircle, CheckCircle, XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const contactSchema = z.object({
    name: z.string().min(2, t('contact.form.name_label')),
    email: z.string().email(t('contact.form.email_label')),
    message: z.string().min(10, t('contact.form.message_label')),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const [notification, setNotification] = React.useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
        title: "New Agency Inquiry",
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        'service_lj009fn',
        'template_jf16fwx',
        templateParams,
        'y8QhHz6fvBdv9FXJ3'
      );

      setNotification({ type: 'success', message: t('contact.form.success') });
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setNotification({ type: 'error', message: t('contact.form.error') });
    } finally {
      setTimeout(() => setNotification({ type: null, message: '' }), 5000);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          title={t('contact.subtitle')}
          subtitle={t('contact.description')}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto mt-16">
          {/* Left: Stacked Social Cards */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[var(--neon)]/50 backdrop-blur-xl transition-all duration-500"
            >
              <div className="flex items-center gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--neon)]/10 text-[var(--neon)] group-hover:scale-110 transition-transform duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1">{t('contact.email_label')}</p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">whagency01@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#E1306C]/50 backdrop-blur-xl transition-all duration-500"
            >
              <div className="flex items-center gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E1306C]/10 text-[#E1306C] group-hover:scale-110 transition-transform duration-500">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1">{t('contact.follow_label')}</p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">@wh__agency</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#00f2ff]/50 backdrop-blur-xl transition-all duration-500"
            >
              <div className="flex items-center gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00f2ff]/10 text-[#00f2ff] group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-1">{t('contact.dm_label')}</p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">TikTok / Instagram</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Glowing Tech Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-black/5 dark:bg-[#0b0e14]/40 backdrop-blur-2xl border border-[var(--neon)]/30 dark:border-[var(--neon)]/50 rounded-[2rem] p-8 shadow-[0_0_30px_rgba(0,242,255,0.15)] hover:shadow-[0_0_40px_rgba(0,242,255,0.25)] transition-all duration-500">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">{t('contact.form.name_label')}</label>
                  <input 
                    {...register("name")}
                    className="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-3.5 text-foreground focus:outline-none focus:border-[var(--neon)] transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-sm dark:shadow-none"
                    placeholder={t('contact.form.name_placeholder')}
                  />
                  {errors.name && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">{t('contact.form.email_label')}</label>
                  <input 
                    {...register("email")}
                    className="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-3.5 text-foreground focus:outline-none focus:border-[var(--neon)] transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-sm dark:shadow-none"
                    placeholder={t('contact.form.email_placeholder')}
                  />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">{t('contact.form.message_label')}</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-3.5 text-foreground focus:outline-none focus:border-[var(--neon)] transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none shadow-sm dark:shadow-none"
                    placeholder={t('contact.form.message_placeholder')}
                  />
                  {errors.message && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[var(--neon)] to-[var(--electric)] text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Animated Notification */}
      <AnimatePresence>
        {notification.type && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 max-w-sm"
          >
            <div className={`glass p-5 rounded-2xl flex items-center space-x-4 shadow-2xl border-l-4 ${notification.type === 'success' ? 'border-l-primary' : 'border-l-red-500'
              }`}>
              <div className="flex-shrink-0">
                {notification.type === 'success' ? (
                  <CheckCircle className="text-primary h-8 w-8" />
                ) : (
                  <XCircle className="text-red-500 h-8 w-8" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground">
                  {notification.type === 'success' ? 'Success!' : 'Error'}
                </p>
                <p className="text-sm text-muted-foreground leading-tight">
                  {notification.message}
                </p>
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
