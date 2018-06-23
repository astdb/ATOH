import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // import the Hero class implemented in app/hero.ts

// no longer required due to hero data being proviided through HeroService
// import { HEROES } from '../mock-heroes';  // import the mock hero data in app/mock-heros.ts
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// always export the component class so it can be imported where required
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero: Hero;

  heroes: Hero[];  // heroes property to expose hero data for binding

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  // defines private herService property and identifies it as a HeroService injection site. 
  constructor(private heroService: HeroService) { }

  // lifecycle hook: called shortly after creating a component. put initialization logic here. 
  ngOnInit() {
    this.getHeroes();
  }
  
}
