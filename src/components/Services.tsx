import { Button } from "@/components/ui/button";

// Asumiendo que los PNG están en /public
const services = [
  {
    id: "landing",
    title: "LandingExpress",
    description:
      "Tu sucursal digital de alto impacto. Diseñamos experiencias web veloces y conversivas que posicionan tu marca en lo más alto del mercado.",
    href: "https://landingexpressfd.vercel.app/",
    cta: "Lanza tu sucursal hoy",
    badgeLogo: "/logoLE_transparent.png",
  },
  {
    id: "agents",
    title: "Digital Agents",
    description:
      "La nueva fuerza laboral de tu empresa. Implementamos agentes autónomos con IA que ejecutan tareas complejas las 24/7 sin errores.",
    href: "https://falco-digital-agent.vercel.app/",
    cta: "Descubre el futuro",
    badgeLogo: "/logoFDA_transparent.png",
  },
  {
    id: "flow-monitor",
    title: "flow-monitor",
    description:
      "Plataforma avanzada de monitoreo y control industrial en tiempo real. Optimiza procesos, reduce mermas y toma decisiones basadas en datos precisos.",
    href: "https://flowmonitor-falcodevs.vercel.app/",
    cta: "Optimiza tu producción",
    badgeLogo: "/fm-logo-grande.png",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Nuestros Servicios
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Soluciones tecnológicas que impulsan tu negocio
          </h2>
        </div>

        <div className="flex flex-nowrap md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 md:pb-0 md:overflow-visible no-scrollbar">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative min-w-[85vw] sm:min-w-[45vw] md:min-w-0 rounded-2xl border border-border bg-card/70 p-8 shadow-soft hover:shadow-strong transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header: título + sello chiquito */}
                <div className="flex items-start justify-between mb-4 gap-4">
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">{service.title}</h3>
                  {service.badgeLogo && (
                    <div className="shrink-0">
                      <img
                        src={service.badgeLogo}
                        alt={service.title}
                        className="h-16 w-16 md:h-20 md:w-20 object-contain rounded-full bg-background/50 p-2 shadow-sm"
                      />
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>

              <Button asChild className="w-full px-6 mt-auto">
                <a href={service.href} target="_blank" rel="noopener noreferrer">
                  {service.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
