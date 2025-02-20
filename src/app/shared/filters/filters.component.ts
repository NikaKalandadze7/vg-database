import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange } from '@angular/material/select';

import { Developer, Genre } from '../../core/interfaces/games.interface';
import { GamesService } from '../../core/services/games.service';
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
})
export class FiltersComponent implements OnInit {
  genres = new FormControl<string[]>([]);
  developers = new FormControl<string[]>([]);

  @Output() genreChange = new EventEmitter<string[]>();
  @Output() developerChange = new EventEmitter<string[]>();

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
      .getDevs({ page_size: 20 })
      .pipe(take(1))
      .subscribe((response) => {
        this.developersData = response.results;
        console.log(response.results);
      });
  }

  onGenreSelectionChange(event: MatSelectChange): void {
    const selectedGenres = event.value.map((genre: Genre) => genre.name);
    this.genreChange.emit(selectedGenres);
  }

  onDeveloperSelectionChange(event: MatSelectChange): void {
    const selectedDevelopers = event.value.map(
      (developer: Developer) => developer.name
    );
    this.developerChange.emit(selectedDevelopers);
  }
}
