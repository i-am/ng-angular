import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarItemsComponent } from './nav-bar/nav-bar-items/nav-bar-items.component';
import { NavBarDesComponent } from './nav-bar/nav-bar-des/nav-bar-des.component';
import { ColorChangeDirective } from './color-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarItemsComponent,
    NavBarDesComponent,
    ColorChangeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
