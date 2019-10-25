import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-grid-summary',
  templateUrl: './list-grid-summary.component.html',
  styleUrls: ['./list-grid-summary.component.scss']
})
export class ListGridSummaryComponent implements OnInit {
  @Input() groupView: any;
  @Input() listOptions: any;
  @Input() controller: any;
  @Input() service: any;

  @Output() switchViewEvent: EventEmitter<any> = new EventEmitter();
  @Output() doActionEvent: EventEmitter<any> = new EventEmitter();

  summary: any;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((routeInfo: any) => {
      if (routeInfo.id) {
        // this.isEdit = true;
        this.loadResources(routeInfo.id);
      } else {
        this.loadResources();
      }
    });
  }

  /**
   * fetch single item data from service
   * and fill form with it in Edit forms
   */
  loadResources(id: number = 0): void {
    this.service.fetchSummary(id).subscribe(
      (response: any) => {
        this.summary = response;
        console.log(this.summary);
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
