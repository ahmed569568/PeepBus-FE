import { Injectable } from '@angular/core';
import { RootService } from '@app/core/root.service';
import { ApiRequestService } from '@app/core/http/api-request.service';
import { ApiResponse, ItemProps } from '@app/interfaces';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';
import { CustomValidators } from '@app/core/classes/custom-validations';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiclesStudentService extends RootService {
  constructor(toast: ToastrService, router: Router, api: ApiRequestService) {
    super(toast, router, api);
  }

  routerPrefix(val: string = '') {
    return val ? val : 'assign';
  }

  get featureProps(): ItemProps[] {
    return [
      {
        name: 'status',
        prop: 'vehicle_id',
        listing: true,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 200,
        validations: [Validators.required]
      },
      {
        name: 'name',
        prop: 'name',
        listing: true,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 200,
        validations: [Validators.required]
      },
      {
        name: 'parent_name',
        prop: 'parent.full_name',
        listing: true,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 200,
        validations: [Validators.required]
      }
    ];
  }

  /**
   * Generic Show Action Request
   * @param id: Item Identifier
   */
  fetchSummary(id: number) {
    return this.doFetchSummary(this.getFunctionURL(`${id}/summary`));
  }

  doFetchSummary(url: string) {
    return this.api.get(url).pipe(
      map((response: ApiResponse) => {
        return response.response;
      })
    );
  }
}
