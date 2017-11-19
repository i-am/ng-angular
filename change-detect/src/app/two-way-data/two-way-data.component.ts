import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data',
  templateUrl: './two-way-data.component.html',
  styleUrls: ['./two-way-data.component.css']
})
export class TwoWayDataComponent {
  name: string;
  constructor() { }


  changeName(event) {
    this.name = event;
  }
}
