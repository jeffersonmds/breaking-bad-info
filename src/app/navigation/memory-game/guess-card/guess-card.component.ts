import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-guess-card',
  templateUrl: './guess-card.component.html',
  styleUrls: ['./guess-card.component.scss']
})
export class GuessCardComponent implements OnInit {
  @Input() card!: Character;
  isCardVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideCard() {
    this.isCardVisible = false;
  }

  revealCard() {
    this.isCardVisible = true;
  }
}
