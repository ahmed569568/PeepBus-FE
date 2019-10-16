import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoreFormComponent } from '@app/core/components/core-form/core-form.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UtilitiesService } from '@app/shared/services/utilities.service';
import { StudentsService } from '@app/students/students.service';
import { MapService } from '@app/shared/services/map.service';
import { ApiRequestService } from '@app/core/http/api-request.service';

@Component({
  selector: 'app-buses-form',
  templateUrl: './students-form.component.html'
})
export class StudentsFormComponent extends CoreFormComponent implements OnInit, OnDestroy {
  parent: any;

  constructor(
    service: StudentsService,
    fb: FormBuilder,
    activatedRoute: ActivatedRoute,
    private utilities: UtilitiesService,
    private mapService: MapService,
    private api: ApiRequestService
  ) {
    super(service, fb, activatedRoute, utilities);
  }

  initLists() {
    this.lists = [
      {
        ['students/parents']: 1
      },
      {
        ['students/locations']: 1
      },
      {
        ['students/vehicles']: 1
      }
    ];
  }

  // refactorItem(item: any): any {
  //   super.refactorItem(item);
  //   /**
  //    * Set value of selected items
  //    */
  //   const selectedUsers = [];
  //   for (const user of item.users) {
  //     selectedUsers.push(user.user_id);
  //   }
  //   this.form.controls.branch_managers.setValue(selectedUsers); // Final Return
  //   return item;
  // }

  fetchAddress() {
    this.mapService.getLocation.subscribe(data => {
      if (data.location) {
        this.form.controls.address.setValue(data.location.display_name);
        this.form.controls.lng.setValue(data.coords[0]);
        this.form.controls.lat.setValue(data.coords[1]);
      }
    });
  }

  selectParent(e: any) {
    this.api.get(`parents/${e}/show`).subscribe(data => {
      this.parent = data.response;
      console.log(this.parent, this.form.value);
    });
  }

  get lists() {
    return this._lists;
  }

  set lists(value: any) {
    this._lists = value;
  }

  ngOnInit() {
    super.ngOnInit();
    this.fetchAddress();
  }

  prepareFormAfterSubmit() {
    let adaptedForm: any = {
      student: {
        name: this.form.controls.name.value,
        status: this.form.controls.status.value,
        gender: this.form.controls.gender.value,
        image: this.form.controls.image.value
      },
      location: {
        address: this.form.controls.address.value,
        lat: this.form.controls.lat.value.toString(),
        lng: this.form.controls.lng.value.toString()
      }
    };
    if (this.checkConditions('new_parent')) {
      adaptedForm = {
        ...adaptedForm,
        parent: {
          full_name: this.form.controls.parent_full_name.value,
          username: this.form.controls.parent_username.value,
          phone: this.form.controls.parent_phone.value,
          email: this.form.controls.parent_email.value,
          password: this.form.controls.parent_password.value,
          image: this.form.controls.parent_image.value
        }
      };
    } else {
      adaptedForm = { ...adaptedForm, parent: { id: this.parent.id } };
    }
    console.log(adaptedForm);
    return adaptedForm;
  }

  formSubmission(skipLocationChange: boolean = false) {
    this.prepareFormAfterSubmit();
    if (this.isEdit) {
      return this.service.updateItem(skipLocationChange, this.itemId, this.prepareFormAfterSubmit()).then(() => {
        this.service.updateResources.next();
        if (!skipLocationChange) {
          return this.service.navigateToList();
        }
      });
    } else {
      return this.service.createItem(this.prepareFormAfterSubmit());
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.parent = null;
  }
}
