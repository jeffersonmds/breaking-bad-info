import { Character } from './../../../models/character.model';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharacterDetailsComponent } from '../character-details/character-details.component';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
  @Input() character!: Character;

  constructor(private dialogRef : MatDialog) { }

  openDialog(){
    this.dialogRef.open(CharacterDetailsComponent, { data : this.character });
  }
}
