import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
