import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Output() categoryEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchEmitter: EventEmitter<string> = new EventEmitter<string>();

  categories: string[];
  currentActive = 'All';
  searchStr: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.categories = this.sharedService.categories;
  }
  setCategory(category: string) {
    this.currentActive = category;
    this.categoryEmitter.emit(category);
  }
  searchBlogs() {
    console.log(this.searchStr);
    this.searchEmitter.emit(this.searchStr);
  }
}
