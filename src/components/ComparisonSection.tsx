import React, { useState } from 'react';
import { COMPARISON_DATA } from '../data/pricingData';
import { Scale, Check, Zap, Bike, Footprints } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const [filterView, setFilterView] = useState<'all' | 'income' | 'costs'>('all');

  return (
    <section id="comparison" className="py-16 md:py-24 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-md mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>مقارنة واقعية شاملة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            مقارنة الدخل والتكاليف: موتوسيكل أم عجلة أم واكر؟
          </h2>
          <p className="mt-3 text-base text-stone-600">
            اختر الوسيلة الأنسب لظروفك وإمكانياتك الحالية، وتعرف على الفروق في الدخل، مصاريف البنزين، ومسافات الأوردرات.
          </p>
        </div>

        {/* 3 Quick Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Motorcycle Card */}
          <div className="p-6 bg-gradient-to-b from-orange-50/50 to-white rounded-2xl border-2 border-orange-300 shadow-sm relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">🛵</span>
              <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2.5 py-1 rounded-full">
                الأعلى دخلاً وسرعة
              </span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">سائقي الموتوسيكل</h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              الخيار الأول لمن يبحث عن أعلى عائد مالي، يغطي مسافات أكبر ومتاح له عدد أوردرات غير محدود على مدار اليوم.
            </p>
            <div className="pt-3 border-t border-orange-200/60 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-500">متوسط الدخل الشهري:</span>
                <strong className="text-stone-900 font-bold font-mono">18,000 – 24,000+ ج</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">مصاريف التشغيل:</span>
                <span className="text-orange-700 font-medium">بنزين وصيانة دورية</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">المتطلبات:</span>
                <span className="text-stone-800 font-medium">رخص قيادة ودراجة سارية</span>
              </div>
            </div>
          </div>

          {/* Bicycle Card */}
          <div className="p-6 bg-gradient-to-b from-emerald-50/50 to-white rounded-2xl border border-emerald-200 shadow-sm relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">🚲</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                بدون وقود وبدء فوري
              </span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">سائقي العجل (Bicycle)</h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              ممتاز للشباب والطلبة، يتيح لك تحقيق دخل مرتفع دون أي مصاريف بنزين أو الحاجة لرخصة قيادة، بأوردرات قريبة.
            </p>
            <div className="pt-3 border-t border-emerald-200/60 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-500">متوسط الدخل الشهري:</span>
                <strong className="text-stone-900 font-bold font-mono">9,000 – 13,000 ج</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">مصاريف التشغيل:</span>
                <span className="text-emerald-700 font-medium">صيانة خفيفة جداً (0 بنزين)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">المتطلبات:</span>
                <span className="text-stone-800 font-medium">بطاقة رقم قومي وفيش فقط</span>
              </div>
            </div>
          </div>

          {/* Walker Card */}
          <div className="p-6 bg-gradient-to-b from-blue-50/50 to-white rounded-2xl border border-blue-200 shadow-sm relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">🚶‍♂️</span>
              <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                بدون أي مركبة
              </span>
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">الواكر (مشياً على الأقدام)</h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              توصيل الأوردرات مشياً داخل المربعات السكنية والتجارية المغلقة (مثل محيط الكوربة أو شارع عباس العقاد) بدون أي مركبة.
            </p>
            <div className="pt-3 border-t border-blue-200/60 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-500">متوسط الدخل الشهري:</span>
                <strong className="text-stone-900 font-bold font-mono">6,500 – 10,000 ج</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">مصاريف التشغيل:</span>
                <span className="text-blue-700 font-medium">صفر تكاليف إطلاقاً</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">المتطلبات:</span>
                <span className="text-stone-800 font-medium">بطاقة رقم قومي وفيش فقط</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Side-by-Side Comparison Table */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
          <div className="p-5 bg-stone-50 border-b border-stone-200">
            <h4 className="font-bold text-stone-900 text-base">
              جدول المقارنة التفصيلي خطوة بخطوة
            </h4>
            <p className="text-xs text-stone-500 mt-1">
              جميع الأرقام والتسعيرات محسوبة وفق لائحة مكتب العز لزون مصر الجديدة ومدينة نصر
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-stone-100/75 text-stone-700 font-bold border-b border-stone-200 text-xs">
                <tr>
                  <th className="py-4 px-5">بند المقارنة</th>
                  <th className="py-4 px-5 text-orange-700 bg-orange-50/50">🛵 سائقي الموتوسيكل</th>
                  <th className="py-4 px-5 text-emerald-800 bg-emerald-50/40">🚲 سائقي العجل</th>
                  <th className="py-4 px-5 text-blue-800 bg-blue-50/40">🚶‍♂️ الواكر (مشي)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 font-medium text-xs sm:text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                    <td className="py-3.5 px-5 font-bold text-stone-900">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-5 font-mono tabular-nums text-stone-800 bg-orange-50/20 font-semibold">
                      {row.motorcycle}
                    </td>
                    <td className="py-3.5 px-5 font-mono tabular-nums text-stone-800 bg-emerald-50/15">
                      {row.bicycle}
                    </td>
                    <td className="py-3.5 px-5 font-mono tabular-nums text-stone-800 bg-blue-50/15">
                      {row.walker}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
