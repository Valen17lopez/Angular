import { Component, OnInit } from '@angular/core';
import {CartServicesService} from '../../services/cart-service.service'
import { ApiService } from '../../services/api.service'; 

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private cartServicesService: CartServicesService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.getProducts()
      .subscribe((res: any) => {
        this.products = Object.values(res);
      });
  }

  addToCart(product: any) {
    this.cartServicesService.addToCart(product);
    console.log(this.cartServicesService.getCart());
  }
}

interface Product {
  name: string;
  price: number;
  description: string;
  inventory: number;
  image: string; 
  cantidad: number;
}