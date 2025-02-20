import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../core/services/games.service';
import { finalize, take } from 'rxjs';
import { Game } from '../../core/interfaces/games.interface';
import { GameCardComponent } from '../../shared/game-card/game-card.component';
import { CommonModule, NgFor } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FiltersComponent } from '../../shared/filters/filters.component';
import { queryParams } from '../../core/interfaces/queryParams.interface';

@Component({
  selector: 'app-games',
  imports: [
    GameCardComponent,
    CommonModule,
    NgFor,
    MatProgressSpinnerModule,
    FiltersComponent,
  ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent implements OnInit {
  gamesData: Game[] = [];

  loading: boolean = false;
  private filters: queryParams = {};

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.fetchGames();
  }

  fetchGames(): void {
    this.loading = true;
    setTimeout(() => {
      this.gamesService
        .getGames(this.filters)
        .pipe(
          take(1),
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe((response) => {
          this.gamesData = response.results;
          console.log(response);
        });
    }, 500);
  }
  onGenreChange(selectedGenres: string[]): void {
    this.filters.genres = selectedGenres.length
      ? selectedGenres.join(',').toLowerCase()
      : undefined;
    this.fetchGames();
  }

  onDeveloperChange(selectedDevelopers: string[]): void {
    console.log(selectedDevelopers);
    this.filters.developers = selectedDevelopers.length
      ? selectedDevelopers.join(',').toLowerCase()
      : undefined;
    this.fetchGames();
  }
}
