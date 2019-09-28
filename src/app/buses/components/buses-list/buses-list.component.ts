import { Component, OnInit } from '@angular/core';
import { CoreListComponent } from '@app/core/components/core-list/core-list.component';
import { UtilitiesService } from '@app/shared/services/utilities.service';
import { Router } from '@angular/router';
import { BusesService } from '@app/buses/buses.service';

@Component({
  selector: 'app-branches-list',
  templateUrl: '../../../core/components/core-list/core-list.component.html'
})
export class BusesListComponent extends CoreListComponent implements OnInit {
  constructor(service: BusesService, us: UtilitiesService, router: Router) {
    super(service, us, router);
  }

  ngOnInit() {
    return super.ngOnInit();
  }
}
