import { Component, OnInit } from '@angular/core';
import {BlogsService} from "../blogs.service";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  category: string;
  searchStr: string;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.category = 'All';
  }
  getCategory(event) {
    console.log(event);
    this.category = event;
  }
  isLoggedIn() {
    return this.sharedService.isLoggedIn();
  }
  filterSearch(event) {
    this.searchStr = event;
  }
}
