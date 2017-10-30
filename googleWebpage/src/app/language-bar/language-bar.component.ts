import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.css']
})
export class LanguageBarComponent implements OnInit {
  str = 'Google offered in:';
  link = ['हिन्दी','বাংলা', 'తెలుగు','मराठी', 'தமிழ்','ગુજરાતી','ಕನ್ನಡ','മലയാളം','ਪੰਜਾਬੀ'];

  constructor() { }

  ngOnInit() {
  }

}
