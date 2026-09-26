import React, { useState, useEffect } from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Automatically fade out after 3 seconds on page load / reload
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Notification - Shows on reload and smoothly right-fades after 3 seconds */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            key="whatsapp-welcome-tooltip"
            initial={{ opacity: 0, x: 25, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{
              opacity: 0,
              x: 30,
              scale: 0.95,
              transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#18181B]/95 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] text-xs text-gray-200"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="whitespace-nowrap font-medium">Fale direto com o João no WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-white p-0.5 ml-1 transition-colors rounded hover:bg-white/10"
              title="Fechar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <a
        href={AGENCY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com Arte do Algoritmo"
        className="relative group p-4 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shrink-0"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 animate-ping" />

        <MessageCircle className="w-6 h-6 fill-current relative z-10" />
      </a>
    </div>
  );
};
