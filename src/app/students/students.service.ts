import { Injectable } from '@angular/core';
import { RootService } from '@app/core/root.service';
import { ApiRequestService } from '@app/core/http/api-request.service';
import { ItemProps } from '@app/interfaces';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';

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
        prop: 'parent.image',
        listing: true,
        displayType: 'image',
        formField: true,
        formFieldType: 'file_input',
        width: 50,
        validations: [Validators.required]
      },
      {
        name: 'name',
        prop: 'name',
        listing: true,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 100,
        validations: [Validators.required]
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
        required: true,
        validations: [Validators.required]
      },
      {
        name: 'location_id',
        prop: 'location.address',
        listing: false,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'students-locations',
        width: 300,
        validations: [Validators.required]
      },
      {
        name: 'quantity',
        prop: 'quantity',
        listing: false,
        formField: true,
        required: true,
        width: 100
      },
      {
        name: 'parent_full_name',
        prop: 'parent.full_name',
        listing: true,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 100
      },
      {
        name: 'status',
        prop: 'status',
        listing: true,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'students-status',
        required: true,
        width: 100,
        validations: [Validators.required]
      },
      {
        name: 'gender',
        prop: 'gender',
        listing: false,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'students-gender',
        required: true,
        width: 100,
        validations: [Validators.required]
      }
    ];
  }
}
