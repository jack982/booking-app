import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Hotel} from '../../../../model/hotel';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-gmap',
  template: `
    <div>
      <img [src]="url"
           width="100%" height="200">
      <div class="address">
        <div class="font-big">{{active?.name}}</div>
        <div class="font-small">{{active?.location.address}}</div>
      </div>
    </div>
  `,
  styles: []
})
export class GmapComponent implements OnChanges {
  @Input() active: Hotel;
  url: string;

  constructor() {}

  ngOnChanges(): void {
    if(this.active) {
      this.url = `https://maps.googleapis.com/maps/api/staticmap?center=${this.active.location.address}&zoom=15&size=700x200&key=${environment.API_MAP_KEY}`;
    }
  }




}
