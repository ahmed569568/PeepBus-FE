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
      }
    ];
  }
}
