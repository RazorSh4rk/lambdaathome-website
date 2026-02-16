import { GithubLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto mb-6 max-w-6xl rounded-lg border border-border bg-card px-5 py-3 text-center text-sm text-muted-foreground">
        AI disclaimer: This website was vibecoded, the application and the management UI are pure artisanal handcrafted slop
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Lambda@Home" className="h-6 w-6" />
          <span className="text-sm text-muted-foreground">Lambda@Home</span>
        </div>
        <a
          href="https://github.com/RazorSh4rk/lambdaathome"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <GithubLogo size={20} />
        </a>
      </div>
    </footer>
  );
}
