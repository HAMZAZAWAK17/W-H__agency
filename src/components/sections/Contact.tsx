import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Instagram, MessageCircle, Send } from 'lucide-react';
import Card from '../ui/Card';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // In a real app, send to API
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert("Message sent successfully!");
    reset();
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let's talk about how we can help you build something amazing."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-6">Let's start a <span className="neon-text">conversation</span></h3>
            <p className="text-muted-foreground max-w-md text-lg">
              Whether you're a startup, a student, or a small business, we're here to help you scale your digital presence.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-4 glass rounded-2xl border border-white/5 group-hover:border-primary/50 transition-colors">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-lg font-medium">contact@whagency.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-4 glass rounded-2xl border border-white/5 group-hover:border-primary/50 transition-colors">
                  <Instagram className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Follow Us</p>
                  <p className="text-lg font-medium">@wh_agency</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-4 glass rounded-2xl border border-white/5 group-hover:border-primary/50 transition-colors">
                  <MessageCircle className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">DM Us</p>
                  <p className="text-lg font-medium">TikTok / Instagram</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Your Name</label>
                <input 
                  {...register("name")}
                  className="w-full bg-glass border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Email Address</label>
                <input 
                  {...register("email")}
                  className="w-full bg-glass border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className="w-full bg-glass border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
