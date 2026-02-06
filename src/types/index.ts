export interface FilmBlueprint {
  story: string;
  characters: string;
  screenplay: string;
  sound: string;
  shots: string;
  production: string;
}

export interface Suggestion {
  id: string;
  author: string;
  section: 'story' | 'characters' | 'screenplay' | 'sound' | 'shots' | 'production' | 'general';
  content: string;
  timestamp: Date;
  votes: number;
  hasVoted: boolean;
}

export interface FormData {
  genre: string;
  tone: string;
  logline: string;
  budget: 'low' | 'medium' | 'high';
}
