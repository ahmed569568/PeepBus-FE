import { Injectable } from '@angular/core';
import { RootService } from '@app/core/root.service';
import { ApiRequestService } from '@app/core/http/api-request.service';
import { ItemProps } from '@app/interfaces';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends RootService {
  constructor(toast: ToastrService, router: Router, api: ApiRequestService) {
    super(toast, router, api);
    this.lists['students-status'] = [{ id: 'active', name: 'active' }, { id: 'inactive', name: 'inactive' }];
    this.lists['students-gender'] = [{ id: 'male', name: 'male' }, { id: 'female', name: 'female' }];
  }

  routerPrefix(val: string = '') {
    return val ? val : 'students';
  }

  get featureProps(): ItemProps[] {
    return [
      {
        name: 'student_image',
        prop: 'image',
        listing: true,
        displayType: 'image',
        formField: false,
        width: 50
      },
      {
        name: 'name',
        prop: 'name',
        listing: true,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 100
      },
      {
        name: 'desc',
        prop: 'desc',
        listing: false,
        formField: true,
        formFieldType: 'text',
        required: true
      },
      {
        name: 'address',
        prop: 'address',
        listing: false,
        formField: true,
        formFieldType: 'text',
        required: true
      },
      {
        name: 'status',
        prop: 'status',
        listing: true,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'students-status',
        required: true,
        width: 100
      },
      {
        name: 'gender',
        prop: 'gender',
        listing: true,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'students-gender',
        required: true,
        width: 100
      },
      {
        name: 'location_id',
        prop: 'location.address',
        listing: false,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'students-locations',
        width: 300
      },
      {
        name: 'quantity',
        prop: 'quantity',
        listing: true,
        formField: true,
        required: true,
        width: 100
      }
    ];
  }
}
