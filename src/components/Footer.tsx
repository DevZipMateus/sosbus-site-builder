import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Company Info */}
            <div>
              <div className="inline-flex items-center justify-center bg-background rounded-full p-3 sm:p-4 mb-4">
                <img src={logo} alt="Logo SosBus" className="h-12 sm:h-16 w-auto" />
              </div>
              <p className="text-sm sm:text-base text-secondary-foreground/80 mb-4">
                Desde 2018 oferecendo serviços especializados em funilaria, pintura e manutenção 
                de ônibus e caminhões em Canoas.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/sosbus.com.br/?locale=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                  aria-label="Facebook da SosBus"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/sosbus_reformadora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                  aria-label="Instagram da SosBus"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Links rápidos</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("hero");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("about");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("services");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.getElementById("contact");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contato</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-2 text-secondary-foreground/80">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Rua Argentina, 132<br />Bairro São José – Canoas/RS</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a
                    href="https://wa.me/5551997244224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    (51) 99724-4224
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a
                    href="mailto:sosbus.poa@gmail.com"
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    sosbus.poa@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-secondary-foreground/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
              <p>
                © {currentYear} SosBus Reformadora de Veículos. Todos os direitos reservados.
              </p>
              <p>
                CNPJ: 29.685.446/0001-89
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
