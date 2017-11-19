import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit() {
  }
  isFavourite(id) {
    if (this.sharedService.currentUser) {
      for (let i = 0; i < this.sharedService.currentUser.favourites.length; i++) {
        if (id === this.sharedService.currentUser.favourites[i]) {
          return true;
        }
      }
    }
    return false;
  }
}
