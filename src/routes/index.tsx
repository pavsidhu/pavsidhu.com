import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: Home })

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
    name: "Bubbles",
    href: "https://bubbles.build",
    description: "A multiplayer agent platform."
  },
  {
    name: "Dishy",
    href: "https://dishy.so",
    description: "An all-in-one platform for recipe creators to make money."
  }
] as const

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "https://x.com/pav_sidhu",
    icon: XIcon
  },
  {
    label: "GitHub",
    href: "https://github.com/pavsidhu",
    icon: GitHubIcon
  },
  {
    label: "Email",
    href: "mailto:pav@pavsidhu.com",
    icon: EmailIcon
  }
] as const

function Home() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-background text-foreground">
      <div className="relative mx-auto flex min-h-dvh max-w-xl flex-col items-start justify-center gap-10 px-6 py-12 sm:px-8">
        <header>
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Pav Sidhu</h1>
          <p className="mt-1 text-lg text-muted sm:text-xl">Software Engineer</p>
        </header>

        <section className="w-full">
          <ul className="space-y-3">
            {workingOn.map((item) => (
              <li key={item.name} className="leading-relaxed">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline decoration-primary/40 underline-offset-[5px] transition-[color,text-decoration-color] duration-100 hover:text-accent hover:decoration-[color-mix(in_oklab,var(--color-accent)_100%,transparent)]"
                >
                  {item.name}
                </a>
                <span className="text-muted"> — {item.description}</span>
              </li>
            ))}
          </ul>
        </section>

        <nav aria-label="Social and contact links">
          <ul className="-ml-[11px] flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors duration-100 hover:text-accent"
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
