import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { GamesService } from '../../core/services/games.service';
import { Game } from '../../core/interfaces/games.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
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
      });
  }
}
