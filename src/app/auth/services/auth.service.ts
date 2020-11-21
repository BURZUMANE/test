import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  public isAuthenticated(): boolean {
    const isAuth = JSON.parse(localStorage.getItem('auth'));
    if (isAuth) {
      return !!isAuth.auth;
    }
  }

  public getToken(): Observable<any> {
    return this.http.post('http://interview.agileengine.com/auth', {
      apiKey: '23567b218376f79d9415'
    });
  }
}
