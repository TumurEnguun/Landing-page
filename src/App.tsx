import { useState, useEffect } from 'react';

// Simple SVG icon components to replace lucide-react
const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const Menu = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const AlertTriangle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const HelpCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
);

const PiggyBank = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
  </svg>
);

const Wallet = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
  </svg>
);

const Timer = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
  </svg>
);

const Music2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
  </svg>
);

const Camera = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z" clipRule="evenodd" />
    <path d="M10 9a1 1 0 100 2 1 1 0 000-2z" />
  </svg>
);

const ThumbsUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.834a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const Globe = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
  </svg>
);

const ExternalLink = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

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
      headingLine2: 'split expenses',
      description:
        'Split group expenses instantly. Track who owes what. Get your money back without the awkward conversations.',
      submitIdle: 'Download Now',
      heroAlt: 'Mandarin preview',
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
      headingLine1: 'Зардлыг задалъя',
      headingLine2: '',
      description:
        'Төлбөрийн тооцоог хялбар, ухаалгаар шийдье',
      submitIdle: 'Татаж авах',
      heroAlt: 'Mandarin-ийн дэлгэцийн загвар',
    },
    problem: {
      title: 'Өөрөөсөө гаргасан мөнгөө эргүүлж нэхэхээс ичээд байна уу?',
      description:
        'Бид таны аяллалын бүх тооцоог ухаалгаар бодож, таны өмнөөс нэхэмжлэг явуулна.',
      awkwardAsk: {
        title: 'Асуухад эвгүй асуултууд',
        description:
          '"Нээрээ чи надад 15000₮-ний өртэй биз дээ? Өнгөрсөн долоо хоногийн бямба гарагийн оройн хоолыг би даасан санаж байна уу ?"',
      },
      confusion: {
        title: 'Үл ойлголцол',
        description: '"Юу яриад байгаа юм бэ ? Би аль дээр өгөө биз дээ ?"',
      },
      lostMoney: {
        title: 'Гэмгүй мөнгөө алдах',
        description: '"За найзууд юм чинь яах вэ дээ" гэж бодоод эцэст нь бүх зардлыг өөрөө нуруундаа үүрдэг.',
      },
      solutionTitle: 'Mandarin апп нь бүгдийг ухаалгаар зохицуулна',
      solutionBullets: [
        'Хамт олонтойгоо грүүп/аялал үүсгэх',
        'Зардлыг автоматаар хуваарилах',
        'Төлбөрийн түүхийг бүтнээр нь хадгална',
        'Төлбөрөө сануулах уян хатан мэдэгдэл',
        'Баримтын зургийг хадгална (тун удахгүй)',
      ],
    },
    features: {
      createTripsTitle: 'Аяллаа төлөвлө',
      createTripsDescription: 'Найз нөхөд, хайртай хүмүүстэйгээ аялал төлөвлөж хялбархан үүсгээрэй.',
      createTripsAlt: 'Аялал үүсгэсэн дэлгэц',
      trackExpensesTitle: 'Зардлаа хөтөл',
      trackExpensesDescription: 'Аяллын зардлаа амархан нэмээд хөтлөөрэй.',
      trackExpensesAlt: 'Зардлын дэлгэц',
    },
    hiddenBenefits: {
      title: '100% Үнэгүй.',
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
      description: 'Гишүүн бүрийн үлдэгдлийг хүссэн үедээ харж, аяллын туршид ил тод байлгана.',
      alt: 'Үлдэгдэл харах дэлгэц',
      smartTitle: 'Ухаалаг алгоритм',
      smartDescription:
        'Гишүүдийн хоорондын гүйлгээг багасгахын тулд өр төлбөрийг хамгийн оновчтойгоор бодно.',
      smartAlt: 'Төлбөр тэгшитгэх дэлгэц',
    },
    socialProof: {
      title: 'Бусдын итгэлийг хүлээсэн',
      quotes: [
        '"Өрөөнийхнөөсөө Вегасын аяллын 200 долларыг эцэст нь буцааж авч чадлаа."',
        '"Цаашид хүснэгт, тооны машин хэрэггүй болжээ. Манай найзууд бүгд одоо оройн зоог, аялал, төлбөр бүрийг Мандарин апп-аар зохицуулдаг болсон."',
        '"Найзуудын хоорондох мөнгөний маргаанаас ашгүй гэж саллаа. Автоматаар бүх тооцоог боддог болхоор амар юм."',
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
  const [language, setLanguage] = useState<'en' | 'mn'>('mn');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const text = translations[language];
  const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    return 'https://mandarinpay.app';
  };

  const languages = [
    { code: 'mn', name: 'Монгол хэл', flag: '🇲🇳', url: null },
    { code: 'en', name: 'English', flag: '🇺🇸', url: `${getBaseUrl()}/?lang=en` }
  ];

  const handleLanguageChange = (langCode: 'en' | 'mn') => {
    const selectedLanguage = languages.find(lang => lang.code === langCode);
    
    if (selectedLanguage?.url) {
      // Redirect to the language-specific URL
      window.location.href = selectedLanguage.url;
    } else {
      // For Mongolian (default), just change the language state
      setLanguage(langCode);
      setIsLanguageDropdownOpen(false);
    }
  };

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

  // Check for language parameter in URL on page load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    if (langParam && ['en', 'mn'].includes(langParam)) {
      setLanguage(langParam as 'en' | 'mn');
    }
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageDropdownOpen) {
        const target = event.target as Element;
        if (!target.closest('.language-dropdown')) {
          setIsLanguageDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageDropdownOpen]);
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
              <div className="relative language-dropdown">
                <button
                  type="button"
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center justify-center px-4 text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black first:pl-0"
                  aria-label={text.nav.langSwitcher.aria}
                  title={text.nav.langSwitcher.title}
                >
                  <Globe className="w-4 h-4 mr-2" aria-hidden="true" />
                  <span className="text-sm">{languages.find(lang => lang.code === language)?.flag}</span>
                </button>
                
                {isLanguageDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-lg z-50">
                    <div className="py-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code as 'en' | 'mn')}
                          className={`w-full flex items-center px-4 py-2 text-sm hover:bg-gray-700/50 transition-colors ${
                            language === lang.code ? 'text-green-400' : 'text-gray-300'
                          }`}
                        >
                          <span className="mr-3">{lang.flag}</span>
                          <span className="flex-1 text-left">{lang.name}</span>
                          {lang.url && <ExternalLink className="w-3 h-3 ml-2 opacity-60" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <a href={language === 'mn' ? "/privacy-mn.html" : "/privacy.html"} className="text-gray-300 hover:text-white transition-colors px-4">
                {text.nav.privacy}
              </a>
              <a href={language === 'mn' ? "/terms-mn.html" : "/terms.html"} className="text-gray-300 hover:text-white transition-colors px-4">
                {text.nav.terms}
              </a>
              <a href={language === 'mn' ? "/support-mn.html" : "/support.html"} className="text-gray-300 hover:text-white transition-colors px-4 last:pr-0">
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
                <div className="py-3">
                  <div className="flex items-center gap-3 text-gray-300 mb-2">
                    <Globe className="w-5 h-5" aria-hidden="true" />
                    <span>Language / Хэл</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 ml-8">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code as 'en' | 'mn');
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-2 text-sm py-2 px-3 rounded-lg transition-colors text-left ${
                          language === lang.code 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="flex-1">{lang.name}</span>
                        {lang.url && <ExternalLink className="w-3 h-3 opacity-60" />}
                      </button>
                    ))}
                  </div>
                </div>
                <a href={language === 'mn' ? "/privacy-mn.html" : "/privacy.html"} className="text-gray-300 hover:text-white transition-colors py-3">
                  {text.nav.privacy}
                </a>
                <a href={language === 'mn' ? "/terms-mn.html" : "/terms.html"} className="text-gray-300 hover:text-white transition-colors py-3">
                  {text.nav.terms}
                </a>
                <a href={language === 'mn' ? "/support-mn.html" : "/support.html"} className="text-gray-300 hover:text-white transition-colors py-3">
                  {text.nav.support}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen pt-32 pb-40 md:pb-48 flex flex-col justify-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-0 translate-y-[-40px] lg:translate-y-[-50px]">
          <div className="stagger relative z-40 text-center mx-auto max-w-3xl pb-8 mt-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight relative z-50">
              <span className="block relative">
                {text.hero.headingLine1}
                {!text.hero.headingLine2 && (
                  <div className="absolute -bottom-5 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>
                )}
              </span>
              {text.hero.headingLine2 && (
                <span className="block relative">
                  {text.hero.headingLine2}
                  <div className="absolute -bottom-5 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>
                </span>
              )}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed relative z-20">
              {text.hero.description}
            </p>
            

            <div className="stagger flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 md:mb-12 w-full max-w-2xl mx-auto relative z-50">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-green-400 text-[#0C090A] font-semibold text-lg px-6 py-3 transition-all duration-300 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-300/50 shadow-[0_0_18px_rgba(74,222,128,0.35)] hover:shadow-[0_0_28px_rgba(74,222,128,0.5)]"
              >
                {text.hero.submitIdle}
              </button>
              <div className="flex items-center justify-center sm:justify-start">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span className="text-sm font-medium text-white">{text.hiddenBenefits.title}</span>
              </div>
            </div>

          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-[-22rem] sm:bottom-[-32rem] md:bottom-[-35rem] lg:bottom-[-42rem] flex justify-center z-10">
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
                  src={language === 'mn' ? "/your_trip_mongol.png" : "/created_trip.png"}
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
                  src={language === 'mn' ? "/expense_mongol.png" : "/expenses.png"}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
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
                  src={language === 'mn' ? "/balances_mongol.png" : "/balances.png"}
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
                  src={language === 'mn' ? "/reimbursement_mongol.png" : "/reimbursement.png"}
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






