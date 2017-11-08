import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {WidgetFirstService} from "./widget-first.service"
import {FormsModule} from "@angular/forms";
// import {RouterModule} from "@angular/router";
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListInputComponent } from './list-input/list-input.component'

// const AppRoutes = [
//   {path: '', redirectTo: 'home', pathMatch: 'full'},
//   {path: 'home', component: ListDetailComponent, ListInputComponent},
//   {path: 'about', component: ListDetailComponent, ListInputComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    ListDetailComponent,
    ListInputComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // RouterModule.forRoot(AppRoutes)
  ],
  providers: [WidgetFirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
