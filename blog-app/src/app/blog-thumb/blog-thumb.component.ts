import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {SharedService} from '../services/shared.service';
import {BlogsService} from '../services/blogs.service';


@Component({
  selector: 'app-blog-thumb',
  templateUrl: './blog-thumb.component.html',
  styleUrls: ['./blog-thumb.component.css']
})
export class BlogThumbComponent implements OnInit {
  @Input() blog;
  author: string;

  constructor(private userService: UserService,
              private blogsService: BlogsService,
              private sharedService: SharedService) {}
  ngOnInit() {
  }
  isFav() {
    if (this.sharedService.isLoggedIn() && this.sharedService.currentUser) {
      for (let i = 0; i < this.sharedService.currentUser.favourites.length; i++) {
        if (this.blog.id === this.sharedService.currentUser.favourites[i]) {
          return true;
        }
      }
    }
    return false;
  }
  isAuthor() {
    if (this.sharedService.isLoggedIn() && this.sharedService.currentUser) {
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
        this.sharedService.handleDeleteBlog(this.blog.id);
      }
    });
  }
}
