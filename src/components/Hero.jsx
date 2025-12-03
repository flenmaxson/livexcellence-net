"use client";

function Hero() {
  const openChat = () => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <section className="relative bg-white px-6 sm:px-10 py-16 md:py-24 overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Top Badge Bar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full shadow-lg">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold">Trusted by 10,000+ Users</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Real-time Protection</span>
            </div>
          </div>
        </div>

        {/* Main Content - Centered Layout */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Maintain, Boost, and
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Protect Your System
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-300 -z-10"></div>
            </span>
          </h1>

          <p className="text-slate-600 text-xl sm:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto">
            Livexcellence effortlessly handles updates and optimizations, keeping your computer running smoothly, quickly, and reliably at all times.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={openChat}
              className="relative cursor-pointer px-10 py-5 bg-sky-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:bg-sky-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Buy Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={openChat}
              className="px-10 py-5 bg-white border-2 border-slate-900 text-slate-900 font-bold text-lg rounded-2xl shadow-lg hover:bg-slate-900 hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-white border-2 border-green-500 rounded-xl px-6 py-3 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <span className="text-slate-800 font-semibold">Auto Driver Updates</span>
              </div>
            </div>
            
            <div className="bg-white border-2 border-yellow-500 rounded-xl px-6 py-3 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">⚡</span>
                </div>
                <span className="text-slate-800 font-semibold">Boost Performance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image - Full Width Bottom */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100 to-transparent rounded-3xl"></div>
          <div className="relative p-8">
            <img
              src="/heroimg.png"
              alt="Hero Image"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 left-12 bg-white rounded-2xl p-4 shadow-xl border-2 border-blue-600 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-slate-900 font-bold text-lg">100%</div>
                <div className="text-slate-600 text-sm font-medium">Secure</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 right-12 bg-white rounded-2xl p-4 shadow-xl border-2 border-green-500 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="text-slate-900 font-bold text-lg">5x</div>
                <div className="text-slate-600 text-sm font-medium">Faster</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;