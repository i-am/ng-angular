import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-btns',
  templateUrl: './search-btns.component.html',
  styleUrls: ['./search-btns.component.css']
})
export class SearchBtnsComponent implements OnInit {
  srch = "Google Search";
  lucky = "I'm Feeling Lucky"
  constructor() { }

  ngOnInit() {
  }

}
