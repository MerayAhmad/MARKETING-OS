import { 
  User, 
  Product, 
  Customer, 
  Opportunity, 
  FollowUp, 
  Activity, 
  Sale, 
  CompanySettings,
  ChatMessage 
} from './types';

export const INITIAL_COMPANY_SETTINGS: CompanySettings = {
  companyName: 'شركة أكبيطرة للأدوية البيطرية',
  companyNameEn: 'Akbitra Veterinary Pharma',
  slogan: 'حلول دوائية بيطرية رائدة لصحة وإنتاجية الثروة الحيوانية',
  currency: '$',
  phone: '+963 11 234 5678',
  email: 'info@akbitra-pharma.sy',
  city: 'دمشق',
  address: 'المنطقة الصناعية - طريق المطار',
};

export const INITIAL_USERS: User[] = [
  {
    id: 'user-1',
    username: 'meray',
    password: '123',
    name: 'مرعي الاحمد',
    email: 'meray@akbitra-pharma.sy',
    phone: '0944112233',
    role: 'admin',
    roleTitle: 'المدير العام ومدير النظام',
    isActive: true,
    createdAt: '2026-01-01',
  },
  {
    id: 'user-2',
    username: 'sara',
    password: '123',
    name: 'سارة المحمود',
    email: 'sara@akbitra-pharma.sy',
    phone: '0955334455',
    role: 'sales',
    roleTitle: 'مسؤولة تواصل ومتابعة',
    isActive: true,
    createdAt: '2026-01-10',
  },
  {
    id: 'user-3',
    username: 'ahmad',
    password: '123',
    name: 'أحمد المصري',
    email: 'ahmad@akbitra-pharma.sy',
    phone: '0933778899',
    role: 'manager',
    roleTitle: 'مدير التسويق والمبيعات',
    isActive: true,
    createdAt: '2026-01-05',
  },
  {
    id: 'user-4',
    username: 'mohammed',
    password: '123',
    name: 'محمد العبدالله',
    email: 'mohammed@akbitra-pharma.sy',
    phone: '0988665544',
    role: 'sales',
    roleTitle: 'مندوب علمي وميداني',
    isActive: true,
    createdAt: '2026-02-01',
  },
];

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    senderId: 'user-3', // أحمد المصري (مدير التسويق)
    receiverId: 'user-2', // سارة المحمود
    content: 'صباح الخير سارة، يرجى متابعة الدكتور أحمد محمد بخصوص طلبية أموكسيفيت 20%، جاهزون لتسليم الشحنة وتسهيل الدفع إذا أكد 50 عبوة اليوم.',
    relatedCustomerId: 'cust-1',
    createdAt: '2026-10-05T09:30:00',
    read: true,
  },
  {
    id: 'msg-2',
    senderId: 'user-2', // سارة
    receiverId: 'user-3', // أحمد
    content: 'أهلاً أستاذ أحمد، تمام تواصلت معه عبر WhatsApp وطلب شهادة الصلاحية والتحليل المخبري. أرسلتها له وبانتظار تأكيد أمر الشراء قبل الظهر.',
    relatedCustomerId: 'cust-1',
    createdAt: '2026-10-05T09:45:00',
    read: true,
  },
  {
    id: 'msg-3',
    senderId: 'user-3', // أحمد المصري
    receiverId: 'user-2', // سارة
    content: 'ممتاز جداً! أيضاً لا تنسي التواصل مع مزرعة النور للدواجن بحمص بخصوص دفعة فيتاسول فورت.',
    relatedCustomerId: 'cust-3',
    createdAt: '2026-10-05T10:15:00',
    read: false,
  },
  {
    id: 'msg-4',
    senderId: 'user-3', // أحمد المصري
    receiverId: 'user-4', // محمد العبدالله
    content: 'مرحبا د. محمد، نرجو التركيز خلال زياراتك لصيدليات حلب اليوم على عرض التخفيضات الخاص بـ أوكسيفيت ل.أ وفيتاسول فورت.',
    relatedCustomerId: 'cust-2',
    createdAt: '2026-10-05T08:50:00',
    read: true,
  },
  {
    id: 'msg-5',
    senderId: 'user-4', // محمد العبدالله
    receiverId: 'user-3', // أحمد المصري
    content: 'تم أستاذ أحمد، زرت صيدلية الشفاء بحلب وهم مهتمون جداً بطلب 100 عبوة وسأرفع عرض السعر على النظام فور اعتماده.',
    relatedCustomerId: 'cust-2',
    createdAt: '2026-10-05T11:20:00',
    read: false,
  },
  {
    id: 'msg-6',
    senderId: 'user-1', // مرعي الاحمد (مدير النظام)
    receiverId: 'user-3', // أحمد المصري (مدير التسويق)
    content: 'أهلاً أستاذ أحمد، اطلعت على تقرير سير العمل ونسب إغلاق الفرص لهذا الأسبوع. الأداء ممتاز جداً مع مزارع ريف دمشق.',
    createdAt: '2026-10-05T12:00:00',
    read: true,
  },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'أموكسيفيت 20% (Amoxivet)',
    code: 'VET-AMX-20',
    category: 'antibiotics',
    categoryAr: 'مضاد حيوي',
    form: 'injection',
    formAr: 'حقن معلق',
    targetAnimals: ['أبقار', 'أغنام', 'ماعز', 'خيول'],
    packaging: 'عبوة زجاجية 100 مل',
    unitPrice: 12.5,
    description: 'مضاد حيوي واسع الطيف للسيطرة على التهابات الجهاز التنفسي والهضمي والتهابات الضرع والرحم.',
    isActive: true,
    createdAt: '2026-01-01',
  },
  {
    id: 'prod-2',
    name: 'أوكسي فيت ل.أ 200 (Oxyvet LA)',
    code: 'VET-OXY-200',
    category: 'antibiotics',
    categoryAr: 'مضاد حيوي طويل المفعول',
    form: 'injection',
    formAr: 'حقن وريدي/عضلي',
    targetAnimals: ['أبقار', 'أغنام', 'عجول'],
    packaging: 'عبوة زجاجية 100 مل',
    unitPrice: 16.0,
    description: 'أوكسيتتراسيكلين طويل المفعول (72 ساعة) لعلاج الباستوريلا والتسمم المعوي والتهاب المفاصل.',
    isActive: true,
    createdAt: '2026-01-01',
  },
  {
    id: 'prod-3',
    name: 'إيفرماكس سوبر (Ivermax Super)',
    code: 'VET-IVR-SUP',
    category: 'antiparasitics',
    categoryAr: 'مضاد طفيليات',
    form: 'injection',
    formAr: 'حقن تحت الجلد',
    targetAnimals: ['أبقار', 'أغنام', 'إبل'],
    packaging: 'عبوة 500 مل',
    unitPrice: 28.0,
    description: 'إيفرمكتين 1% مع كلورسولون 10% للقضاء التام على الديدان الكبدية والطفيليات الداخلية والخارجية.',
    isActive: true,
    createdAt: '2026-01-05',
  },
  {
    id: 'prod-4',
    name: 'فيتاسول فورت (Vitasol Forte)',
    code: 'VET-VIT-FOR',
    category: 'vitamins',
    categoryAr: 'فيتامينات ومقويات',
    form: 'oral_solution',
    formAr: 'محلول فموي',
    targetAnimals: ['دواجن', 'أبقار', 'أغنام', 'خيول'],
    packaging: 'عبوة سائلة 1 لتر',
    unitPrice: 14.0,
    description: 'مزيج مركز من AD3E ومجموعة B والأحماض الأمينية لرفع المناعة والإنتاج ومقاومة الإجهاد.',
    isActive: true,
    createdAt: '2026-01-10',
  },
  {
    id: 'prod-5',
    name: 'إنروفيت 10% (Enrovet Oral)',
    code: 'VET-ENR-10',
    category: 'antibiotics',
    categoryAr: 'مضاد حيوي',
    form: 'oral_solution',
    formAr: 'محلول مياه الشرب',
    targetAnimals: ['دواجن', 'طيور تسمين', 'عجول'],
    packaging: 'عبوة 1 لتر',
    unitPrice: 18.5,
    description: 'إنروفلوكساسين فعال لعلاج الإيكولاي والسالمونيلا والمايكوبلازما في قطعان الدواجن.',
    isActive: true,
    createdAt: '2026-01-12',
  },
  {
    id: 'prod-6',
    name: 'تايلوزين 200 (Tylosin 20%)',
    code: 'VET-TYL-200',
    category: 'antibiotics',
    categoryAr: 'مضاد حيوي متخصص',
    form: 'injection',
    formAr: 'حقن عضلي',
    targetAnimals: ['أبقار', 'أغنام', 'ماعز'],
    packaging: 'عبوة 100 مل',
    unitPrice: 15.0,
    description: 'علاج نوعي للالتهابات الرئوية وحمى الشحن والتهاب الضرع ومشاكل الجهاز التنفسي العلوي.',
    isActive: true,
    createdAt: '2026-01-15',
  },
  {
    id: 'prod-7',
    name: 'فلورفينيكول 30% (Florfenivet)',
    code: 'VET-FLR-30',
    category: 'antibiotics',
    categoryAr: 'مضاد حيوي رئوي حديث',
    form: 'injection',
    formAr: 'حقن عضلي/تحت الجلد',
    targetAnimals: ['أبقار', 'عجول تسمين', 'أغنام'],
    packaging: 'عبوة 100 مل',
    unitPrice: 22.0,
    description: 'مضاد حيوي فائق الفعالية لمرض الجهاز التنفسي البقري (BRD) والتهابات الأقدام الحادة.',
    isActive: true,
    createdAt: '2026-01-20',
  },
  {
    id: 'prod-8',
    name: 'كالسيوم بوروجلوكونات 40%',
    code: 'VET-CAL-40',
    category: 'metabolic',
    categoryAr: 'محاليل تعويضية وأملاح',
    form: 'injection',
    formAr: 'تسريب وريدي بطيء',
    targetAnimals: ['أبقار', 'أغنام'],
    packaging: 'زجاجة تسريب 500 مل',
    unitPrice: 8.5,
    description: 'علاج إسعافي سريع لحمى الحليب ونقص الكالسيوم والتكزز النفاسي بعد الولادة مباشرة.',
    isActive: true,
    createdAt: '2026-01-25',
  },
];

export const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: 'cust-1',
    name: 'د. أحمد محمد',
    phone: '0944123456',
    email: 'dr.ahmad@vetmed.sy',
    customerType: 'veterinarian',
    city: 'دمشق',
    area: 'الميدان / المزة',
    assignedTo: 'user-2', // سارة
    source: 'whatsapp',
    status: 'active',
    notes: 'طبيب بيطري معروف، يشرف على عدة مزارع أبقار في الغوطة الغربية. مهتم بالطلبيات الكبيرة.',
    interestedProducts: [
      { productId: 'prod-1', interestLevel: 'hot', notes: 'يحتاج كمية 50 عبوة للعيادة' },
      { productId: 'prod-2', interestLevel: 'warm', notes: 'يستخدمه في مزارع الأبقار' },
    ],
    createdAt: '2026-10-01',
    updatedAt: '2026-10-05',
    lastContactDate: '2026-10-05',
  },
  {
    id: 'cust-2',
    name: 'صيدلية الشفاء البيطرية',
    phone: '0933987654',
    email: 'shifa.vet@gmail.com',
    customerType: 'pharmacy',
    city: 'حلب',
    area: 'الجميلية',
    assignedTo: 'user-4', // محمد
    source: 'field_visit',
    status: 'followup',
    notes: 'صيدلية رئيسية توزع للأطباء والمربين. تطلب تسهيلات دفع 30 يوم وخصم كميات.',
    interestedProducts: [
      { productId: 'prod-1', interestLevel: 'hot', notes: 'طلب عرض سعر لـ 100 عبوة' },
      { productId: 'prod-4', interestLevel: 'hot', notes: 'طلب متكرر لمربي الدواجن' },
    ],
    createdAt: '2026-09-28',
    updatedAt: '2026-10-04',
    lastContactDate: '2026-10-04',
  },
  {
    id: 'cust-3',
    name: 'مزرعة النور للدواجن',
    phone: '0955888777',
    customerType: 'farm',
    city: 'حمص',
    area: 'طريق حماة / الرستن',
    assignedTo: 'user-2', // سارة
    source: 'facebook',
    status: 'new',
    notes: 'مزرعة بياض وتسمين سعة 40 ألف طير. دورة تربية جديدة تبدأ الأسبوع القادم.',
    interestedProducts: [
      { productId: 'prod-4', interestLevel: 'hot', notes: 'فيتامينات ومقويات للتحضين' },
      { productId: 'prod-5', interestLevel: 'hot', notes: 'إنروفيت وقائي وعلاجي' },
    ],
    createdAt: '2026-10-03',
    updatedAt: '2026-10-05',
    lastContactDate: '2026-10-03',
  },
  {
    id: 'cust-4',
    name: 'د. خالد العلي',
    phone: '0966442211',
    customerType: 'clinic',
    city: 'حماة',
    area: 'ساحة العاصي',
    assignedTo: 'user-3', // أحمد
    source: 'phone',
    status: 'active',
    notes: 'عيادة بيطرية متخصصة بالخيول والحيوانات الحقلية. عميل ملتزم وموثوق.',
    interestedProducts: [
      { productId: 'prod-3', interestLevel: 'warm', notes: 'مضادات طفيليات موسمية' },
      { productId: 'prod-7', interestLevel: 'hot', notes: 'طلب تجربة فلورفينيكول' },
    ],
    createdAt: '2026-09-15',
    updatedAt: '2026-10-04',
    lastContactDate: '2026-10-04',
  },
  {
    id: 'cust-5',
    name: 'شركة الفيحاء للتوزيع البيطري',
    phone: '0944001122',
    email: 'info@fayhaa-vet.sy',
    customerType: 'distributor',
    city: 'دمشق',
    area: 'البرامكة',
    assignedTo: 'user-3', // أحمد
    source: 'referral',
    status: 'active',
    notes: 'موزع جملة يغطي محافظات الساحل والجنوب. حجم طلبيات عالي.',
    interestedProducts: [
      { productId: 'prod-1', interestLevel: 'hot', notes: 'طلبية 200 عبوة شهرياً' },
      { productId: 'prod-2', interestLevel: 'hot', notes: 'طلبية 150 عبوة شهرياً' },
      { productId: 'prod-3', interestLevel: 'hot', notes: 'مستودع كامل' },
    ],
    createdAt: '2026-08-20',
    updatedAt: '2026-10-02',
    lastContactDate: '2026-10-02',
  },
  {
    id: 'cust-6',
    name: 'مزرعة البركة للأبقار والحلوب',
    phone: '0988771122',
    customerType: 'farm',
    city: 'ريف دمشق',
    area: 'النشابية / الغوطة',
    assignedTo: 'user-2', // سارة
    source: 'whatsapp',
    status: 'followup',
    notes: 'مزرعة تضم 180 رأس بقر هولشتاين. بحاجة دائمة لمحاليل كالسيوم ومضادات التهاب ضرع.',
    interestedProducts: [
      { productId: 'prod-8', interestLevel: 'hot', notes: 'كالسيوم بوروجلوكونات إسعافي' },
      { productId: 'prod-2', interestLevel: 'warm', notes: 'أوكسي طويل المفعول' },
    ],
    createdAt: '2026-09-22',
    updatedAt: '2026-10-05',
    lastContactDate: '2026-10-05',
  },
  {
    id: 'cust-7',
    name: 'د. ريم سليمان',
    phone: '0933441199',
    customerType: 'veterinarian',
    city: 'اللاذقية',
    area: 'مشروع الصليبة',
    assignedTo: 'user-4', // محمد
    source: 'exhibition',
    status: 'active',
    notes: 'مشرفة على مزارع الأغنام والدواجن في الساحل. مهتمة بالنشرات الفنية والدراسات الدوائية.',
    interestedProducts: [
      { productId: 'prod-3', interestLevel: 'hot', notes: 'إيفرماكس سوبر للتجريع الدوري' },
      { productId: 'prod-6', interestLevel: 'warm', notes: 'تايلوزين' },
    ],
    createdAt: '2026-09-10',
    updatedAt: '2026-10-03',
    lastContactDate: '2026-10-03',
  },
  {
    id: 'cust-8',
    name: 'صيدلية النسر البيطرية',
    phone: '0999123888',
    customerType: 'pharmacy',
    city: 'طرطوس',
    area: 'طريق الدريكيش',
    assignedTo: 'user-4', // محمد
    source: 'phone',
    status: 'new',
    notes: 'صيدلية جديدة تم افتتاحها مؤخراً، تطلب كاتالوج المنتجات وقائمة أسعار الوكيل.',
    interestedProducts: [
      { productId: 'prod-1', interestLevel: 'warm', notes: 'أدوية أساسية' },
      { productId: 'prod-4', interestLevel: 'warm', notes: 'فيتامينات' },
    ],
    createdAt: '2026-10-04',
    updatedAt: '2026-10-04',
    lastContactDate: '2026-10-04',
  },
];

export const INITIAL_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-1',
    customerId: 'cust-1', // د. أحمد محمد
    productId: 'prod-1', // Amoxivet
    assignedTo: 'user-2', // سارة
    title: 'طلبية أموكسيفيت 50 عبوة لمزارع الغوطة',
    stage: 'interested',
    quantity: 50,
    expectedValue: 625,
    source: 'whatsapp',
    notes: 'مهتم بشراء كمية للمزرعة، ينتظر تأكيد تاريخ الصلاحية وسرعة التوصيل.',
    createdAt: '2026-10-02',
    updatedAt: '2026-10-05',
  },
  {
    id: 'opp-2',
    customerId: 'cust-2', // صيدلية الشفاء
    productId: 'prod-1', // Amoxivet
    assignedTo: 'user-4', // محمد
    title: 'عرض سعر 100 عبوة أموكسيفيت مع شروط دفع',
    stage: 'quotation',
    quantity: 100,
    expectedValue: 1200,
    source: 'field_visit',
    notes: 'تم إرسال عرض السعر بانتظار موافقة مدير الصيدلية قبل نهاية الأسبوع.',
    createdAt: '2026-09-30',
    updatedAt: '2026-10-04',
  },
  {
    id: 'opp-3',
    customerId: 'cust-3', // مزرعة النور للدواجن
    productId: 'prod-4', // Vitasol Forte
    assignedTo: 'user-2', // سارة
    title: 'توريد فيتامينات لدورة تحضين الدواجن',
    stage: 'contacted',
    quantity: 30,
    expectedValue: 420,
    source: 'facebook',
    notes: 'تم التواصل هاتفياً لشرح جرعات التحضين ونوعية الفيتامين.',
    createdAt: '2026-10-03',
    updatedAt: '2026-10-05',
  },
  {
    id: 'opp-4',
    customerId: 'cust-4', // د. خالد العلي
    productId: 'prod-7', // Florfenivet
    assignedTo: 'user-3', // أحمد
    title: 'تجربة فلورفينيكول 30% للأبقار',
    stage: 'new',
    quantity: 20,
    expectedValue: 440,
    source: 'phone',
    notes: 'استفسار جديد عن توفر المنتج وتأثيره على مرض BRD.',
    createdAt: '2026-10-05',
    updatedAt: '2026-10-05',
  },
  {
    id: 'opp-5',
    customerId: 'cust-5', // شركة الفيحاء للتوزيع
    productId: 'prod-2', // Oxyvet LA
    assignedTo: 'user-3', // أحمد
    title: 'عقد توريد شهري 150 عبوة أوكسي طويل المفعول',
    stage: 'won',
    quantity: 150,
    expectedValue: 2400,
    source: 'referral',
    notes: 'تم توقيع الاتفاق واستلام الدفعة الأولى وتسليم البضاعة بنجاح.',
    createdAt: '2026-09-15',
    updatedAt: '2026-10-01',
    closedAt: '2026-10-01',
  },
  {
    id: 'opp-6',
    customerId: 'cust-6', // مزرعة البركة للأبقار
    productId: 'prod-8', // Calcium
    assignedTo: 'user-2', // سارة
    title: 'طلبية إسعافية 60 عبوة كالسيوم بوروجلوكونات',
    stage: 'quotation',
    quantity: 60,
    expectedValue: 510,
    source: 'whatsapp',
    notes: 'موسم ولادات قادم، بحاجة لتجهيز مخزون المزرعة الاحتياطي.',
    createdAt: '2026-10-01',
    updatedAt: '2026-10-04',
  },
  {
    id: 'opp-7',
    customerId: 'cust-7', // د. ريم سليمان
    productId: 'prod-3', // Ivermax Super
    assignedTo: 'user-4', // محمد
    title: 'طلبية إيفرماكس سوبر 25 عبوة نصف لتر',
    stage: 'won',
    quantity: 25,
    expectedValue: 700,
    source: 'exhibition',
    notes: 'تم تسليم الطلبية للدكتورة ريم وتم تسجيل البيع.',
    createdAt: '2026-09-20',
    updatedAt: '2026-10-03',
    closedAt: '2026-10-03',
  },
  {
    id: 'opp-8',
    customerId: 'cust-8', // صيدلية النسر
    productId: 'prod-1', // Amoxivet
    assignedTo: 'user-4', // محمد
    title: 'باقة افتتاح صيدلية تشمل أموكسيفيت وفيتامينات',
    stage: 'new',
    quantity: 40,
    expectedValue: 580,
    source: 'phone',
    notes: 'طلب قائمة عروض الافتتاح وتسهيلات التسديد.',
    createdAt: '2026-10-04',
    updatedAt: '2026-10-05',
  },
];

export const INITIAL_FOLLOW_UPS: FollowUp[] = [
  {
    id: 'flw-1',
    customerId: 'cust-1', // د. أحمد محمد
    opportunityId: 'opp-1',
    assignedTo: 'user-2', // سارة
    type: 'whatsapp',
    dueDate: '2026-10-03', // متأخرة منذ يومين
    dueTime: '11:00',
    status: 'pending',
    notes: 'إرسال شهادة التحليل وتأكيد تاريخ الصلاحية لمنتج أموكسيفيت.',
    createdAt: '2026-10-01',
  },
  {
    id: 'flw-2',
    customerId: 'cust-3', // مزرعة النور
    opportunityId: 'opp-3',
    assignedTo: 'user-2', // سارة
    type: 'call',
    dueDate: '2026-10-04', // متأخرة منذ يوم
    dueTime: '14:30',
    status: 'pending',
    notes: 'متابعة بخصوص بدء دورة التحضين في عنبر 2 وطلب الفيتامينات.',
    createdAt: '2026-10-02',
  },
  {
    id: 'flw-3',
    customerId: 'cust-2', // صيدلية الشفاء
    opportunityId: 'opp-2',
    assignedTo: 'user-4', // محمد
    type: 'call',
    dueDate: '2026-10-05', // اليوم
    dueTime: '11:00',
    status: 'pending',
    notes: 'الاتصال بالدكتور المسؤول بالصيدلية لمتابعة اعتماد عرض السعر 100 عبوة.',
    createdAt: '2026-10-03',
  },
  {
    id: 'flw-4',
    customerId: 'cust-6', // مزرعة البركة للأبقار
    opportunityId: 'opp-6',
    assignedTo: 'user-2', // سارة
    type: 'whatsapp',
    dueDate: '2026-10-05', // اليوم
    dueTime: '13:30',
    status: 'pending',
    notes: 'إرسال جدول تسليم عبوات الكالسيوم بالتنسيق مع قسم المستودع.',
    createdAt: '2026-10-04',
  },
  {
    id: 'flw-5',
    customerId: 'cust-4', // د. خالد العلي
    opportunityId: 'opp-4',
    assignedTo: 'user-3', // أحمد
    type: 'visit',
    dueDate: '2026-10-06', // غداً - قادمة
    dueTime: '10:00',
    status: 'pending',
    notes: 'زيارة علمية للعيادة في حماة لتقديم عينة فلورفينيكول والبروشور.',
    createdAt: '2026-10-05',
  },
  {
    id: 'flw-6',
    customerId: 'cust-8', // صيدلية النسر
    opportunityId: 'opp-8',
    assignedTo: 'user-4', // محمد
    type: 'call',
    dueDate: '2026-10-07', // قادمة
    dueTime: '12:00',
    status: 'pending',
    notes: 'الاتصال للتأكد من وصول الكتالوج والرد على استفسار الأسعار.',
    createdAt: '2026-10-05',
  },
  {
    id: 'flw-7',
    customerId: 'cust-5', // شركة الفيحاء
    opportunityId: 'opp-5',
    assignedTo: 'user-3', // أحمد
    type: 'visit',
    dueDate: '2026-10-01',
    dueTime: '11:00',
    status: 'completed',
    notes: 'زيارة مقر الشركة وتوقيع عقد التوريد السنوي وتسليم الفاتورة.',
    completedAt: '2026-10-01T12:30:00',
    completionNotes: 'تم اللقاء مع المدير التنفيذي وتوقيع العقد بنجاح.',
    createdAt: '2026-09-28',
  },
];

export const INITIAL_ACTIVITIES: Activity[] = [
  {
    id: 'act-1',
    customerId: 'cust-1', // د. أحمد
    userId: 'user-2',
    type: 'whatsapp',
    title: 'محادثة WhatsApp',
    description: 'تم إرسال بروشور ومعلومات دواء أموكسيفيت 20%، العميل أبدى اهتماماً كبيراً لطلب 50 عبوة.',
    createdAt: '2026-10-05T10:30:00',
  },
  {
    id: 'act-2',
    customerId: 'cust-1',
    userId: 'user-2',
    type: 'call',
    title: 'اتصال هاتفي',
    description: 'العميل استفسر عن أسعار الجملة للكميات وطلب معرفة سرعة الشحن إلى مزارع ريف دمشق.',
    createdAt: '2026-10-04T15:20:00',
  },
  {
    id: 'act-3',
    customerId: 'cust-1',
    userId: 'user-2',
    type: 'note',
    title: 'ملاحظة داخلية',
    description: 'مهتم بشراء كمية دورية للمزرعة المشرف عليها، يفضل التواصل صباحاً عبر واتساب.',
    createdAt: '2026-10-03T11:00:00',
  },
  {
    id: 'act-4',
    customerId: 'cust-1',
    userId: 'user-2',
    type: 'customer_created',
    title: 'تم إنشاء العميل',
    description: 'تمت إضافة ملف الطبيب البيطري د. أحمد محمد إلى النظام بواسطة سارة المحمود.',
    createdAt: '2026-10-01T09:15:00',
  },
  {
    id: 'act-5',
    customerId: 'cust-2', // صيدلية الشفاء
    userId: 'user-4',
    type: 'visit',
    title: 'زيارة ميدانية للصيدلية',
    description: 'زيارة مقر الصيدلية في حلب، لقاء مع الصيدلي المسؤول وعرض عينات أموكسيفيت وفيتاسول.',
    createdAt: '2026-10-04T14:00:00',
  },
  {
    id: 'act-6',
    customerId: 'cust-3', // مزرعة النور
    userId: 'user-2',
    type: 'facebook',
    title: 'رسالة عبر فيسبوك',
    description: 'استفسار من المزرعة على إعلان فيتامينات الدواجن، تم الرد وأخذ رقم الواتساب للمتابعة.',
    createdAt: '2026-10-03T18:40:00',
  },
  {
    id: 'act-7',
    customerId: 'cust-5', // شركة الفيحاء
    userId: 'user-3',
    type: 'sale_recorded',
    title: 'تسجيل عملية بيع مكتملة',
    description: 'تم بنجاح إتمام وتوريد 150 عبوة أوكسي فيت ل.أ بقيمة إجمالية $2,400.',
    createdAt: '2026-10-01T13:00:00',
  },
];

export const INITIAL_SALES: Sale[] = [
  {
    id: 'sale-1',
    customerId: 'cust-5',
    opportunityId: 'opp-5',
    productId: 'prod-2',
    userId: 'user-3', // أحمد
    quantity: 150,
    unitPrice: 16.0,
    totalAmount: 2400,
    saleDate: '2026-10-01',
    notes: 'توريد دفعة أوكسي فيت ل.أ لصالح شركة الفيحاء للتوزيع.',
    createdAt: '2026-10-01',
  },
  {
    id: 'sale-2',
    customerId: 'cust-7',
    opportunityId: 'opp-7',
    productId: 'prod-3',
    userId: 'user-4', // محمد
    quantity: 25,
    unitPrice: 28.0,
    totalAmount: 700,
    saleDate: '2026-10-03',
    notes: 'طلبية عيادة د. ريم سليمان لمضاد الطفيليات إيفرماكس.',
    createdAt: '2026-10-03',
  },
  {
    id: 'sale-3',
    customerId: 'cust-4',
    productId: 'prod-1',
    userId: 'user-3',
    quantity: 40,
    unitPrice: 12.5,
    totalAmount: 500,
    saleDate: '2026-09-28',
    notes: 'مبيعات مباشرة لعيادة د. خالد العلي بحماة.',
    createdAt: '2026-09-28',
  },
  {
    id: 'sale-4',
    customerId: 'cust-2',
    productId: 'prod-4',
    userId: 'user-4',
    quantity: 50,
    unitPrice: 14.0,
    totalAmount: 700,
    saleDate: '2026-09-25',
    notes: 'شحنة فيتامين فورت لصيدلية الشفاء بحلب.',
    createdAt: '2026-09-25',
  },
  {
    id: 'sale-5',
    customerId: 'cust-5',
    productId: 'prod-1',
    userId: 'user-3',
    quantity: 400,
    unitPrice: 12.0,
    totalAmount: 4800,
    saleDate: '2026-09-18',
    notes: 'شحنة أموكسيفيت ربعية لشركة الفيحاء.',
    createdAt: '2026-09-18',
  },
  {
    id: 'sale-6',
    customerId: 'cust-6',
    productId: 'prod-8',
    userId: 'user-2',
    quantity: 200,
    unitPrice: 8.5,
    totalAmount: 1700,
    saleDate: '2026-09-12',
    notes: 'توريد كالسيوم بوروجلوكونات لمزرعة البركة للأبقار.',
    createdAt: '2026-09-12',
  },
  {
    id: 'sale-7',
    customerId: 'cust-3',
    productId: 'prod-5',
    userId: 'user-2',
    quantity: 90,
    unitPrice: 18.5,
    totalAmount: 1665,
    saleDate: '2026-09-08',
    notes: 'إنروفيت 10% لدورة التسمين السابقة بمزرعة النور.',
    createdAt: '2026-09-08',
  },
];
