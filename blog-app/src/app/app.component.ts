import {Component, OnInit} from '@angular/core';
import {SharedService} from "./services/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    this.sharedService.updateCurrentUser();
    this.sharedService.reloadBlogs();
  }
}
