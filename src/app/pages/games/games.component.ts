import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../core/services/games.service';
import { take } from 'rxjs';
import { Game } from '../../core/interfaces/games.interface';
import { GameCardComponent } from '../../shared/game-card/game-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  imports: [GameCardComponent, CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent implements OnInit {
  gamesData: Game[] = [];
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService
      .getGames()
      .pipe(take(1))
      .subscribe((response) => {
        this.gamesData = response.results;
        console.log(response.results);
      });
  }
}
