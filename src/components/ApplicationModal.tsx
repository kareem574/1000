import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';
import { VehicleType, ApplicationFormData } from '../types';
import { OFFICE_CONTACT } from '../data/pricingData';
import { Logo } from './Logo';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    phone: '',
    nationalId: '',
    vehicleType: 'motorcycle',
    zone: 'مصر الجديدة ومدينة نصر معاً',
    hasDrivingLicense: true,
    hasMotorcycleLicense: true,
    workExperience: 'أول مرة (جديد)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;

    // Generate random reference number
    const ref = `EZZ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceNumber(ref);

    // Save lead in localStorage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('ezz_leads') || '[]');
      existing.push({
        ...formData,
        ref,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('ezz_leads', JSON.stringify(existing));
    } catch {
      // Ignore local storage error
    }

    setSubmitted(true);
  };

  const isMotorcycle = formData.vehicleType === 'motorcycle';

  const getWhatsAppMessage = () => {
    const papers = isMotorcycle
      ? '1. صورة البطاقة أمامي وخلفي\n2. صورة الرخصة أمامي وخلفي\n3. صورة سيلفي خلفية سادة\n4. رقم التلفون: ' + formData.phone
      : '1. صورة البطاقة أمامي وخلفي\n2. صورة سيلفي خلفية سادة\n3. رقم التلفون: ' + formData.phone;

    const text = `السلام عليكم، حابب أقدم على شغل كابتن دليفري طلبات مع شركة العز اكسبريس:
- كود الطلب: ${referenceNumber || 'جديد'}
- الاسم: ${formData.fullName}
- التليفون: ${formData.phone}
- وسيلة التوصيل: ${isMotorcycle ? 'مكنة (موتوسيكل) 🛵' : formData.vehicleType === 'bicycle' ? 'عجلة 🚲' : 'واكر (مشي) 🚶‍♂️'}
- المنطقة المفضلة: ${formData.zone}
- خبرة سابقة: ${formData.workExperience}

*الأوراق المطلوب تسليمها:*
${papers}
${formData.notes ? `\n- ملاحظات إضافية: ${formData.notes}` : ''}
جاهز لإرسال صور الأوراق لبدء تفعيل الحساب والنزول للشغل مع مكتب العز.`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppDirect = () => {
    const url = `https://wa.me/${OFFICE_CONTACT.whatsappNumber}?text=${getWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 sm:p-7 shadow-2xl border border-stone-200 text-right relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success Screen */
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-black text-stone-900">تم تسجيل طلبك بنجاح!</h3>
            <p className="text-sm text-stone-600 leading-relaxed max-w-md mx-auto">
              شكراً لتسجيل بياناتك ككابتن مع <strong>شركة العز اكسبريس</strong>. رقم طلبك المرجعي هو:
            </p>

            <div className="bg-stone-100 font-mono text-xl font-bold py-2 px-4 rounded-xl inline-block text-stone-900 tracking-wider">
              {referenceNumber}
            </div>

            {/* Checklist of required papers */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-right text-xs space-y-2">
              <div className="font-bold text-stone-900 text-sm">
                الأوراق المطلوب إرسالها الآن على واتساب المشرف:
              </div>
              {isMotorcycle ? (
                <ul className="space-y-1.5 text-stone-700 font-medium list-disc list-inside">
                  <li>صورة البطاقة أمامي وخلفي</li>
                  <li>صورة الرخصة أمامي وخلفي</li>
                  <li>صورة سيلفي خلفية سادة</li>
                  <li>رقم التلفون: <span className="font-bold">{formData.phone}</span></li>
                </ul>
              ) : (
                <ul className="space-y-1.5 text-stone-700 font-medium list-disc list-inside">
                  <li>صورة البطاقة أمامي وخلفي</li>
                  <li>صورة سيلفي خلفية سادة</li>
                  <li>رقم التلفون: <span className="font-bold">{formData.phone}</span></li>
                </ul>
              )}
            </div>

            <div className="p-3 bg-orange-50 rounded-xl border border-orange-200 text-xs text-orange-950 text-right space-y-1">
              <p>
                فريق مكتب العز سيتواصل معك عبر الرقم <strong>01021673630</strong>.
              </p>
              <p className="text-orange-800 font-bold">
                اضغط على الزر الأخضر بالأسفل لإرسال الصور والبيانات فوراً إلى واتساب المشرف:
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>إرسال الصور للأوراق عبر واتساب</span>
              </button>

              <button
                onClick={onClose}
                className="py-3 px-5 bg-stone-200 hover:bg-stone-300 text-stone-800 font-bold rounded-xl text-sm cursor-pointer transition-colors"
              >
                إغلاق
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <div>
            <div className="mb-5 flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-orange-600">تسجيل كابتن جديد</span>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                  نموذج التقديم للعمل مع طلبات
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  مكتب العز اكسبريس | هاتف التقديم: <span className="font-bold text-stone-700">01021673630</span>
                </p>
              </div>
              <div className="p-1 bg-stone-50 rounded-xl hidden sm:block">
                <Logo size="sm" showSubtitle={false} />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  الاسم ثلاثي أو رباعي <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="مثال: محمد أحمد علي"
                  className="w-full border border-stone-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  رقم الهاتف (الواتساب للتواصل واستلام الصور) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="مثال: 01012345678"
                  className="w-full border border-stone-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Vehicle Selection */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  وسيلة التوصيل <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'motorcycle', label: 'مكنة (موتوسيكل) 🛵' },
                    { id: 'bicycle', label: 'عجلة 🚲' },
                    { id: 'walker', label: 'واكر (مشي) 🚶‍♂️' }
                  ].map((v) => (
                    <button
                      type="button"
                      key={v.id}
                      onClick={() => setFormData({ ...formData, vehicleType: v.id as VehicleType })}
                      className={`py-2 px-1 text-xs font-bold rounded-lg border transition-all cursor-pointer text-center ${
                        formData.vehicleType === v.id
                          ? 'border-orange-600 bg-orange-50 text-orange-950 ring-1 ring-orange-600'
                          : 'border-stone-200 text-stone-600 bg-white hover:bg-stone-50'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Explicit Required Papers Checklist Box */}
              <div className="p-3.5 bg-orange-50/80 rounded-xl border border-orange-200 text-xs text-stone-800 space-y-1.5">
                <div className="font-bold text-orange-950 flex items-center justify-between">
                  <span>الأوراق المطلوبة للتقديم ({isMotorcycle ? 'ده مكنة' : 'ده عجلة'}):</span>
                  <span className="text-[10px] bg-orange-200 text-orange-900 px-2 py-0.5 rounded font-bold">
                    {isMotorcycle ? '4 أوراق أساسية' : '3 أوراق أساسية'}
                  </span>
                </div>
                {isMotorcycle ? (
                  <ol className="list-decimal list-inside space-y-1 text-stone-700 font-semibold">
                    <li>صورة البطاقة أمامي وخلفي</li>
                    <li>صورة الرخصة أمامي وخلفي</li>
                    <li>صورة سيلفي خلفية سادة</li>
                    <li>رقم التلفون الشخصي</li>
                  </ol>
                ) : (
                  <ol className="list-decimal list-inside space-y-1 text-stone-700 font-semibold">
                    <li>صورة البطاقة أمامي وخلفي</li>
                    <li>صورة سيلفي خلفية سادة</li>
                    <li>رقم التلفون الشخصي</li>
                  </ol>
                )}
                <div className="text-[11px] text-emerald-800 bg-emerald-100/80 p-2 rounded-lg mt-2 font-bold flex items-center gap-1.5">
                  <span>✓</span>
                  <span>مش مطلوب فيش جنائي نهائياً! بيتم عمل استعلام أمني بديل الفيش.</span>
                </div>
              </div>

              {/* Zone */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  المنطقة المفضلة للعمل
                </label>
                <select
                  value={formData.zone}
                  onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                  className="w-full border border-stone-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                >
                  <option value="مصر الجديدة ومدينة نصر معاً">مصر الجديدة & مدينة نصر معاً (الموصى به لأعلى طلبات)</option>
                  <option value="مصر الجديدة فقط">مصر الجديدة فقط (الكوربة، روكسي، النزهة)</option>
                  <option value="مدينة نصر فقط">مدينة نصر فقط (عباس العقاد، مكرم عبيد، الحي السابع والثمان)</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  الخبرة السابقة في مجال التوصيل
                </label>
                <select
                  value={formData.workExperience}
                  onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
                  className="w-full border border-stone-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                >
                  <option value="أول مرة (جديد)">أول مرة أعمل في الدليفري (جديد)</option>
                  <option value="عملت سابقاً في طلبات">عملت سابقاً في طلبات</option>
                  <option value="عملت في شركات توصيل أخرى">عملت في شركات توصيل وتطبيقات أخرى</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1">
                  ملاحظات أو استفسار إضافي (اختياري)
                </label>
                <input
                  type="text"
                  value={formData.notes || ''}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="أي استفسار بخصوص مواعيد العمل أو المقابلة"
                  className="w-full border border-stone-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 text-center text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>تأكيد التسجيل وإرسال الطلب</span>
                </button>

                <p className="text-[11px] text-stone-500 text-center">
                  سيتم تجهيز رسالة الواتساب مباشرة لإرسال صور الأوراق لمشرف مكتب العز (01021673630).
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
