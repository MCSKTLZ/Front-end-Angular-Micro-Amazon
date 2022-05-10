import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  updateForm: FormGroup;
  username = localStorage.getItem("account_connected")
  roles = ["user", "admin","moderator"]
  ngSelect = "user"
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.updateForm = this.fb.group({
      pseudo: [''],
      role:['']
    });
  }

  ngOnInit(): void {
  }

  updateUser() {
    this.authService.updateUser(this.username, this.updateForm.value)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['user-profile/' + this.updateForm.value.pseudo])
      })
  }
}
