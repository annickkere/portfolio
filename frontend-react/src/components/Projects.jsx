import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ProjectCard from '@/components/ui/project-card';

const mockProjects = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description: "Application web moderne développée avec React.js et Laravel, incluant un système d'authentification et un tableau de bord administrateur.",
    technologies: "React.js, Laravel, MySQL, TailwindCSS",
    image_url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
    github_link: "https://github.com/krannick/portfolio",
    demo_link: "https://portfolio.krannick.dev",
    created_at: "2024-01-15"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Plateforme e-commerce complète avec gestion des produits, panier d'achat et système de paiement intégré.",
    technologies: "React.js, Node.js, MongoDB, Stripe",
    image_url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    github_link: "https://github.com/krannick/ecommerce",
    demo_link: "https://shop.krannick.dev",
    created_at: "2023-11-20"
  },
  {
    id: 3,
    title: "Task Manager App",
    description: "Application de gestion de tâches collaborative avec fonctionnalités de équipe et notifications en temps réel.",
    technologies: "React.js, Laravel, WebSocket, Redis",
    image_url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    github_link: "https://github.com/krannick/taskmanager",
    created_at: "2023-09-10"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Tableau de bord météo avec prévisions détaillées, cartes interactives et historique des données climatiques.",
    technologies: "React.js, TypeScript, Chart.js, OpenWeather API",
    image_url: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    github_link: "https://github.com/krannick/weather-dashboard",
    demo_link: "https://weather.krannick.dev",
    created_at: "2023-07-05"
  }
];

const Projects = () => {
  const [projects, setProjects] = useState(mockProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('');

  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(
      mockProjects.flatMap(project => 
        project.technologies.split(',').map(tech => tech.trim())
      )
    )
  );

  // Filter projects based on search and technology
  useEffect(() => {
    let filtered = mockProjects;

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTech) {
      filtered = filtered.filter(project =>
        project.technologies.includes(selectedTech)
      );
    }

    setProjects(filtered);
  }, [searchTerm, selectedTech]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Mes Projets
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez une sélection de mes réalisations récentes, 
              alliant créativité technique et innovation.
            </p>
          </div>

          {/* Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search */}
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Rechercher un projet..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9"
                    />
                  </div>

                  {/* Technology Filter */}
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant={selectedTech === '' ? 'default' : 'secondary'}
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => setSelectedTech('')}
                    >
                      Tous
                    </Badge>
                    {allTechnologies.slice(0, 6).map((tech) => (
                      <Badge
                        key={tech}
                        variant={selectedTech === tech ? 'default' : 'secondary'}
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => setSelectedTech(selectedTech === tech ? '' : tech)}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* No results */}
          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                Aucun projet trouvé pour ces critères.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTech('');
                }}
                className="text-primary hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}

          {/* Stats */}
          <div className="max-w-4xl mx-auto mt-20">
            <Card className="bg-gradient-to-r from-secondary/50 to-secondary/30 border-border">
              <CardContent className="p-8 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {mockProjects.length}+
                    </h3>
                    <p className="text-muted-foreground">Projets Réalisés</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {allTechnologies.length}+
                    </h3>
                    <p className="text-muted-foreground">Technologies Maîtrisées</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      3+
                    </h3>
                    <p className="text-muted-foreground">Années d'Expérience</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;