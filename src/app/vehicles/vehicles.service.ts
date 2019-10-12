import { Injectable } from '@angular/core';
import { RootService } from '@app/core/root.service';
import { ApiRequestService } from '@app/core/http/api-request.service';
import { ItemProps } from '@app/interfaces';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService extends RootService {
  constructor(toast: ToastrService, router: Router, api: ApiRequestService) {
    super(toast, router, api);
  }

  routerPrefix(val: string = '') {
    return val ? val : 'vehicles';
  }

  get featureProps(): ItemProps[] {
    return [
      {
        name: 'driver_image',
        prop: 'driver.image',
        listing: true,
        displayType: 'image',
        formField: false,
        width: 150
      },
      {
        name: 'number',
        prop: 'number',
        listing: true,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 200
      },
      {
        name: 'driver_id',
        prop: 'driver.name',
        listing: true,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'vehicles-drivers',
        required: true,
        width: 200
      },
      {
        name: 'group_id',
        prop: 'group.name',
        listing: false,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'vehicles-groups',
        width: 300
      },
      {
        name: 'location_id',
        prop: 'location.name',
        listing: false,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'vehicles-locations',
        width: 300
      },
      {
        name: 'warehouse_id',
        prop: 'warehouse.name',
        listing: false,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'vehicles-warehouses',
        width: 300
      },
      {
        name: 'device_type',
        prop: 'device_type',
        listing: false,
        formField: true,
        formFieldType: 'text',
        width: 300
      },
      {
        name: 'students_count',
        prop: 'students_count',
        listing: true,
        formField: false,
        width: 200
      },
      {
        name: 'capacity',
        prop: 'capacity',
        listing: true,
        formField: true,
        formFieldType: 'text',
        width: 100
      },
      {
        name: 'imei',
        prop: 'imei',
        listing: false,
        formField: true,
        formFieldType: 'text',
        width: 300
      }
    ];
  }
}
