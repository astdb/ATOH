import { Injectable } from '@angular/core';

// this service will deliver mock hero data
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// getHeroes currently has a synchronous signature, which cannot stand when the data is fetched from a remote server. It will then return an Observable
import { Observable, of } from 'rxjs';

// app-wide messaging
import { MessageService } from './message.service';

// Injectable marks the class as one that participates in the Dependency Injection system.
@Injectable({
  providedIn: 'root'
})

export class HeroService {

  // This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent.
  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] {
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes.');

    // of(HEROES) returns an Observable<Hero[]> which emits a single value, array of mock heroes
    return of(HEROES);
  }
}
