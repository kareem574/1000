import React from 'react';
import { Logo } from './Logo';
import { Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { OFFICE_CONTACT } from '../data/pricingData';

interface FooterProps {
  onOpenApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApply }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo size="md" showSubtitle={false} />
              <span className="text-xl font-black text-white">العز اكسبريس</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              المكتب والوكيل المعتمد لتشغيل كباتن وسائقي شركة طلبات (Talabat) في نطاق مصر الجديدة ومدينة نصر. نوفر أعلى تسعيرة، دعم ميداني، وقبض أسبوعي كل خميس.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenApply}
                className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                التقديم الفوري للعمل
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">أقسام البوابة</h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#pricing" className="hover:text-orange-400 transition-colors">
                  جدول التسعيرة الرسمية
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-orange-400 transition-colors">
                  حاسبة الدخل والأرباح
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-orange-400 transition-colors">
                  مقارنة الموتوسيكل والعجل والواكر
                </a>
              </li>
              <li>
                <a href="#work-system" className="hover:text-orange-400 transition-colors">
                  نظام العمل والشيفتات
                </a>
              </li>
              <li>
                <a href="#requirements" className="hover:text-orange-400 transition-colors">
                  الأوراق والشروط المطلوبة
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operations & Zone */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">نطاق التشغيل والتسليم</h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>زون مصر الجديدة (الكوربة، تريومف، روكسي، النزهة، الميريلاند)</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>زون مدينة نصر (عباس العقاد، مكرم عبيد، النادي الأهلي، الطيران)</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>ساعات العمل بالمكتب: {OFFICE_CONTACT.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Support */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">تواصل مع مكتب العز</h4>
            <div className="space-y-3 text-xs text-stone-400">
              <a
                href={`tel:01021673630`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span dir="ltr" className="font-mono text-white font-bold">01021673630</span>
                <span>(اتصال وواتساب)</span>
              </a>
              <a
                href={`https://wa.me/${OFFICE_CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>محادثة واتساب: 01021673630</span>
              </a>
              <div className="pt-2 text-[11px] text-stone-300 leading-relaxed border-t border-stone-800">
                <strong className="text-orange-400 block mb-0.5">نظام القبض الأسبوعي:</strong>
                أول 3 أسابيع عبر محفظة أبلكيشن طلبات، والأسبوع الرابع على فيزا فوري بلس (Fawry Plus).
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>
            © {new Date().getFullYear()} شركة العز اكسبريس لخدمات التوصيل والنقل الذكي. بالتعاون مع طلبات مصر.
          </p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>مصر الجديدة</span>
            <span>·</span>
            <span>مدينة نصر</span>
            <span>·</span>
            <span>القاهرة</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
