import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hotel-form',
  template: `
    <form #f="ngForm" (submit)="search.emit(f.value.city)">
      <input type="text" name="city" [ngModel]="city" placeholder="City (Rome or Milan)">
      <button type="submit">SEARCH</button>
    </form>
  `,
  styles: []
})
export class HotelFormComponent {

  @Input() city: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

}
