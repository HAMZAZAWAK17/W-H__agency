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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-6">{t('contact.title_prefix')} <span className="neon-text">{t('contact.title_accent')}</span></h3>
            <p className="text-muted-foreground max-w-md text-lg">
              {t('contact.info_description')}
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-4 glass rounded-2xl border border-white/5 group-hover:border-primary/50 transition-colors">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{t('contact.email_label')}</p>
                  <p className="text-lg font-medium">contact@whagency.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-4 glass rounded-2xl border border-white/5 group-hover:border-primary/50 transition-colors">
                  <Instagram className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{t('contact.follow_label')}</p>
                  <p className="text-lg font-medium">@wh_agency</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-4 glass rounded-2xl border border-white/5 group-hover:border-primary/50 transition-colors">
                  <MessageCircle className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{t('contact.dm_label')}</p>
                  <p className="text-lg font-medium">TikTok / Instagram</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">{t('contact.form.name_label')}</label>
                <input 
                  {...register("name")}
                  className="w-full bg-glass border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder={t('contact.form.name_placeholder')}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">{t('contact.form.email_label')}</label>
                <input 
                  {...register("email")}
                  className="w-full bg-glass border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder={t('contact.form.email_placeholder')}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">{t('contact.form.message_label')}</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className="w-full bg-glass border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                  placeholder={t('contact.form.message_placeholder')}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}</span>
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </Card>
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
