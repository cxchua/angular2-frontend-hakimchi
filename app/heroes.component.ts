import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes() {
    this._heroService.getHeroes().then(heroesX => this.heroes = heroesX);
  }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(heroX: Hero) { this.selectedHero = heroX; };

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

  constructor(private _heroService: HeroService, private _router: Router) { }
}
