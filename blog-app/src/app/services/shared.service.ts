import {Injectable, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {BlogsService} from './blogs.service';

interface User {
  id: number;
  username: string;
  password: string;
  name: string;
  favourites: number[];
}

interface Blog {
  id: number;
  title: string;
  body: string;
  authorId: number;
  author: string;
  category: string;
  postedOn: string;
}

@Injectable()
export class SharedService implements OnInit {
  categories = ['Technology', 'Management', 'Medicine', 'Entertainment'];
  currentUser: User;
  blogs: Blog[] = new Array<Blog>();

  constructor(private userService: UserService,
              private blogsService: BlogsService) {}

  ngOnInit() {
    this.updateCurrentUser();
    this.reloadBlogs();
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  updateCurrentUser() {
    if (this.isLoggedIn()) {
      let id = localStorage.getItem('currentUser');
      this.userService.getUserById(id)
        .subscribe((data) => {
          if (data.length === 1) {
            this.currentUser = data[0];
          }
        });
    } else {
      this.currentUser = null;
    }
  }

  reloadBlogs() {
    this.blogs = [];
    this.blogsService.getAllBlogs()
      .subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.blogs.push(data[i]);
        this.getAuthor(this.blogs[i]);
      }
    });
  }

  // remove deleted blog from favourites
  handleDeleteBlog(id) {
    this.userService.getAllUsers()
      .subscribe(users => {
        for (let i = 0; i < users.length; i++) {
          let index = users[i].favourites.findIndex(x => x === id);
          if (index > -1) {
            users[i].favourites.splice(index, 1);
            this.userService.updateUserData(users[i]).subscribe();
          }
        }
      });
  }
  getAuthor(blog) {
    this.userService.getUserById(blog.authorId)
      .subscribe((users: any) => {
        if (users) {
          blog.author = users[0].name;
        }
      });
  }
}
