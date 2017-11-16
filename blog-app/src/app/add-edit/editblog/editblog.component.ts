import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogsService} from "../../blogs.service";
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  title: string;
  category: string;
  body: string;
  id: number;
  constructor(private activatedRoute: ActivatedRoute,
              private blogsService: BlogsService,
              public sharedService: SharedService) {}

  ngOnInit() {
    this.getBlogById();
  }
  getBlogById() {
    let id = this.activatedRoute.snapshot.params['id?'];
    this.blogsService.getBlogById(id).subscribe((data) =>{
      if (data.length === 1) {
        this.title = data[0].title;
        this.category = data[0].category;
        this.body = data[0].body;
        this.id = data[0].id;
      }
    });
  }
  updateBlog() {
    let blogData = {
      id: this.id,
      title: this.title,
      category: this.category,
      body: this.body
    };
    this.sharedService.updateBlog(blogData);
  }
}
