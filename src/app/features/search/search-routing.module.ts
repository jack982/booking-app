import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search.component';
import {NoResultComponent} from './no-result.component';


const routes: Routes = [
  {path: '', component: SearchComponent},
  { path: 'no-results', component: NoResultComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class SearchRoutingModule {

}
