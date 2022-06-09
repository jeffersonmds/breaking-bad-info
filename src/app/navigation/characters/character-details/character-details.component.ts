import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent {
  character!: Character;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.character = data;
  }

  verifyAppearance(appearance: number[], season: number) {
    return appearance.includes(season);
  }
}
