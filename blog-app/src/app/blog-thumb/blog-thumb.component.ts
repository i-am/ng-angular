import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../user.service";
import {SharedService} from "../shared.service";
import {BlogsService} from "../blogs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-thumb',
  templateUrl: './blog-thumb.component.html',
  styleUrls: ['./blog-thumb.component.css']
})
export class BlogThumbComponent implements OnInit {
  @Input() blog;
  @Output() changeEvent: EventEmitter<number> = new EventEmitter<number>()
  author: string;

  constructor(private userService: UserService,
              private blogsService: BlogsService,
              private sharedService: SharedService) { }
  ngOnInit() {
  }
  isFav() {
    if (this.sharedService.isLoggedIn()) {
      for (let i = 0; i < this.sharedService.currentUser.favourites.length; i++) {
        if (this.blog.id === this.sharedService.currentUser.favourites[i]) {
          return true;
        }
      }
    }
    return false;
  }
  isAuthor() {
    if (this.sharedService.isLoggedIn()) {
      if (this.blog.authorId === this.sharedService.currentUser.id) {
        return true;
      }
    }
    return false;
  }
  toggleFav() {
    if (this.isFav()) {
      this.sharedService.currentUser.favourites
        .splice(this.sharedService.currentUser.favourites.findIndex(x => x === this.blog.id), 1);
    } else {
      this.sharedService.currentUser.favourites.push(this.blog.id);
    }
    this.userService.updateUserData(this.sharedService.currentUser)
      .subscribe();
  }
  deleteBlog() {
    this.blogsService.deleteBlog(this.blog.id).subscribe((data) => {
      if (data) {
        this.sharedService.reloadBlogs();
        this.changeEvent.emit(this.blog.id);
      }
    });
    // TODO: clear id from user favourites
    this.sharedService.handleDeleteBlog(this.blog.id);
  }
}
