import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogsService} from "../services/blogs.service";
import {UserService} from "../services/user.service";
import {SharedService} from "../services/shared.service";

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
  id: number;
  sub: any;
  constructor(private activatedRoute: ActivatedRoute,
              private blogsService: BlogsService,
              private userService: UserService) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe( params => {
      this.id = +params['id'];
      console.log(this.id);
      this.getBlogByUrl();
    });
  }
  getBlogByUrl() {
    this.blogsService.getBlogById(this.id).subscribe((data) => {
      if (data.length === 1) {
        this.title = data[0].title;
        this.body = data[0].body;
        this.postedOn = data[0].postedOn;
        this.userService.getUserById(data[0].authorId).subscribe( userData => {
          if (userData) {
            this.author = userData[0].name;
          }
        });
      }
    });
  }
}
