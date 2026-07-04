import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function BlobField() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute -top-[18%] -left-[12%] h-[52vmin] w-[52vmin] text-blob-soft opacity-[0.28] dark:opacity-[0.22]"
        viewBox="0 0 400 400"
        fill="currentColor"
      >
        <path d="M320 42C368 78 392 132 384 192C376 252 332 302 272 328C212 354 140 352 88 312C36 272 8 204 24 140C40 76 96 28 164 14C232 0 272 6 320 42Z" />
      </svg>

      <svg
        className="absolute -top-[8%] -right-[16%] h-[44vmin] w-[44vmin] text-blob-deep opacity-[0.18] dark:opacity-[0.16]"
        viewBox="0 0 400 400"
        fill="currentColor"
      >
        <path d="M298 28C346 52 378 98 388 154C398 210 384 272 338 312C292 352 218 368 158 352C98 336 54 286 38 226C22 166 36 98 82 58C128 18 198 4 250 12C302 20 250 4 298 28Z" />
      </svg>

      <svg
        className="absolute -bottom-[22%] -left-[10%] h-[48vmin] w-[48vmin] text-blob-deep opacity-[0.14] dark:opacity-[0.12]"
        viewBox="0 0 400 400"
        fill="currentColor"
      >
        <path d="M48 248C28 198 38 138 78 96C118 54 188 34 248 48C308 62 356 108 372 168C388 228 368 292 318 328C268 364 188 372 128 348C68 324 68 298 48 248Z" />
      </svg>

      <svg
        className="absolute -bottom-[14%] -right-[8%] h-[40vmin] w-[40vmin] text-blob-soft opacity-[0.22] dark:opacity-[0.18]"
        viewBox="0 0 400 400"
        fill="currentColor"
      >
        <path d="M352 268C382 312 378 368 338 392C298 416 228 408 172 382C116 356 74 312 58 258C42 204 52 140 98 104C144 68 226 60 282 78C338 96 322 224 352 268Z" />
      </svg>

      <svg
        className="absolute top-[38%] -left-[20%] h-[28vmin] w-[28vmin] text-blob-soft opacity-[0.1] dark:opacity-[0.08]"
        viewBox="0 0 300 300"
        fill="currentColor"
      >
        <path d="M228 58C262 82 282 124 274 168C266 212 230 248 186 262C142 276 92 266 62 232C32 198 24 142 48 102C72 62 122 34 168 32C214 30 194 34 228 58Z" />
      </svg>
    </div>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.083-.729.083-.729 1.205.082 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 22.092 24 17.592 24 12c0-6.63-5.373-12-12-12z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

const workingOn = [
  {
    name: 'Bubbles',
    href: 'https://bubbles.build',
    description: 'A multiplayer agent platform.',
  },
  {
    name: 'Dishy',
    href: 'https://dishy.so',
    description: 'An all-in-one platform for recipe creators to make money.',
  },
] as const

const socialLinks = [
  {
    label: 'X (Twitter)',
    href: 'https://x.com/pav_sidhu',
    icon: XIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/pavsidhu',
    icon: GitHubIcon,
  },
  {
    label: 'Email',
    href: 'mailto:pav@pavsidhu.com',
    icon: EmailIcon,
  },
] as const

function Home() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-background text-foreground">
      <BlobField />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center gap-10 px-6 py-12 sm:gap-12 sm:px-8">
        <header className="text-center">
          <h1 className="text-[clamp(2.75rem,8vw,4.5rem)] leading-[0.95] font-semibold tracking-[-0.04em]">
            Pav Sidhu
          </h1>
          <p className="mt-3 text-lg text-muted sm:text-xl">Software Engineer</p>
        </header>

        <section aria-labelledby="working-on-heading" className="w-full">
          <h2
            id="working-on-heading"
            className="mb-4 text-xs font-medium tracking-[0.18em] text-muted uppercase"
          >
            Working on
          </h2>
          <ul className="space-y-3">
            {workingOn.map((item) => (
              <li key={item.name} className="leading-relaxed">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline decoration-primary/40 underline-offset-[5px] hover:text-accent hover:decoration-accent"
                >
                  {item.name}
                </a>
                <span className="text-muted"> — {item.description}</span>
              </li>
            ))}
          </ul>
        </section>

        <nav aria-label="Social and contact links">
          <ul className="flex items-center gap-5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted hover:text-accent"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  )
}
