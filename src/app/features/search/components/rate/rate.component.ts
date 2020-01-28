import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from '../../../../model/hotel';

@Component({
  selector: 'app-rate',
  template: `
    <div class="font-superbig">
      {{rate}}
      <i class="ion-ios-person"></i>
    </div>
  `,
  styles: []
})
export class RateComponent {
 @Input() rate: number;

}
