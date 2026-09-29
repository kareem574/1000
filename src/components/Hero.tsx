import React from 'react';
import { CalendarCheck, ShieldCheck, TrendingUp, Zap, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  onOpenApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 via-stone-50 to-stone-50 pt-10 pb-16 md:pt-14 md:pb-24 border-b border-stone-200">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-red-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Trust kicker */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-700 bg-orange-100/80 border border-orange-200/90 px-3 py-1.5 rounded-md">
                <Zap className="w-3.5 h-3.5 text-orange-600 animate-pulse" />
                <span>وكيل معتمد لشركة طلبات (Talabat) | مكتب العز اكسبريس</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-3 py-1.5 rounded-md">
                <span>✓</span>
                <span>مش مطلوب فيش جنائي (استعلام أمني بديل)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 leading-[1.25] tracking-tight">
              انضم لكباتن طلبات في أقوى زون بالقاهرة
              <span className="block text-orange-600 mt-2">
                مصر الجديدة & مدينة نصر
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl">
              دليلك الكامل لفهم طبيعة العمل، التسعيرة الرسمية بالجنيه، إضافات الباتشات، وحاسبة الدخل التقديرية. اعرف تفاصيل دخلك بالساعة واليوم والأسبوع قبل ما تبدأ، بدون أسئلة متكررة وبشفافية تامة.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-stone-800 bg-white p-3.5 rounded-xl border border-stone-200 shadow-xs">
                <CalendarCheck className="w-5 h-5 text-orange-600 shrink-0" />
                <span>قبض أسبوعي: أول 3 أسابيع محفظة، والـ 4 فيزا فوري بلس</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-stone-800 bg-white p-3.5 rounded-xl border border-stone-200 shadow-xs">
                <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>أوردر الموتوسيكل يصل إلى 39 ج، والعجلة 27 ج</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-stone-800 bg-white p-3.5 rounded-xl border border-stone-200 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span>دعم فني وتدريب ميداني كامل من مكتب العز</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-stone-800 bg-white p-3.5 rounded-xl border border-stone-200 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                <span>شيفتات مرنة وحرية كاملة في تحديد ساعات عملك</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenApply}
                className="px-8 py-3.5 text-base font-bold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <span>سجّل بياناتك وابدأ العمل الآن</span>
                <span aria-hidden="true">←</span>
              </button>

              <a
                href="tel:01021673630"
                className="px-5 py-3.5 text-base font-bold text-stone-800 bg-white hover:bg-stone-100 rounded-xl border border-stone-300 transition-colors flex items-center gap-2"
              >
                <span>استفسارات: 01021673630</span>
              </a>

              <a
                href="#pricing"
                className="px-4 py-3.5 text-sm font-bold text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-1.5"
              >
                <span>جدول التسعيرة</span>
                <ChevronDown className="w-4 h-4 text-stone-500" />
              </a>
            </div>
          </div>

          {/* Quick Snapshot / Focal Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-amber-500" />
              
              {/* Prominent Official Logo Display */}
              <div className="pb-5 mb-3 border-b border-stone-100 flex flex-col items-center text-center bg-stone-50/70 p-4 rounded-xl border border-stone-200/80">
                <span className="text-[11px] font-bold text-orange-600 mb-1">الوكيل المعتمد لطلبات مصر</span>
                <Logo size="lg" showSubtitle={false} />
                <div className="text-xs font-bold text-stone-700 mt-2">
                  زون مصر الجديدة & مدينة نصر | مكتب العز
                </div>
              </div>

              {/* Fleet Quick Rate Highlights */}
              <div className="space-y-3.5 my-4">
                {/* Motorcycle card */}
                <div className="p-3.5 bg-orange-50/70 rounded-xl border border-orange-200/80 hover:border-orange-300 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-orange-950 flex items-center gap-1.5 text-sm">
                      <span>🛵</span>
                      سائقي الموتوسيكل
                    </span>
                    <span className="text-xs font-bold text-orange-700 bg-orange-200/80 px-2 py-0.5 rounded">
                      حتى 39 ج / أوردر
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-orange-900/80 pt-1">
                    <span>مطاعم: <strong className="font-bold text-stone-900">33 جنيه</strong></span>
                    <span>تي مارت: <strong className="font-bold text-stone-900">31 جنيه</strong></span>
                    <span>اليوم: <strong className="font-bold text-stone-900">700–950 ج</strong></span>
                  </div>
                </div>

                {/* Bicycle & Walker card */}
                <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200/80 hover:border-emerald-300 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm">
                      <span>🚲</span>
                      سائقي العجل والواكر
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-200/80 px-2 py-0.5 rounded">
                      حتى 27 ج / أوردر
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-emerald-900/80 pt-1">
                    <span>مطاعم: <strong className="font-bold text-stone-900">21 جنيه</strong></span>
                    <span>تي مارت: <strong className="font-bold text-stone-900">19 جنيه</strong></span>
                    <span>اليوم: <strong className="font-bold text-stone-900">350–500 ج</strong></span>
                  </div>
                </div>
              </div>

              {/* Weekly Payout Notification Box with Updated 3 Weeks Wallet + 4th Week Fawry Plus */}
              <div className="p-4 bg-stone-900 text-white rounded-xl space-y-2 border border-stone-800">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-stone-400 font-medium">نظام الصرف المعتمد</div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded">
                    أسبوعي كل خميس
                  </span>
                </div>
                <div className="text-xs font-semibold text-stone-200 leading-snug">
                  • <strong className="text-orange-400">أول 3 أسابيع:</strong> الصرف على محفظة أبلكيشن طلبات (Rider Wallet).
                </div>
                <div className="text-xs font-semibold text-stone-200 leading-snug">
                  • <strong className="text-emerald-400">ابتداءً من الأسبوع الرابع:</strong> استلام فيزا فوري بلس (Fawry Plus) والصرف عليها مباشرة.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
