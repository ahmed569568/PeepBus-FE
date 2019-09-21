import { Injectable } from '@angular/core';
import { RootService } from '@app/core/root.service';
import { ApiRequestService } from '@app/core/http/api-request.service';
import { ItemProps } from '@app/interfaces';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DriversService extends RootService {
  constructor(toast: ToastrService, router: Router, api: ApiRequestService) {
    super(toast, router, api);
  }

  routerPrefix(val: string = '') {
    return val ? val : 'drivers';
  }

  get featureProps(): ItemProps[] {
    return [
      {
        name: 'image',
        prop: 'image',
        listing: true,
        formField: true,
        displayType: 'image',
        formFieldType: 'file_input',
        required: true,
        width: 300
      },
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
        name: 'phone',
        prop: 'phone',
        listing: true,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 300
      },
      {
        name: 'creator',
        prop: 'creator.username',
        listing: false,
        formField: false,
        width: 300
      }
    ];
  }
}
