import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../core/services/games.service';
import { finalize, take } from 'rxjs';
import { Game } from '../../core/interfaces/games.interface';
import { GameCardComponent } from '../../shared/game-card/game-card.component';
import { CommonModule, NgFor } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-games',
  imports: [GameCardComponent, CommonModule, NgFor, MatProgressSpinnerModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent implements OnInit {
  gamesData: Game[] = [];
  constructor(private gamesService: GamesService) {}
  loading: boolean = false;
  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.gamesService
        .getGames()
        .pipe(
          take(1),
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe((response) => {
          this.gamesData = response.results;
        });
    }, 1500); //fake loading
  }
}
