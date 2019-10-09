import { Component, OnInit } from '@angular/core';
import { CoreListComponent } from '@app/core/components/core-list/core-list.component';
import { DashboardService } from '@app/dashboard/dashboard.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: '../../../core/components/core-list/core-list.component.html'
})
export class VehiclesListComponent extends CoreListComponent {
  constructor(service: DashboardService) {
    super(service);
  }
}
