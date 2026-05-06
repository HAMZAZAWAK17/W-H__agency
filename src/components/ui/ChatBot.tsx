import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const ChatBot = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm the W&H Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Comprehensive knowledge base based on the website content
  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    // Services & Expertise
    if (q.includes('service') || q.includes('do you do') || q.includes('expert') || q.includes('offrez')) {
      return "We are a full-service agency specializing in: \n1. Mobile Apps (React Native, Flutter)\n2. Web Platforms (Next.js, React)\n3. UI/UX Design\n4. PFE Support (Ideas, Reports, PPT)\n5. BI & Dashboards\n6. Branding & Logo Design.";
    }
    
    // PFE / Students
    if (q.includes('pfe') || q.includes('student') || q.includes('graduation') || q.includes('étudiant') || q.includes('rapport')) {
      return "We offer 100% flexible PFE support! This includes project creation/ideas, professional Word report writing, modern PPT slide design, and anti-plagiarism checks. We can handle the full pack or individual services.";
    }

    // Projects / Portfolio
    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('realisation') || q.includes('showcase')) {
      return "We've shipped amazing projects like PCM (Accounting System), Nova Store (E-commerce), OpsBoard (SaaS Dashboard), and several mobile apps like Gastronome. Check the 'Projects' section to see them in action!";
    }
    
    // Tech / Skills
    if (q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('code') || q.includes('build with')) {
      return "Our toolkit is modern and robust: Frontend (React, Next.js, Tailwind), Backend (Node.js, Supabase), Mobile (Flutter, React Native), and Design (Figma, Adobe Suite).";
    }

    // Process / How we work
    if (q.includes('process') || q.includes('how') || q.includes('steps') || q.includes('method')) {
      return "Our simple 4-step process: \n1. Idea (Discovery & Roadmap)\n2. Design (UI/UX Prototypes)\n3. Development (Clean code)\n4. Launch (Ship & Iterate).";
    }
    
    // Founders / Team
    if (q.includes('who') || q.includes('team') || q.includes('founders') || q.includes('hamza') || q.includes('wissal')) {
      return "The agency is led by Hamza (Full-stack Engineer) and Wissal (Mobile & UI/UX Expert). Together, we bring technical excellence and design precision to every project.";
    }

    // Stats / Experience
    if (q.includes('stat') || q.includes('experience') || q.includes('many') || q.includes('successful')) {
      return "We've shipped 12+ premium projects with an average delivery time of 2–6 weeks. We focus on custom code and high-performance solutions.";
    }
    
    // Pricing / Cost
    if (q.includes('price') || q.includes('cost') || q.includes('budget') || q.includes('argent') || q.includes('cher')) {
      return "Every project is unique! We offer competitive pricing and specialized discounts for students and startups. Contact us with your project details for a personalized quote.";
    }
    
    // Contact / Location
    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('location') || q.includes('map') || q.includes('where')) {
      return "You can find our office on the map at the bottom of the page! To start a project, fill out the contact form or reach out via email/social media. We're available and usually respond in under 24 hours.";
    }

    // Reviews / Social Proof
    if (q.includes('review') || q.includes('client') || q.includes('testimonial') || q.includes('avis') || q.includes('think')) {
      return "Our clients love our work! We have a 5/5 rating. Thomas L. (Startup Founder) and Sarah K. (E-commerce) are among our happy clients. Read their full reviews in the Testimonials section!";
    }

    // Languages
    if (q.includes('language') || q.includes('français') || q.includes('arabic') || q.includes('english')) {
      return "Our website and our team are fully trilingual! We support projects in English, French, and Arabic.";
    }

    // Default / Greeting
    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('bonjour')) {
      return "Hello! I'm the W&H Assistant. I can tell you about our projects, services, tech stack, or the founders. What would you like to know?";
    }

    return "I'm not sure I have specific details about that, but it's definitely something Hamza and Wissal can handle. Would you like me to guide you to the contact section to ask them directly?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate bot thinking
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-[#0b0e14] border border-[var(--neon)]/20 shadow-2xl rounded-3xl overflow-hidden flex flex-col backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[var(--neon)] to-[var(--electric)] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">W&H Assistant</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] opacity-80">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: m.sender === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${m.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`p-2 rounded-lg shrink-0 ${m.sender === 'user' ? 'bg-primary/10' : 'bg-muted/50'}`}>
                      {m.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${
                      m.sender === 'user' 
                        ? 'bg-[var(--neon)] text-white rounded-tr-none' 
                        : 'bg-muted dark:bg-white/5 text-foreground rounded-tl-none border border-white/5'
                    }`}>
                      {m.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-muted dark:border-white/5 bg-muted/30">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-grow bg-white dark:bg-white/5 border border-muted dark:border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[var(--neon)] transition-colors"
                />
                <button
                  type="submit"
                  className="p-2 bg-[var(--neon)] text-white rounded-xl hover:scale-105 active:scale-95 transition-all shadow-neon"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen 
            ? 'bg-muted dark:bg-white/10 text-foreground' 
            : 'bg-gradient-to-r from-[var(--neon)] to-[var(--electric)] text-white shadow-neon'
        }`}
      >
        {isOpen ? <X size={24} /> : (
          <div className="relative">
            <MessageSquare size={24} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white dark:border-background rounded-full" />
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
