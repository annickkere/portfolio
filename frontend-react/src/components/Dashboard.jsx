import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderOpen,
  Mail,
  Users,
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  LogOut,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const mockStats = {
  totalProjects: 4,
  totalMessages: 12,
  totalVisitors: 156,
};

const mockRecentMessages = [
  {
    id: 1,
    name: 'Jean Dupont',
    email: 'jean@example.com',
    subject: 'Demande de devis',
    created_at: '2024-01-20T10:30:00Z',
  },
  {
    id: 2,
    name: 'Marie Martin',
    email: 'marie@example.com',
    subject: 'Collaboration projet',
    created_at: '2024-01-19T15:45:00Z',
  },
  {
    id: 3,
    name: 'Pierre Durand',
    email: 'pierre@example.com',
    subject: 'Question technique',
    created_at: '2024-01-18T09:20:00Z',
  },
];

const mockRecentProjects = [
  {
    id: 1,
    title: 'Portfolio Personnel',
    status: 'published',
    created_at: '2024-01-15T00:00:00Z',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    status: 'published',
    created_at: '2023-11-20T00:00:00Z',
  },
];

const Dashboard = () => {
  const [stats] = useState(mockStats);
  const [recentMessages] = useState(mockRecentMessages);
  const [recentProjects] = useState(mockRecentProjects);

  const navigate = useNavigate();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleLogout = () => {
    // Simule une déconnexion puis redirige vers la page de login
    // Ici, tu peux aussi nettoyer ton contexte ou localStorage si besoin
    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-portfolio-secondary text-portfolio-secondary-foreground border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <LayoutDashboard className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold">Tableau de Bord</h1>
                <p className="text-sm opacity-75">Bienvenue, Admin</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir le site
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Projets</CardTitle>
              <FolderOpen className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalProjects}</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Messages Reçus</CardTitle>
              <Mail className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalMessages}</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Visiteurs Ce Mois</CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalVisitors}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Projects */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Projets Récents</CardTitle>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Nouveau Projet
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Créé le {formatDate(project.created_at)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {project.status}
                      </Badge>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Messages */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Messages Récents</CardTitle>
              <Button variant="outline" size="sm">
                Voir Tous
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div
                    key={message.id}
                    className="flex items-start justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-foreground">{message.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          Nouveau
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{message.email}</p>
                      <p className="text-sm font-medium text-foreground">{message.subject}</p>
                      <p className="text-xs text-muted-foreground mt-1">{formatDate(message.created_at)}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Actions Rapides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button className="h-auto p-4 flex flex-col items-center space-y-2">
                <Plus className="w-6 h-6" />
                <span>Nouveau Projet</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Mail className="w-6 h-6" />
                <span>Voir Messages</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Edit className="w-6 h-6" />
                <span>Modifier Profil</span>
              </Button>
              <Link to="/" target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-center space-y-2">
                  <ExternalLink className="w-6 h-6" />
                  <span>Prévisualiser</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
