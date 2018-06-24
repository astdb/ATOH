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

  // function to retrieve heroes from the heroservice
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // defines private herService property and identifies it as a HeroService injection site. 
  constructor(private heroService: HeroService) {
    // While you could call getHeroes() in the constructor, that's not the best practice. Reserve the constructor for simple initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
  }

  // lifecycle hook: called shortly after creating a component. put initialization logic here. 
  ngOnInit() {
    // call hero data getter here instead of in the constructor
    this.getHeroes();
  }
  
}
