import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {BlogsService} from '../../services/blogs.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  title: string;
  category: string;
  body: string;

  constructor(public sharedService: SharedService,
              private blogsService: BlogsService,
              public toastr: ToastsManager, vcr: ViewContainerRef) { this.toastr.setRootViewContainerRef(vcr); }

  ngOnInit() {
  }
  postBlog() {
    let blog = {
      title: this.title,
      body: this.body,
      category: this.category,
      authorId: this.sharedService.currentUser.id,
      postedOn: (new Date()).getTime()
    };
    this.blogsService.postBlog(blog)
      .subscribe( (data) => {
        if (data) {
          this.showSuccess();
          this.sharedService.reloadBlogs();
        }
      });
    this.title = '';
    this.category = '';
    this.body = '';
  }

  showSuccess() {
    this.toastr.success('New blog added!',
                        ' Add Success!',
                        {toastLife: 3000,
                          positionClass: 'toast-top-right',
                          titleClass: 'success-title',
                          messageClass: 'success-msg',
                          animate: 'fade'});
  }
}
