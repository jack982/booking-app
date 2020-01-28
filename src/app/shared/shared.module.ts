import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IntToArrayPipe} from './pipes/int-to-array.pipe';
import {AlertComponent} from './components/alert.component';
import {SeparatorComponent} from './components/separator/separator.component';
import {CardComponent} from './components/card/card.component';


const components = [
  IntToArrayPipe,
  AlertComponent,
  SeparatorComponent,
  CardComponent,
];

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule
  ],

})
export class SharedModule { }
