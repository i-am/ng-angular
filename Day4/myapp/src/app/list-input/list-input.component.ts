import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.css']
})
export class ListInputComponent {
  // @Input('inpName') inpName;
  // @Input('inpDesc') inpDesc;
  @Output() addEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateEmitter: EventEmitter<any> = new EventEmitter<any>();

  btnTxtAddEdt = 'Add';
  editMode = false;
  inpName: string;
  inpDesc: string;
  editId: number;
  constructor() { }

  emitAddEditWidget() {
    if (!this.editMode) {
      let widget = {
        name: this.inpName,
        desc: this.inpDesc,
      };
      this.addEmitter.emit(widget);
    } else {
      let widget = {
        name: this.inpName,
        desc: this.inpDesc,
        id: this.editId
      };
      this.updateEmitter.emit(widget);
      this.toggleEdit();
    }
  }
  toggleEdit() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.btnTxtAddEdt = 'Update';
    } else {
      this.btnTxtAddEdt = 'Add';
      this.inpName = '';
      this.inpDesc = '';
    }
  }
}
