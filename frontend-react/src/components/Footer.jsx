import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 flex-wrap">

          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-bold text-foreground">
              <b className="text-primary">KERE</b> Annick
            </span>
            <p className="text-sm opacity-90 mt-3">
                Créatrice de Solutions Digitales Innovantes.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-secondary-foreground">Navigation</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm opacity-90 hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link to="/about" className="text-sm opacity-90 hover:text-primary transition-colors">
                À Propos
              </Link>
              <Link to="/projects" className="text-sm opacity-90 hover:text-primary transition-colors">
                Projets
              </Link>
              <Link to="/contact" className="text-sm opacity-90 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-secondary-foreground">Me Suivre</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@krannick.dev"
                className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-sm opacity-75">
            © 2025 KERE Annick - Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;