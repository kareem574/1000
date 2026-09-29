import React from 'react';
import { Clock, MapPin, Banknote, ShieldAlert, Award, Compass, CheckCircle } from 'lucide-react';
import { OFFICE_CONTACT } from '../data/pricingData';

export const WorkSystemSection: React.FC = () => {
  return (
    <section id="work-system" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-100 border border-orange-200 px-3 py-1 rounded-md mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>نظام التشغيل ومكتب العز</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            طبيعة العمل ونظام القبض الأسبوعي
          </h2>
          <p className="mt-3 text-base text-stone-600">
            كل ما يخص ساعات العمل، أسلوب احتساب الإنتاجية، تفاصيل الزون، ومواعيد استلام مستحقاتك دون أي غموض.
          </p>
        </div>

        {/* 4 Pillars of Work System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Pillar 1: Shift Flexibility */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">حرية اختيار الشيفتات</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                مدة العمل حسب الشيفت المتاح عبر التطبيق. لست مقيداً بمواعيد ثابتة إجبارية؛ تقدر تختار الشيفت الصباحي أو المسائي أو شيفتات السهرة حسب وقت فراغك.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-bold text-orange-600">
              شيفتات 4، 6، 8، حتى 10 ساعات
            </div>
          </div>

          {/* Pillar 2: Daily Target */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">معدلات التشغيل والأوردرات</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                متوسط التشغيل عند العمل 9–10 ساعات يحقق حوالي 20 أوردر يومياً. مع الالتزام والتواجد في مناطق الطلب الكثيف يمكن أن يصل مستهدفك إلى 23–25 أوردر يومياً.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-bold text-emerald-700">
              إنتاجية أعلى = أرباح وبونص أكبر
            </div>
          </div>

          {/* Pillar 3: Zone Power */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">زون مصر الجديدة & مدينة نصر</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                أقوى زون تجاري وسكني في القاهرة: مئات البراندات العالمية، فروع تى مارت سريعة، كثافة سكانية راقية وقوة شرائية ضخمة تضمن استمرار الطلبات بلا توقف.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-bold text-blue-700">
              كثافة طلبات مستمرة 24/7
            </div>
          </div>

          {/* Pillar 4: Thursday Payout */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <Banknote className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">القبض أسبوعي كل خميس</h3>
              <p className="text-xs text-stone-600 leading-relaxed space-y-1.5">
                <span className="block text-stone-800 font-semibold">• أول 3 أسابيع: ينزل قبضك على محفظة أبلكيشن طلبات.</span>
                <span className="block text-purple-900 font-semibold">• الأسبوع الرابع: ينزل القبض على فيزا فوري بلس (Fawry Plus).</span>
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-bold text-purple-700">
              أسبوعي بانتظام كل يوم خميس
            </div>
          </div>
        </div>

        {/* Detailed Office & Operations Banner */}
        <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-right">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-orange-400">
                  شركة العز اكسبريس (El Ezz Express)
                </span>
                <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded border border-stone-700">
                  الوكيل المعتمد لطلبات مصر
                </span>
              </div>
              <h3 className="text-2xl font-black">
                فريق دعم وتشغيل متواجد معك على مدار الساعة في الشارع
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed max-w-2xl">
                مكتب العز لا يقتصر دوره على التقديم فقط، بل نوفر لك متابعة يومية، حل أي مشكلة تواجهك في أوردر أو حساب كاش، تدريب مستمر لرفع مستواك والوصول لباتش 1، ومساعدتك في تحقيق أقصى دخل ممكن.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-stone-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  مقر رسمي للمكتب وخدمة مباشرة
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  تواصل عبر الواتساب والاتصال: 01021673630
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  تسليم فوري للمعدات وصناديق التوصيل
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-stone-800/80 p-5 rounded-xl border border-stone-700 text-center space-y-2">
              <div className="text-xs text-stone-400">رقم الاستفسارات والتقديم المباشر</div>
              <div className="text-xl font-black text-white font-mono" dir="ltr">01021673630</div>
              <div className="text-xs text-stone-300">
                مواعيد العمل: {OFFICE_CONTACT.workingHours}
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${OFFICE_CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs transition-colors"
                >
                  تحدث مع المشرف عبر واتساب (01021673630)
                </a>
                <a
                  href="tel:01021673630"
                  className="inline-block w-full py-2 bg-stone-700 hover:bg-stone-600 text-stone-200 font-bold rounded-lg text-xs transition-colors"
                >
                  اتصال تليفوني مباشر
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
