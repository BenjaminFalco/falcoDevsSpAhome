import { Button } from "@/components/ui/button";

// Asumiendo que los PNG están en /public
const services = [
  {
    id: "landing",
    title: "LandingExpress",
    description:
      "Sucursal virtual rápida y personalizada, ideal para potenciar tu presencia en la web.",
    href: "https://landingexpressfd.vercel.app/",
    cta: "Ver LandingExpress",
    badgeLogo: "/src/assets/logoLE_transparent.png",
  },
  {
    id: "agents",
    title: "Automatización Inteligente",
    description:
      "Automatización inteligente y agentes digitales que liberan tiempo, reducen tareas repetitivas y elevan la eficiencia de tu equipo.",
    href: "https://falco-digital-agent.vercel.app/",
    cta: "Ver Automatización Inteligente",
    badgeLogo: "/src/assets/logoFDA_transparent.png",
  },
];

const Services = () => {
  return (
    <>
      {/* --- SECCIÓN ORIGINAL: NUESTROS SERVICIOS --- */}
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
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {service.cta}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FALCODEVS LABS --- */}
      <section
        id="labs"
        className="py-24 bg-black text-white border-t border-white/10 relative overflow-hidden"
      >
        {/* Efecto de luz flotante */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-900/10 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              FalcoDevs Labs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Innovación avanzada y proyectos internos
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Prototipos, sistemas internos y soluciones empresariales de nivel
              industrial. Nuestro laboratorio de desarrollo crea tecnología real
              lista para escalar.
            </p>
          </div>

          {/* GRID LABS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

            {/* ---- Offline First ---- */}
            <div className="rounded-3xl p-10 bg-white/5 backdrop-blur-md border border-blue-500/20 hover:border-blue-500/40 shadow-[0_0_30px_rgba(0,0,255,0.15)] transition-all">
              <h3 className="text-3xl font-semibold mb-4">
                Aplicaciones Android Offline-First
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Arquitectura diseñada para funcionar sin internet en operación
                crítica: plantas, bodegas, agricultura y logística. Registro
                local inteligente, sincronización automática, integraciones ERP
                y monitoreo en tiempo real.
              </p>
              <Button className="px-6 bg-blue-600 hover:bg-blue-700 text-white">
                Solicitar información
              </Button>
            </div>

            {/* ---- IoT CORPORATIVO ---- */}
            <div className="rounded-3xl p-10 bg-white/5 backdrop-blur-md border border-blue-500/20 hover:border-blue-500/40 shadow-[0_0_30px_rgba(0,0,255,0.15)] transition-all">
              <h3 className="text-3xl font-semibold mb-4">
                Sistemas IoT para Empresas
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Desarrollo de hardware + software para telemetría industrial,
                sensores ambientales, automatización, control remoto y análisis
                en tiempo real. Modernizamos operaciones usando tecnología IoT
                de última generación.
              </p>
              <Button className="px-6 bg-blue-600 hover:bg-blue-700 text-white">
                Próximamente
              </Button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
