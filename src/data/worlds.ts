export const WORLDS = [
  // LEVEL 1 - Mondes principaux
  {
    id: 'artists',
    name: 'Artistes',
    subtitle: 'Au cœur de l\'écosystème, la création',
    color: '#f97373',
    level: 1,
    size: 'large' as const,
    x: 50,
    y: 50,
  },
  {
    id: 'recorded',
    name: 'Musique enregistrée',
    subtitle: 'L\'industrie du disque',
    color: '#4ade80',
    level: 1,
    size: 'large' as const,
    x: 70,
    y: 50,
  },
  {
    id: 'live',
    name: 'Live',
    subtitle: 'La branche du spectacle vivant',
    color: '#fb923c',
    level: 1,
    size: 'large' as const,
    x: 30,
    y: 50,
  },
  {
    id: 'publishing',
    name: 'Édition musicale',
    subtitle: 'La gestion des droits d\'auteur et droits voisins',
    color: '#60a5fa',
    level: 1,
    size: 'large' as const,
    x: 50,
    y: 20,
  },

  // LEVEL 2 - Mondes secondaires
  {
    id: 'audiovisual',
    name: 'Audiovisuel',
    color: '#facc15',
    level: 2,
    size: 'medium' as const,
    x: 70,
    y: 20,
  },
  {
    id: 'other_broadcasters',
    name: 'Autres diffuseurs',
    color: '#9ca3af',
    level: 2,
    size: 'medium' as const,
    x: 30,
    y: 20,
  },
  {
    id: 'state',
    name: 'État',
    color: '#a855f7',
    level: 2,
    size: 'medium' as const,
    x: 50,
    y: 80,
  },
];

export type WorldId =
  | 'artists'
  | 'recorded'
  | 'live'
  | 'publishing'
  | 'audiovisual'
  | 'other_broadcasters'
  | 'state';

export interface World {
  id: WorldId;
  name: string;
  subtitle?: string;
  color: string;
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  size?: 'small' | 'medium' | 'large' | 'flexible';
  x?: number;
  y?: number;
}