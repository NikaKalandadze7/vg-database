import { Component } from '@angular/core';
import { take } from 'rxjs';
import { GamesService } from '../../core/services/games.service';
import { CommonModule } from '@angular/common';
import { Platform } from '../../core/interfaces/games.interface';

@Component({
  selector: 'app-platforms',
  imports: [CommonModule],
  templateUrl: './platforms.component.html',
  styleUrl: './platforms.component.css',
})
export class PlatformsComponent {
  platformsData: Platform[] = [];
  constructor(private platformsService: GamesService) {}
  ngOnInit(): void {
    this.platformsService
      .getPlatforms({ page_size: 40 })
      .pipe(take(1))
      .subscribe((response) => {
        this.platformsData = response.results;
      });
  }
}
