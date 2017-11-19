import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponentComponent {
  @Input('person')person;
  constructor() { }
}
