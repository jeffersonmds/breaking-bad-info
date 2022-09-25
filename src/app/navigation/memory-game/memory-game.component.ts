import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@BreakingBadModels';
import { CharactersService } from '@BreakingBadServices';
import { interval, Subscription } from 'rxjs';
import { BaseListComponent } from 'src/app/shared/components/base/base-list/base-list.component';
import { ScreenService } from 'src/app/shared/services/screen.service';

import { GuessCardComponent } from './guess-card/guess-card.component';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent extends BaseListComponent<Character, CharactersService> implements OnInit {
  @ViewChildren(GuessCardComponent) cardsComponent!: QueryList<GuessCardComponent>;
  charactersToGuess = 10;
  isPlaying: boolean = false;
  isWinner: boolean = false;
  isSmallScreen: boolean = false;
  canClickCards: boolean = false;
  cardsPlaying!: Character[];
  cardSelected!: Character | null;
  timeCounter!: number;
  lifes!: number;
  timeSubscription!: Subscription;
  hideAllAndBeginTimeout: any;

  constructor(_charactersService: CharactersService,
              _activatedRoute: ActivatedRoute,
              private dialogRef : MatDialog,
              private screenService : ScreenService) {
    super(_charactersService, _activatedRoute);
    this.screenService.changed.subscribe(() => this.updateLayout());
  }

  updateLayout() {
    this.isSmallScreen = this.screenService.sizes['screen-small'] || this.screenService.sizes['screen-x-small'];
  }

  override initializeDatasource(): void {
    setTimeout(() => this.updateLayout(), 10);
    setTimeout(() => {
      this.filterNonImageFromDatasource();
      this.initializeGame()
    }, 10);
  }

  filterNonImageFromDatasource() {
    this.datasource = this.datasource.filter(x => x.name !== "Holly White");
  }

  initializeGame() {
    clearTimeout(this.hideAllAndBeginTimeout);
    this.hideAllCards();
    this.isPlaying = false;
    this.isWinner = false;
    this.canClickCards = false;
    this.timeCounter = this.setTime();
    this.cardSelected = null;
    this.prepareCards();
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }

  play() {
    this.lifes = this.setLifes();
    this.isPlaying = true;
    this.revealAllCards();
    this.hideAllAndBeginTimeout = setTimeout(() => this.hideAllAndBegin(), 5000);
  }

  onDifficultyChange(value: number) {
    this.prepareCards(value);
    this.timeCounter = this.setTime();
  }

  prepareCards(value: number | null = null) {
    if (value) {
      this.charactersToGuess = value;
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
    this.canClickCards = true;
    this.hideAllCards();
    this.timeSubscription = interval(1000).subscribe(() => { this.setTimeCounter(); });
  }

  onCardClick(character: Character) {
    if (this.cardSelected) {
      if (character.char_id !== this.cardSelected!.char_id) {
        this.canClickCards = false;
        this.lifes--;
        setTimeout(() => {
          this.cardsComponent.filter(x => x.card.char_id === character.char_id).forEach(z => z.hideCard());
          this.cardsComponent.filter(x => x.card.char_id === this.cardSelected!.char_id).forEach(z => z.hideCard());
          this.cardSelected = null;
          if (this.lifes == 0) {
            this.initializeGame();
          }
          this.canClickCards = true;
        }, 350)
      } else {
        this.cardSelected = null;
        if (!this.cardsComponent.filter(x => !x.isCardVisible).length) {
          setTimeout(() => {
            this.timeSubscription.unsubscribe();
            this.isWinner = true;
            this.dialogRef.open(WinnerDialogComponent,
              { data : { "lifes" : this.lifes, "timeLeft" : this.timeCounter }});
          }, 200)
        }
      }
    } else {
      this.cardSelected = character;
    }
  }

  setTimeCounter() {
    if (this.timeCounter == 0) {
      this.initializeGame();
    } else {
      this.timeCounter--;
    }
  }

  counter() {
    if (this.lifes) {
      return new Array(this.lifes);
    } else {
      return new Array(0);
    }
  }

  setLifes(): number {
    switch (this.charactersToGuess) {
      case 8:
        return 5;
      case 10:
        return 4;
      default:
        return 3;
    }
  }

  setTime(): number {
    switch (this.charactersToGuess) {
      case 8:
        return 80;
      case 10:
        return 70;
      default:
        return 60;
    }
  }

  override destroyComponent(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }
}
