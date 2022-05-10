import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appFromage';
  username = localStorage.getItem("account_connected")
  userRoute! :  string;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    if(this.username) {
        this.userRoute = "/user-profile/" + this.username
    }
  }

  logout() {
    this.authService.doLogout();
  }
}
