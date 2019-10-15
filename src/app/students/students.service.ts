import { Injectable } from '@angular/core';
import { RootService } from '@app/core/root.service';
import { ApiRequestService } from '@app/core/http/api-request.service';
import { ItemProps } from '@app/interfaces';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';
import { UtilitiesService } from '@app/shared/services/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends RootService {
  constructor(toast: ToastrService, router: Router, api: ApiRequestService, private us: UtilitiesService) {
    super(toast, router, api);
    this.lists['students-status'] = [{ id: 'active', name: 'active' }, { id: 'inactive', name: 'inactive' }];
    this.lists['students-gender'] = [{ id: 'male', name: 'male' }, { id: 'female', name: 'female' }];

    this.us.dialogActionObservable$.subscribe(data => {
      if (data) {
        if (data.optionValue) {
          return this.router.navigate([`${this.cid}/create`], { queryParams: { condition: 'new_parent' } });
        } else {
          return this.router.navigate([`${this.cid}/create`], { queryParams: { condition: 'exist_parent' } });
        }
      }
    });
  }

  routerPrefix(val: string = '') {
    return val ? val : 'students';
  }

  get featureProps(): ItemProps[] {
    return [
      {
        name: 'parent_full_name',
        prop: 'parent.name',
        listing: false,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 100,
        condition: 'new_parent'
      },
      {
        name: 'parent_username',
        prop: 'parent.username',
        listing: false,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 100,
        condition: 'new_parent'
      },
      {
        name: 'parent_phone',
        prop: 'parent.phone',
        listing: false,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 100,
        condition: 'new_parent'
      },
      {
        name: 'parent_email',
        prop: 'parent.email',
        listing: false,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 100,
        condition: 'new_parent'
      },
      {
        name: 'parent_password',
        prop: 'parent.password',
        listing: false,
        formField: true,
        formFieldType: 'password',
        required: true,
        width: 100,
        condition: 'new_parent'
      },
      {
        name: 'parent_image',
        prop: 'parent.image',
        listing: false,
        displayType: 'image',
        formField: true,
        formFieldType: 'file_input',
        width: 50,
        validations: [Validators.required],
        condition: 'new_parent'
      },
      {
        name: 'name',
        prop: 'student.name',
        listing: false,
        formField: true,
        formFieldType: 'text',
        required: true,
        width: 100
      },
      {
        name: 'status',
        prop: 'student.status',
        listing: false,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'students-status',
        required: true,
        width: 100
      },
      {
        name: 'gender',
        prop: 'students.gender',
        listing: false,
        formField: true,
        formFieldType: 'select',
        listPrefix: 'students-gender',
        required: true,
        width: 100
      },
      {
        name: 'image',
        prop: 'student.image',
        listing: false,
        displayType: 'image',
        formField: true,
        formFieldType: 'file_input',
        width: 50
      },
      {
        name: 'address',
        prop: 'location.address',
        listing: false,
        formField: true,
        formFieldType: 'text',
        required: true
      },
      {
        name: 'lat',
        prop: 'location.lat',
        listing: false,
        formField: true,
        formFieldType: 'text',
        required: true
      },
      {
        name: 'lng',
        prop: 'location.lng',
        listing: false,
        formField: true,
        formFieldType: 'text',
        required: true
      }
    ];
  }
}
