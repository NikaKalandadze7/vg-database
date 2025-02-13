import { Component, Input } from '@angular/core';
import { Game } from '../../core/interfaces/games.interface';
import { StarRatingComponent } from '../ratings/star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-card',
  imports: [StarRatingComponent, CommonModule, RouterLink],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css',
})
export class GameCardComponent {
  @Input() item!: Game;
}
