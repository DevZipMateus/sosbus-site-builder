import { Paintbrush, Hammer, Sparkles, Sticker } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: "Funilaria e lanternagem",
      description:
        "Reparo completo de lataria em veículos de grande e médio porte, incluindo ônibus, micro-ônibus e caminhões",
      highlights: ["Desamassamento", "Substituição de peças", "Alinhamento estrutural"],
    },
    {
      icon: Paintbrush,
      title: "Pintura automotiva",
      description:
        "Pintura completa e retoques profissionais com acabamento de alta qualidade e durabilidade",
      highlights: ["Pintura completa", "Retoques localizados", "Cores personalizadas"],
    },
    {
      icon: Sparkles,
      title: "Polimento profissional",
      description:
        "Recuperação e proteção da pintura original do veículo com técnicas especializadas",
      highlights: ["Polimento técnico", "Cristalização", "Vitrificação"],
    },
    {
      icon: Sticker,
      title: "Adesivos e personalização",
      description:
        "Aplicação de adesivos e envelopamento para personalização e identificação visual",
      highlights: ["Envelopamento", "Adesivação", "Design personalizado"],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos serviços
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6" />
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Soluções completas em reforma e estética automotiva
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-muted/50 border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Serviços adicionais
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Manutenção elétrica
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Instalação de acessórios
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Comércio de peças novas
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Acessórios para veículos
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://wa.me/5551997244224"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105"
            >
              Solicitar orçamento gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
