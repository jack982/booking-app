import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-navigation-bar',
  template: `
    <div class="navigation" *ngIf="loginService.isLoggedIn()">
      <div class="horiz-grid">
        <div class="logo">BOOKING</div>
        <div class="horiz-grid">
        <span class="btn"
              routerLink="search"
              routerLinkActive="active">SEARCH</span>
          <span class="btn"
                routerLink="cart"
                routerLinkActive="active">
          CART ({{ cartService.getItemsCount() }})
        </span>
          <span class="btn"
                routerLink="login"
                routerLinkActive="active"
                *ngIf="loginService.isLoggedIn()"
                (click)="loginService.logout()">LOGOUT</span>
        </div>
        <em>{{loginService.getUsername()}}</em>
      </div>
    </div>
  `,
  styles: []
})
export class NavigationBarComponent {

  constructor( private cartService: CartService,
               private loginService: LoginService) { }

}
