import { Pipe, PipeTransform } from "@angular/core";
import { Season } from "src/app/models/season.model";

@Pipe({ name: "filterByEpisode" })
export class FilterByEpisode implements PipeTransform{

  transform(seasons: Season[], episodeQuery: string) {
    if (!episodeQuery) {
      return seasons;
    }

    episodeQuery = episodeQuery.trim().toLowerCase();
    if (episodeQuery) {
      const seasonsFiltered: Season[] = [];
      seasons.forEach(season => {
        const matches = season.episodes.filter(episode => episode.title.toLowerCase().includes(episodeQuery))
        if (matches.length) {
          seasonsFiltered.push(new Season(matches));
        }
      });
      return seasonsFiltered;

    } else {
      return seasons;
    }
  }
}
