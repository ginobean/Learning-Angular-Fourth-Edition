import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(public authService: AuthService) {}

  doLogin() {
    this.authService.login().subscribe(() => {});
    console.log('successfully subscribed to the login result observable!');
  }
}
