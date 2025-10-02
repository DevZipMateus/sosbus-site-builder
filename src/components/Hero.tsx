import { Wrench, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
            <Wrench className="w-10 h-10 text-primary" />
          </div>

          {/* H1 - Company Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            SosBus Reformadora de Veículos
          </h1>

          {/* H2 - Company Description */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 leading-relaxed">
            Mais que reforma, uma nova experiência na estrada
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Desde 2018 oferecendo serviços especializados em funilaria, pintura e manutenção de ônibus, 
            micro-ônibus e caminhões em Canoas
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5551997244224"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Solicitar orçamento
            </a>
            
            <button
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 bg-secondary/10 text-secondary border-2 border-secondary/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary hover:text-secondary-foreground transition-all hover:border-secondary"
            >
              Nossos serviços
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6+</div>
              <div className="text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Foco em qualidade</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground">Resposta via WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
