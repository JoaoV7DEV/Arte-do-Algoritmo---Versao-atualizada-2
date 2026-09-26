import React, { useState } from 'react';
import { FAQS, AGENCY_INFO } from '../data/agencyData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#272727] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FFFF] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            Tudo o que você precisa saber antes de iniciar seu projeto com a gente.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#18181B] border-[#00FFFF]/30 shadow-lg'
                    : 'bg-white/[0.02] hover:bg-white/[0.04] border-white/5'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#00FFFF] text-black rotate-180'
                        : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-gray-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <p className="text-sm text-gray-300">
            Ainda tem alguma dúvida específica sobre a sua ideia ou negócio?
          </p>
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-[#00FFFF] hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fale diretamente com o João no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
