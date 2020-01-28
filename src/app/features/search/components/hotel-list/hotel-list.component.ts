import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hotel} from "../../../../model/hotel";

@Component({
  selector: 'app-hotel-list',
  template: `
    <div class="font-big" *ngIf="city">Hotel in {{city}}</div>
    <div class="horiz-grid separator"
         [ngClass]="{ 'active' : h.id === active?.id }"
         *ngFor="let h of hotels"
         (click)="setActive.emit(h)">
      <div>{{ h.name }}</div>
      <div *ngIf="h.rooms">da € {{h.rooms[0].price}}</div>
    </div>

    <div class="separator"></div>
    <div class="horiz-grid">
      <div></div>
      <em *ngIf="city">{{hotels?.length}} results</em>
    </div>
  `,
  styles: []
})
export class HotelListComponent {

  @Input() hotels: Hotel[];
  @Input() active: Hotel;
  @Input() city: string;
  @Output() setActive: EventEmitter<Hotel> = new EventEmitter<Hotel>();

}
