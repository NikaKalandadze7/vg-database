import { Component, Input } from '@angular/core';
import { Game } from '../../core/interfaces/games.interface';
import { StarRatingComponent } from '../ratings/star-rating/star-rating.component';

@Component({
  selector: 'app-game-card',
  imports: [StarRatingComponent],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css',
})
export class GameCardComponent {
  @Input() item!: Game;
}
