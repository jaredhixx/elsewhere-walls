export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="site-shell flex items-center justify-between py-6">
        <a
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.22em]"
        >
          Elsewhere Walls
        </a>

        <nav className="flex items-center gap-5 text-sm text-muted">
          <a href="#support" className="transition hover:text-foreground">
            Support
          </a>

          <a href="#updates" className="transition hover:text-foreground">
            Updates
          </a>
        </nav>
      </header>

      <section className="site-shell flex min-h-[calc(100vh-84px)] items-end pb-12 pt-20 md:pb-20">
        <div className="w-full border-t border-border pt-8 md:pt-12">
          <div className="grid gap-12 md:grid-cols-[1.35fr_0.65fr] md:items-end">
            <div>
              <p className="eyebrow mb-6">Original digital worlds</p>

              <h1 className="display-title">
                Wallpapers from worlds that don&apos;t exist.
              </h1>
            </div>

            <div className="md:pb-2">
              <p className="body-copy">
                Elsewhere is building original fantasy worlds for your phone.
                Free wallpapers, live wallpapers, premium collections, and
                custom worlds are on the way.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col">
                <a href="#support" className="primary-link">
                  Support Elsewhere
                </a>

                <a href="#updates" className="secondary-link">
                  Get new world drops
                </a>
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.16em] text-subtle">
                New worlds released regularly
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell border-t border-border py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Coming soon</p>

            <h2 className="max-w-lg text-3xl font-medium tracking-tight md:text-4xl">
              Free live wallpapers and original collections.
            </h2>
          </div>

          <div className="space-y-6 text-muted">
            <p className="body-copy">
              Elsewhere is currently building its first original wallpaper
              worlds. Free downloads will be available first, followed by
              premium collections and custom releases.
            </p>

            <p className="body-copy">
              No subscriptions yet. No clutter. Just new worlds as they are
              finished.
            </p>
          </div>
        </div>
      </section>

      <section
        id="support"
        className="site-shell border-t border-border py-16 md:py-24"
      >
        <div className="grid gap-10 md:grid-cols-[1fr_0.75fr] md:items-end">
          <div>
            <p className="eyebrow mb-4">Support the project</p>

            <h2 className="max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
              Help fund the next world.
            </h2>

            <p className="body-copy mt-5">
              Most Elsewhere wallpapers will remain free. If you enjoy the
              project, you can help support new releases and future live
              wallpapers.
            </p>
          </div>

          <div>
<a
  href="https://ko-fi.com/elsewherewalls"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-link w-full"
  aria-label="Support Elsewhere on Ko-fi"
>
  Support Elsewhere
</a>

<p className="mt-4 text-sm leading-6 text-subtle">
  One-time support through Ko-fi. No subscription required.
</p>
          </div>
        </div>
      </section>

      <section className="site-shell border-t border-border py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Request a world</p>

            <h3 className="text-2xl font-medium tracking-tight">
              Have an idea you want to see?
            </h3>

            <p className="body-copy mt-4">
              Free suggestions and paid priority requests will be available
              soon.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Custom worlds</p>

            <h3 className="text-2xl font-medium tracking-tight">
              Something made just for you.
            </h3>

            <p className="body-copy mt-4">
              Private custom wallpaper collections are planned for a future
              release.
            </p>
          </div>
        </div>
      </section>

      <section
        id="updates"
        className="site-shell border-t border-border py-16 md:py-24"
      >
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Elsewhere updates</p>

          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            New worlds, before they hit TikTok.
          </h2>

          <p className="body-copy mt-4">
            Occasional wallpaper drops, new collections, and project updates.
            No daily spam.
          </p>

<form
  action="https://app.kit.com/forms/9990458/subscriptions"
  method="post"
  className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
>
  <input
    type="email"
    name="email_address"
    required
    placeholder="Email address"
    aria-label="Email address"
    className="min-h-[52px] flex-1 rounded-[4px] border border-border-strong bg-surface px-4 text-foreground outline-none transition placeholder:text-subtle focus:border-accent"
  />

  <button
    type="submit"
    className="primary-link shrink-0 sm:min-w-[150px]"
  >
    Join Elsewhere
  </button>
</form>

<p className="mt-3 text-xs leading-5 text-subtle">
  Wallpaper drops and new worlds. No daily spam.
</p>
        </div>
      </section>

      <footer className="site-shell border-t border-border py-8">
        <div className="flex flex-col gap-4 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Elsewhere Walls</p>

          <p>Wallpapers from worlds that don&apos;t exist.</p>
        </div>
      </footer>
    </main>
  );
}