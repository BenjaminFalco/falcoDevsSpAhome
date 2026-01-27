import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (ids: string | string[]) => {
    const targetIds = Array.isArray(ids) ? ids : [ids];
    const element = targetIds
      .map((id) => document.getElementById(id))
      .find(Boolean);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-b from-background via-background to-muted/20">
      {/* Fondos y grillas */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,193,255,0.08),transparent_25%),radial-gradient(circle_at_80%_0,rgba(0,193,255,0.06),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(0,0,0,0.06),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Título idéntico al de la imagen */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Potenciamos tu negocio con <span className="italic">IA</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              y software de alta precisión
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En <span className="text-foreground font-semibold">FalcoDevs</span>, transformamos desafíos complejos en flujos de trabajo automatizados. Somos el aliado estratégico que tu empresa necesita para liderar la era digital.
          </p>

          {/* Badge AWS */}
          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-soft">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Ingenieros Certificados AWS & Expertos en TI
            </div>
          </div>

          {/* Botones iguales a la imagen */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection(["contacto", "contact"])}
              className="text-lg px-8 py-6 h-auto shadow-strong w-full sm:w-auto hover:scale-105 transition-transform"
            >
              Potencia tu Negocio Ahora
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection(["servicios", "services"])}
              className="text-lg px-8 py-6 h-auto border-primary/40 w-full sm:w-auto hover:bg-primary/5 transition-colors"
            >
              Nuestra Tecnología
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
