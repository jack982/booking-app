import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Auth} from '../../model/auth';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  auth: Auth;
  username: string;
  loginError: any;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(email: string, password: string) {
      // that's a fake login!
   /* const params = new HttpParams();
    params.set('email', email);
    params.set('password', password);
    */
   this.loginError = null;

    this.http.post<Auth>(environment.API_LOGIN_URL,
      {email, password})
        .subscribe((res: Auth) => {
          this.auth = res;
          this.username = email;
          this.router.navigateByUrl('search');
        },
          (err) => this.loginError = err
        );
  }

  logout() {
    this.auth = null;
    this.username = null;
    this.loginError = null;
    this.router.navigateByUrl('login');
  }

  isLoggedIn() {
    return true;// this.auth != null ? true : false;
  }

  getUsername() {
    return this.username;
  }
}
