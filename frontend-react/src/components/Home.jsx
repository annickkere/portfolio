import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AppWindow, ArrowRight, Code2, Palette } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Header from './Header';
import Footer from './Footer';

const Home = () => {

  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Annick', 'Ingénieure', 'Développeuse', 'Entrepreneure', 'YouTubeuse'],
      loop: true,
      startDelay: 100,
      backSpeed: 100,
      typeSpeed: 50,
    });
    // Nettoyage lors du démontage
    return () => typed.destroy();
  }, []);


  const skills = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Développement Web",
      description: "Création d'Applications Web modernes avec React et Laravel."
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Design UI/UX",
      description: "Interfaces Utilisateur Intuitives et Designs Responsive."
    },
    {
      icon: <AppWindow className="w-8 h-8 text-primary" />,
      title: "Maintenance Logicielle",
      description: "Surveillance, Correction et Amélioration continue de vos Applications."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Left */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                  Hello
                </h1>
                <h2 className="text-3xl sm:text-3xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
                  Je suis {" "}
                  <span
                    ref={typedRef}
                    className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text"
                  > </span>
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mb-5">
                  Ingénieure | Développeuse | Entrepreneure | YouTubeuse passionnée par le Web, les TIC et le Design !
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/projects">
                    <Button size="lg" className="group font-bold">
                      Voir Mes Projets
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="font-bold">
                      Me Contacter
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Profile Photo Right */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative p-2 bg-gradient-to-r from-primary to-primary/80 rounded-full">
                    <img
                      src="/profile.jpg"
                      alt="KR Annick - Développeuse Full Stack"
                      className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover object-center border-4 border-background group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* skills Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Mes Compétences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Prêt à collaborer ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discutons de votre projet et créons ensemble quelque chose d'exceptionnel.
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                Démarrer un projet
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;