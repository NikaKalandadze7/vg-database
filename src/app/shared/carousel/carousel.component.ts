import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { GamesService } from '../../core/services/games.service';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { Game } from '../../core/interfaces/games.interface';

@Component({
  selector: 'app-carousel',
  imports: [RouterModule, CarouselModule, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  featuredGames: Game[] = [];
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService
      .getGames({
        metacritic: '90,100',
        page_size: 30,
      })
      .pipe(take(1))
      .subscribe((response) => {
        this.featuredGames = response.results;
        console.log(this.featuredGames);
      });
  }

  customOptions: OwlOptions = {
    loop: true,
    center: true,
    items: 6,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
      1280: {
        items: 8,
      },
    },
    nav: true,
  };
}
