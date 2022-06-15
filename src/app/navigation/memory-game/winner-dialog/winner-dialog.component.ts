import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.scss']
})
export class WinnerDialogComponent implements OnInit {
  winData!: any;
  gifs = [
    "https://c.tenor.com/ulbEG8vaWNgAAAAC/breakingbad.gif",
    "https://2.bp.blogspot.com/-KIZuJM3sqpU/UB61RZO63-I/AAAAAAAAHnU/xvznNQ2E-UE/w680/tumblr_llgamqQLBD1qcjzcm.gif",
    "https://i.gifer.com/mSN.gif",
    "https://y.yarn.co/34dee58c-eb15-4638-87ca-c611002c4b62_text.gif"
  ]
  gifToShow: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.winData = data;
  }

  ngOnInit(): void {
    this.gifToShow = this.gifs.sort(() => .5 - Math.random())[0];
  }
}
