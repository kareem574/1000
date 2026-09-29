import React, { useState } from 'react';
import { FAQ_LIST } from '../data/pricingData';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_LIST.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-md mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>إجابات فورية وواضحة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            الأسئلة الشائعة وإجاباتها
          </h2>
          <p className="mt-3 text-base text-stone-600">
            جمعنا لك كل الأسئلة التي يطرحها الكباتن الجدد قبل البدء لتفهم كل صغيرة وكبيرة في الشغل.
          </p>
        </div>

        {/* Search Input for Quick Answers */}
        <div className="relative mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن سؤالك (مثل: الباتش، القبض، تي مارت، العجل)..."
            className="w-full bg-white border border-stone-300 rounded-xl py-3 pr-11 pl-4 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-xs"
          />
          <Search className="w-5 h-5 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full text-right p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/50"
                  >
                    <span className="font-bold text-stone-900 text-base leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-orange-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-white rounded-xl border border-stone-200 p-6 text-stone-500">
              لم نعثر على نتائج مطابقة لبحثك. يمكنك التواصل مباشرة مع مكتب العز للاستفسار.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
