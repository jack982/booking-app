import { Component, OnInit } from '@angular/core';
import {CartService} from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  saveBooking() {
    window.alert(this.cartService.getItems());
  }

}
