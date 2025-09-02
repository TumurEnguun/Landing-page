import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Calculator, Shield, Star, CheckCircle, Menu, X } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-[#28282B] text-white">
      {/* Floating Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#28282B]/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}>
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled 
              ? 'bg-gray-800/50 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-700/50' 
              : ''
          }`}>
            <div className="flex items-center">
              <img 
                src="/logo_black.png" 
                alt="Mandarin Logo" 
                className="w-8 h-8"
              />
              <span className="ml-3 text-xl font-bold text-white">
                Mandarin
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it works</a>
              <a href="#reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
              <button className="bg-white text-[#28282B] px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
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
            <div className="md:hidden mt-4 bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors py-2">Features</a>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors py-2">How it works</a>
                <a href="#reviews" className="text-gray-300 hover:text-white transition-colors py-2">Reviews</a>
                <button className="bg-white text-[#28282B] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 mt-4">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-gray-600 to-gray-500 p-3 rounded-2xl">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                Mandarin
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We'll ask for your money—
              <br />
              <span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                so you don't have to
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Split group expenses instantly. Track who owes what. Get your money back without the awkward conversations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-white text-[#28282B] hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group">
                Start Splitting for Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center text-gray-400">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                100% Free. No catches.
              </div>
            </div>
            
            <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Users className="w-8 h-8 text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Group Expenses</h3>
                <p className="text-gray-400">Add friends, split bills, track everything in one place</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Calculator className="w-8 h-8 text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Smart Calculations</h3>
                <p className="text-gray-400">Automatic splitting with detailed breakdowns</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Shield className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Evidence Tracking</h3>
                <p className="text-gray-400">Receipt photos and payment history for proof</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Too shy to ask for your money back?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We do it for you—with evidence. No more awkward conversations about who owes what.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <span className="text-red-400 text-xl">😰</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Awkward Ask</h3>
                  <p className="text-gray-400">
                    "Hey... remember that dinner last week? You owe me $47.50..."
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <span className="text-red-400 text-xl">🤔</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Confusion</h3>
                  <p className="text-gray-400">
                    "Wait, didn't I already pay you back? When was that again?"
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <span className="text-red-400 text-xl">💸</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Lost Money</h3>
                  <p className="text-gray-400">
                    You end up eating the cost because it's "just easier"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700/20 to-gray-600/20 p-8 rounded-2xl border border-gray-600/30">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Mandarin handles it all
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Automatic expense splitting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Receipt photo evidence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Gentle payment reminders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span>Complete payment history</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
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

      {/* Social Proof */}
      <div id="reviews" className="py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by thousands of groups
            </h2>
            <div className="flex items-center justify-center space-x-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-300">4.9/5 from 2,847 reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                  SM
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Sarah M.</p>
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
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-sm font-bold">
                  JD
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Jake D.</p>
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
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-sm font-bold">
                  AL
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Alex L.</p>
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

      {/* How It Works */}
      <div id="how-it-works" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Three steps to get your money back
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-600 to-gray-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Snap & Split</h3>
              <p className="text-gray-400">
                Take a photo of your receipt. Add your friends. We calculate who owes what instantly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-500 to-gray-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">We Ask Nicely</h3>
              <p className="text-gray-400">
                Gentle reminders with receipt evidence. No awkward conversations for you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-400 to-gray-300 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 text-[#28282B]">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Paid Back</h3>
              <p className="text-gray-400">
                Track payments in real-time. Know exactly who's paid and who hasn't.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop losing money on group expenses
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands who've recovered their money with Mandarin
          </p>
          
          <div className="space-y-4">
            <button className="bg-white text-[#28282B] hover:bg-gray-100 px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/10 flex items-center mx-auto group">
              Start Getting Your Money Back
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Free forever
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Setup in 30 seconds
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <img 
                src="/logo_black.png" 
                alt="Mandarin Logo" 
                className="w-6 h-6"
              />
              <span className="ml-2 font-bold text-lg bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                Mandarin
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;