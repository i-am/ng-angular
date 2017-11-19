import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  opt1 = 'link 1';
  opt2 = 'link 2';
  navBarHeading = 'My Nav Bar';
  constructor() { }

  ngOnInit() {
  }

}
