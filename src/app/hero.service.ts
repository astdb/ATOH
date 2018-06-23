import { Injectable } from '@angular/core';

// this service will dliver mock hero data
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// Injectable marks the class as one that participates in the Dependency Injection system.
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
