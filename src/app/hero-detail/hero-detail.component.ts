import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // hero-detail component's hero property must be in Input property (annotated with the @Input operator), as the external HeroesComponent will bind to it i.e. <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
