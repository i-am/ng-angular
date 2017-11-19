import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlogsService} from '../../services/blogs.service';
import {SharedService} from '../../services/shared.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit, OnDestroy {
  title: string;
  category: string;
  body: string;
  id: number;
  private sub: any;
  constructor(private activatedRoute: ActivatedRoute,
              private blogsService: BlogsService,
              public sharedService: SharedService,
              public toastr: ToastsManager, vcr: ViewContainerRef) { this.toastr.setRootViewContainerRef(vcr); }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe( params => {
      this.id = +params['id'];
      this.getBlogById();
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getBlogById() {
    this.blogsService.getBlogById(this.id).subscribe((data) => {
      if (data.length === 1) {
        this.title = data[0].title;
        this.category = data[0].category;
        this.body = data[0].body;
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

    this.blogsService.updateBlog(blogData)
      .subscribe(data => {
        this.showSuccess();
        this.sharedService.reloadBlogs();
      });
    this.title = '';
    this.category = '';
    this.body = '';
  }
  showSuccess() {
    this.toastr.success('Blog edited!',
      'Edit Success!',
      {toastLife: 3000,
        positionClass: 'toast-top-right',
        titleClass: 'success-title',
        messageClass: 'success-msg',
        animate: 'fade'});
  }
}
