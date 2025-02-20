import { Component } from '@angular/core';
import { GamesService } from '../../core/services/games.service';
import { take } from 'rxjs';
import { Genre } from '../../core/interfaces/games.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genres',
  imports: [CommonModule],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.css',
})
export class GenresComponent {
  genresData: Genre[] = [];
  constructor(private genresService: GamesService) {}
  ngOnInit(): void {
    this.genresService
      .getGenres({ page_size: 20 })
      .pipe(take(1))
      .subscribe((response) => {
        this.genresData = response.results;
        console.log(response.results);
      });
  }
}
