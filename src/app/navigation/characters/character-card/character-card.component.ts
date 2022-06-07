import { Character } from './../../../models/character.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character!: Character;

  constructor() { }

  ngOnInit(): void {
  }

  verifyAppearance(appearance: number[], season: number) {
    return appearance.includes(season);
  }

}
