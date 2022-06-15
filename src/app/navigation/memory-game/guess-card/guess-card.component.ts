import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-guess-card',
  templateUrl: './guess-card.component.html',
  styleUrls: ['./guess-card.component.scss']
})
export class GuessCardComponent {
  @Input() card!: Character;
  @Input() isPlaying: boolean = true;
  @Output() onCardClick: EventEmitter<Character> = new EventEmitter<Character>();
  isCardVisible: boolean = false;

  constructor() { }

  hideCard() {
    this.isCardVisible = false;
  }

  revealCard() {
    this.isCardVisible = true;
  }

  protected onClick() {
    if (this.isPlaying) {
      this.revealCard();
      this.onCardClick.emit(this.card);
    }
  }
}
