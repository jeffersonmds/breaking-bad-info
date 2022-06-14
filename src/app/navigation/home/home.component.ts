import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slides = [
    {'image': 'https://pics.filmaffinity.com/Breaking_Bad_TV_Series-393177312-large.jpg'},
    {'image': 'https://nofilmschool.com/sites/default/files/styles/facebook/public/bbcenterfinal.jpg?itok=kU5qVll7'},
    {'image': 'https://pics.filmaffinity.com/Breaking_Bad_TV_Series-952955291-large.jpg'},
    {'image': 'https://www.youredm.com/wp-content/uploads/2015/06/breaking-bad-will-return-to-amc-in-august.jpg'},
    {'image': 'https://sm.ign.com/ign_br/gallery/e/el-caminos/el-caminos-breaking-bad-characters-then-and-now_c5w1.jpg'}
  ];

  constructor() { }

}
