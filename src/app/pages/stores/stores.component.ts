import { Component } from '@angular/core';
import { Store } from '../../core/interfaces/games.interface';
import { GamesService } from '../../core/services/games.service';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stores',
  imports: [CommonModule],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css',
})
export class StoresComponent {
  storesData: Store[] = [];
  constructor(private storesService: GamesService) {}
  ngOnInit(): void {
    this.storesService
      .getStores({ page_size: 10 })
      .pipe(take(1))
      .subscribe((response) => {
        this.storesData = response.results;
      });
  }
}
