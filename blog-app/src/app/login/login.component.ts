import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../services/user.service";
import {SharedService} from "../services/shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginSuccess = true;
  constructor(private userService: UserService,
              private sharedService: SharedService,
              private router: Router) { }
  ngOnInit() {
  }
  login() {
    const user = {
      username: this.username,
      password: this.password
    };
    this.userService.authenticateUser(user)
      .subscribe((data) => {
        if (data.length === 1) {
          localStorage.setItem('currentUser', data[0].id);
          this.sharedService.updateCurrentUser();
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/login']);
          this.loginSuccess = false;
        }
      });
  }
}
