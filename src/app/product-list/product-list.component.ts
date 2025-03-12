import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  isHovered = false;
  selectedFilterOption: string = 'all';
  products = [
    {
      name: 'iPhone 15',
      price: 999,
      color: 'Pink',
      pImage: 'iphone15.jpg',
      inStock: 8,
      discount: 10,
      cartCount: 0,
      category: 'phone',
    },
    {
      name: 'iPhone 14',
      price: 799,
      color: 'Purple',
      pImage: 'iphone14.jpg',
      inStock: 20,
      discount: 15,
      cartCount: 0,
      category: 'phone',
    },
    {
      name: 'MacBook Pro 16"',
      price: 2499,
      color: 'Space Gray',
      pImage: 'apple-logo.png',
      inStock: 5,
      discount: 5,
      cartCount: 0,
      category: 'laptop',
    },
    {
      name: 'iPad Pro 12.9"',
      price: 1099,
      color: 'Silver',
      pImage: 'apple-logo.png',
      inStock: 15,
      discount: 8,
      cartCount: 0,
      category: 'tablet',
    },
    {
      name: 'AirPods Pro',
      price: 249,
      color: 'White',
      pImage: 'apple-logo.png',
      inStock: 30,
      discount: 20,
      cartCount: 0,
      category: 'accessories',
    },
    {
      name: 'Apple Watch Series 9',
      price: 399,
      color: 'Midnight',
      pImage: 'apple-logo.png',
      inStock: 12,
      discount: 0,
      cartCount: 0,
      category: 'wearable',
    },
  ];

  get filteredProducts() {
    if (this.selectedFilterOption === 'all') {
      return this.products;
    }
    return this.products.filter(
      (product) => product.category === this.selectedFilterOption
    );
  }

  onFilterChange(category: string) {
    this.selectedFilterOption = category;
  }
}
