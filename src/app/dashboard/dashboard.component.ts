import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@app/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private service: DashboardService) {}

  ngOnInit() {}
}
