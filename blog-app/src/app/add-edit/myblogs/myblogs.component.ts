import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit() {
  }
  isAuthor(authorId) {
    if (this.sharedService.isLoggedIn() && authorId === this.sharedService.currentUser.id) {
      return true;
    }
    return false;
  }
}
