import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange } from '@angular/material/select';

import { Developer, Genre } from '../../../core/interfaces/games.interface';
import { GamesService } from '../../../core/services/games.service';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FiltersComponent implements OnInit {
  @Output() genreChange = new EventEmitter<string[]>();
  @Output() developerChange = new EventEmitter<string[]>();

  genres = new FormControl<Genre[]>([]);
  developers = new FormControl<Developer[]>([]);

  genresData: Genre[] = [];
  developersData: Developer[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService
      .getGenres({ page_size: 20 })
      .pipe(take(1))
      .subscribe((response) => {
        this.genresData = response.results;
      });

    this.gamesService
      .getDevs({ page_size: 80 })
      .pipe(take(1))
      .subscribe((response) => {
        this.developersData = response.results;
        console.log(response.results);
      });
  }

  onGenreSelectionChange(event: MatSelectChange): void {
    const selectedGenres = event.value.map((genre: Genre) => genre.slug);
    this.genreChange.emit(selectedGenres);
  }

  onDeveloperSelectionChange(event: MatSelectChange): void {
    const selectedDevelopers = event.value.map(
      (developer: Developer) => developer.slug
    );
    this.developerChange.emit(selectedDevelopers);
  }
}
