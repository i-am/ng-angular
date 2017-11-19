import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-items',
  templateUrl: './nav-bar-items.component.html',
  styleUrls: ['./nav-bar-items.component.css']
})
export class NavBarItemsComponent implements OnInit {
  @Input('menuItem') item;
  ngOnInit() {}
}
