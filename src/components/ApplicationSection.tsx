import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CloudArrowUp,
  Globe,
  ShieldCheck,
  ArrowsClockwise,
  HardDrives,
  LockKey,
} from "@phosphor-icons/react";

const features = [
  {
    icon: <CloudArrowUp size={28} weight="duotone" />,
    title: "Custom Runtimes",
    desc: "Upload any Dockerfile as a runtime environment. Support for any language or framework that Docker can run.",
  },
  {
    icon: <Globe size={28} weight="duotone" />,
    title: "Automatic Subdomain Routing",
    desc: 'Deploy a function named "my-api" and it\'s instantly live at my-api.yourdomain.com. Zero routing config.',
  },
  {
    icon: <ShieldCheck size={28} weight="duotone" />,
    title: "Auto HTTPS",
    desc: "Built-in Let's Encrypt integration. Set your domain allowlist and certificates auto-renew.",
  },
  {
    icon: <ArrowsClockwise size={28} weight="duotone" />,
    title: "Upsert Deploys",
    desc: "Deploy with the same name to automatically tear down the old version and replace it. Zero-config updates.",
  },
  {
    icon: <HardDrives size={28} weight="duotone" />,
    title: "Volume Mounts",
    desc: "Bind host directories to containers for persistent data. Databases, file storage — it just works.",
  },
  {
    icon: <LockKey size={28} weight="duotone" />,
    title: "Simple Auth",
    desc: "Single API key in a passfile. Every request validated. No complex IAM or RBAC to configure.",
  },
];

export function ApplicationSection() {
  return (
    <section id="application" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            The Application
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need, nothing you don't.
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Lambda@Home is a lightweight Go backend that manages Docker
            containers, handles routing, and provides a simple REST API for
            deploying your functions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="bg-card">
              <CardHeader>
                <div className="mb-2 text-muted-foreground">{f.icon}</div>
                <CardTitle className="text-base">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-16" />

        <div className="mx-auto max-w-3xl">
          <h3 className="mb-6 text-center text-xl font-semibold">
            Deploy in 4 steps
          </h3>
          <div className="space-y-4">
            <Step
              num={1}
              title="Install lambdaathome"
              code={`curl -fsSL https://raw.githubusercontent.com/RazorSh4rk/lambdaathome/main/install.sh | sudo bash`}
            />
            <Step
              num={2}
              title="Create a runtime"
              code={`curl -X POST -H "Authorization: $KEY" \\
  -F "file=@Dockerfile.python3" \\
  http://localhost:8080/runtime/upload/python-3`}
            />
            <Step
              num={3}
              title="Zip your code & deploy"
              code={`zip -r code.zip app.py requirements.txt

curl -X POST -H "Authorization: $KEY" \\
  -F "name=my-api" -F "tag=my-api:latest" \\
  -F "runtime=python-3" -F "port=9002" \\
  -F "file=@code.zip" \\
  http://localhost:8080/function/upload`}
            />
            <Step
              num={4}
              title="You're live"
              code={`# Your function is now accessible at:
https://my-api.yourdomain.com`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  num,
  title,
  code,
}: {
  num: number;
  title: string;
  code: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-bold">
          {num}
        </span>
        <span className="font-medium">{title}</span>
      </div>
      <pre className="overflow-x-auto rounded-md bg-background p-4 text-xs text-muted-foreground">
        <code>{code}</code>
      </pre>
    </div>
  );
}
