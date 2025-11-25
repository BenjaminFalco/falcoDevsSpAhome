import { Button } from "@/components/ui/button";

// Asumiendo que los PNG están en /public
const services = [
  {
    id: "landing",
    title: "LandingExpress",
    description:
      "Sucursal virtual rápida y personalizada, ideal para potenciar tu presencia en la web.",
    href: "https://landingexpressfd.vercel.app/",
    cta: "Sucursal Virtual",
    badgeLogo: "/logoLE_transparent.png",
  },
  {
    id: "agents",
    title: "Digital Agents",
    description:
      "Automatización inteligente y agentes digitales que liberan tiempo, reducen tareas repetitivas y elevan la eficiencia de tu equipo.",
    href: "https://falco-digital-agent.vercel.app/",
    cta: "Ver Automatización Inteligente",
    badgeLogo: "/logoFDA_transparent.png",
  },
  {
    id: "zeromerma",
    title: "ZeroMerma",
    description:
      "Automatización y monitoreo para procesos industriales de recursos naturales, con foco en reducir mermas y optimizar tu producción.",
    href: "#contacto", // más adelante puedes apuntar a una landing propia
    cta: "Quiero saber más",
    badgeLogo: "/logoZM_transparent.png", // 👈 asegúrate de que este archivo exista en /public
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl border border-border bg-card/70 p-8 shadow-soft hover:shadow-strong transition-shadow"
            >
              {/* Header: título + sello chiquito */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                {service.badgeLogo && (
                  <div className="shrink-0">
                    <img
                      src={service.badgeLogo}
                      alt={service.title}
                      className="h-40 w-40 object-contain rounded-full"
                    />
                  </div>
                )}
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>

              <Button asChild className="w-full md:w-auto px-6">
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
