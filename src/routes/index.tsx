import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function BlobTopLeft() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -left-[20%] -top-[24%] h-[58vh] w-[58vw] max-h-[540px] max-w-[540px] text-blob-soft opacity-[0.52] dark:opacity-[0.34]"
      viewBox="0 0 520 520"
      fill="currentColor"
    >
      <path d="M438 72C402 8 316 -18 224 6C120 34 38 118 14 228C-10 338 42 448 142 492C242 536 382 518 452 438C522 358 474 136 438 72Z" />
    </svg>
  )
}

function BlobTopRight() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -right-[14%] -top-[10%] h-[36vh] w-[36vw] max-h-[340px] max-w-[340px] text-blob-deep opacity-[0.2] dark:opacity-[0.42]"
      viewBox="0 0 380 380"
      fill="currentColor"
    >
      <path d="M322 88C298 28 236 -6 168 8C88 26 22 94 6 174C-10 254 28 342 98 368C168 394 278 376 332 318C386 260 346 148 322 88Z" />
    </svg>
  )
}

function BlobBottomLeft() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-[16%] -left-[12%] h-[44vh] w-[44vw] max-h-[420px] max-w-[420px] text-blob-deep opacity-[0.16] dark:opacity-[0.38]"
      viewBox="0 0 440 440"
      fill="currentColor"
    >
      <path d="M52 328C18 256 32 162 92 98C152 34 262 8 342 42C422 76 462 178 442 262C422 346 332 418 232 432C132 446 86 400 52 328Z" />
      <path
        d="M118 298C94 248 108 188 152 148C196 108 272 98 322 128C372 158 392 228 368 278C344 328 278 362 218 358C158 354 142 348 118 298Z"
        className="opacity-45"
      />
    </svg>
  )
}

function BlobBottomRight() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-[22%] -right-[18%] h-[52vh] w-[52vw] max-h-[500px] max-w-[500px] text-blob-soft opacity-[0.48] dark:opacity-[0.3]"
      viewBox="0 0 500 500"
      fill="currentColor"
    >
      <path d="M448 372C482 296 466 196 402 128C338 60 222 32 142 68C62 104 18 208 24 296C30 384 108 462 198 482C288 502 414 448 448 372Z" />
    </svg>
  )
}

function IconX() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 6.48a2 2 0 0 1-2.06 0L2 7" />
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
  { label: 'X (Twitter)', href: 'https://x.com/pav_sidhu', icon: IconX },
  { label: 'GitHub', href: 'https://github.com/pavsidhu', icon: IconGitHub },
  { label: 'Email', href: 'mailto:pav@pavsidhu.com', icon: IconMail },
] as const

function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <BlobTopLeft />
        <BlobTopRight />
        <BlobBottomLeft />
        <BlobBottomRight />
      </div>

      <main className="relative z-10 mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-6 py-12 sm:px-8">
        <header className="mb-10 sm:mb-12">
          <h1 className="text-[clamp(2.75rem,8vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Pav Sidhu
          </h1>
          <p className="mt-2 text-lg text-muted sm:text-xl">Software Engineer</p>
        </header>

        <div className="mb-10 h-px w-12 bg-primary sm:mb-12" aria-hidden="true" />

        <section aria-labelledby="working-on-heading" className="mb-10 sm:mb-12">
          <h2
            id="working-on-heading"
            className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-muted"
          >
            Working on
          </h2>
          <ul className="space-y-3">
            {workingOn.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-sm focus-visible:outline-offset-4"
                >
                  <span className="font-medium underline decoration-primary/30 underline-offset-[5px] group-hover:decoration-primary group-hover:text-primary">
                    {item.name}
                  </span>
                  <span className="text-muted"> — {item.description}</span>
                </a>
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
                  className="inline-flex items-center justify-center rounded-sm p-1 text-muted hover:text-primary"
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  )
}
