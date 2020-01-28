import {Component, Input, OnInit} from '@angular/core';
import {Hotel} from "../../../../model/hotel";

@Component({
  selector: 'app-stars',
  template: `
    <div>
      <i class="icon"
         *ngFor="let star of 5 | intToArray; let i = index"
         [ngClass]="{
              'ion-ios-star': i < stars,
              'ion-ios-star-outline' : i >= stars
            }">
      </i>

    </div>
  `,
  styles: []
})
export class StarsComponent {
  @Input() stars: number;

}
