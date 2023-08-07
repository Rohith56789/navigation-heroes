import { Component ,OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-dashbard',
  templateUrl: './dashbard.component.html',
  styleUrls: ['./dashbard.component.css']
})
export class DashbardComponent implements OnInit {
  heroes:Hero[] | undefined

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes: any) => this.heroes = heroes.slice(1, 5));
  }
}
