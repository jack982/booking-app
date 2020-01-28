import {Component, Input} from '@angular/core';
import {Hotel} from '../../../../model/hotel';

@Component({
  selector: 'app-gmap',
  template: `
    <div>
      <img src="https://maps.googleapis.com/maps/api/staticmap?center={{active?.location.address}}&zoom=15&size=700x200&key=AIzaSyB7fSvdkeXMnRlT86uiD3dHNKMbH4EM4Ws"
           width="100%" height="200">
      <div class="address">
        <div class="font-big">{{active?.name}}</div>
        <div class="font-small">{{active?.location.address}}</div>
      </div>
    </div>
  `,
  styles: []
})
export class GmapComponent {
  @Input() active: Hotel;
}
