import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';
import {FormsModule} from '@angular/forms';
import { ChildComponent } from './two-way-data/child/child.component';
import {ShoppingService} from './shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    TwoWayDataComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
