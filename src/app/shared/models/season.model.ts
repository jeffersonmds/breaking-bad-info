import { Episode } from './episode.model';

export class Season {
  episodes!: Episode[];

  constructor(episodes: Episode[]) {
    this.episodes = episodes;
  }
}
