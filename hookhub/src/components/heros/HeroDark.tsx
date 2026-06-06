export default function HeroDark() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0d0d0f] rounded-3xl my-4">
      {/* Dark Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
        {/* Deep gradient orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#d97757]/25 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#6a9bcc]/20 rounded-full blur-[80px] animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#788c5d]/10 rounded-full blur-[120px] animate-float-delayed" />

        {/* Fine grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

        {/* Glowing nodes */}
        <div className="absolute top-16 right-[18%] w-2 h-2 bg-[#d97757] rounded-full animate-ping-slow opacity-80 shadow-[0_0_12px_#d97757]" />
        <div className="absolute top-36 right-[30%] w-1.5 h-1.5 bg-[#6a9bcc] rounded-full animate-ping-slow animation-delay-1000 opacity-70 shadow-[0_0_10px_#6a9bcc]" />
        <div className="absolute bottom-28 right-[22%] w-2 h-2 bg-[#788c5d] rounded-full animate-ping-slow animation-delay-2000 opacity-70 shadow-[0_0_10px_#788c5d]" />
        <div className="absolute top-1/2 right-[12%] w-1.5 h-1.5 bg-[#d97757]/80 rounded-full animate-bounce-slow" />

        {/* Neon connection lines */}
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-30" viewBox="0 0 400 500" fill="none">
          <path d="M350 50 L280 120 L320 200 L250 180 L200 250" stroke="url(#darkGrad1)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
          <path d="M380 150 L300 180 L320 250 L280 320" stroke="url(#darkGrad2)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash-delayed" />
          <circle cx="350" cy="50" r="4" fill="#d97757" className="animate-pulse shadow-[0_0_8px_#d97757]" />
          <circle cx="280" cy="120" r="3" fill="#6a9bcc" className="animate-pulse animation-delay-500" />
          <circle cx="200" cy="250" r="4" fill="#788c5d" className="animate-pulse animation-delay-1500" />
          <defs>
            <linearGradient id="darkGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97757" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#6a9bcc" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="darkGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6a9bcc" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#788c5d" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-6 lg:px-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d97757]/15 border border-[#d97757]/30 mb-8 animate-fade-in shadow-[0_0_20px_rgba(217,119,87,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d97757] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d97757] shadow-[0_0_6px_#d97757]" />
            </span>
            <span className="text-sm font-medium text-[#e8956e]">Community-Powered Automation</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight animate-slide-up">
            <span className="block">Supercharge</span>
            <span className="block mt-2">Claude Code with</span>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-[#d97757] via-[#e8956e] to-[#d97757] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-[0_0_20px_rgba(217,119,87,0.5)]">
                powerful hooks
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#d97757]/40" viewBox="0 0 200 12" fill="none">
                <path d="M2 8 Q50 2 100 8 T198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/50 mb-10 leading-relaxed animate-slide-up animation-delay-200">
            Discover, share, and install community-driven hooks that transform your AI-powered development workflow. From automated testing to smart notifications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-400">
            <button className="group relative px-8 py-4 bg-[#d97757] text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(217,119,87,0.6)] hover:scale-[1.02]">
              <span className="relative z-10 flex items-center gap-2">
                Browse Hooks
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c4684a] to-[#e8956e] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="group px-8 py-4 border-2 border-white/10 hover:border-[#d97757]/50 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,119,87,0.2)] hover:bg-[#d97757]/10">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Submit a Hook
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-white/10 animate-fade-in animation-delay-600">
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-white/40">Hooks Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">1.2k</div>
              <div className="text-sm text-white/40">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-sm text-white/40">Contributors</div>
            </div>
          </div>
        </div>

        {/* Hero Visual – dark neon variant */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-80 h-80">
            {/* Outer Ring – neon glow */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#d97757]/30 animate-spin-slow shadow-[0_0_30px_rgba(217,119,87,0.15)_inset]" />
            {/* Middle Ring */}
            <div className="absolute inset-8 rounded-full border border-[#6a9bcc]/30 animate-reverse-spin shadow-[0_0_20px_rgba(106,155,204,0.1)_inset]" />
            {/* Inner Glow */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#d97757]/30 to-[#6a9bcc]/15 blur-xl animate-pulse-slow" />

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-[#d97757]/30 rounded-3xl blur-2xl animate-pulse" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-[#d97757] to-[#c4684a] rounded-3xl flex items-center justify-center shadow-[0_0_60px_rgba(217,119,87,0.5)]">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Orbiting icon – top */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0d0d0f] border border-[#6a9bcc]/40 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(106,155,204,0.3)]">
                <svg className="w-6 h-6 text-[#6a9bcc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
            </div>

            {/* Orbiting icon – bottom */}
            <div className="absolute inset-0 animate-spin-slow animation-delay-1000" style={{ animationDirection: 'reverse' }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#0d0d0f] border border-[#788c5d]/40 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(120,140,93,0.3)]">
                <svg className="w-6 h-6 text-[#788c5d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Orbiting icon – right */}
            <div className="absolute inset-0 animate-reverse-spin animation-delay-500">
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0d0d0f] border border-[#d97757]/40 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(217,119,87,0.3)]">
                <svg className="w-6 h-6 text-[#d97757]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
