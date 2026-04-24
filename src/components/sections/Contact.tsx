import React from 'react';
import emailjs from '@emailjs/browser';
import SectionHeader from '../ui/SectionHeader';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, MessageCircle, Send, CheckCircle, XCircle } from 'lucide-react';
import Card from '../ui/Card';
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

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-12 max-w-6xl mx-auto mt-20">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white leading-[1.2]">
                {t('contact.title_prefix')} <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b8c4] to-[#7000ff] dark:from-[#00f2ff] dark:to-[#bd00ff]">
                  {t('contact.title_accent')}
                </span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-md text-lg leading-relaxed">
                {t('contact.info_description')}
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: t('contact.email_label'), value: "whagency01@gmail.com", link: "mailto:whagency01@gmail.com" },
                { icon: Instagram, label: t('contact.follow_label'), value: "@wh__agency", link: "https://instagram.com/wh__agency" },
                { icon: MessageCircle, label: t('contact.dm_label'), value: "TikTok / Instagram / Email", link: "#" },
              ].map((contact, idx) => (
                <a key={idx} href={contact.link} className="flex items-center space-x-6 group">
                  <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 group-hover:border-[#00b8c4]/30 transition-colors duration-300 overflow-hidden shadow-sm dark:shadow-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00b8c4] to-[#7000ff] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <contact.icon className="text-slate-600 dark:text-white/70 group-hover:text-[#00b8c4] dark:group-hover:text-[#00f2ff] transition-colors duration-300 h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] font-bold mb-1.5">{contact.label}</p>
                    <p className="text-lg font-medium text-slate-900 dark:text-slate-200 group-hover:text-[#00b8c4] dark:group-hover:text-[#00f2ff] transition-colors duration-300">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-transparent dark:bg-gradient-to-br dark:from-white/[0.04] dark:to-transparent border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.08)] dark:shadow-none relative overflow-hidden h-full">
              {/* Decorative gradient orb */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-[#00b8c4]/20 to-[#7000ff]/20 dark:from-[#00f2ff]/15 dark:to-[#bd00ff]/15 rounded-full blur-3xl pointer-events-none" />
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input 
                      {...register("name")}
                      id="name"
                      className="w-full bg-transparent border-b-2 border-slate-200 dark:border-white/10 px-0 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#00b8c4] dark:focus:border-[#00f2ff] transition-colors peer placeholder-transparent"
                      placeholder={t('contact.form.name_placeholder')}
                    />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#00b8c4] dark:peer-focus:text-[#00f2ff] cursor-text">
                      {t('contact.form.name_label')}
                    </label>
                    {errors.name && <p className="absolute -bottom-6 text-red-500 text-xs">{errors.name.message}</p>}
                  </div>

                  <div className="relative group">
                    <input 
                      {...register("email")}
                      id="email"
                      className="w-full bg-transparent border-b-2 border-slate-200 dark:border-white/10 px-0 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#00b8c4] dark:focus:border-[#00f2ff] transition-colors peer placeholder-transparent"
                      placeholder={t('contact.form.email_placeholder')}
                    />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#00b8c4] dark:peer-focus:text-[#00f2ff] cursor-text">
                      {t('contact.form.email_label')}
                    </label>
                    {errors.email && <p className="absolute -bottom-6 text-red-500 text-xs">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="relative group pt-2">
                  <textarea 
                    {...register("message")}
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-slate-200 dark:border-white/10 px-0 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-[#00b8c4] dark:focus:border-[#00f2ff] transition-colors peer placeholder-transparent resize-none leading-relaxed"
                    placeholder={t('contact.form.message_placeholder')}
                  />
                  <label htmlFor="message" className="absolute left-0 -top-1.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-1.5 peer-focus:text-sm peer-focus:text-[#00b8c4] dark:peer-focus:text-[#00f2ff] cursor-text">
                    {t('contact.form.message_label')}
                  </label>
                  {errors.message && <p className="absolute -bottom-6 text-red-500 text-xs">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="group relative w-full inline-flex items-center justify-center px-8 py-5 font-bold text-white transition-all duration-300 bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:shadow-[0_0_20px_rgba(0,184,196,0.3)] dark:hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:bg-[#00b8c4] dark:hover:bg-[#00f2ff] focus:outline-none focus:ring-2 focus:ring-[#00b8c4] focus:ring-offset-2 disabled:opacity-50 overflow-hidden mt-4"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                    {!isSubmitting && <Send size={18} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />}
                  </span>
                </button>
              </form>
            </div>
          </div>
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
            <div className={`glass p-5 rounded-2xl flex items-center space-x-4 shadow-2xl border-l-4 ${
              notification.type === 'success' ? 'border-l-primary' : 'border-l-red-500'
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
