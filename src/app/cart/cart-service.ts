import { Service } from '@angular/core';
import { Product } from '../products/product';

@Service()
export class CartService {

  private readonly cartItems: Product[] = [];

  addToCart(product: Product) {
    this.cartItems.push(product);
    console.log('Product added to cart:', product.name);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems.length = 0;
    console.log('Cart cleared');
  }
}
