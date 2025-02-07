import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  get fullStars(): number[] {
    return Array(Math.floor(this.rating)).fill(0);
  }

  get emptyStars(): number[] {
    return Array(5 - Math.floor(this.rating)).fill(0);
  }
}
