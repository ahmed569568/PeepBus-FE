import { Injectable } from '@angular/core';
import { RootService } from '@app/core/root.service';
import { ApiRequestService } from '@app/core/http/api-request.service';
import { ApiResponse } from '@app/interfaces';
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

  get featureProps(): [] {
    return [];
  }

  loadData(branchId: number) {
    let query;
    if (branchId) {
      query = `?branch_id=${branchId}`;
    } else {
      query = '';
    }
    return this.api.get(`operations/statistics${query}`, '').pipe(
      map((resp: ApiResponse) => {
        return resp.data;
      })
    );
  }
}
