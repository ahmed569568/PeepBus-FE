import { Injectable } from '@angular/core';
import { RootService } from '@app/core/root.service';
import { ApiRequestService } from '@app/core/http/api-request.service';
import { ApiResponse, ItemProps } from '@app/interfaces';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends RootService {
  constructor(protected toast: ToastrService, protected router: Router, protected api: ApiRequestService) {
    super(toast, router, api);
  }

  routerPrefix(val: string = '') {
    return val ? val : 'control';
  }

  listPrepareOperations(data: any) {
    data = { response: { data: data.response } };
    return data;
  }

  storeResourceListResponse(response: any) {
    super.storeResourceListResponse(response);
    this.lists.control = response.response;
  }

  get featureProps(): ItemProps[] {
    return [
      {
        name: 'number',
        prop: 'number',
        listing: true,
        formField: false,
        width: 100
      }
      // {
      //   name: 'driver_id',
      //   prop: 'driver_id',
      //   listing: true,
      //   formField: false,
      //   width: 100
      // },
      // {
      //   name: 'status',
      //   prop: 'status',
      //   listing: true,
      //   formField: false,
      //   width: 100
      // },
      // {
      //   name: 'driver_name',
      //   prop: 'driver.name',
      //   listing: true,
      //   formField: false,
      //   width: 100
      // },
      // {
      //   name: 'driver_phone',
      //   prop: 'driver.phone',
      //   listing: true,
      //   formField: false,
      //   width: 100
      // }
    ];
  }
}
