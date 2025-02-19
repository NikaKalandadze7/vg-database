import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal } from '@angular/core';
import { FavoriteService } from '../../core/services/favorite.service';
import { Game } from '../../core/interfaces/games.interface';
import { GameCardComponent } from '../../shared/game-card/game-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, GameCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  user: any;
  userKey: string = 'user';
  favoriteGamesSignal!: Signal<Game[]>;

  constructor(private favoriteService: FavoriteService) {}
  ngOnInit() {
    const storedUser = localStorage.getItem(this.userKey);
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
    this.favoriteGamesSignal = this.favoriteService.getFavoriteGames();
  }
}
