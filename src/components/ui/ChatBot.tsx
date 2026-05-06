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

  // Simple knowledge base based on the website content
  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    // Services
    if (q.includes('service') || q.includes('do you do') || q.includes('offrez')) {
      return "We offer Mobile App Development (React Native, Flutter), Web Development (Next.js, React), UI/UX Design, and specialized PFE support (Project creation, Reports, Presentations).";
    }
    
    // PFE
    if (q.includes('pfe') || q.includes('student') || q.includes('graduation')) {
      return "We are experts in PFE support! We can help with project ideas, development, writing your Word report, designing your PPT presentation, and even plagiarism checks.";
    }
    
    // Tech
    if (q.includes('tech') || q.includes('stack') || q.includes('language')) {
      return "Our modern stack includes React, Next.js, Flutter, React Native, Node.js, and specialized tools for Business Intelligence and Design.";
    }
    
    // Founders/Who
    if (q.includes('who') || q.includes('team') || q.includes('hamza') || q.includes('wissal')) {
      return "W&H Agency is founded by Hamza (Full-stack Developer) and Wissal (Mobile & UI/UX Designer). We are two software engineers dedicated to building high-performance digital products.";
    }
    
    // Pricing/Cost
    if (q.includes('price') || q.includes('cost') || q.includes('cheap') || q.includes('budget')) {
      return "Our pricing depends on the project scope. We offer flexible packages, especially for students. Feel free to use our contact form to get a custom quote!";
    }
    
    // Contact
    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('talk')) {
      return "You can reach us via the contact form at the bottom of the page, or email us directly. We usually respond within 24 hours!";
    }

    // Default
    return "That's an interesting question! For specific inquiries about " + query + ", I recommend talking directly to Hamza or Wissal via our contact section. Anything else I can help with?";
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
