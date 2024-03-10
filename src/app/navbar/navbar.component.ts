import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLoged: boolean = false;

  constructor(private _AuthService: AuthService) {
    _AuthService.userData.subscribe({
      next: () => {
        if (_AuthService.userData.getValue() !== null) {
          this.isLoged = true;
        } else {
          this.isLoged = false;
        }
      },
    });
  }

  logOut() {
    this._AuthService.logOut();
  }
}
