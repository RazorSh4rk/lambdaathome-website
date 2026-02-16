import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Cube,
  Lightning,
  CurrencyDollar,
  Terminal,
} from "@phosphor-icons/react";

const highlights = [
  {
    icon: <Cube size={24} weight="duotone" />,
    title: "Docker-Powered",
    desc: "Bring any Dockerfile as a runtime. Python, Node, Go, Rust — anything.",
  },
  {
    icon: <Lightning size={24} weight="duotone" />,
    title: "Instant Deploys",
    desc: "Upload a zip, pick a runtime, and your function is live in seconds.",
  },
  {
    icon: <CurrencyDollar size={24} weight="duotone" />,
    title: "$5/mo Infrastructure",
    desc: "Runs on any VPS. No Kubernetes, no managed services, no hidden costs.",
  },
  {
    icon: <Terminal size={24} weight="duotone" />,
    title: "Single Binary",
    desc: "One Go binary + Docker. No complex orchestration to set up or maintain.",
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="mb-6">
          Open Source &middot; Self-Hosted &middot; Serverless
        </Badge>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Your own serverless platform,{" "}
          <span className="text-muted-foreground">on your terms.</span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
          Lambda@Home brings AWS Lambda-style simplicity to your own
          infrastructure. Deploy containerized functions on a standard VPS with
          automatic HTTPS and subdomain routing — all from a single binary.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#application">Learn More</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com/RazorSh4rk/lambdaathome"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
          >
            <div className="mt-0.5 text-muted-foreground">{h.icon}</div>
            <div>
              <h3 className="mb-1 font-medium">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
