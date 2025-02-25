import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../core/services/games.service';
import { finalize, take } from 'rxjs';
import { Game } from '../../core/interfaces/games.interface';
import { GameCardComponent } from '../../shared/components/game-card/game-card.component';
import { CommonModule, NgFor } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FiltersComponent } from '../../shared/components/filters/filters.component';
import { queryParams } from '../../core/interfaces/queryParams.interface';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-games',
  imports: [
    GameCardComponent,
    CommonModule,
    NgFor,
    MatProgressSpinnerModule,
    FiltersComponent,
    PaginationComponent,
  ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent implements OnInit {
  gamesData: Game[] = [];
  loading: boolean = false;
  currentPage: number = 1;
  totalPages: number = 1;
  private filters: queryParams = { page: 1, page_size: 20 };

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
          const totalCount = response.count;
          this.totalPages = Math.ceil(
            totalCount / (this.filters.page_size || 20)
          );
        });
    }, 500);
  }

  onGenreChange(selectedGenres: string[]): void {
    this.filters.genres = selectedGenres.length
      ? selectedGenres.join(',').toLowerCase()
      : undefined;
    this.filters.page = 1;
    this.currentPage = 1;
    this.fetchGames();
  }

  onDeveloperChange(selectedDevelopers: string[]): void {
    this.filters.developers = selectedDevelopers.length
      ? selectedDevelopers.join(',').toLowerCase()
      : undefined;
    this.filters.page = 1;
    this.currentPage = 1;
    this.fetchGames();
  }
  onPageChange(page: number): void {
    this.filters.page = page;
    this.currentPage = page;
    this.fetchGames();
  }
}
