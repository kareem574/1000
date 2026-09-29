import React, { useState } from 'react';
import { PRICING_DATA, BATCH_INFO, OFFICE_CONTACT } from '../data/pricingData';
import { VehicleType, BatchId, OrderSourceType } from '../types';
import { Store, ShoppingBag, Award, HelpCircle, Eye, Phone } from 'lucide-react';
import { Logo } from './Logo';

export const PricingSection: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>('motorcycle');
  const [activeBatch, setActiveBatch] = useState<BatchId>('batch1');
  const [activeSource, setActiveSource] = useState<OrderSourceType>('restaurants');
  const [showOfficialCardView, setShowOfficialCardView] = useState(false);

  const vehiclePricing = PRICING_DATA[selectedVehicle];
  const currentBatch = vehiclePricing.batches[activeBatch];
  const baseRates = activeSource === 'restaurants' ? vehiclePricing.restaurants : vehiclePricing.tmart;

  // Live order breakdown calculations
  const finalPickup = baseRates.pickup + currentBatch.pickupBonus;
  const finalDropoff = baseRates.dropoff + currentBatch.deliveryBonus;
  const finalTotal = baseRates.total + currentBatch.totalBonus;

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-md mb-3">
            <span>التسعيرة الرسمية المعتمدة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            جدول تسعيرة الأوردرات وإضافات الباتش
          </h2>
          <p className="mt-3 text-base text-stone-600">
            احسب قيمة كل أوردر بالجنيه بدقة متناهية وفق نوع مركبتك ومصدر الطلب وشريحة الباتش الخاصة بك في زون مصر الجديدة ومدينة نصر.
          </p>

          {/* Vehicle Switcher Segmented Control */}
          <div className="mt-8 inline-flex p-1.5 bg-stone-100 rounded-xl border border-stone-200">
            <button
              onClick={() => setSelectedVehicle('motorcycle')}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedVehicle === 'motorcycle'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <span>🛵</span>
              <span>سائقي الموتوسيكل</span>
            </button>
            <button
              onClick={() => setSelectedVehicle('bicycle')}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedVehicle === 'bicycle'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <span>🚲</span>
              <span>سائقي العجل والواكر</span>
            </button>
          </div>
        </div>

        {/* View Toggle (Interactive Tables vs Official Poster Card) */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-100">
          <div className="text-sm font-bold text-stone-700">
            عرض بيانات التسعيرة لـ: <span className="text-orange-600">{vehiclePricing.title}</span>
          </div>
          <button
            onClick={() => setShowOfficialCardView(!showOfficialCardView)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <Eye className="w-4 h-4 text-stone-500" />
            <span>{showOfficialCardView ? 'العودة للجدول التفاعلي' : 'معاينة كارت التسعيرة الرسمي المعتمد'}</span>
          </button>
        </div>

        {showOfficialCardView ? (
          /* Official Poster Layout matching user images */
          <div className="max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-[#FAF6F0] rounded-2xl border-2 border-orange-300 shadow-xl font-sans text-center">
            {/* Logo on Poster */}
            <div className="flex justify-center mb-4">
              <Logo size="md" showSubtitle={false} />
            </div>

            {/* Header banner */}
            <div className="mb-6">
              <span className="text-orange-600 text-2xl font-black block tracking-wide">
                التسعيرة الجديدة
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3a1a1a] mt-1">
                {selectedVehicle === 'motorcycle'
                  ? 'لسائقين الموتسيكل (مصر الجديدة)'
                  : 'لسائقين العجل والواكر (مصر الجديدة)'}
              </h3>
              <div className="w-48 h-1.5 bg-orange-500 mx-auto mt-3 rounded-full" />
            </div>

            {/* Two Main Cards Grid (Restaurants & tMart) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Restaurants Card */}
              <div className="rounded-xl overflow-hidden border-2 border-[#3d181c] bg-white shadow-sm">
                <div className="bg-[#3d181c] text-white py-2 font-bold text-base">
                  المطاعم والمحلات
                </div>
                <div className="divide-y divide-stone-200 text-sm">
                  <div className="grid grid-cols-2 p-2.5">
                    <span className="text-stone-600 font-medium">استلام الطلب</span>
                    <span className="font-bold text-stone-900 font-mono tabular-nums">
                      {vehiclePricing.restaurants.pickup} جنيه
                    </span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5">
                    <span className="text-stone-600 font-medium">تسليم الطلب</span>
                    <span className="font-bold text-stone-900 font-mono tabular-nums">
                      {vehiclePricing.restaurants.dropoff} جنيه
                    </span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5 bg-orange-50">
                    <span className="font-bold text-orange-900">اجمالي</span>
                    <span className="font-extrabold text-orange-700 font-mono tabular-nums text-base">
                      {vehiclePricing.restaurants.total} جنيه
                    </span>
                  </div>
                </div>
              </div>

              {/* tMart Card */}
              <div className="rounded-xl overflow-hidden border-2 border-[#3d181c] bg-white shadow-sm">
                <div className="bg-[#3d181c] text-white py-2 font-bold text-base">
                  تى مارت
                </div>
                <div className="divide-y divide-stone-200 text-sm">
                  <div className="grid grid-cols-2 p-2.5">
                    <span className="text-stone-600 font-medium">استلام الطلب</span>
                    <span className="font-bold text-stone-900 font-mono tabular-nums">
                      {vehiclePricing.tmart.pickup} جنيه
                    </span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5">
                    <span className="text-stone-600 font-medium">تسليم الطلب</span>
                    <span className="font-bold text-stone-900 font-mono tabular-nums">
                      {vehiclePricing.tmart.dropoff} جنيه
                    </span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5 bg-orange-50">
                    <span className="font-bold text-orange-900">اجمالي</span>
                    <span className="font-extrabold text-orange-700 font-mono tabular-nums text-base">
                      {vehiclePricing.tmart.total} جنيه
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Batch Table */}
            <div className="rounded-xl overflow-hidden border-2 border-[#3d181c] bg-white text-xs sm:text-sm">
              <div className="divide-y divide-stone-300">
                {[
                  { name: 'باتش 1', pickup: 3, drop: 3, total: 6 },
                  { name: 'باتش 2', pickup: 2, drop: 2, total: 4 },
                  { name: 'باتش 3', pickup: 1, drop: 1, total: 2 },
                  { name: 'باتش 4 و 5', pickup: 0, drop: 0, total: 0 },
                  { name: 'باتش 6', pickup: 1, drop: 1, total: 2 }
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-4 items-center p-2.5 divide-x divide-x-reverse divide-stone-300 hover:bg-stone-50"
                  >
                    <span className="font-bold text-stone-900">{row.name}</span>
                    <span className="text-stone-600">سعر استلام: {row.pickup} جنيه</span>
                    <span className="text-stone-600">سعر التسليم: {row.drop} جنيه</span>
                    <span className="font-bold text-orange-600">اجمالى: {row.total} جنيه</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200 text-xs text-stone-600 font-semibold flex items-center justify-between flex-wrap gap-2">
              <span>* التسعيرة سارية بزون مصر الجديدة ومدينة نصر - شركة العز اكسبريس</span>
              <a href="tel:01021673630" className="text-orange-700 font-bold hover:underline">
                استفسارات وتقديم: 01021673630
              </a>
            </div>
          </div>
        ) : (
          /* Interactive Modern Tables & Simulator */
          <div className="space-y-10">
            {/* Interactive Live Order Simulator */}
            <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-700">
                <div>
                  <span className="text-xs font-bold text-orange-400">محاكي تسعيرة الأوردر المباشر</span>
                  <h3 className="text-xl sm:text-2xl font-black mt-1">
                    احسب أوردرك بدقة لحظية
                  </h3>
                </div>

                {/* Source Selection Buttons */}
                <div className="inline-flex p-1 bg-stone-800 rounded-lg border border-stone-700">
                  <button
                    onClick={() => setActiveSource('restaurants')}
                    className={`px-4 py-2 rounded-md text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                      activeSource === 'restaurants'
                        ? 'bg-orange-600 text-white'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    <Store className="w-4 h-4" />
                    <span>المطاعم والمحلات</span>
                  </button>
                  <button
                    onClick={() => setActiveSource('tmart')}
                    className={`px-4 py-2 rounded-md text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                      activeSource === 'tmart'
                        ? 'bg-orange-600 text-white'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>تى مارت (tMart)</span>
                  </button>
                </div>
              </div>

              {/* Batch Pill Selector */}
              <div className="py-6 border-b border-stone-700">
                <div className="text-xs text-stone-400 font-semibold mb-3">
                  اختر شريحة الباتش الخاصة بك:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                  {(Object.keys(BATCH_INFO) as BatchId[]).map((batchKey) => {
                    const info = BATCH_INFO[batchKey];
                    const isSelected = activeBatch === batchKey;
                    return (
                      <button
                        key={batchKey}
                        onClick={() => setActiveBatch(batchKey)}
                        className={`p-3 rounded-xl text-right transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-orange-600/30 border-orange-500 text-white ring-1 ring-orange-500'
                            : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:bg-stone-700/80 hover:text-white'
                        }`}
                      >
                        <div className="text-xs font-bold">{info.name.split(' ')[0]} {info.name.split(' ')[1]}</div>
                        <div className="text-xs text-orange-400 font-mono tabular-nums mt-1 font-bold">
                          {info.bonus > 0 ? `+${info.bonus} ج إضافي` : 'بدون إضافة'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Calculated Value Display Card */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-stone-800/90 p-4 rounded-xl border border-stone-700 text-right">
                  <div className="text-xs text-stone-400 font-medium">سعر استلام الطلب</div>
                  <div className="text-2xl font-black text-white font-mono tabular-nums mt-1">
                    {finalPickup} <span className="text-sm font-normal text-stone-400">جنيه</span>
                  </div>
                  <div className="text-[11px] text-stone-400 mt-1">
                    (أساسي {baseRates.pickup} ج + بونص {currentBatch.pickupBonus} ج)
                  </div>
                </div>

                <div className="bg-stone-800/90 p-4 rounded-xl border border-stone-700 text-right">
                  <div className="text-xs text-stone-400 font-medium">سعر تسليم الطلب للعميل</div>
                  <div className="text-2xl font-black text-white font-mono tabular-nums mt-1">
                    {finalDropoff} <span className="text-sm font-normal text-stone-400">جنيه</span>
                  </div>
                  <div className="text-[11px] text-stone-400 mt-1">
                    (أساسي {baseRates.dropoff} ج + بونص {currentBatch.deliveryBonus} ج)
                  </div>
                </div>

                <div className="bg-orange-600 p-4 rounded-xl border border-orange-500 text-right text-white">
                  <div className="text-xs text-orange-100 font-bold">إجمالي الأوردر المنفذ</div>
                  <div className="text-3xl font-black font-mono tabular-nums mt-1">
                    {finalTotal} <span className="text-sm font-medium text-orange-200">جنيه</span>
                  </div>
                  <div className="text-[11px] text-orange-100 mt-1">
                    لكل أوردر فردي ينتهي تسليمه بنجاح
                  </div>
                </div>
              </div>
            </div>

            {/* Base Rates Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Restaurants Box */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-lg">أوردرات المطاعم والمحلات</h4>
                    <p className="text-xs text-stone-500">ماكدونالدز، كنتاكي، كشري، محلات متنوعة</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2.5 border-b border-stone-200/80 text-sm">
                    <span className="text-stone-600">استلام الطلب من المطعم</span>
                    <span className="font-bold font-mono tabular-nums text-stone-900">
                      {vehiclePricing.restaurants.pickup} جنيه
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-stone-200/80 text-sm">
                    <span className="text-stone-600">تسليم الطلب للعميل</span>
                    <span className="font-bold font-mono tabular-nums text-stone-900">
                      {vehiclePricing.restaurants.dropoff} جنيه
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 bg-orange-100/60 px-3 rounded-lg text-sm">
                    <span className="font-bold text-orange-950">إجمالي الأوردر الأساسي</span>
                    <span className="font-black font-mono tabular-nums text-orange-700 text-base">
                      {vehiclePricing.restaurants.total} جنيه
                    </span>
                  </div>
                </div>
              </div>

              {/* tMart Box */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-lg">أوردرات تى مارت (tMart)</h4>
                    <p className="text-xs text-stone-500">سوبرماركت طلبات السريع والمجهز فوراً</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2.5 border-b border-stone-200/80 text-sm">
                    <span className="text-stone-600">استلام الطلب من تي مارت</span>
                    <span className="font-bold font-mono tabular-nums text-stone-900">
                      {vehiclePricing.tmart.pickup} جنيه
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-stone-200/80 text-sm">
                    <span className="text-stone-600">تسليم الطلب للعميل</span>
                    <span className="font-bold font-mono tabular-nums text-stone-900">
                      {vehiclePricing.tmart.dropoff} جنيه
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 bg-amber-100/60 px-3 rounded-lg text-sm">
                    <span className="font-bold text-amber-950">إجمالي الأوردر الأساسي</span>
                    <span className="font-black font-mono tabular-nums text-amber-800 text-base">
                      {vehiclePricing.tmart.total} جنيه
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Batch Comparison Table */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
              <div className="p-5 bg-stone-50 border-b border-stone-200 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-600" />
                  <h4 className="font-bold text-stone-900 text-base">
                    جدول إضافات وتفاصيل الباتشات الكاملة
                  </h4>
                </div>
                <span className="text-xs text-stone-500">
                  تُضاف تلقائياً للأوردر عند كل استلام وتسليم
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-sm">
                  <thead className="bg-stone-100/75 text-stone-700 font-bold border-b border-stone-200 text-xs">
                    <tr>
                      <th className="py-3.5 px-4">شريحة الباتش</th>
                      <th className="py-3.5 px-4">استلام إضافي</th>
                      <th className="py-3.5 px-4">تسليم إضافي</th>
                      <th className="py-3.5 px-4">قيمة الإضافة الإجمالية</th>
                      <th className="py-3.5 px-4">إجمالي أوردر المطاعم</th>
                      <th className="py-3.5 px-4">إجمالي أوردر تى مارت</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 font-medium">
                    {[
                      {
                        id: 'batch1',
                        name: 'باتش 1',
                        bonus: 6,
                        pickup: 3,
                        drop: 3,
                        isBest: true
                      },
                      {
                        id: 'batch2',
                        name: 'باتش 2',
                        bonus: 4,
                        pickup: 2,
                        drop: 2,
                        isBest: false
                      },
                      {
                        id: 'batch3',
                        name: 'باتش 3',
                        bonus: 2,
                        pickup: 1,
                        drop: 1,
                        isBest: false
                      },
                      {
                        id: 'batch4_5',
                        name: 'باتش 4 و 5',
                        bonus: 0,
                        pickup: 0,
                        drop: 0,
                        isBest: false
                      },
                      {
                        id: 'batch6',
                        name: 'باتش 6',
                        bonus: 2,
                        pickup: 1,
                        drop: 1,
                        isBest: false
                      }
                    ].map((row) => {
                      const resTotal = vehiclePricing.restaurants.total + row.bonus;
                      const tmartTotal = vehiclePricing.tmart.total + row.bonus;
                      return (
                        <tr
                          key={row.id}
                          className={`hover:bg-orange-50/40 transition-colors ${
                            row.isBest ? 'bg-orange-50/30' : ''
                          }`}
                        >
                          <td className="py-3.5 px-4 font-bold text-stone-900">
                            {row.name}
                            {row.isBest && (
                              <span className="mr-2 text-[10px] bg-orange-100 text-orange-800 font-bold px-1.5 py-0.5 rounded">
                                أعلى شريحة
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 font-mono tabular-nums text-stone-600">
                            +{row.pickup} جنيه
                          </td>
                          <td className="py-3.5 px-4 font-mono tabular-nums text-stone-600">
                            +{row.drop} جنيه
                          </td>
                          <td className="py-3.5 px-4 font-bold font-mono tabular-nums text-orange-600">
                            +{row.bonus} جنيه
                          </td>
                          <td className="py-3.5 px-4 font-extrabold font-mono tabular-nums text-stone-900">
                            {resTotal} جنيه
                          </td>
                          <td className="py-3.5 px-4 font-extrabold font-mono tabular-nums text-stone-700">
                            {tmartTotal} جنيه
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
