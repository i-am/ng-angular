import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('ChildName')name;
  @Output () notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  changeName(name) {
    this.name = name;
    this.notify.emit(this.name);
  }

}
