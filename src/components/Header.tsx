import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenApply: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenApply }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'التسعيرة', href: '#pricing' },
    { label: 'حاسبة الدخل', href: '#calculator' },
    { label: 'مقارنة الدخل', href: '#comparison' },
    { label: 'نظام العمل', href: '#work-system' },
    { label: 'الشروط والأوراق', href: '#requirements' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Zone */}
        <a href="#" className="flex items-center gap-2 group">
          <Logo size="md" showSubtitle={false} />
          <span className="text-xl font-black text-stone-900 tracking-tight group-hover:text-orange-600 transition-colors">
            العز اكسبريس
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-orange-600 transition-colors whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-orange-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          <a
            href="tel:01021673630"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-orange-600 transition-colors px-3 py-2 rounded-lg border border-stone-200 hover:border-orange-300"
          >
            <PhoneCall className="w-3.5 h-3.5 text-orange-600" />
            <span dir="ltr">01021673630</span>
          </a>

          <button
            onClick={onOpenApply}
            className="px-5 py-2.5 text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer hover:shadow-md"
          >
            التقديم الآن
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 cursor-pointer"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-stone-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-3 text-center font-bold text-white bg-orange-600 rounded-lg"
            >
              سجّل ككابتن الآن مع مكتب العز
            </button>
            <a
              href="tel:01021673630"
              className="w-full py-2.5 text-center text-sm font-bold text-stone-700 border border-stone-300 rounded-lg flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-orange-600" />
              <span dir="ltr">01021673630</span>
              <span>اتصال مباشر:</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
