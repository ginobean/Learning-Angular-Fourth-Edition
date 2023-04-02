import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token = '';
  authLoginUrl = 'https://fakestoreapi.com/auth/login';

  constructor(private httpClient: HttpClient) {}

  get isLoggedIn(): boolean {
    return this.token !== '';
  }

  login(): Observable<string> {
    return this.httpClient
      .post<string>(this.authLoginUrl, {
        username: 'david_r',
        password: '3478*#54',
      })
      .pipe(tap((token) => (this.token = token)));
  }

  logout() {
    this.token = '';
  }
}
