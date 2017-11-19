import {Component, Input} from '@angular/core';
// import {UserService} from '../user.service';
import {SharedService} from '../services/shared.service';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  name: string;
  constructor(public sharedService: SharedService,
              public userService: UserService) { this.name = 'Guest'; }
  isLoggedIn() {
    if (this.sharedService.isLoggedIn()) {
      if (this.name && this.sharedService.currentUser) {
        this.name = this.sharedService.currentUser.name;
        return true;
      }
    }
    return false;
  }

  logout() {
    this.userService.logout();
    this.sharedService.updateCurrentUser();
    this.name = 'Guest';
  }
}
