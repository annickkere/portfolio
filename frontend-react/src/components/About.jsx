import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from './Header';
import Footer from './Footer'

const About = () => {
  const skills = [
    'React.js', 'Laravel', 'GLPI', 'JavaScript', 'PHP',
    'MySQL', 'TailwindCSS', 'Git', 'HTML5', 'CSS3'
  ];

  const experiences = [
    {
      title: "Développeuse Full Stack",
      company: "Freelance",
      period: "2023 - Présent",
      description: "Développement d'applications web complètes avec React.js et Laravel. Gestion de projets de A à Z, de la conception à la mise en production."
    },
    {
      title: "Développeuse Frontend",
      company: "Tech Company",
      period: "2021 - 2023",
      description: "Création d'interfaces utilisateur modernes et responsive. Collaboration étroite avec les équipes design et backend."
    },
    {
      title: "Junior Developer",
      company: "StartUp Innovation",
      period: "2020 - 2021",
      description: "Première expérience professionnelle en développement web. Apprentissage des bonnes pratiques et travail en équipe agile."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              À Propos
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionnée par le Développement Web depuis plusieurs années, 
              je crée des solutions digitales qui allient performance technique et expérience utilisateur exceptionnelle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Profile */}
            <div>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Mon Parcours</h2>
                  <p className="text-muted-foreground mb-4">
                    Diplômée en informatique, j'ai commencé ma carrière dans le développement web 
                    en me spécialisant dans les technologies modernes comme React.js et Laravel.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Au fil des années, j'ai développé une expertise dans la création d'applications 
                    web complètes, de la conception de l'architecture backend à l'implémentation 
                    d'interfaces utilisateur intuitives.
                  </p>
                  <p className="text-muted-foreground">
                    Aujourd'hui, je travaille en tant que développeuse freelance, aidant les 
                    entreprises à concrétiser leurs idées en solutions digitales performantes.
                  </p>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Compétences Techniques</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Expérience Professionnelle</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-primary font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-primary/80 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="max-w-4xl mx-auto mt-20">
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ma Philosophie
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Le code propre n'est pas seulement une question de fonctionnalité, 
                  c'est une question d'élégance, de maintenabilité et de passion pour l'excellence technique."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;