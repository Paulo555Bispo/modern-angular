import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-products-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './products-card.html',
  styleUrl: './products-card.scss',
})
export class ProductsCard {}
