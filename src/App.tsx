import React, { useState, useEffect } from 'react';
import {
  Star,
  CheckCircle,
  Menu,
  X,
  AlertTriangle,
  HelpCircle,
  PiggyBank,
  Wallet,
  Timer,
  MessageCircle,
  Music2,
  Camera,
  ThumbsUp,
  Mail,
  Globe,
} from 'lucide-react';
import { supabase } from './lib/supabaseClient';

const translations = {
  en: {
    nav: {
      goHomeAria: 'Go to home',
      logoAlt: 'Mandarin Logo',
      privacy: 'Privacy',
      terms: 'Terms',
      support: 'Support',
      langSwitcher: {
        aria: 'Switch to Mongolian',
        title: 'Монгол хэл',
      },
    },
    hero: {
      headingLine1: 'The effortless way to',
      headingLine2: 'split expenses.',
      description:
        'Split group expenses instantly. Track who owes what. Get your money back without the awkward conversations.',
      emailLabel: 'Email address',
      emailPlaceholder: 'you@example.com',
      submitIdle: 'Notify me',
      submitLoading: 'Joining...',
      waitlistSuccess: "Thanks! You're on the list. We'll email you when Mandarin launches.",
      waitlistErrorInline: 'Something went wrong. Please try again.',
      waitlistIdle: "Join the waitlist and we'll email you the moment Mandarin goes live.",
      waitlistErrorLater: 'Something went wrong. Please try again later.',
      heroAlt: 'Mandarin preview',
    },
    validation: {
      invalidEmail: 'Please enter a valid email address.',
    },
    problem: {
      title: 'Too shy to ask for your money back?',
      description: 'We handle it for you with clear evidence. No more awkward conversations about who owes what.',
      awkwardAsk: {
        title: 'The Awkward Ask',
        description: '"Hey... remember that dinner last week? You owe me $47.50..."',
      },
      confusion: {
        title: 'The Confusion',
        description: '"Wait, didn\'t I already pay you back? When was that again?"',
      },
      lostMoney: {
        title: 'The Lost Money',
        description: 'You end up eating the cost because it\'s "just easier"',
      },
      solutionTitle: 'Mandarin handles it all',
      solutionBullets: [
        'Create a trip with friends',
        'Automatic expense splitting',
        'Complete payment history',
        'Gentle payment reminders',
        'Receipt photo evidence (coming soon)',
      ],
    },
    features: {
      createTripsTitle: 'Create trips',
      createTripsDescription: 'Easily create trips with friends and loved ones.',
      createTripsAlt: 'Trip created screen',
      trackExpensesTitle: 'Track your expenses',
      trackExpensesDescription: 'Easily add and track your expenses of the trip',
      trackExpensesAlt: 'Expenses screen',
    },
    hiddenBenefits: {
      title: '100% Free. No catches.',
      description: 'We believe money between friends should stay simple',
      cards: [
        {
          title: 'Get Your Money Back',
          description: 'Stop losing money on group expenses. We track everything and remind people to pay up.',
        },
        {
          title: 'Instant Splitting',
          description: 'Snap a photo of the receipt. Add your friends. Done in 30 seconds.',
        },
        {
          title: 'No Awkward Conversations',
          description: 'We handle the reminders with receipts as proof. Keep your friendships intact.',
        },
      ],
    },
    balances: {
      title: 'Check Your Trip Balances',
      description:
        "Easily view each participant's balance at any time, ensuring clear and transparent tracking throughout the trip.",
      alt: 'Balances screen',
      smartTitle: 'Smart reimbursement',
      smartDescription:
        'Automatically calculate the most efficient way to settle debts, minimizing the number of transactions between participants.',
      smartAlt: 'Reimbursement screen',
    },
    socialProof: {
      title: 'Trusted by others',
      quotes: [
        '"Finally got back the $200 my roommates owed me from our Vegas trip. The receipt photos made it impossible to argue!"',
        '"No more spreadsheets or awkward texts. Our group uses this for everything now for dinners, trips, and utilities."',
        '"Saved our friend group from so much drama. The automatic reminders are polite but effective."',
      ],
    },
    social: {
      title: 'Follow us',
      subtitle: 'Stay updated and say hi',
    },
    footer: {
      suffix: 'All rights reserved.',
    },
  },
  mn: {
    nav: {
      goHomeAria: 'Нүүр хуудас руу очих',
      logoAlt: 'Mandarin лого',
      privacy: 'Нууцлал',
      terms: 'Нөхцөл',
      support: 'Тусламж',
      langSwitcher: {
        aria: 'Англи хэл рүү шилжих',
        title: 'English',
      },
    },
    hero: {
      headingLine1: 'Зардлаа төвөггүйгээр',
      headingLine2: 'хуваагаарай.',
      description:
        'Бүлгийн зардлыг дорхноо бодоорой. Хэн хэдийг өгөх ёстойг хялбархан хөтөл. Дургүй хүрэм яриа өрнүүлэхгүйгээр мөнгөө буцаан аваарай.',
      emailLabel: 'Имэйл хаяг',
      emailPlaceholder: 'ta@example.com',
      submitIdle: 'Мэдээлэл авах',
      submitLoading: 'Нэгдэж байна...',
      waitlistSuccess: 'Баярлалаа! Таныг жагсаалтад бүртгэлээ. Mandarin нээгдэхэд бид имэйл илгээнэ.',
      waitlistErrorInline: 'Алдаа гарлаа. Дахин оролдоно уу.',
      waitlistIdle:
        'Хүлээлгийн жагсаалтад бүртгүүлээд Mandarin албан ёсоор эхлэхэд бид танд имэйлээр мэдэгдэнэ.',
      waitlistErrorLater: 'Алдаа гарлаа. Та түр хүлээгээд дахин оролдоно уу.',
      heroAlt: 'Mandarin-ийн дэлгэцийн загвар',
    },
    validation: {
      invalidEmail: 'Хүчинтэй имэйл хаяг оруулна уу.',
    },
    problem: {
      title: 'Мөнгөө эргүүлж нэхэхээс ичээд байна уу?',
      description:
        'Бид нотолгоотойгоор таны өмнөөс зохицуулна. Хэн хэндээ юу төлөх ёстой талаар эвгүй яриа дахин өрнөхгүй.',
      awkwardAsk: {
        title: 'Эвгүй хүсэлт',
        description:
          '“Өө... өнгөрсөн долоо хоногийн оройн хоол санаанд байна уу? Чи надад 47.50 доллар өгөх ёстой...”',
      },
      confusion: {
        title: 'Будлиан',
        description: '“Байз, би аль хэдийн төлчихсөн биш билүү? Хэзээ билээ?”',
      },
      lostMoney: {
        title: 'Алдагдсан мөнгө',
        description: '“Зүгээр л амархан” гэж бодоод эцэст нь бүх зардлыг өөрөө нуруундаа үүрдэг.',
      },
      solutionTitle: 'Mandarin бүгдийг нь зохицуулна',
      solutionBullets: [
        'Найзуудтайгаа аялал үүсгэ',
        'Зардлыг автоматаар хуваарилна',
        'Төлбөрийн түүхийг бүтнээр нь хадгална',
        'Төлбөрөө сануулах уян хатан мэдэгдэл',
        'Баримтын зургийг нотолгоо болгон хадгална (удахгүй)',
      ],
    },
    features: {
      createTripsTitle: 'Аялал үүсгэ',
      createTripsDescription: 'Найз нөхөд, хайртай хүмүүстэйгээ аялал төлөвлөж хялбархан үүсгэ.',
      createTripsAlt: 'Аялал үүсгэсэн дэлгэц',
      trackExpensesTitle: 'Зардлаа хөтөл',
      trackExpensesDescription: 'Аяллын зардлаа амархан нэмээд хөтлөөрэй.',
      trackExpensesAlt: 'Зардлын дэлгэц',
    },
    hiddenBenefits: {
      title: '100% Үнэгүй. Нууц нөхцөлгүй.',
      description: 'Найзуудын хоорондын мөнгөний тооцоо энгийн байх ёстой гэж бид итгэдэг.',
      cards: [
        {
          title: 'Мөнгөө буцаан ав',
          description:
            'Бүлгийн зардал дээр мөнгөө алдахаа боль. Бид бүхнийг хөтлөөд хүмүүст төлөхийг сануулна.',
        },
        {
          title: 'Түргэн хуваалт',
          description: 'Баримтын зургийг дар. Найзуудыгаа нэм. 30 секундэд бэлэн.',
        },
        {
          title: 'Эвгүй яриа хэрэггүй',
          description: 'Бид сануулгыг баримтаар нь илгээдэг тул найрамдлаа хэвээр хадгал.',
        },
      ],
    },
    balances: {
      title: 'Аяллын үлдэгдлээ шалга',
      description: 'Оролцогч бүрийн үлдэгдлийг хүссэн үедээ харж, аяллын туршид ил тод байлга.',
      alt: 'Үлдэгдэл харах дэлгэц',
      smartTitle: 'Ухаалаг тэгшитгэл',
      smartDescription:
        'Оролцогчдын хоорондын гүйлгээг багасгахын тулд өр төлбөрийг хамгийн оновчтойгоор бодно.',
      smartAlt: 'Төлбөр тэгшитгэх дэлгэц',
    },
    socialProof: {
      title: 'Бусдын итгэлийг хүлээсэн',
      quotes: [
        '"Өрөөнийхнөөсөө Вегасын аяллын 200 долларыг эцэст нь буцааж авч чадлаа. Баримтын зурагтай болохоор маргах ч аргагүй!"',
        '"Цаашид хүснэгт, эвгүй мессеж хэрэггүй. Манай бүлэг одоо оройн зоог, аялал, төлбөр бүрийг эндээс зохицуулдаг."',
        '"Найзуудын бүлгийг олон маргаанаас аварчихлаа. Автоматаар ирдэг сануулгууд зөөлөн мөртлөө маш үр дүнтэй."',
      ],
    },
    social: {
      title: 'Биднийг дагаарай',
      subtitle: 'Шинэ мэдээллийг авч мэндчилээрэй',
    },
    footer: {
      suffix: 'Бүх эрх хуулиар хамгаалагдсан.',
    },
  },
} as const;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifyStatus, setNotifyStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [notifyError, setNotifyError] = useState('');
  const [notifyErrorKey, setNotifyErrorKey] = useState<'invalidEmail' | 'generic' | null>(null);
  const [language, setLanguage] = useState<'en' | 'mn'>('en');

  const text = translations[language];
  const nextLanguage = language === 'en' ? 'mn' : 'en';
  const resolvedNotifyError =
    notifyErrorKey === 'invalidEmail'
      ? text.validation.invalidEmail
      : notifyErrorKey === 'generic'
      ? text.hero.waitlistErrorLater
      : notifyError;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal animations
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const toInit = Array.from(document.querySelectorAll('[data-reveal]')) as HTMLElement[];
    toInit.forEach((el) => {
      const variant = el.getAttribute('data-reveal');
      el.classList.add('reveal');
      if (variant === 'left') el.classList.add('reveal-left');
      if (variant === 'right') el.classList.add('reveal-right');
      if (variant === 'zoom') el.classList.add('reveal-zoom');
    });
    const groups = Array.from(document.querySelectorAll('[data-reveal-stagger]')) as HTMLElement[];
    groups.forEach((el) => el.classList.add('reveal-stagger'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);
  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleNotifySubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = notifyEmail.trim();

    if (!validateEmail(email)) {
      setNotifyStatus('error');
      setNotifyErrorKey('invalidEmail');
      setNotifyError('');
      return;
    }

    setNotifyStatus('loading');
    setNotifyErrorKey(null);
    setNotifyError('');

    try {
      const { error } = await supabase.from('waitlist').insert({ email });

      if (error) {
        if ('code' in error && error.code === '23505') {
          setNotifyStatus('success');
          setNotifyError('');
          setNotifyErrorKey(null);
          setNotifyEmail('');
          return;
        }
        throw error;
      }

      setNotifyStatus('success');
      setNotifyError('');
      setNotifyErrorKey(null);
      setNotifyEmail('');
    } catch (error) {
      console.error('Failed to store email', error);
      setNotifyStatus('error');

      if (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof (error as { message?: unknown }).message === 'string'
      ) {
        setNotifyError((error as { message: string }).message);
        setNotifyErrorKey(null);
      } else {
        setNotifyError('');
        setNotifyErrorKey('generic');
      }
    }
  };
  return (
    <div id="home" className="min-h-screen bg-black text-white">
      {/* Floating Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-transparent' 
          : 'bg-transparent'
      }`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}>
          <div className={`stagger flex items-center justify-between transition-all duration-300 ${
            isScrolled 
              ? 'backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-700/50' 
              : ''
          }`}>
            <a
              href="#home"
              aria-label={text.nav.goHomeAria}
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <img 
                src="/logo_black.png" 
                alt={text.nav.logoAlt}
                className="w-10 h-10"
              />
              <span className="ml-0 text-2xl font-bold text-white">
                Mandarin
              </span>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center stagger divide-x divide-gray-700/50">
              <button
                type="button"
                onClick={() => setLanguage(nextLanguage)}
                className="flex items-center justify-center px-4 text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black first:pl-0"
                aria-label={text.nav.langSwitcher.aria}
                title={text.nav.langSwitcher.title}
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span className="sr-only">{text.nav.langSwitcher.title}</span>
              </button>
              <a href="/privacy.html" className="text-gray-300 hover:text-white transition-colors px-4">
                {text.nav.privacy}
              </a>
              <a href="/terms.html" className="text-gray-300 hover:text-white transition-colors px-4">
                {text.nav.terms}
              </a>
              <a href="/support.html" className="text-gray-300 hover:text-white transition-colors px-4 last:pr-0">
                {text.nav.support}
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 bg-black/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/60 shadow-lg">
              <div className="flex flex-col divide-y divide-gray-700/50">
                <button
                  type="button"
                  onClick={() => {
                    setLanguage(nextLanguage);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors py-3 text-left focus:outline-none"
                  aria-label={text.nav.langSwitcher.aria}
                >
                  <Globe className="w-5 h-5" aria-hidden="true" />
                  <span>{text.nav.langSwitcher.title}</span>
                </button>
                <a href="/privacy.html" className="text-gray-300 hover:text-white transition-colors py-3">
                  {text.nav.privacy}
                </a>
                <a href="/terms.html" className="text-gray-300 hover:text-white transition-colors py-3">
                  {text.nav.terms}
                </a>
                <a href="/support.html" className="text-gray-300 hover:text-white transition-colors py-3">
                  {text.nav.support}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen pt-32 pb-24 flex flex-col justify-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-0 translate-y-[-40px] lg:translate-y-[-50px]">
          <div className="stagger relative z-20 text-center mx-auto max-w-3xl pb-8 mt-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight relative z-30">
              <span className="block">{text.hero.headingLine1}</span>
              <span className="block">{text.hero.headingLine2}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed relative z-20">
              {text.hero.description}
            </p>
            

            <form
              onSubmit={handleNotifySubmit}
              className="stagger flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 w-full max-w-2xl mx-auto"
            >
              <label htmlFor="notify-email" className="sr-only">{text.hero.emailLabel}</label>
              <input
                id="notify-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={text.hero.emailPlaceholder}
                value={notifyEmail}
                onChange={(event) => {
                  setNotifyEmail(event.target.value);
                  if (notifyStatus !== 'idle') setNotifyStatus('idle');
                  if (notifyError) setNotifyError('');
                  if (notifyErrorKey) setNotifyErrorKey(null);
                }}
                className="w-full sm:w-[280px] rounded-full bg-gray-900/60 border border-gray-700/70 text-white placeholder-gray-500 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-300/50 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={notifyStatus === 'loading'}
                className="inline-flex items-center justify-center rounded-full bg-green-400 text-[#0C090A] font-semibold text-lg px-6 py-3 transition-all duration-300 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-300/50 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_18px_rgba(74,222,128,0.35)] hover:shadow-[0_0_28px_rgba(74,222,128,0.5)]"
              >
                {notifyStatus === 'loading' ? text.hero.submitLoading : text.hero.submitIdle}
              </button>
            </form>
            <div className="text-sm text-center text-gray-400 mb-10">
              {notifyStatus === 'success'
                ? text.hero.waitlistSuccess
                : notifyStatus === 'error'
                ? resolvedNotifyError || text.hero.waitlistErrorInline
                : text.hero.waitlistIdle}
            </div>

          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-[-17.5rem] sm:bottom-[-28rem] lg:bottom-[-38rem] flex justify-center">
          <img
            src="/mandarin.png"
            alt={text.hero.heroAlt}
            className="w-[520px] max-w-[150vw] sm:w-[720px] sm:max-w-[115vw] lg:w-[1050px] lg:max-w-[110vw] drop-shadow-2xl animate-[spin_20s_linear_infinite]"
          />
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-20 bg-gray-900/30 rounded-3xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {text.problem.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {text.problem.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-reveal-stagger>
            <div className="space-y-8" data-reveal>
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <AlertTriangle aria-hidden="true" className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{text.problem.awkwardAsk.title}</h3>
                  <p className="text-gray-400">{text.problem.awkwardAsk.description}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <HelpCircle aria-hidden="true" className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{text.problem.confusion.title}</h3>
                  <p className="text-gray-400">{text.problem.confusion.description}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <PiggyBank aria-hidden="true" className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{text.problem.lostMoney.title}</h3>
                  <p className="text-gray-400">{text.problem.lostMoney.description}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700/20 to-gray-600/20 p-8 rounded-2xl border border-gray-600/30" data-reveal>
              <h3 className="text-2xl font-bold mb-4 text-left">
                {text.problem.solutionTitle}
              </h3>
              <div className="space-y-4">
                {text.problem.solutionBullets.map((bullet) => (
                  <div key={bullet} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Showcase: Create trips & Track expenses */}
      <div className="relative pt-0 md:pt-8 pb-0 overflow-hidden">
        {/* Split background (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="grid grid-cols-2 h-full">
            <div className="bg-gray-800/30"></div>
            <div className="bg-teal-700/30"></div>
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 items-stretch" data-reveal-stagger>
            {/* Create trips */}
            <div className="text-center flex flex-col h-full bg-gray-800 md:bg-transparent rounded-none md:rounded-2xl pt-6 pb-0 px-4 md:p-0 -mx-4" data-reveal="left">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{text.features.createTripsTitle}</h3>
              <p className="text-gray-300 mb-3 md:mb-4">{text.features.createTripsDescription}</p>
              <div className="relative w-[80%] mx-auto rounded-2xl mt-4 md:mt-auto">
                <img
                  src="/created_trip.png"
                  alt={text.features.createTripsAlt}
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
            </div>
            {/* Track your expenses */}
            <div className="text-center flex flex-col h-full bg-teal-800 md:bg-transparent rounded-none md:rounded-2xl pt-6 pb-0 px-4 md:p-0 -mx-4" data-reveal="right">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{text.features.trackExpensesTitle}</h3>
              <p className="text-gray-300 mb-3 md:mb-4">{text.features.trackExpensesDescription}</p>
              <div className="relative w-[80%] mx-auto rounded-2xl mt-4 md:mt-auto">
                <img
                  src="/expenses.png"
                  alt={text.features.trackExpensesAlt}
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy was moved to standalone page */}

      {/* Benefits Section */}
      <div className="py-20 hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {text.hiddenBenefits.title}
            </h2>
            <p className="text-xl text-gray-300">
              {text.hiddenBenefits.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-gray-500/50 transition-all duration-300">
              <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Wallet aria-hidden="true" className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{text.hiddenBenefits.cards[0].title}</h3>
              <p className="text-gray-400">{text.hiddenBenefits.cards[0].description}</p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-gray-500/50 transition-all duration-300">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Timer aria-hidden="true" className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{text.hiddenBenefits.cards[1].title}</h3>
              <p className="text-gray-400">{text.hiddenBenefits.cards[1].description}</p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-gray-500/50 transition-all duration-300">
              <div className="bg-gray-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle aria-hidden="true" className="w-6 h-6 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{text.hiddenBenefits.cards[2].title}</h3>
              <p className="text-gray-400">{text.hiddenBenefits.cards[2].description}</p>
            </div>
      </div>
      </div>
      </div>

      {/* Feature Showcase: Check balances & Smart reimbursement */}
      <div className="relative pt-0 md:pt-8 pb-0 overflow-hidden">
        {/* Split background (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="grid grid-cols-2 h-full">
            <div className="bg-teal-700/30"></div>
            <div className="bg-gray-800/30"></div>
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 items-stretch" data-reveal-stagger>
            {/* Check Your Trip Balances */}
            <div className="text-center flex flex-col h-full bg-gray-800 md:bg-transparent rounded-none md:rounded-2xl pt-6 pb-0 px-4 md:p-0 -mx-4" data-reveal="left">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{text.balances.title}</h3>
              <p className="text-gray-300 mb-3 md:mb-4">{text.balances.description}</p>
              <div className="relative w-[80%] mx-auto rounded-2xl mt-4 md:mt-auto">
                <img
                  src="/balances.png"
                  alt={text.balances.alt}
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
            </div>
            {/* Smart reimbursement */}
            <div className="text-center flex flex-col h-full bg-teal-800 md:bg-transparent rounded-none md:rounded-2xl pt-6 pb-0 px-4 md:p-0 -mx-4" data-reveal="right">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{text.balances.smartTitle}</h3>
              <p className="text-gray-300 mb-3 md:mb-4">{text.balances.smartDescription}</p>
              <div className="relative w-[80%] mx-auto rounded-2xl mt-4 md:mt-auto">
                <img
                  src="/reimbursement.png"
                  alt={text.balances.smartAlt}
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div id="reviews" className="py-20 bg-gray-900/30 rounded-3xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight">
              {text.socialProof.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal-stagger>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700" data-reveal>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                  CG
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Chinguun G.</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{text.socialProof.quotes[0]}</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700" data-reveal>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-sm font-bold">
                  ET
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Enguun T.</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{text.socialProof.quotes[1]}</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700" data-reveal>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-sm font-bold">
                  TO
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Temuujin O.</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{text.socialProof.quotes[2]}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div id="social" className="pt-8 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-1 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight">
              {text.social.title}
            </h2>
            <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent tracking-tight">
              {text.social.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-reveal-stagger>
            <a href="https://www.tiktok.com/@Mandarinpay" target="_blank" rel="noreferrer" className="group bg-gray-800/40 hover:bg-gray-800/60 px-5 py-4 rounded-lg border border-gray-700/70 hover:border-gray-500/60 transition-colors text-center">
              <div className="flex justify-center mb-1">
                <Music2 aria-hidden="true" className="w-6 h-6 text-emerald-300" />
              </div>
              <div className="font-medium">TikTok</div>
              
            </a>
            <a href="https://www.instagram.com/mandarinpay/" target="_blank" rel="noreferrer" className="group bg-gray-800/40 hover:bg-gray-800/60 px-5 py-4 rounded-lg border border-gray-700/70 hover:border-gray-500/60 transition-colors text-center" data-reveal>
              <div className="flex justify-center mb-1">
                <Camera aria-hidden="true" className="w-6 h-6 text-pink-300" />
              </div>
              <div className="font-medium">Instagram</div>
              
            </a>
            <a href="https://www.facebook.com/people/Mandarin-Bill-Share/61581908513219/" target="_blank" rel="noreferrer" className="group bg-gray-800/40 hover:bg-gray-800/60 px-5 py-4 rounded-lg border border-gray-700/70 hover:border-gray-500/60 transition-colors text-center" data-reveal>
              <div className="flex justify-center mb-1">
                <ThumbsUp aria-hidden="true" className="w-6 h-6 text-blue-300" />
              </div>
              <div className="font-medium">Facebook</div>
              
            </a>
            <a href="mailto:support@mandarin.app" className="group bg-gray-800/40 hover:bg-gray-800/60 px-5 py-4 rounded-lg border border-gray-700/70 hover:border-gray-500/60 transition-colors text-center" data-reveal>
              <div className="flex justify-center mb-1">
                <Mail aria-hidden="true" className="w-6 h-6 text-amber-300" />
              </div>
              <div className="font-medium">Email</div>
              
            </a>
          </div>

        </div>
      </div>

      

      {/* Footer (minimal, no logo/brand) */}
      <div className="py-8 border-t border-gray-800 text-center text-gray-400">
        &copy; 2025 Mandarin. {text.footer.suffix}
      </div>
    </div>
  );
}

export default App;






