import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WidgetFirstService} from "../widget-first.service"

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent{
  @Input('Items') items;
  @Output() deleteEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() editEmitter: EventEmitter<any> = new EventEmitter<any>();
  emitDelete(id) {
    this.deleteEmitter.emit(id);
  }
  emitEdit(item) {
    this.editEmitter.emit(item);
  }
}
