import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";
import {BlogsService} from "../../blogs.service";

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  // categories: string[];

  title: string;
  category: string;
  body: string;

  constructor(public sharedService: SharedService, private blogsService: BlogsService) { }

  ngOnInit() {
    // this.categories = this.sharedService.categories;
  }
  postBlog() {
    let blog = {
      title: this.title,
      body: this.body,
      category: this.category,
      authorId: this.sharedService.currentUser.id,
      postedOn: (new Date()).getTime()
    };
    this.sharedService.postBlog(blog);
    this.title = '';
    this.category = '';
    this.body = '';
  }
}
