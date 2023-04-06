import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';
import { AuthService } from '../services/auth.service';

@UntilDestroy()
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(public authService: AuthService) {}

  doLogin() {
    this.authService
      .login()
      .pipe(
        untilDestroyed(this),
        finalize(() => console.log('auth-component subscription was finalized'))
      )
      .subscribe(() => {});
    console.log('successfully subscribed to the login result observable!');
  }
}
