import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { CommonModule } from '@angular/common';
import { GamesService } from '../../core/services/games.service';
import { Developer } from '../../core/interfaces/games.interface';

@Component({
  selector: 'app-developers',
  imports: [CommonModule],
  templateUrl: './developers.component.html',
  styleUrl: './developers.component.css',
})
export class DevelopersComponent implements OnInit {
  developersData: Developer[] = [];
  constructor(private devService: GamesService) {}
  ngOnInit(): void {
    this.devService
      .getDevs({ page_size: 40 })
      .pipe(take(1))
      .subscribe((response) => {
        this.developersData = response.results;
      });
  }
}
