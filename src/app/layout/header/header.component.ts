import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Game } from '../../core/interfaces/games.interface';
import { GamesService } from '../../core/services/games.service';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchQuery = '';
  searchedGameData: Game[] = [];
  @Output() searchQueryChange = new EventEmitter<string>();

  constructor(private gamesService: GamesService) {}

  onSearchInputChange() {
    this.searchQueryChange.emit(this.searchQuery);
    if (this.searchQuery.trim()) {
      this.searchGames();
    } else {
      this.searchedGameData = [];
    }
  }
  searchGames(): void {
    this.gamesService
      .getGames({ search: this.searchQuery, page_size: 10 })
      .pipe(take(1))
      .subscribe((response) => {
        this.searchedGameData = response.results;
        console.log(response.results);
      });
  }
}
