import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';
import { BaseListComponent } from 'src/app/shared/components/base/base-list/base-list.component';
import { GuessCardComponent } from './guess-card/guess-card.component';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent extends BaseListComponent<Character, CharactersService> implements OnInit {
  @ViewChildren(GuessCardComponent) cardsComponent!: QueryList<GuessCardComponent>;
  charactersToGuess = 10;
  isPlaying: boolean = false;
  cardsPlaying!: Character[];
  gameStatusText: string = '';
  lifes: number = 3;

  constructor(_charactersService: CharactersService,
              _activatedRoute: ActivatedRoute) {
    super(_charactersService, _activatedRoute);
  }

  override initializeDatasource(): void {
    this.prepareCards();
  }

  initializeGame() {
    this.lifes = 3;
    this.hideAllCards();
    this.isPlaying = false;

  }

  play() {
    this.revealAllCards();
    setTimeout(() => this.hideAllAndBegin(), 5000);
  }

  prepareCards(event: any = null) {
    if (event) {
      this.charactersToGuess = event.value;
    }

    const characters = this.datasource.sort(() => .5 - Math.random()).slice(0, this.charactersToGuess);
    characters.push(...characters);
    this.cardsPlaying = Object.assign(characters.sort(() => .5 - Math.random()).sort(() => .5 - Math.random()));
  }

  revealAllCards() {
    this.cardsComponent.forEach(c => c.revealCard());
  }

  hideAllCards() {
    this.cardsComponent.forEach(c => c.hideCard());
  }

  hideAllAndBegin() {
    this.hideAllCards();
    this.isPlaying = true;
  }
}
