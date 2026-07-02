import { Component, computed, signal } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';
import { Product } from '../product';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-grid',
  imports: [ProductsCard, MatIconModule, MatInputModule, FormsModule, MatFormFieldModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  protected readonly searchTerm = signal('');

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Máquina Fotográfica',
      description: 'Máquina fotográfica digital de alta qualidade com recursos avançados.',
      imageUrl: 'https://images.pexels.com/photos/37585377/pexels-photo-37585377.jpeg',
      price: 25000.00,
      originalPrice: 29999.99,
    },
    {
      id: 2,
      name: 'Tablet',
      description: 'Tablet com tela de alta resolução e desempenho rápido.',
      imageUrl: 'https://images.pexels.com/photos/28461044/pexels-photo-28461044.jpeg',
      price: 2500.00,
    },
    {
      id: 3,
      name: 'Caneta tinteiro',
      description: 'Caneta tinteiro elegante para escrita suave e precisa.',
      imageUrl: 'https://images.pexels.com/photos/15876086/pexels-photo-15876086.jpeg',
      price: 145.99,
      originalPrice: 190.99,
    }
  ]);

  protected readonly filteredProducts = computed(() => {
    const term = this.searchTerm().toLocaleLowerCase().trim();
    if (!term) return this.products();

    return this.products().filter((product) =>
      product.name.toLocaleLowerCase().includes(term) ||
      product.description.toLocaleLowerCase().includes(term)
    );

  });

  onAddToCart(product: Product) {
    console.log('Product added to cart:', product.name);
  }

/*   protected clearSearchTerm() {
    this.searchTerm.set('');
  }
 */
/*   protected trimmedSearchTerm() {
     this.searchTerm.update((value) => value.trim());
  } */
}
