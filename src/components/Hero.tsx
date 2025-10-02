import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
const Hero = () => {
  return <section id="hero" className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 overflow-hidden min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/60 to-primary/70" />
      
      <div className="container mx-auto relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center animate-fade-in backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl bg-black/[0.57]">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-background p-4 sm:p-5 md:p-6 mb-6 sm:mb-8">
            <img src={logo} alt="Logo SosBus" className="w-full h-full object-contain" />
          </div>

          {/* H1 - Company Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-zinc-50">
            SosBus Reformadora de Veículos
          </h1>

          {/* H2 - Company Description */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 leading-relaxed text-gray-50">
            Mais que reforma, uma nova experiência na estrada
          </h2>

          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto text-zinc-50 px-2">
            Desde 2018 oferecendo serviços especializados em funilaria, pintura e manutenção de ônibus, 
            micro-ônibus e caminhões em Canoas
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2">
            <a href="https://wa.me/5551997244224" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105">
              <Phone className="w-5 h-5" />
              Solicitar orçamento
            </a>
            
            <button onClick={() => {
            const element = document.getElementById("services");
            if (element) {
              const headerOffset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }} className="inline-flex items-center justify-center gap-2 text-secondary border-2 border-secondary/30 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:text-secondary-foreground transition-all hover:border-secondary bg-zinc-50">
              Nossos serviços
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16 pt-10 sm:pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">6+</div>
              <div className="text-zinc-50 text-sm sm:text-base">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-zinc-50 text-sm sm:text-base">Foco em qualidade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-zinc-50 text-sm sm:text-base">Resposta via WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;