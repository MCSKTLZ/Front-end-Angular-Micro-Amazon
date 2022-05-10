import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  currentUser: any;
  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute,
    public router: Router
  ) {
    let username = this.actRoute.snapshot.paramMap.get('name');
    this.authService.getUserProfile(username).subscribe((res) => {
      console.log(res);
      
      this.currentUser = res;
    });
  }
  ngOnInit() {}
  

  redirectToPassChange() {
    this.router.navigate([`user-profile/${this.currentUser.pseudo}/change-pass`])
  }
  redirectToUpdateUser() {
    this.router.navigate([`user-profile/${this.currentUser.pseudo}/update`])
  }
}