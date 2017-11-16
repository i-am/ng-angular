import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  @Input() category;
  @Input() searchStr;
  constructor(public sharedService: SharedService) { }
  ngOnInit() {
  }
  isSubstringOf(title) {
    if ((!this.searchStr) || title.toLowerCase().indexOf(this.searchStr.toLowerCase()) !== -1) {
      return true;
    }
    return false;
  }
}
