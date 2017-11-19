import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  selected: string;
  menuItems: any[] = [
  {
    'item': 'item1',
    'des': 'des1'
  },
  {
    'item': 'item2',
    'des': 'des2'
  },
  {
    'item': 'item3',
    'des': 'des3'
  }
];
  select(name: string) {
    this.selected = name;
}

  ngOnInit() {}
}
