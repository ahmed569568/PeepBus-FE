import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-grid-summary',
  templateUrl: './list-grid-summary.component.html',
  styleUrls: ['./list-grid-summary.component.scss']
})
export class ListGridSummaryComponent implements OnInit {
  @Input() groupView: any;
  @Input() listOptions: any;
  @Input() controller: any;

  @Output() switchViewEvent: EventEmitter<any> = new EventEmitter();
  @Output() doActionEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(this.controller);
  }

  doAction(actionType: string, options?: {}) {
    this.doActionEvent.emit({ actionType, options });
  }
}
