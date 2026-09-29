import React, { useState } from 'react';
import { PRICING_DATA, BATCH_INFO } from '../data/pricingData';
import { VehicleType, BatchId } from '../types';
import { Calculator, Sparkles, AlertCircle, ArrowUpRight, Flame } from 'lucide-react';

interface IncomeCalculatorProps {
  onOpenApply: () => void;
}

export const IncomeCalculator: React.FC<IncomeCalculatorProps> = ({ onOpenApply }) => {
  const [vehicle, setVehicle] = useState<VehicleType>('motorcycle');
  const [batch, setBatch] = useState<BatchId>('batch1');
  const [ordersPerDay, setOrdersPerDay] = useState<number>(20);
  const [workDaysPerWeek, setWorkDaysPerWeek] = useState<number>(6);
  const [restaurantPercent, setRestaurantPercent] = useState<number>(75);

  const vehiclePricing = PRICING_DATA[vehicle];
  const batchBonus = vehiclePricing.batches[batch].totalBonus;

  // Rate calculations
  const restaurantOrderPrice = vehiclePricing.restaurants.total + batchBonus;
  const tmartOrderPrice = vehiclePricing.tmart.total + batchBonus;

  const tmartPercent = 100 - restaurantPercent;
  const weightedAverageOrderPrice =
    (restaurantOrderPrice * restaurantPercent + tmartOrderPrice * tmartPercent) / 100;

  // Incomes
  const dailyGrossIncome = Math.round(ordersPerDay * weightedAverageOrderPrice);
  const weeklyGrossIncome = dailyGrossIncome * workDaysPerWeek;
  const monthlyGrossIncome = Math.round((weeklyGrossIncome / 7) * 30);

  // Operating expense estimate (gasoline & bike maintenance vs cycle)
  const dailyExpense =
    vehicle === 'motorcycle'
      ? Math.round(ordersPerDay * 4.2) // ~80-100 EGP gas per day
      : vehicle === 'bicycle'
      ? 15 // minimal tire/brake maintenance
      : 0; // walker has zero vehicle cost

  const netDailyIncome = dailyGrossIncome - dailyExpense;
  const netWeeklyIncome = netDailyIncome * workDaysPerWeek;
  const netMonthlyIncome = Math.round((netWeeklyIncome / 7) * 30);

  // Batch difference comparison (how much extra by being in Batch 1 vs Batch 4_5)
  const batch1GainPerMonth = Math.round(ordersPerDay * 6 * workDaysPerWeek * 4.28);

  return (
    <section id="calculator" className="py-16 md:py-24 bg-stone-100/70 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-700 bg-orange-100 border border-orange-200 px-3 py-1 rounded-md mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>حاسبة الأرباح التقديرية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            احسب دخلك المتوقع في طلبات بدقة
          </h2>
          <p className="mt-3 text-base text-stone-600">
            حدد عدد الأوردرات اليومية والباتش وشاهد دخلك اليومي، الأسبوعي (قبض الخميس)، والشهري الصافي.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-7">
            {/* 1. Vehicle Selection */}
            <div>
              <label className="block text-sm font-bold text-stone-900 mb-2">
                1. نوع المركبة وطريقة التوصيل:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'motorcycle', title: 'موتوسيكل', icon: '🛵', desc: 'أعلى تسعيرة وسرعة' },
                  { id: 'bicycle', title: 'عجلة', icon: '🚲', desc: 'بدون وقود ومسافات قريبة' },
                  { id: 'walker', title: 'واكر (مشي)', icon: '🚶‍♂️', desc: 'صفر تكاليف تشغيل' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setVehicle(item.id as VehicleType)}
                    className={`p-3.5 rounded-xl border text-right transition-all cursor-pointer ${
                      vehicle === item.id
                        ? 'border-orange-600 bg-orange-50/70 text-orange-950 ring-1 ring-orange-600'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                    }`}
                  >
                    <div className="text-xl mb-1">{item.icon}</div>
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Batch Selection */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-stone-900">
                  2. شريحة الباتش المطبقة:
                </label>
                <span className="text-xs font-bold text-orange-600">
                  {BATCH_INFO[batch].tag}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {(Object.keys(BATCH_INFO) as BatchId[]).map((b) => (
                  <button
                    key={b}
                    onClick={() => setBatch(b)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                      batch === b
                        ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {b === 'batch4_5' ? 'باتش 4 و 5' : b.replace('batch', 'باتش ')}
                  </button>
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-2">
                {BATCH_INFO[batch].description}
              </p>
            </div>

            {/* 3. Orders per day Slider with Presets */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-stone-900">
                  3. متوسط عدد الأوردرات اليومية:
                </label>
                <span className="text-lg font-black text-orange-600 font-mono tabular-nums">
                  {ordersPerDay} أوردر / يوم
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="35"
                step="1"
                value={ordersPerDay}
                onChange={(e) => setOrdersPerDay(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer h-2 bg-stone-200 rounded-lg"
              />

              {/* Presets */}
              <div className="flex items-center gap-2 mt-2.5">
                <span className="text-xs text-stone-500 font-medium">مستويات شائعة:</span>
                {[
                  { count: 15, label: '15 (شيفت خفيف ~6-7 ساعات)' },
                  { count: 20, label: '20 (متوسط 9-10 ساعات)' },
                  { count: 25, label: '25 (مستهدف كامل 10-11 ساعة)' }
                ].map((preset) => (
                  <button
                    key={preset.count}
                    onClick={() => setOrdersPerDay(preset.count)}
                    className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer border ${
                      ordersPerDay === preset.count
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200'
                    }`}
                  >
                    {preset.count} أوردر
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Working Days per Week */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-stone-900">
                  4. عدد أيام العمل في الأسبوع:
                </label>
                <span className="text-sm font-bold text-stone-800 font-mono tabular-nums">
                  {workDaysPerWeek} أيام أسبوعياً
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[4, 5, 6, 7].map((days) => (
                  <button
                    key={days}
                    onClick={() => setWorkDaysPerWeek(days)}
                    className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                      workDaysPerWeek === days
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {days} {days === 4 ? 'أيام' : days === 7 ? 'أيام (كامل)' : 'أيام'}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Orders Ratio (Restaurants vs tMart) */}
            <div>
              <div className="flex justify-between items-center text-xs text-stone-600 mb-1.5">
                <span>مطاعم ومحلات ({restaurantPercent}%)</span>
                <span>تى مارت ({100 - restaurantPercent}%)</span>
              </div>
              <input
                type="range"
                min="20"
                max="90"
                step="5"
                value={restaurantPercent}
                onChange={(e) => setRestaurantPercent(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer h-1.5 bg-stone-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-stone-500 mt-1">
                <span>سعر مطاعم: {restaurantOrderPrice} ج</span>
                <span>سعر تي مارت: {tmartOrderPrice} ج</span>
              </div>
            </div>
          </div>

          {/* Result Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Primary Calculation Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <span className="text-xs font-bold text-stone-500">متوسط سعر الأوردر الفعلي</span>
                <span className="text-lg font-black text-stone-900 font-mono tabular-nums">
                  {weightedAverageOrderPrice.toFixed(1)} جنيه / أوردر
                </span>
              </div>

              {/* Three Main Metric Cards */}
              <div className="space-y-4 my-5">
                {/* Daily */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="flex justify-between items-center text-xs text-stone-500 font-medium">
                    <span>الدخل اليومي الإجمالي</span>
                    <span className="text-[11px]">({ordersPerDay} أوردر)</span>
                  </div>
                  <div className="text-2xl font-black text-stone-900 font-mono tabular-nums mt-1">
                    {dailyGrossIncome.toLocaleString('en-US')}{' '}
                    <span className="text-sm font-semibold text-stone-500">جنيه / يوم</span>
                  </div>
                </div>

                {/* Weekly (The Thursday Payout) */}
                <div className="p-4 bg-orange-500 text-white rounded-xl shadow-md">
                  <div className="flex justify-between items-center text-xs text-orange-100 font-bold">
                    <span>قبضة الخميس الأسبوعية</span>
                    <span className="bg-orange-600 px-2 py-0.5 rounded text-[10px]">
                      {workDaysPerWeek} أيام عمل
                    </span>
                  </div>
                  <div className="text-3xl font-black font-mono tabular-nums mt-1.5">
                    {weeklyGrossIncome.toLocaleString('en-US')}{' '}
                    <span className="text-base font-semibold text-orange-100">جنيه / أسبوع</span>
                  </div>
                  <div className="text-[11px] text-orange-100/95 mt-1 leading-snug">
                    تُصرف كل خميس (أول 3 أسابيع على محفظة طلبات، والـ 4 على فيزا فوري بلس)
                  </div>
                </div>

                {/* Monthly */}
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="flex justify-between items-center text-xs text-emerald-800 font-bold">
                    <span>الدخل الشهري المتوقع</span>
                    <span className="text-[11px] text-emerald-700">~ 26-28 يوم تشغيل</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-950 font-mono tabular-nums mt-1">
                    {monthlyGrossIncome.toLocaleString('en-US')}{' '}
                    <span className="text-sm font-semibold text-emerald-700">جنيه / شهر</span>
                  </div>
                  {dailyExpense > 0 && (
                    <div className="text-xs text-emerald-800/80 mt-1 pt-2 border-t border-emerald-200/60 flex justify-between">
                      <span>الصافي بعد تقدير البنزين والصيانة:</span>
                      <strong className="font-bold font-mono tabular-nums text-emerald-950">
                        ~ {netMonthlyIncome.toLocaleString('en-US')} ج
                      </strong>
                    </div>
                  )}
                </div>
              </div>

              {/* Batch Opportunity Callout */}
              {batch !== 'batch1' && (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2 mb-4">
                  <Flame className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>فرصة زيادة أرباحك:</strong> لو وصلت لـ <strong>باتش 1</strong>، دخلك الشهري هيزيد بحوالي{' '}
                    <strong className="text-amber-950 font-bold font-mono">
                      +{batch1GainPerMonth.toLocaleString('en-US')} جنيه
                    </strong>{' '}
                    إضافية بدون ما تزود عدد أوردراتك!
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button
                onClick={onOpenApply}
                className="w-full py-3.5 text-center text-sm font-bold text-white bg-stone-900 hover:bg-stone-800 active:bg-black rounded-xl transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2"
              >
                <span>قدّم الآن وابدأ في تحقيق هذا الدخل</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Note on Real Incomes */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-500 leading-relaxed space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-stone-700">
                <AlertCircle className="w-4 h-4 text-stone-400" />
                <span>ملاحظة هامة للأمانة والشفافية:</span>
              </div>
              <p>
                هذه الأرقام استرشادية مبنية على التسعيرة الحالية ومعدلات التنفيذ الفعلية لكباتن مصر الجديدة ومدينة نصر. الدخل الفعلي قد يزيد أو ينقص حسب التزامك وساعات تواجدك في أوقات الذروة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
