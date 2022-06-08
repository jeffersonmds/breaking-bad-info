import { Character } from './../../models/character.model';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "filterByCharacter" })
export class FilterByCharacter implements PipeTransform{

  transform(characters: Character[], characterQuery: string) {
    if (!characterQuery) {
      return characters;
    }

    characterQuery = characterQuery.trim().toLowerCase();
    if (characterQuery) {
      return characters.filter(character =>
        character.name.toLowerCase().includes(characterQuery) || character.nickname.toLowerCase().includes(characterQuery));
    } else {
      return characters;
    }
  }
}
