import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {NgForm} from '@angular/forms';
import {Hotel, Room} from '../../model/hotel';
import {CartService} from '../../core/services/cart.service';
import {Contact} from "../../model/contact";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  hotels: Hotel[];
  city = 'Milano';
  active: Hotel;
  imageActive: string;


  constructor(private http: HttpClient,
              private router: Router,
              private cartService: CartService) { }

  ngOnInit() {
    this.getHotels(this.city);
  }

  search(q: string) {
    this.city = q;
    this.getHotels(this.city);
  }


  getHotels(q?: string) {
    if ( q !== undefined ) {
        this.http.get<Hotel[]>(`${environment.API_HOTELS_URL}?q=${q}`)
        .subscribe(res => {
          if (!res.length) {
            this.router.navigateByUrl('no-results');
            return;
          }
          this.hotels = res;
          if ( res.length > 0 ) {
            this.setActive(res[0]);
          }});
    }
  }

  setActive(hotel: Hotel) {
    this.active = hotel;
    this.setImage( hotel.images[0] );
  }

  setImage(img: string) {
    this.imageActive = img;
  }

  sendEmail(contact: Contact) {
    window.alert(`sent:
        ${contact.email},
        ${contact.message},
        ${this.active.email}`);

  }

  addToCart(room: Room, hotel: Hotel) {
    const creationDate = Date.now();
    this.cartService.add( { hotel, room, creationDate });
  }

}
