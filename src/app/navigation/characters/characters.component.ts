import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@BreakingBadModels';
import { CharactersService } from '@BreakingBadServices';
import { BaseListComponent } from 'src/app/shared/components/base/base-list/base-list.component';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent extends BaseListComponent<Character, CharactersService> implements OnInit {
  filter!: string;

  constructor(_charactersService: CharactersService,
              _activatedRoute: ActivatedRoute) {
    super(_charactersService, _activatedRoute);
  }
}
