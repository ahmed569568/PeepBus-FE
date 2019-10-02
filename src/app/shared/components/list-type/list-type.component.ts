import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-type',
  templateUrl: './list-type.component.html',
  styleUrls: ['./list-type.component.scss']
})
export class ListTypeComponent implements OnInit {
  @Input() groupView: any;
  @Input() listOptions: any;
  @Input() controller: any;
  @Input() service: any;

  @Output() switchViewEvent: EventEmitter<any> = new EventEmitter();
  @Output() doActionEvent: EventEmitter<any> = new EventEmitter();

  summary: any;

  constructor() {}

  ngOnInit() {
    this.loadResources();
  }

  /**
   * fetch single item data from service
   * and fill form with it in Edit forms
   */
  loadResources(): void {
    this.service.fetchSummary().subscribe(
      (response: any) => {
        this.summary = response;
      },
      (err: any) => {
        console.log(err);
        // this.service.errorHandle(err);
      }
    );
  }

  doAction(actionType: string, options?: {}) {
    this.doActionEvent.emit({ actionType, options });
  }
}
