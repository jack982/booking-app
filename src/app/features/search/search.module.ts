import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HotelListComponent} from './components/hotel-list/hotel-list.component';
import {HotelFormComponent} from './components/hotel-form/hotel-form.component';
import {GmapComponent} from './components/gmap/gmap.component';
import {ImageGalleryComponent} from './components/image-gallery/image-gallery.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {RateComponent} from './components/rate/rate.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import {ServicesComponent} from './components/services/services.component';
import {StarsComponent} from './components/stars/stars.component';
import {NoResultComponent} from './no-result.component';
import {SharedModule} from '../../shared/shared.module';
import {SearchComponent} from './search.component';
import {FormsModule} from '@angular/forms';
import {SearchRoutingModule} from './search-routing.module';

const components = [
  SearchComponent,
  HotelListComponent,
  HotelFormComponent,
  GmapComponent,
  ImageGalleryComponent,
  ContactsComponent,
  RateComponent,
  ReservationComponent,
  ServicesComponent,
  StarsComponent,
  NoResultComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
