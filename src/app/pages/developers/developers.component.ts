import { Component, OnInit } from '@angular/core';
import { DevelopersService } from '../../core/services/developers.service';
import { take } from 'rxjs';
import { developers } from '../../core/interfaces/developers.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-developers',
  imports: [CommonModule],
  templateUrl: './developers.component.html',
  styleUrl: './developers.component.css',
})
export class DevelopersComponent implements OnInit {
  developersData: developers[] = [];
  constructor(private devService: DevelopersService) {}
  ngOnInit(): void {
    this.devService
      .getDevs({ page_size: 40 })
      .pipe(take(1))
      .subscribe((response) => {
        this.developersData = response.results;
        console.log(response.results);
      });
  }
}
