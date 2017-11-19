import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingService {

  shopping: Object [] = [
    {
      'item': 'Mobile',
      'price': 1000,
      'id': 1
    },
    {
      'item': 'Desktop',
      'price': 5000,
      'id': 2
    },
    {
      'item': 'Laptop',
      'price': 7000,
      'id': 3
    }
  ];
}
