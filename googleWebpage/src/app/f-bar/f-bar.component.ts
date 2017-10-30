import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-bar',
  templateUrl: './f-bar.component.html',
  styleUrls: ['./f-bar.component.css']
})
export class FBarComponent implements OnInit {
  lLink = ['Advertising', 'Business', 'About'];
  rLink = ['Privacy', 'Terms', 'Settings', 'Use Google.com'];
  constructor() { }

  ngOnInit() {
  }

}
