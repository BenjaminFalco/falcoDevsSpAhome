const falcodevsLogo = "/logoHome.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          {/* Logo + nombre */}
          <div className="flex items-center gap-3">
            <img
              src={falcodevsLogo}
              alt="Logo FalcoDevs"
              className="h-9 w-9 object-contain"
              loading="lazy"
            />
            <div>
              <span className="text-lg font-semibold tracking-tight">
                FalcoDevs
              </span>
              <p className="text-xs text-secondary-foreground/60">
                Soluciones digitales y automatización con IA.
              </p>
            </div>
          </div>

          {/* Texto legal */}
          <div className="space-y-1 text-xs text-secondary-foreground/70">
            <p>
              Desarrollamos y automatizamos tu negocio con IA y software a medida.
            </p>
            <p>falcodevsspa@gmail.com | +56 9 2744 4800</p>
            <p>© {new Date().getFullYear()} FalcoDevs. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
