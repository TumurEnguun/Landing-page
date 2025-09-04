import React, { useState, useEffect } from 'react';
import { Users, Shield, Star, CheckCircle, Menu, X, Apple, Play } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <div id="home" className="min-h-screen bg-[#0C090A] text-white">
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
            <a href="#home" aria-label="Go to home" className="flex items-center hover:opacity-90 transition-opacity">
              <img 
                src="/logo_black.png" 
                alt="Mandarin Logo" 
                className="w-8 h-8"
              />
              <span className="ml-3 text-xl font-bold text-white">
                Mandarin
              </span>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center stagger divide-x divide-gray-700/50">
              <a href="/privacy.html" className="text-gray-300 hover:text-white transition-colors px-4 first:pl-0">Privacy</a>
              <a href="/terms.html" className="text-gray-300 hover:text-white transition-colors px-4">Terms</a>
              <a href="/support.html" className="text-gray-300 hover:text-white transition-colors px-4 last:pr-0">Support</a>
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
                <a href="/privacy.html" className="text-gray-300 hover:text-white transition-colors py-3">Privacy</a>
                <a href="/terms.html" className="text-gray-300 hover:text-white transition-colors py-3">Terms</a>
                <a href="/support.html" className="text-gray-300 hover:text-white transition-colors py-3">Support</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14">
          <div className="stagger text-center md:text-left md:max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight relative z-30">
              <span className="block">Make memories,</span>
              <span className="block">not math.</span>
            </h1>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight hidden">
              We'll ask for your money—
              <br />
              <span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                so you don't have to
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto md:mx-0 leading-relaxed md:text-left relative z-30">
              Split group expenses instantly. Track who owes what. Get your money back without the awkward conversations.
            </p>
            
            {/* Mobile: show only the central mandarin between text and CTA */}
            <div className="md:hidden relative my-3 h-[13.5rem] flex items-center justify-center">
              <img
                src="/mandarin.png"
                alt="Mandarin"
                className="relative z-20 w-[13.5rem] h-[13.5rem] drop-shadow-2xl animate-[spin_20s_linear_infinite]"
              />
            </div>

            {/* Desktop CTA (unchanged), hidden on mobile */}
            <div className="stagger hidden md:flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-10">
              <button className="bg-green-400 text-[#0C090A] hover:bg-green-300 px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_18px_rgba(74,222,128,0.35)] hover:shadow-[0_0_28px_rgba(74,222,128,0.5)] focus:outline-none focus:ring-2 focus:ring-green-300/50 flex items-center">
                Download for free
              </button>
              <div className="flex items-center text-gray-400">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                100% Free. No catches.
              </div>
            </div>

            {/* Mobile CTA below oranges */}
            <div className="stagger flex md:hidden flex-col gap-3 justify-center items-center mb-6">
              <button className="bg-green-400 text-[#0C090A] hover:bg-green-300 px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_18px_rgba(74,222,128,0.35)] hover:shadow-[0_0_28px_rgba(74,222,128,0.5)] focus:outline-none focus:ring-2 focus:ring-green-300/50 flex items-center">
                Download for free
              </button>
              <div className="flex items-center text-gray-400">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                100% Free. No catches.
              </div>
            </div>
            
            
            {/* Right-side rotating image for md+ with background reveal */}
            <div className="hidden md:flex absolute inset-y-0 right-0 items-center pointer-events-none">
              <div className="relative mr-4">
                {/* Background photo that fades in behind the rotating orange */}
                <img
                  src="/orange-bg.png"
                  alt="Orange background"
                  className="absolute left-0 top-[14%] w-[240px] max-w-[22.4vw] blur-[1px] saturate-125 opacity-0 fade-in-bg z-0"
                />
                {/* Second background image at bottom-right corner */}
                <img
                  src="/orange2.png"
                  alt="Orange background 2"
                  className="absolute right-0 top-[70%] w-[260px] max-w-[26vw] blur-[1px] saturate-125 opacity-0 fade-in-bg z-0"
                />
                {/* Foreground rotating orange */}
                <div className="relative z-10 slide-up">
                  <img
                    src="/mandarin.png"
                    alt="Mandarin preview"
                    className="relative w-[500px] max-w-[50vw] bg-transparent drop-shadow-2xl animate-[spin_20s_linear_infinite]"
                  />
                </div>
              </div>
            </div>
            
            <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" data-reveal-stagger>
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-3 md:px-6 md:py-6 rounded-xl border border-gray-700" data-reveal>
                <div className="flex items-center md:block">
                  <Users className="w-7 h-7 text-green-400 mr-3 md:mr-0 md:mb-3" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold m-0">Group Expenses</h3>
                    <p className="text-gray-400 text-sm md:text-base mt-1">Add friends, split bills, track everything in one place</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-3 md:px-6 md:py-6 rounded-xl border border-gray-700" data-reveal>
                <div className="flex items-center md:block">
                  <Star className="w-7 h-7 text-green-400 mr-3 md:mr-0 md:mb-3" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold m-0">Smart Calculations</h3>
                    <p className="text-gray-400 text-sm md:text-base mt-1">Smart algorithm for automatic splitting with minimal transactions.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-3 md:px-6 md:py-6 rounded-xl border border-gray-700" data-reveal>
                <div className="flex items-center md:block">
                  <Shield className="w-7 h-7 text-green-400 mr-3 md:mr-0 md:mb-3" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold m-0">Evidence Tracking</h3>
                    <p className="text-gray-400 text-sm md:text-base mt-1">Payment history for proof, with receipt photo saving coming soon.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-20 bg-gray-900/30 rounded-3xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Too shy to ask for your money back?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We handle it for you with clear evidence. No more awkward conversations about who owes what.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-reveal-stagger>
            <div className="space-y-8" data-reveal>
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <span className="text-green-400 text-xl">😰</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Awkward Ask</h3>
                  <p className="text-gray-400">
                    "Hey... remember that dinner last week? You owe me $47.50..."
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <span className="text-green-400 text-xl">🤔</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Confusion</h3>
                  <p className="text-gray-400">
                    "Wait, didn't I already pay you back? When was that again?"
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <span className="text-green-400 text-xl">💸</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Lost Money</h3>
                  <p className="text-gray-400">
                    You end up eating the cost because it's "just easier"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700/20 to-gray-600/20 p-8 rounded-2xl border border-gray-600/30" data-reveal>
              <h3 className="text-2xl font-bold mb-4 text-center">
                🍊 Mandarin handles it all
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Create a trip with friends</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Automatic expense splitting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Complete payment history</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Receipt photo evidence (coming soon)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Gentle payment reminders</span>
                </div>
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
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Create trips</h3>
              <p className="text-gray-300 mb-3 md:mb-4">Easily create trips with friends and loved ones.</p>
              <div className="relative w-[80%] mx-auto rounded-2xl mt-4 md:mt-auto">
                <img
                  src="/created_trip.png"
                  alt="Trip created screen"
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
            </div>
            {/* Track your expenses */}
            <div className="text-center flex flex-col h-full bg-teal-800 md:bg-transparent rounded-none md:rounded-2xl pt-6 pb-0 px-4 md:p-0 -mx-4" data-reveal="right">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Track your expenses</h3>
              <p className="text-gray-300 mb-3 md:mb-4">Easily add and track your expenses of the trip</p>
              <div className="relative w-[80%] mx-auto rounded-2xl mt-4 md:mt-auto">
                <img
                  src="/expenses.png"
                  alt="Expenses screen"
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
              100% Free. No catches.
            </h2>
            <p className="text-xl text-gray-300">
              We believe money between friends should stay simple
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-gray-500/50 transition-all duration-300">
              <div className="bg-green-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Your Money Back</h3>
              <p className="text-gray-400">
                Stop losing money on group expenses. We track everything and remind people to pay up.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-gray-500/50 transition-all duration-300">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Splitting</h3>
              <p className="text-gray-400">
                Snap a photo of the receipt. Add your friends. Done in 30 seconds.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-gray-500/50 transition-all duration-300">
              <div className="bg-gray-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">No Awkward Conversations</h3>
              <p className="text-gray-400">
                We handle the reminders with receipts as proof. Keep your friendships intact.
              </p>
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
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Check Your Trip Balances</h3>
              <p className="text-gray-300 mb-3 md:mb-4">Easily view each participant’s balance at any time, ensuring clear and transparent tracking throughout the trip.</p>
              <div className="relative w-[80%] mx-auto rounded-2xl mt-4 md:mt-auto">
                <img
                  src="/balances.png"
                  alt="Balances screen"
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
            </div>
            {/* Smart reimbursement */}
            <div className="text-center flex flex-col h-full bg-teal-800 md:bg-transparent rounded-none md:rounded-2xl pt-6 pb-0 px-4 md:p-0 -mx-4" data-reveal="right">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Smart reimbursement</h3>
              <p className="text-gray-300 mb-3 md:mb-4">Automatically calculate the most efficient way to settle debts, minimizing the number of transactions between participants.</p>
              <div className="relative w-[80%] mx-auto rounded-2xl mt-4 md:mt-auto">
                <img
                  src="/reimbursement.png"
                  alt="Reimbursement screen"
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
              Trusted by others
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
              <p className="text-gray-300">
                "Finally got back the $200 my roommates owed me from our Vegas trip. The receipt photos made it impossible to argue!"
              </p>
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
              <p className="text-gray-300">
                "No more spreadsheets or awkward texts. Our group uses this for everything now—dinners, trips, utilities."
              </p>
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
              <p className="text-gray-300">
                "Saved our friend group from so much drama. The automatic reminders are polite but effective."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div id="social" className="pt-8 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-1 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight">Follow us</h2>
            <p className="text-sm md:text-base font-semibold bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent tracking-tight">Stay updated and say hi</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-reveal-stagger>
            <a href="https://www.tiktok.com/@MandarinPAy" target="_blank" rel="noreferrer" className="group bg-gray-800/40 hover:bg-gray-800/60 px-5 py-4 rounded-lg border border-gray-700/70 hover:border-gray-500/60 transition-colors text-center">
              <div className="text-2xl mb-1">🎵</div>
              <div className="font-medium">TikTok</div>
              <div className="text-gray-400 text-xs md:text-sm">@MandarinPAy</div>
            </a>
            <a href="https://www.instagram.com/mandarin" target="_blank" rel="noreferrer" className="group bg-gray-800/40 hover:bg-gray-800/60 px-5 py-4 rounded-lg border border-gray-700/70 hover:border-gray-500/60 transition-colors text-center" data-reveal>
              <div className="text-2xl mb-1">📸</div>
              <div className="font-medium">Instagram</div>
              <div className="text-gray-400 text-xs md:text-sm">@mandarin</div>
            </a>
            <a href="https://www.facebook.com/mandarin" target="_blank" rel="noreferrer" className="group bg-gray-800/40 hover:bg-gray-800/60 px-5 py-4 rounded-lg border border-gray-700/70 hover:border-gray-500/60 transition-colors text-center" data-reveal>
              <div className="text-2xl mb-1">👍</div>
              <div className="font-medium">Facebook</div>
              <div className="text-gray-400 text-xs md:text-sm">/mandarin</div>
            </a>
            <a href="mailto:support@mandarin.app" className="group bg-gray-800/40 hover:bg-gray-800/60 px-5 py-4 rounded-lg border border-gray-700/70 hover:border-gray-500/60 transition-colors text-center" data-reveal>
              <div className="text-2xl mb-1">✉️</div>
              <div className="font-medium">Email</div>
              <div className="text-gray-400 text-xs md:text-sm">support@mandarin.app</div>
            </a>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3" data-reveal>
            <a href="https://apps.apple.com/" aria-label="Download on the App Store" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-black text-white hover:bg-black/90 px-4 py-2 h-12">
              <Apple className="w-6 h-6" />
              <div className="flex flex-col leading-none text-left">
                <span className="text-[10px] uppercase tracking-wide">Download on the</span>
                <span className="text-base font-semibold -mt-0.5">App Store</span>
              </div>
            </a>
            <a href="https://play.google.com/store" aria-label="Get it on Google Play" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-black text-white hover:bg-black/90 px-4 py-2 h-12">
              <Play className="w-6 h-6" />
              <div className="flex flex-col leading-none text-left">
                <span className="text-[10px] uppercase tracking-wide">Get it on</span>
                <span className="text-base font-semibold -mt-0.5">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      

      {/* Footer (minimal, no logo/brand) */}
      <div className="py-8 border-t border-gray-800 text-center text-gray-400">
        © 2025 Mandarin
      </div>
    </div>
  );
}

export default App;
