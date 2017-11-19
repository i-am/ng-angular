import { Component, OnInit } from '@angular/core';
import {data} from './child-data';
import {ShoppingService} from "./shopping.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  // person = new data("qwer", 2);
  //
  // changeName() {
  //   this.person = new data("asdf",2);
  // }

  constructor(private shopping: ShoppingService) {}
  ngOnInit() {
    console.log(this.shopping.shopping);
  }
}
