import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '@app/core/http/api-request.service';

@Component({
  selector: 'app-week-days',
  templateUrl: './week-days.component.html',
  styleUrls: ['./week-days.component.scss']
})
export class WeekDaysComponent implements OnInit {
  constructor(private api: ApiRequestService) {}

  ngOnInit() {}
}
