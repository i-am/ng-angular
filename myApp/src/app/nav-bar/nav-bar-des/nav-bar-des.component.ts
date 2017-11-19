import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-des',
  templateUrl: './nav-bar-des.component.html',
  styleUrls: ['./nav-bar-des.component.css']
})
export class NavBarDesComponent{
  @Input('menuItem') menuItem;
  update(des: string) {
    this.menuItem.des = des;
  }
}
