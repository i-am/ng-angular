import {Component, Input} from '@angular/core';
// import {UserService} from '../user.service';
import {SharedService} from '../shared.service';
import {UserService} from "../user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  name = 'Guest';
  constructor(public sharedService: SharedService,
              public userService: UserService) {}
  isLoggedIn() {
    if (this.sharedService.isLoggedIn()) {
      this.name = this.sharedService.currentUser.name;
      return true;
    }
    return false;
  }

  logout() {
    this.userService.logout()
    this.sharedService.updateCurrentUser();
    this.name = 'Guest';
  }
}
