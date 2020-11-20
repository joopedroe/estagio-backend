import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(userInput:any, password:any) {
    const user = {
      userInput,
      password
    };
    return this.http.post(environment.API_URL.concat('usuario/'), user)
      .pipe(
        tap(user => {
          localStorage.setItem('user', JSON.stringify(user));
        })
      );
  }
  user() {
    const data = localStorage.getItem('user');
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

}
