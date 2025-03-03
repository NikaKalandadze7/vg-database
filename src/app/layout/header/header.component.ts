import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Game } from '../../core/interfaces/games.interface';
import { GamesService } from '../../core/services/games.service';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

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
  isDropdownOpen = false;

  @Output() searchQueryChange = new EventEmitter<string>();

  constructor(
    private gamesService: GamesService,
    private authService: AuthService,
    private router: Router
  ) {}
  get loggedIn(): boolean {
    return this.authService.loggedIn();
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
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
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
