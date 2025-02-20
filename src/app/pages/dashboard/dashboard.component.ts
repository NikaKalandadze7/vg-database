import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteService } from '../../core/services/favorite.service';
import { Game } from '../../core/interfaces/games.interface';
import { GameCardComponent } from '../../shared/game-card/game-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, GameCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: any;
  userKey: string = 'user';
  favoriteGames$!: Observable<Game[]>;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit() {
    const storedUser = localStorage.getItem(this.userKey);
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
    this.favoriteGames$ = this.favoriteService.favoriteItems$;
  }
}
