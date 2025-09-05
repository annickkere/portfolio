import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Github, ExternalLink, Calendar } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

// Mock data - à remplacer par des appels API Laravel
const mockProjects = [
    {
        id: 1,
        title: "Portfolio Personnel",
        description: "Application web moderne développée avec React.js et Laravel, incluant un système d'authentification et un tableau de bord administrateur. Ce projet présente mes compétences et réalisations de manière élégante et professionnelle.",
        fullDescription: `Ce portfolio personnel a été conçu pour présenter mon travail et mes compétences de développeuse full-stack. 

**Fonctionnalités Principales :**
- Interface utilisateur moderne et responsive
- Système d'authentification sécurisé avec Laravel Sanctum
- Tableau de bord administrateur pour la gestion de contenu
- Formulaire de contact avec validation
- Galerie de projets avec filtres dynamiques
- SEO optimisé et performance maximale

**Défis Techniques :**
L'un des principaux défis était de créer une interface à la fois élégante pour les visiteurs et fonctionnelle pour l'administration. J'ai également mis l'accent sur les performances et l'accessibilité.

**Résultats :**
Le site obtient un score de 95+ sur Google PageSpeed Insights et respecte les standards d'accessibilité WCAG 2.1.`,
        technologies: "React.js, Laravel, MySQL, TailwindCSS",
        image_url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop",
        github_link: "https://github.com/krannick/portfolio",
        demo_link: "https://portfolio.krannick.dev",
        created_at: "2024-01-15",
        gallery: [
            "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
        ]
    },
    {
        id: 2,
        title: "E-commerce Platform",
        description: "Plateforme e-commerce complète avec gestion des produits, panier d'achat et système de paiement intégré.",
        fullDescription: `Plateforme e-commerce moderne développée pour une boutique en ligne spécialisée dans les produits artisanaux.

**Fonctionnalités :**
- Catalogue de produits avec recherche avancée
- Panier d'achat et processus de commande optimisé  
- Intégration Stripe pour les paiements
- Panel administrateur pour la gestion des stocks
- Système de notifications en temps réel
- Interface mobile-first et responsive

**Technologies Utilisées :**
React.js pour le frontend, Node.js avec Express pour l'API, MongoDB pour la base de données, et Stripe pour les paiements sécurisés.

**Impact :**
Augmentation de 300% des ventes en ligne et réduction de 50% du taux d'abandon panier.`,
        technologies: "React.js, Node.js, MongoDB, Stripe",
        image_url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
        github_link: "https://github.com/krannick/ecommerce",
        demo_link: "https://shop.krannick.dev",
        created_at: "2023-11-20",
        gallery: [
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop"
        ]
    }
];

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundProject = mockProjects.find(p => p.id === parseInt(id || '0'));
        setProject(foundProject);
        setLoading(false);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Chargement du projet...</p>
                </div>
            </div>
        );
    }

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    const technologies = project.technologies.split(',').map(tech => tech.trim());

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="py-12">
                <div className="container mx-auto px-4">
                    {/* Back Navigation */}
                    <div className="mb-8">
                        <Link to="/projects">
                            <Button variant="outline" className="group">
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Retour aux projets
                            </Button>
                        </Link>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        {/* Project Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                                {project.title}
                            </h1>
                            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 justify-center mb-8">
                                {technologies.map((tech, index) => (
                                    <Badge
                                        key={index}
                                        variant="secondary"
                                        className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                {project.demo_link && (
                                    <a href={project.demo_link} target="_blank" rel="noopener noreferrer">
                                        <Button size="lg" className="group">
                                            <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                            Voir la Démo
                                        </Button>
                                    </a>
                                )}
                                {project.github_link && (
                                    <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="lg" className="group">
                                            <Github className="w-4 h-4 mr-2" />
                                            Code Source
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="mb-12">
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={project.image_url}
                                    alt={project.title}
                                    className="w-full h-96 lg:h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-secondary/20 to-transparent" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <Card>
                                    <CardContent className="p-8">
                                        <h2 className="text-2xl font-bold text-foreground mb-6">
                                            À Propos du Projet
                                        </h2>
                                        <div className="prose prose-lg max-w-none text-muted-foreground">
                                            {project.fullDescription.split('\n\n').map((paragraph, index) => (
                                                <p key={index} className="mb-4 leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Gallery */}
                                {project.gallery && (
                                    <Card className="mt-8">
                                        <CardContent className="p-8">
                                            <h3 className="text-xl font-bold text-foreground mb-6">
                                                Galerie
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {project.gallery.map((image, index) => (
                                                    <div key={index} className="relative overflow-hidden rounded-lg">
                                                        <img
                                                            src={image}
                                                            alt={`${project.title} - Image ${index + 1}`}
                                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                {/* Project Info */}
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-bold text-foreground mb-4">
                                            Informations
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <Calendar className="w-5 h-5 text-primary" />
                                                <div>
                                                    <p className="text-sm font-medium text-foreground">Date de création</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {new Date(project.created_at).toLocaleDateString('fr-FR', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                            year: 'numeric'
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Technologies */}
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-bold text-foreground mb-4">
                                            Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {technologies.map((tech, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* CTA */}
                                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                                    <CardContent className="p-6 text-center">
                                        <h3 className="text-lg font-bold text-foreground mb-3">
                                            Projet Similaire ?
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Vous avez un projet similaire en tête ? Discutons-en !
                                        </p>
                                        <Link to="/contact">
                                            <Button size="sm" className="w-full">
                                                Me Contacter
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
