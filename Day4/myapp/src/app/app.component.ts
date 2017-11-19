import {Component, OnInit, ViewChild} from '@angular/core';
import {WidgetFirstService} from "./widget-first.service";
import {ListInputComponent} from "./list-input/list-input.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // linkHome = '/home';
  // linkAbout = '/about';
  @ViewChild(ListInputComponent)
    private lic: ListInputComponent;

  items: Object[];

  inpName: string;
  inpDesc: string;

  constructor(private request: WidgetFirstService) {}
  ngOnInit() {
    this.RefreshWidget();
  }
  RefreshWidget() {
    this.request.loadData()
      .subscribe((data) => {
        this.items = data;
      });
  }
  addWidget(event) {
    if (event.name.length > 0) {
      this.request.postData(event)
        .subscribe(data => {
          this.RefreshWidget();
        });
    }
  }
  deleteWidget(event) {
    this.request.deleteData(event)
      .subscribe(data => {
        this.RefreshWidget();
      });
  }
  editWidget(event) {
    this.lic.inpName = event.name;
    this.lic.inpDesc = event.desc;
    this.lic.editId = event.id;
    this.lic.toggleEdit();
  }
  updateWidget(event) {
    this.request.updateData(event)
      .subscribe(data => {
        this.RefreshWidget();
      });
  }
}
