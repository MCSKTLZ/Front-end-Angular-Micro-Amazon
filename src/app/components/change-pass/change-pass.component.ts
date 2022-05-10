import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  passwordForm: FormGroup;
  username = localStorage.getItem("account_connected")
  message : any = null
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.passwordForm = this.fb.group({
      password: [''],
      newPassword: [''],
      newPasswordRepeat :['']
    });
  }

  ngOnInit(): void {
  }
  changePassword() {
    this.authService.changePassword(this.passwordForm.value, this.username )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
