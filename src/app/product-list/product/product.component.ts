import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product: any;

  getDiscountedPrice(): number {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  incrementCart() {
    if (this.product.cartCount < this.product.inStock) {
      this.product.cartCount++;
    }
  }

  decrementCart() {
    if (this.product.cartCount > 0) {
      this.product.cartCount--;
    }
  }
}
