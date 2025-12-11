import { CheckCircle2, Users, Award, Clock } from "lucide-react";
import aboutWorkshop from "@/assets/about-workshop.jpg";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Equipe qualificada",
      description: "Profissionais experientes e treinados para entregar o melhor resultado",
    },
    {
      icon: Award,
      title: "Qualidade garantida",
      description: "Comprometimento com excelência em cada serviço realizado",
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Prazos cumpridos sem comprometer a qualidade do trabalho",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre a SosBus
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6" />
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Tradição e inovação em reformas automotivas
            </p>
          </div>

          {/* Workshop Image */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-12 md:mb-16 animate-fade-in">
            <img 
              src={aboutWorkshop} 
              alt="Oficina SosBus"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <p className="text-primary-foreground text-lg sm:text-xl font-semibold">Nossa estrutura</p>
              <p className="text-primary-foreground/80 text-sm sm:text-base">Equipamentos modernos para melhor atendê-lo</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                Desde 2018 transformando veículos
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                A SOSBUS Reformadora de Veículos atua em Canoas oferecendo serviços especializados 
                em funilaria, pintura e manutenção de ônibus, micro-ônibus, caminhões e veículos 
                automotores em geral.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com uma equipe experiente e qualificada, nosso foco é entregar qualidade, agilidade 
                e confiança em cada reparo, sempre prezando pela satisfação de nossos clientes.
              </p>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Experiência consolidada no setor automotivo desde 2018
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Estrutura completa para atender frotas e veículos individuais
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Atendimento transparente e personalizado
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Localização estratégica em Canoas, com fácil acesso
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 animate-scale-in">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-primary/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
