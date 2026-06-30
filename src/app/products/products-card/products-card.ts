import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products-card',
  imports: [MatCardModule, MatButtonModule, CurrencyPipe],
  templateUrl: './products-card.html',
  styleUrl: './products-card.scss',
})
export class ProductsCard {
  readonly product = input.required<Product>();
  readonly addButtonLabel = input('Add to cart');
}
