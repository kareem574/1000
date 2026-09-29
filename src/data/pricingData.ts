import { VehiclePricing, BatchId, VehicleType } from '../types';

export const BATCH_INFO: Record<BatchId, { name: string; bonus: number; pickup: number; dropoff: number; tag: string; description: string }> = {
  batch1: {
    name: 'باتش 1 (الدرجة الأولى)',
    bonus: 6,
    pickup: 3,
    dropoff: 3,
    tag: 'أعلى دخل (+6 جنيه)',
    description: 'أعلى شريحة للكباتن الأكثر التزاماً وتحقيقاً لمعدلات القبول وساعات الذروة'
  },
  batch2: {
    name: 'باتش 2 (الدرجة الثانية)',
    bonus: 4,
    pickup: 2,
    dropoff: 2,
    tag: 'شريحة ممتازة (+4 جنيه)',
    description: 'شريحة متقدمة تعطي زيادة ممتازة لكل أوردر مستلم ومسلم'
  },
  batch3: {
    name: 'باتش 3 (الدرجة الثالثة)',
    bonus: 2,
    pickup: 1,
    dropoff: 1,
    tag: 'شريحة جيدة (+2 جنيه)',
    description: 'شريحة متوسطة جيدة تحافظ على دخل إضافي لكل طلب'
  },
  batch4_5: {
    name: 'باتش 4 و 5 (الأساسي)',
    bonus: 0,
    pickup: 0,
    dropoff: 0,
    tag: 'التسعيرة الأساسية (0+)',
    description: 'الشريحة المبدئية أو الأساسية بدون حوافز باتش إضافية'
  },
  batch6: {
    name: 'باتش 6 (حافز إضافي)',
    bonus: 2,
    pickup: 1,
    dropoff: 1,
    tag: 'حافز دعم (+2 جنيه)',
    description: 'حافز دعم خاص بالاستلام والتسليم'
  }
};

export const PRICING_DATA: Record<VehicleType, VehiclePricing> = {
  motorcycle: {
    type: 'motorcycle',
    title: 'سائقي الموتوسيكل',
    subtitle: 'مصر الجديدة – مدينة نصر | مكتب العز',
    restaurants: {
      pickup: 14,
      dropoff: 19,
      total: 33
    },
    tmart: {
      pickup: 13,
      dropoff: 18,
      total: 31
    },
    batches: {
      batch1: { id: 'batch1', name: 'باتش 1', pickupBonus: 3, deliveryBonus: 3, totalBonus: 6 },
      batch2: { id: 'batch2', name: 'باتش 2', pickupBonus: 2, deliveryBonus: 2, totalBonus: 4 },
      batch3: { id: 'batch3', name: 'باتش 3', pickupBonus: 1, deliveryBonus: 1, totalBonus: 2 },
      batch4_5: { id: 'batch4_5', name: 'باتش 4 و 5', pickupBonus: 0, deliveryBonus: 0, totalBonus: 0 },
      batch6: { id: 'batch6', name: 'باتش 6', pickupBonus: 1, deliveryBonus: 1, totalBonus: 2 }
    }
  },
  bicycle: {
    type: 'bicycle',
    title: 'سائقي العجل والواكر',
    subtitle: 'مصر الجديدة – مدينة نصر | مكتب العز',
    restaurants: {
      pickup: 9,
      dropoff: 12,
      total: 21
    },
    tmart: {
      pickup: 8,
      dropoff: 11,
      total: 19
    },
    batches: {
      batch1: { id: 'batch1', name: 'باتش 1', pickupBonus: 3, deliveryBonus: 3, totalBonus: 6 },
      batch2: { id: 'batch2', name: 'باتش 2', pickupBonus: 2, deliveryBonus: 2, totalBonus: 4 },
      batch3: { id: 'batch3', name: 'باتش 3', pickupBonus: 1, deliveryBonus: 1, totalBonus: 2 },
      batch4_5: { id: 'batch4_5', name: 'باتش 4 و 5', pickupBonus: 0, deliveryBonus: 0, totalBonus: 0 },
      batch6: { id: 'batch6', name: 'باتش 6', pickupBonus: 1, deliveryBonus: 1, totalBonus: 2 }
    }
  },
  walker: {
    type: 'walker',
    title: 'الواكر (توصيل مشياً على الأقدام)',
    subtitle: 'مصر الجديدة – مدينة نصر | مكتب العز',
    restaurants: {
      pickup: 9,
      dropoff: 12,
      total: 21
    },
    tmart: {
      pickup: 8,
      dropoff: 11,
      total: 19
    },
    batches: {
      batch1: { id: 'batch1', name: 'باتش 1', pickupBonus: 3, deliveryBonus: 3, totalBonus: 6 },
      batch2: { id: 'batch2', name: 'باتش 2', pickupBonus: 2, deliveryBonus: 2, totalBonus: 4 },
      batch3: { id: 'batch3', name: 'باتش 3', pickupBonus: 1, deliveryBonus: 1, totalBonus: 2 },
      batch4_5: { id: 'batch4_5', name: 'باتش 4 و 5', pickupBonus: 0, deliveryBonus: 0, totalBonus: 0 },
      batch6: { id: 'batch6', name: 'باتش 6', pickupBonus: 1, deliveryBonus: 1, totalBonus: 2 }
    }
  }
};

export const COMPARISON_DATA = [
  {
    feature: 'سعر الأوردر الأساسي (مطاعم)',
    motorcycle: '33 جنيه',
    bicycle: '21 جنيه',
    walker: '21 جنيه',
    highlight: 'motorcycle'
  },
  {
    feature: 'سعر الأوردر في باتش 1 (مطاعم)',
    motorcycle: '39 جنيه (+6 ج)',
    bicycle: '27 جنيه (+6 ج)',
    walker: '27 جنيه (+6 ج)',
    highlight: 'motorcycle'
  },
  {
    feature: 'سعر أوردر تي مارت الأساسي',
    motorcycle: '31 جنيه',
    bicycle: '19 جنيه',
    walker: '19 جنيه',
    highlight: 'motorcycle'
  },
  {
    feature: 'سعر تي مارت في باتش 1',
    motorcycle: '37 جنيه (+6 ج)',
    bicycle: '25 جنيه (+6 ج)',
    walker: '25 جنيه (+6 ج)',
    highlight: 'motorcycle'
  },
  {
    feature: 'متوسط الأوردرات (9–10 ساعات)',
    motorcycle: '20 – 25 أوردر / يوم',
    bicycle: '15 – 20 أوردر / يوم',
    walker: '12 – 16 أوردر / يوم',
    highlight: 'motorcycle'
  },
  {
    feature: 'الدخل اليومي المتوقع (متوسط)',
    motorcycle: '700 – 950 جنيه',
    bicycle: '350 – 500 جنيه',
    walker: '250 – 380 جنيه',
    highlight: 'motorcycle'
  },
  {
    feature: 'الدخل الأسبوعي (قبضة الخميس)',
    motorcycle: '4,200 – 6,000 جنيه',
    bicycle: '2,100 – 3,200 جنيه',
    walker: '1,500 – 2,400 جنيه',
    highlight: 'motorcycle'
  },
  {
    feature: 'الدخل الشهري التقريبي (26 يوم)',
    motorcycle: '18,000 – 24,000+ جنيه',
    bicycle: '9,000 – 13,000 جنيه',
    walker: '6,500 – 10,000 جنيه',
    highlight: 'motorcycle'
  },
  {
    feature: 'نطاق مسافة التوصيل',
    motorcycle: 'منطقة واسعة (حتى 6–8 كم)',
    bicycle: 'محيط متوسط (1–3 كم)',
    walker: 'مربع سكني وتجاري ضيق (أقل من 1.2 كم)',
    highlight: 'equal'
  },
  {
    feature: 'مصاريف التشغيل اليومية',
    motorcycle: 'بنزين (حوالي 70–100 ج) + زيت/صيانة دورية',
    bicycle: 'تكلفة صيانة خفيفة جداً (بدون بنزين)',
    walker: 'صفر مصاريف تشغيل (بدون وقود ولا صيانة)',
    highlight: 'walker'
  },
  {
    feature: 'الأوراق المطلوبة للتقديم',
    motorcycle: 'صورة البطاقة (أمامي وخلفي) + صورة الرخصة (أمامي وخلفي) + سيلفي خلفية سادة + رقم التلفون',
    bicycle: 'صورة البطاقة (أمامي وخلفي) + سيلفي خلفية سادة + رقم التلفون',
    walker: 'صورة البطاقة (أمامي وخلفي) + سيلفي خلفية سادة + رقم التلفون',
    highlight: 'bicycle'
  },
  {
    feature: 'مرونة البدء',
    motorcycle: 'يحتاج مكنة ورخص سارية',
    bicycle: 'تبدأ فوراً بأي عجلة جاهزة',
    walker: 'تبدأ فوراً بدون أي مركبة',
    highlight: 'walker'
  }
];

export const OFFICE_CONTACT = {
  officeName: 'شركة العز اكسبريس (مكتب العز)',
  talabatZone: 'زون مصر الجديدة – مدينة نصر',
  payoutSchedule: 'أسبوعي (أول 3 أسابيع على محفظة طلبات، والأسبوع الرابع على فيزا فوري بلس)',
  payoutDay: 'أسبوعي كل يوم خميس',
  whatsappNumber: '201021673630', // Updated official phone & whatsapp
  whatsappDisplay: '01021673630',
  workingHours: 'من 10 صباحاً حتى 8 مساءً يومياً',
  location: 'القاهرة - زون مصر الجديدة / مدينة نصر'
};

export const WORK_SYSTEM_DETAILS = {
  natureOfWork: 'العمل كمندوب توصيل حر (Delivery Rider) مع تطبيق طلبات عبر مكتب العز اكسبريس. المحاسبة تكون بالإنتاجية وحسب عدد الأوردرات المنفذة.',
  shifts: 'حرية كاملة في اختيار أوقات العمل وحجز الشيفتات المتاحة عبر تطبيق الكابتن (Rider App). لا يوجد مواعيد ملزمة إجبارية.',
  dailyTarget: 'متوسط التشغيل عند العمل 9–10 ساعات يحقق حوالي 20 أوردر يومياً. ومع الالتزام والتركيز في أوقات الذروة يصل المستهدف بسهولة إلى 23–25 أوردر.',
  incomeVariables: 'الدخل الفعلي يتحدد وفق: عدد الأوردرات المنفذة، نوع المركبة، نوع الطلب (مطاعم أو تي مارت)، شريحة الباتش المطبقة، ونشاط السائق.',
  payoutSystem: 'القبض أسبوعي منتظم: أول 3 أسابيع بينزلك القبض على محفظة أبلكيشن طلبات، ومن الأسبوع الرابع بيتحول القبض تلقائياً على فيزا فوري بلس (Fawry Plus).'
};

export const FAQ_LIST = [
  {
    question: 'إزاي بيتحسب تمن الأوردر في طلبات؟',
    answer: 'ثمن الأوردر بيتكون من شقين أساسيين: سعر استلام الطلب من المطعم أو تي مارت + سعر تسليم الطلب للعميل. بالإضافة إلى ذلك يُضاف بونص الباتش الخاص بيك (من 0 إلى 6 جنيه إضافية لكل أوردر) حسب مستواك.'
  },
  {
    question: 'يعني إيه "الباتش" وإزاي أوصل لباتش 1؟',
    answer: 'الباتش هو نظام تقييم أسبوعي يقيس مدى التزامك: نسبة قبولك للطلبات وعدم الرفض، الحضور في مواعيد الشيفتات، والعمل في أوقات الذروة (عطلات نهاية الأسبوع ومواعيد الغداء والعشاء). كل ما التزمت أكتر بتترقى لباتش أعلى (باتش 1 يضيف لك 6 جنيه كاملة على كل أوردر منفذ).'
  },
  {
    question: 'إيه الفرق بين أوردرات المطاعم والمحلات وبين أوردرات تي مارت (tMart)؟',
    answer: 'أوردرات المطاعم تسعيرتها الأساسية أعلى (33 ج للموتوسيكل و21 ج للعجلة/الواكر)، بينما أوردرات تي مارت (31 ج للموتوسيكل و19 ج للعجلة/الواكر) ميزتها الكبرى هي سرعة التجهيز؛ تدخل الفرع تستلم الأوردر فوراً معبأ في أكياس بدون أي انتظار، مما يسمح لك بتنفيذ عدد أوردرات أكبر في وقت قياسي.'
  },
  {
    question: 'متى وكيف يتم استلام القبض الأسبوعي؟',
    answer: 'القبض أسبوعي كل يوم خميس: خلال أول 3 أسابيع بينزل قبضك مباشرة على محفظة أبلكيشن طلبات (Rider Wallet) وتقدر تصرفه بكل سهولة، وابتداءً من الأسبوع الرابع بيتم إصدار وتسليم فيزا فوري بلس (Fawry Plus) الخاصة بيك وينزل عليها القبض مباشرة وتسحبه من أي ماكينة صراف آلي أو فرع فوري بلس.'
  },
  {
    question: 'أنا مش معايا مكنة، هل أقدر أشتغل عجلة أو واكر؟',
    answer: 'نعم بالتأكيد! زون مصر الجديدة ومدينة نصر به كثافة عالية جداً من المحلات وتي مارت وطلبات قريبة، وتقدر تشتغل فوراً بعجلة أو حتى مشياً على الأقدام (واكر) بدون أي تكاليف وقود أو ترخيص مركبة.'
  },
  {
    question: 'هل مطلوب فيش جنائي للتقديم؟',
    answer: 'لأ، مش مطلوب فيش جنائي نهائياً! بيتم عمل استعلام أمني سريع ومباشر من خلال مكتب العز كبديل للفيش لتوفير وقتك ومجهودك والنزول للشغل فوراً.'
  },
  {
    question: 'ما هي الأوراق المطلوبة للتقديم مع مكتب العز؟',
    answer: 'الأوراق مبسطة جداً وبدون فيش جنائي (يتم عمل استعلام أمني بديل الفيش): للمكنة (الموتوسيكل): صورة البطاقة أمامي وخلفي + صورة الرخصة أمامي وخلفي + صورة سيلفي خلفية سادة + رقم التلفون. للعجلة والواكر: صورة البطاقة أمامي وخلفي + صورة سيلفي خلفية سادة + رقم التلفون.'
  },
  {
    question: 'هل فيه تدريب قبل النزول للشارع؟',
    answer: 'نعم، بعد تسجيل بياناتك ومراجعة أوراقك بمكتب العز، بيتم عمل جلسة تعريفية وشرح كامل لكيفية استخدام أبلكيشن طلبات (قبول الطلب، التوجه للمطعم، التواصل مع العميل، تحصيل الحسابات) حتى تكون جاهزاً تماماً.'
  }
];

export const REQUIREMENTS_DATA = {
  general: [
    'السن لا يقل عن 18 عاماً',
    'مش مطلوب فيش جنائي إطلاقاً (بيتم عمل استعلام أمني بديل الفيش)',
    'هاتف ذكي بنظام أندرويد يدعم الإنترنت وتطبيق الكابتن والـ GPS',
    'الالتزام بصندوق التوصيل ومعايير النظافة والمظهر اللائق'
  ],
  motorcycle: [
    'صورة البطاقة أمامي وخلفي (سارية وواضحة)',
    'صورة الرخصة أمامي وخلفي (سارية وواضحة)',
    'صورة سيلفي واضحة بخلفية سادة (لبروفايل التطبيق)',
    'رقم التلفون الشخصي (المسجل باسمك والنشط على واتساب)'
  ],
  bicycle_walker: [
    'صورة البطاقة أمامي وخلفي (سارية وواضحة)',
    'صورة سيلفي واضحة بخلفية سادة (لبروفايل التطبيق)',
    'رقم التلفون الشخصي (المسجل باسمك والنشط على واتساب)'
  ]
};
