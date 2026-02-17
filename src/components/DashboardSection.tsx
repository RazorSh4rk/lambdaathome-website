import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Gauge,
  Upload,
  ListBullets,
  Gear,
} from "@phosphor-icons/react";

const dashFeatures = [
  {
    icon: <Gauge size={28} weight="duotone" />,
    title: "Live Overview",
    desc: "See all running containers, installed runtimes, function images, and base images at a glance.",
    img: "/overview.png",
  },
  {
    icon: <Upload size={28} weight="duotone" />,
    title: "One-Click Deploy",
    desc: "Upload your zip, select a runtime, set a port, and deploy — all from the browser.",
    img: "/deploy.png",
  },
  {
    icon: <ListBullets size={28} weight="duotone" />,
    title: "Function Management",
    desc: "List, inspect, and delete functions. View container details, ports, and volume mounts.",
  },
  {
    icon: <Gear size={28} weight="duotone" />,
    title: "Runtime Builder",
    desc: "Create custom Docker runtimes by uploading Dockerfiles. View and manage all runtimes.",
  },
];

export function DashboardSection() {
  return (
    <section id="dashboard" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            The Dashboard
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Manage everything from your browser.
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A modern SvelteKit dashboard that gives you full control over your
            Lambda@Home instance. No CLI required — deploy, monitor, and manage
            your serverless functions through an intuitive web interface.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {dashFeatures.map((f) => (
            <Card key={f.title} className="overflow-hidden bg-card">
              {"img" in f && (
                <img
                  src={f.img}
                  alt={f.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              )}
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-muted-foreground">{f.icon}</div>
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
