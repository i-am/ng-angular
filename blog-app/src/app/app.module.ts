import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, ViewContainerRef} from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {UserService} from "./services/user.service";
import {HttpModule} from "@angular/http";
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './home/favourites/favourites.component';
import { BlogListComponent } from './home/blog-list/blog-list.component';
import { BlogThumbComponent } from './blog-thumb/blog-thumb.component';
import { RouterModule} from "@angular/router"
import {BlogsService} from "./services/blogs.service";
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { AddblogComponent } from './add-edit/addblog/addblog.component';
import {SharedService} from "./services/shared.service";
import {LoginRouteGuard} from "./services/login-route-guard";
import { MyblogsComponent } from './add-edit/myblogs/myblogs.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { EditblogComponent } from './add-edit/editblog/editblog.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

const AppRoutes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'blog/:id', component: BlogViewComponent},
  {path: 'addblog', component: AddblogComponent, canActivate: [LoginRouteGuard]},
  {path: 'editblog/:id', component: EditblogComponent, canActivate: [LoginRouteGuard]},
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FavouritesComponent,
    BlogListComponent,
    BlogThumbComponent,
    NavbarComponent,
    CategoriesComponent,
    AddblogComponent,
    MyblogsComponent,
    AddEditComponent,
    EditblogComponent,
    BlogViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [UserService, BlogsService, SharedService, LoginRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
