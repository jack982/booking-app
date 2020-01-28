import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <div class="alert"><ng-content></ng-content></div>
  `,
  styles: [`
    backgroundColor: '#faa';
    color: '#fff';
    bordeRadius : '20px';
  `]
})
export class AlertComponent {

}
