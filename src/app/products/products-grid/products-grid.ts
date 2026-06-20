import { Component } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';

@Component({
  selector: 'app-products-grid',
  imports: [ProductsCard],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {}
