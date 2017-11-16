import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogsService} from "../blogs.service";
import {UserService} from "../user.service";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  title: string;
  body: string;
  author: string;
  postedOn: number;
  constructor(private activatedRoute: ActivatedRoute,
              private blogsService: BlogsService,
              private userService: UserService,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.getBlogByUrl();
  }
  getBlogByUrl() {
    let id = this.activatedRoute.snapshot.params['id?'];
    this.blogsService.getBlogById(id).subscribe((data) => {
      if (data.length === 1) {
        this.title = data[0].title;
        // this.blog.category = data[0].category;
        this.body = data[0].body;
        this.postedOn = data[0].postedOn;
        this.userService.getUserById(data[0].authorId).subscribe( userData => {
          if (userData) {
            this.author = userData[0].name;
            console.log(userData);
            console.log(this.author);
          }
        });
      }
    });
  }
}
