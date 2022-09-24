import { Component, Input, OnInit } from '@angular/core';
import { Death } from '@BreakingBadModels';

@Component({
  selector: 'app-death-card',
  templateUrl: './death-card.component.html',
  styleUrls: ['./death-card.component.scss']
})
export class DeathCardComponent implements OnInit {
  @Input() death!: Death;

  constructor() { }

  ngOnInit(): void {
  }

}
