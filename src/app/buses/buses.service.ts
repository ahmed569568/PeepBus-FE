import { Injectable } from '@angular/core';
import { RootService } from '@app/core/root.service';
import { ApiRequestService } from '@app/core/http/api-request.service';
import { ItemProps } from '@app/interfaces';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BusesService extends RootService {
  constructor(toast: ToastrService, router: Router, api: ApiRequestService) {
    super(toast, router, api);
  }

  routerPrefix(val: string = '') {
    return val ? val : 'vehicles';
  }

  get featureProps(): ItemProps[] {
    return [
      {
        name: 'name',
        prop: 'name',
        listing: true,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 300
      },
      {
        name: 'driver_id',
        prop: 'driver.name',
        listing: true,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'vehicles-drivers',
        required: true,
        width: 300
      },
      {
        name: 'group_id',
        prop: 'group.name',
        listing: true,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'vehicles-groups',
        width: 300
      },
      {
        name: 'device_type',
        prop: 'device_type',
        listing: true,
        formField: true,
        formFieldType: 'text',
        width: 300
      },
      {
        name: 'imei',
        prop: 'imei',
        listing: true,
        formField: true,
        formFieldType: 'text',
        width: 300
      }
    ];
  }
}
