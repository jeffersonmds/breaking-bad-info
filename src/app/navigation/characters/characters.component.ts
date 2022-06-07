import { Character } from './../../models/character.model';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  charactersDatasource!: Character[];
  unsub$ = new Subject();

  constructor(private _charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this._charactersService.getAll()
      .pipe(takeUntil(this.unsub$))
      .subscribe(characters => {
        this.charactersDatasource = characters;
        console.log(this.charactersDatasource);
      });
  }
}
