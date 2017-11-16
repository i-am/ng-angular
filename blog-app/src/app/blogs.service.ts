import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";

const BASE_URL = 'http://localhost:3000/Blogs';
const header = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class BlogsService {

  constructor(private http: Http) { }
  getAllBlogs() {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }
  getBlogById(id) {
    return this.http.get(BASE_URL + '?id=' + id)
      .map(res => res.json());
  }
  postBlog(data) {
    // console.log("posting data..")
    return this.http.post(BASE_URL, data, header)
      .map(res => res.json());
  }
  deleteBlog(id) {
    // console.log(BASE_URL + '/' + id);
    return this.http.delete(BASE_URL + '/' + id)
      .map(res => res.json());
  }
  updateBlog(data) {
    return this.http.patch(BASE_URL + '/' + data.id,
                          {title: data.title, category: data.category, body: data.body},
                          header)
      .map(res => res.json());
  }
}
