import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { Game } from '../../../core/interfaces/games.interface';

@Component({
  selector: 'app-carousel',
  imports: [RouterModule, CarouselModule, NgFor, RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  @Input() games!: Game[];

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
        items: 5,
      },
    },
    nav: true,
  };
}
