import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hotel} from '../../../../model/hotel';

@Component({
  selector: 'app-image-gallery',
  template: `
    <img [src]="imageActive" width="100%" height="150">
    <div class="nested">
      <div *ngFor="let img of active?.images">
        <img [src]="img" width="100%"
             (click)="setImage.emit(img)">
      </div>
    </div>
  `,
  styles: []
})
export class ImageGalleryComponent {
  @Input() imageActive: string;
  @Input() active: Hotel;
  @Output() setImage: EventEmitter<string> = new EventEmitter<string>();
}
