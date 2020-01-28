import {Injectable} from '@angular/core';
import {CartItem} from '../../model/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = [];


  add(item: CartItem) {
   // this.items.push( item );
    this.items = [...this.items, item];
  }

  remove( toRemove: CartItem ) {
    this.items = this.items.filter((item) => item.creationDate !== toRemove.creationDate );
  }

  getItemsCount() {
    return this.items.length;
  }

  getItems() {
    return this.items;
  }
}
