export default function HeroMinimal() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle gradient wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-[#d97757]/6 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#6a9bcc]/5 to-transparent" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d97757]/10 border border-[#d97757]/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d97757] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d97757]" />
            </span>
            <span className="text-sm font-medium text-[#d97757]">Community-Powered Automation</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-[1.05] tracking-tight">
            <span className="block">Supercharge</span>
            <span className="block mt-2">Claude Code with</span>
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-[#d97757] to-[#e8956e] bg-clip-text text-transparent">
                powerful hooks
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#d97757]/60 to-transparent" />
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[var(--slate-light)] mb-10 leading-relaxed">
            Discover, share, and install community-driven hooks that transform your AI-powered development workflow. From automated testing to smart notifications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="group px-8 py-4 bg-[#d97757] text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-[#c4684a] hover:shadow-[0_8px_30px_rgba(217,119,87,0.35)] hover:scale-[1.02] flex items-center gap-2">
              Browse Hooks
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="group px-8 py-4 border-2 border-[var(--border)] hover:border-[#d97757]/40 text-[var(--foreground)] font-semibold rounded-2xl transition-all duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Submit a Hook
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-[var(--border)]">
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

        {/* Minimal Visual – text-based hook preview */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-xl overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--border)]/10">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-2 text-xs text-[var(--slate-light)] font-mono">.claude/hooks.json</span>
            </div>
            {/* Code content */}
            <div className="p-5 font-mono text-sm space-y-1 leading-relaxed">
              <p className="text-[var(--slate-light)]">{'{'}</p>
              <p className="pl-4"><span className="text-[#6a9bcc]">&quot;hooks&quot;</span><span className="text-[var(--slate-light)]">: {'{'}</span></p>
              <p className="pl-8"><span className="text-[#788c5d]">&quot;PreToolUse&quot;</span><span className="text-[var(--slate-light)]">: [</span></p>
              <p className="pl-12 text-[var(--slate-light)]">{'{'}</p>
              <p className="pl-16"><span className="text-[#6a9bcc]">&quot;matcher&quot;</span><span className="text-[var(--slate-light)]">: </span><span className="text-[#d97757]">&quot;Bash&quot;</span><span className="text-[var(--slate-light)]">,</span></p>
              <p className="pl-16"><span className="text-[#6a9bcc]">&quot;hooks&quot;</span><span className="text-[var(--slate-light)]">: [</span></p>
              <p className="pl-20 text-[var(--slate-light)]">{'{'}</p>
              <p className="pl-24"><span className="text-[#6a9bcc]">&quot;type&quot;</span><span className="text-[var(--slate-light)]">: </span><span className="text-[#d97757]">&quot;command&quot;</span><span className="text-[var(--slate-light)]">,</span></p>
              <p className="pl-24"><span className="text-[#6a9bcc]">&quot;command&quot;</span><span className="text-[var(--slate-light)]">: </span><span className="text-[#788c5d]">&quot;npm test&quot;</span></p>
              <p className="pl-20 text-[var(--slate-light)]">{'}'}</p>
              <p className="pl-16 text-[var(--slate-light)]">{']'}</p>
              <p className="pl-12 text-[var(--slate-light)]">{'}'}</p>
              <p className="pl-8 text-[var(--slate-light)]">{']'}</p>
              <p className="pl-4 text-[var(--slate-light)]">{'}'}</p>
              <p className="text-[var(--slate-light)]">{'}'}</p>
            </div>
            {/* Status bar */}
            <div className="flex items-center gap-2 px-4 py-2 border-t border-[var(--border)] bg-[#d97757]/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#788c5d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#788c5d]" />
              </span>
              <span className="text-xs text-[var(--slate-light)]">Hook active — watching 3 events</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
