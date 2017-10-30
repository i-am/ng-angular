import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  gmail = 'Gmail';
  images = 'Images';
  signIn = 'Sign in';
  tooltipTxt = 'Google apps';
  constructor() { }

  ngOnInit() {
  }

}
