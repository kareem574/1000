import React from 'react';
import { REQUIREMENTS_DATA } from '../data/pricingData';
import { FileText, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface RequirementsSectionProps {
  onOpenApply: () => void;
}

export const RequirementsSection: React.FC<RequirementsSectionProps> = ({ onOpenApply }) => {
  return (
    <section id="requirements" className="py-16 md:py-24 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-md mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>شروط وأوراق التقديم</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            ما هي المتطلبات اللازمة للبدء؟
          </h2>
          <p className="mt-3 text-base text-stone-600">
            أوراق بسيطة وإجراءات ميسرة تمكنك من استلام الصندوق وتفعيل حسابك والنزول للشغل خلال 24 ساعة فقط.
          </p>
        </div>

        {/* 2 Main Requirement Boxes (Motorcycle vs Bicycle/Walker) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Motorcycle Requirements */}
          <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🛵</span>
              <div>
                <span className="text-xs font-bold text-orange-600 bg-orange-100/70 px-2 py-0.5 rounded">ده مكنة</span>
                <h3 className="font-bold text-stone-900 text-xl mt-1">الأوراق المطلوبة للتقديم (مكنة)</h3>
                <p className="text-xs text-stone-500">سائقي الموتوسيكل في زون مصر الجديدة ومدينة نصر</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-stone-700">
              {REQUIREMENTS_DATA.motorcycle.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-stone-200 text-xs text-stone-500 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-600 shrink-0" />
              <span>جاهز بالصور؟ تقدر تبعتها فوراً عبر واتساب لمشرف المكتب لاستكمال تفعيل الأكونت.</span>
            </div>
          </div>

          {/* Bicycle & Walker Requirements */}
          <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🚲</span>
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">ده عجلة أو واكر</span>
                <h3 className="font-bold text-stone-900 text-xl mt-1">الأوراق المطلوبة للتقديم (عجلة)</h3>
                <p className="text-xs text-stone-500">سائقي العجل وتوصيل المشي في زون مصر الجديدة ومدينة نصر</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-stone-700">
              {REQUIREMENTS_DATA.bicycle_walker.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-stone-200 text-xs text-stone-500 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>بدون رخص قيادة! التقديم متاح فوراً بصورة البطاقة والسيلفي ورقم التلفون فقط.</span>
            </div>
          </div>
        </div>

        {/* 4 Steps to Start */}
        <div className="bg-orange-50/60 rounded-2xl p-6 sm:p-8 border border-orange-200">
          <h3 className="font-bold text-stone-900 text-lg mb-6 text-center">
            خطوات التقديم والانضمام مع مكتب العز
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '1',
                title: 'تسجيل البيانات',
                desc: 'اضغط على زر التقديم وسجل اسمك ورقمك ونوع مركبتك'
              },
              {
                step: '2',
                title: 'تواصل مشرف المكتب',
                desc: 'يتواصل معك منسق مكتب العز لتحديد موعد الزيارة'
              },
              {
                step: '3',
                title: 'تفعيل الحساب والأبلكيشن',
                desc: 'إنشاء حساب الكابتن واستلام الصندوق واليونيفورم'
              },
              {
                step: '4',
                title: 'النزول للشغل والقبض',
                desc: 'تبدأ العمل فوراً وتقبض أسبوعياً كل خميس (أول 3 أسابيع على محفظة طلبات، والأسبوع الـ 4 على فيزا فوري بلس)'
              }
            ].map((stepItem) => (
              <div key={stepItem.step} className="bg-white p-4 rounded-xl border border-orange-200/80 text-right">
                <div className="w-8 h-8 rounded-full bg-orange-600 text-white font-black text-sm flex items-center justify-center mb-2 font-mono">
                  {stepItem.step}
                </div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">{stepItem.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{stepItem.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenApply}
              className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
            >
              ابدأ الخطوة الأولى وسجل بياناتك الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
