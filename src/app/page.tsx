export default function Home() {
  return (
    <main className="h-[100dvh] overflow-hidden bg-background text-foreground">
      <div className="site-shell grid h-full grid-rows-[auto_1fr_auto]">
        {/* HEADER */}
        <header className="flex items-center justify-between border-b border-border py-4 md:py-5">
          <a
            href="/"
            className="text-[10px] font-semibold uppercase tracking-[0.3em] md:text-xs"
          >
            Elsewhere Walls
          </a>

          <a
            href="https://www.tiktok.com/@elsewherewalls"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-subtle transition-colors hover:text-foreground md:text-xs"
          >
            @elsewherewalls
          </a>
        </header>

        {/* PAGE */}
        <section className="grid min-h-0 grid-rows-[1fr_auto]">
          {/* HERO */}
          <div className="flex min-h-0 flex-col justify-center pt-[clamp(2rem,6vh,5rem)] pb-[clamp(1rem,2.5vh,2rem)]">
            <div className="mb-[clamp(0.8rem,2vh,1.4rem)] flex items-center gap-3">
              <span className="block h-px w-8 bg-accent md:w-12" />

              <p className="text-[9px] uppercase tracking-[0.28em] text-subtle md:text-[10px]">
                Original wallpapers · 2026
              </p>
            </div>

            <h1
              className="whitespace-nowrap text-[clamp(3.45rem,16.5vw,10.6rem)] font-normal leading-[0.8] tracking-[-0.07em]"
              style={{
                fontFamily:
                  'Georgia, "Times New Roman", Times, serif',
              }}
            >
              Elsewhere
            </h1>

            <div className="mt-[clamp(1rem,2.2vh,1.8rem)] grid gap-4 md:grid-cols-[1.2fr_0.8fr] md:items-start">
              <div />

              <div className="border-l border-border pl-4 md:pl-6">
                <p className="max-w-[300px] text-[13px] leading-[1.58] text-muted md:text-sm">
                  The first Elsewhere wallpapers and live wallpapers are being
                  finished now.
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-[5px] w-[5px] bg-accent" />

                  <span className="text-[9px] uppercase tracking-[0.22em] text-subtle">
                    First releases soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ACTION AREA */}
          <div className="border-t border-border py-[clamp(0.8rem,2vh,1.35rem)]">
            <div className="grid gap-[clamp(0.75rem,1.8vh,1.25rem)] md:grid-cols-[0.9fr_1.1fr] md:items-end">
              {/* COMING SOON */}
              <div>
                <p className="mb-2 text-[8px] uppercase tracking-[0.26em] text-subtle md:text-[9px]">
                  Coming soon
                </p>

                <p className="text-[11px] leading-5 text-muted md:text-xs">
                  Free wallpapers
                  <span className="mx-2 text-border-strong">/</span>
                  Live wallpapers
                  <span className="mx-2 text-border-strong">/</span>
                  Original collections
                </p>
              </div>

              {/* AVAILABLE NOW */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[8px] uppercase tracking-[0.26em] text-subtle md:text-[9px]">
                    Available now
                  </p>

                  <p className="text-[8px] text-subtle md:text-[9px]">
                    Get the first drop
                  </p>
                </div>

                <div className="flex gap-2">
                  <form
                    action="https://app.kit.com/forms/9990458/subscriptions"
                    method="post"
                    className="flex min-w-0 flex-1 gap-2 md:max-w-[620px]"
                  >
                    <input
                      type="email"
                      name="email_address"
                      required
                      placeholder="Email address"
                      aria-label="Email address"
                      className="h-11 min-w-0 flex-1 rounded-none border border-border-strong bg-transparent px-3 text-[12px] text-foreground outline-none transition-colors placeholder:text-subtle focus:border-muted md:h-12 md:px-4 md:text-sm"
                    />

                    <button
                      type="submit"
                      className="h-11 shrink-0 border border-accent bg-accent px-4 text-[11px] font-semibold text-[#0b0d10] transition-colors hover:bg-[var(--accent-hover)] md:h-12 md:px-6 md:text-sm"
                    >
                      Join
                    </button>
                  </form>

                  <a
                    href="https://ko-fi.com/elsewherewalls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 shrink-0 items-center justify-center border border-border-strong px-3 text-[11px] text-muted transition-colors hover:border-muted hover:text-foreground md:h-12 md:px-5 md:text-sm"
                  >
                    Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="flex items-center justify-between border-t border-border py-3 text-[8px] uppercase tracking-[0.12em] text-subtle md:py-4 md:text-[9px]">
          <p>© 2026 Elsewhere Walls</p>
          <p>elsewherewalls.com</p>
        </footer>
      </div>
    </main>
  );
}