import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LogoComponent } from './logo/logo.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBtnsComponent } from './search-btns/search-btns.component';
import { LanguageBarComponent } from './language-bar/language-bar.component';
import { FBarComponent } from './f-bar/f-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LogoComponent,
    SearchBarComponent,
    SearchBtnsComponent,
    LanguageBarComponent,
    FBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
