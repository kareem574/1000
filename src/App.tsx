/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { IncomeCalculator } from './components/IncomeCalculator';
import { ComparisonSection } from './components/ComparisonSection';
import { WorkSystemSection } from './components/WorkSystemSection';
import { RequirementsSection } from './components/RequirementsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { MessageSquare, PhoneCall, ArrowUp } from 'lucide-react';
import { OFFICE_CONTACT } from './data/pricingData';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const openApply = () => setIsApplyModalOpen(true);
  const closeApply = () => setIsApplyModalOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Header */}
      <Header onOpenApply={openApply} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenApply={openApply} />

        {/* Pricing Section */}
        <PricingSection />

        {/* Income Calculator Section */}
        <IncomeCalculator onOpenApply={openApply} />

        {/* Comparison Section */}
        <ComparisonSection />

        {/* Work System & Payout Section */}
        <WorkSystemSection />

        {/* Requirements & Documents Section */}
        <RequirementsSection onOpenApply={openApply} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenApply={openApply} />

      {/* Application / Register Modal */}
      <ApplicationModal isOpen={isApplyModalOpen} onClose={closeApply} />

      {/* Floating Action Buttons for quick help & apply */}
      <aside aria-label="أزرار التواصل السريع" className="fixed bottom-5 left-5 z-40 flex flex-col gap-2.5">
        <a
          href={`https://wa.me/${OFFICE_CONTACT.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          title="تواصل واتساب مع مكتب العز"
          aria-label="تواصل واتساب مع مكتب العز"
        >
          <MessageSquare className="w-6 h-6" />
        </a>

        <a
          href="tel:01021673630"
          className="w-12 h-12 bg-orange-600 hover:bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 sm:hidden"
          title="اتصال هاتفي بمكتب العز (01021673630)"
          aria-label="اتصال هاتفي بمكتب العز"
        >
          <PhoneCall className="w-5 h-5" />
        </a>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-white/90 hover:bg-white text-stone-700 hover:text-stone-900 rounded-full flex items-center justify-center shadow-md border border-stone-200 transition-colors cursor-pointer hidden md:flex"
          title="العودة لأعلى الصفحة"
          aria-label="العودة لأعلى الصفحة"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </aside>
    </div>
  );
}
