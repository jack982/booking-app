import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './features/login/login.component';
import {SearchComponent} from './features/search/search.component';
import {CartComponent} from './features/cart/cart.component';
import {AuthGuard} from './core/services/auth.guard';
import {NoResultComponent} from './features/search/no-result.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]  },
  { path: 'no-results', component: NoResultComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
