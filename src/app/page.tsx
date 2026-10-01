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
          <div className="flex min-h-0 flex-col justify-center pt-[clamp(1.25rem,4.5vh,4rem)] pb-[clamp(0.65rem,1.8vh,1.5rem)]">
            <div className="mb-[clamp(0.65rem,1.6vh,1.2rem)] flex items-center gap-3">
              <span className="block h-px w-8 bg-accent md:w-12" />

              <p className="text-[9px] uppercase tracking-[0.28em] text-subtle md:text-[10px]">
                Original wallpapers · 2026
              </p>
            </div>

            <h1
              className="whitespace-nowrap text-[clamp(3.45rem,16.5vw,10.6rem)] font-normal leading-[0.8] tracking-[-0.07em]"
              style={{
                fontFamily: 'Georgia, "Times New Roman", Times, serif',
              }}
            >
              Elsewhere
            </h1>

            <div className="mt-[clamp(0.8rem,1.8vh,1.6rem)] grid gap-4 md:grid-cols-[1.2fr_0.8fr] md:items-start">
              <div />

              <div className="border-l border-border pl-4 md:pl-6">
                <p className="max-w-[300px] text-[12px] leading-[1.55] text-muted md:text-sm">
                  The first Elsewhere wallpapers and live wallpapers are being
                  finished now.
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-[5px] w-[5px] bg-accent" />

                  <span className="text-[8px] uppercase tracking-[0.22em] text-subtle md:text-[9px]">
                    First releases soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* LOWER STRIP */}
          <div className="border-t border-border py-[clamp(0.55rem,1.4vh,1.1rem)]">
            <div className="grid gap-3 md:grid-cols-[0.55fr_1fr_1.45fr] md:gap-6 md:items-end">
              {/* COMING SOON */}
              <div>
                <p className="mb-1.5 text-[8px] uppercase tracking-[0.26em] text-subtle md:text-[9px]">
                  Coming soon
                </p>

                <p className="text-[10px] leading-[1.6] text-muted md:text-xs">
                  Free
                  <span className="mx-1.5 text-border-strong">/</span>
                  Live
                  <span className="mx-1.5 text-border-strong">/</span>
                  Collections
                </p>
              </div>

              {/* REQUEST A WORLD */}
              <div className="border-t border-border pt-2.5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <div className="mb-1.5 flex items-center justify-between gap-3">
                  <p className="text-[8px] uppercase tracking-[0.26em] text-subtle md:text-[9px]">
                    Request a world
                  </p>

                  <span className="text-[8px] text-subtle">
                    Free
                  </span>
                </div>

                <form
                  action="https://app.kit.com/forms/9990644/subscriptions"
                  method="post"
                  className="grid grid-cols-[1fr_auto] gap-2"
                >
                  <div className="grid min-w-0 grid-cols-2 gap-2">
                    <input
                      type="text"
                      name="fields[world_request]"
                      required
                      placeholder="Your world idea"
                      aria-label="What world should we make?"
                      className="h-9 min-w-0 rounded-none border border-border-strong bg-transparent px-2.5 text-[10px] text-foreground outline-none transition-colors placeholder:text-subtle focus:border-muted md:h-11 md:px-3 md:text-xs"
                    />

                    <input
                      type="email"
                      name="email_address"
                      required
                      placeholder="Email"
                      aria-label="Email address"
                      className="h-9 min-w-0 rounded-none border border-border-strong bg-transparent px-2.5 text-[10px] text-foreground outline-none transition-colors placeholder:text-subtle focus:border-muted md:h-11 md:px-3 md:text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="h-9 shrink-0 border border-border-strong px-3 text-[9px] text-foreground transition-colors hover:border-accent hover:text-accent md:h-11 md:px-4 md:text-xs"
                  >
                    Send
                  </button>
                </form>
              </div>

              {/* FOUNDING LIST */}
              <div className="border-t border-border pt-2.5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <div className="mb-1.5 flex items-center justify-between gap-3">
                  <p className="text-[8px] uppercase tracking-[0.26em] text-subtle md:text-[9px]">
                    Founding list
                  </p>

                  <p className="hidden text-[8px] text-subtle sm:block md:text-[9px]">
                    First access · launch pricing
                  </p>
                </div>

                <div className="flex gap-2">
                  <form
                    action="https://app.kit.com/forms/9990458/subscriptions"
                    method="post"
                    className="flex min-w-0 flex-1 gap-2"
                  >
                    <input
                      type="email"
                      name="email_address"
                      required
                      placeholder="Email address"
                      aria-label="Email address"
                      className="h-9 min-w-0 flex-1 rounded-none border border-border-strong bg-transparent px-2.5 text-[10px] text-foreground outline-none transition-colors placeholder:text-subtle focus:border-muted md:h-11 md:px-3 md:text-xs"
                    />

                    <button
                      type="submit"
                      className="h-9 shrink-0 border border-accent bg-accent px-3 text-[9px] font-semibold text-[#0b0d10] transition-colors hover:bg-[var(--accent-hover)] md:h-11 md:px-5 md:text-xs"
                    >
                      Join
                    </button>
                  </form>

                  <a
                    href="https://ko-fi.com/elsewherewalls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 shrink-0 items-center justify-center border border-border-strong px-3 text-[9px] text-muted transition-colors hover:border-muted hover:text-foreground md:h-11 md:px-4 md:text-xs"
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