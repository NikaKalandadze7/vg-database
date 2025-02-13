import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../../core/interfaces/games.interface';
import { take } from 'rxjs';
import { GamesService } from '../../../core/services/games.service';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../../shared/carousel/carousel.component';

@Component({
  selector: 'app-game-details',
  imports: [CommonModule, CarouselComponent],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.css',
})
export class GameDetailsComponent implements OnInit {
  game!: Game;
  gameId: string | null = null;
  gamesFromSameDev: Game[] = [];

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.gameId = params.get('id');
    });
    if (this.gameId) {
      this.gamesService
        .getSpecificGame(this.gameId)
        .pipe(take(1))
        .subscribe((response) => {
          this.game = response;
        });
    }
    if (this.game.developers && this.game.developers.length) {
      this.gamesService
        .getGames({
          developers: this.game.developers[0].slug,
        })
        .pipe(take(1))
        .subscribe((response) => {
          this.gamesFromSameDev = response.results;
          console.log(response);
        });
    }
  }
  // ngAfterContentInit(): void {
  //   if (this.game.developers && this.game.developers.length) {
  //     this.gamesService
  //       .getGames({
  //         developers: this.developer,
  //       })
  //       .pipe(take(1))
  //       .subscribe((response) => {
  //         this.gamesFromSameDev = response.results;
  //         console.log(response);
  //       });
  //   }
  // }
}
