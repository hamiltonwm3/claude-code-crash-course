export default function HeroCentered() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden text-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#d97757]/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-[#6a9bcc]/15 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-tl from-[#788c5d]/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d97757]/10 border border-[#d97757]/20 mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d97757] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d97757]" />
          </span>
          <span className="text-sm font-medium text-[#d97757]">Community-Powered Automation</span>
        </div>

        {/* Centered Visual – orbiting icon ring */}
        <div className="relative w-40 h-40 mb-10 hidden lg:block animate-fade-in">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--border)] animate-spin-slow" />
          {/* Middle Ring */}
          <div className="absolute inset-4 rounded-full border border-[#d97757]/25 animate-reverse-spin" />
          {/* Inner Glow */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#d97757]/25 to-[#6a9bcc]/10 blur-lg animate-pulse-slow" />
          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-[#d97757]/20 rounded-2xl blur-lg animate-pulse" />
              <div className="relative w-14 h-14 bg-gradient-to-br from-[#d97757] to-[#c4684a] rounded-2xl flex items-center justify-center shadow-xl shadow-[#d97757]/30">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>
          </div>
          {/* Top orbiting icon */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-[var(--background)] border border-[var(--border)] rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-[#6a9bcc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
          </div>
          {/* Right orbiting icon */}
          <div className="absolute inset-0 animate-reverse-spin animation-delay-500">
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-[var(--background)] border border-[var(--border)] rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-[#d97757]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-[1.05] tracking-tight animate-slide-up">
          Supercharge Claude Code
          <br />
          with{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#d97757] via-[#e8956e] to-[#d97757] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              powerful hooks
            </span>
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#d97757]/30" viewBox="0 0 200 12" fill="none">
              <path d="M2 8 Q50 2 100 8 T198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
            </svg>
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-[var(--slate-light)] mb-10 leading-relaxed max-w-2xl animate-slide-up animation-delay-200">
          Discover, share, and install community-driven hooks that transform your AI-powered development workflow. From automated testing to smart notifications.
        </p>

        {/* CTA Buttons – centered */}
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-400">
          <button className="group relative px-8 py-4 bg-[#d97757] text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(217,119,87,0.4)] hover:scale-[1.02]">
            <span className="relative z-10 flex items-center gap-2">
              Browse Hooks
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#c4684a] to-[#d97757] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button className="group px-8 py-4 border-2 border-[var(--border)] hover:border-[#d97757]/50 text-[var(--foreground)] font-semibold rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,119,87,0.15)] hover:bg-[#d97757]/5">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Submit a Hook
            </span>
          </button>
        </div>

        {/* Stats – centered */}
        <div className="flex justify-center gap-12 mt-12 pt-8 border-t border-[var(--border)] w-full max-w-sm animate-fade-in animation-delay-600">
          <div>
            <div className="text-3xl font-bold text-[var(--foreground)]">50+</div>
            <div className="text-sm text-[var(--slate-light)]">Hooks Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--foreground)]">1.2k</div>
            <div className="text-sm text-[var(--slate-light)]">Downloads</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--foreground)]">200+</div>
            <div className="text-sm text-[var(--slate-light)]">Contributors</div>
          </div>
        </div>
      </div>
    </section>
  );
}
