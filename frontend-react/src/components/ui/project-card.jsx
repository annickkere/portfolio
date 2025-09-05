import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const technologies = project.technologies.split(',').map(tech => tech.trim());

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 hover:shadow-[var(--shadow-portfolio)]">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-portfolio-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <Link to={`/projects/${project.id}`}>
          <Button variant="outline" size="sm">
            Voir Détails
          </Button>
        </Link>

        <div className="flex space-x-2">
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-secondary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demo_link && (
            <a
              href={project.demo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-secondary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
