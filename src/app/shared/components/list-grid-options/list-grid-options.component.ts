import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-grid-options',
  templateUrl: './list-grid-options.component.html',
  styleUrls: ['./list-grid-options.component.scss']
})
export class ListGridOptionsComponent {
  @Input() groupView: any;
  @Input() listOptions: any;
  @Input() controller: any;

  @Output() switchViewEvent: EventEmitter<any> = new EventEmitter();
  @Output() doActionEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  doAction(actionType: string, options?: {}) {
    this.doActionEvent.emit({ actionType, options });
  }
}
