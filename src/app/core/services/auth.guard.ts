import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate() {
   /* const isAuth = this.loginService.isLoggedIn();
    if (!isAuth) {
      this.router.navigateByUrl('login');
    }
    return isAuth;
  */
    return true;
  }


}
