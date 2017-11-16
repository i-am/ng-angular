import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  // currentUser: any;
  // blogs: any[] = new Array<any>();
  constructor(public sharedService: SharedService) { }

  ngOnInit() {
    // this.refreshBlogs();
  }
  isFavourite(id) {
    for (let i = 0; i < this.sharedService.currentUser.favourites.length; i++) {
      if (id === this.sharedService.currentUser.favourites[i]) {
        return true;
      }
    }
    return false;
  }
  // refreshBlogs() {
  //   this.blogs = this.sharedService.blogs;
  // }
}
