import { Component, OnInit } from '@angular/core';
import { CoreListComponent } from '@app/core/components/core-list/core-list.component';
import { VehiclesStudentService } from '@app/vehicles/vehicles-student.service';
import { UtilitiesService } from '@app/shared/services/utilities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiResponse, ItemProps, ListOptions } from '@app/interfaces';
import { AppHelper } from '@app/core/classes/app-helper';

@Component({
  selector: 'app-vehicles-view',
  templateUrl: './vehicles-view.component.html',
  styleUrls: ['./vehicles-view.component.scss']
})
export class VehiclesViewComponent implements OnInit {
  itemId: number;
  columns: ItemProps[];
  listOptions: ListOptions = {
    itemsPerPage: [5, 10, 20, 50, 100],
    archive: true,
    add: true,
    edit: true,
    view: true,
    exportList: false,
    importList: false,
    locate: false,
    clone: true,
    groups: false,
    searchable: false,
    customTitle: '',
    hoverData: { status: false },
    listTypes: [],
    pagination: true
  };
  rows: any;

  constructor(protected activatedRoute: ActivatedRoute, protected service: VehiclesStudentService) {
    this.listOptions.searchable = true;
    this.listOptions.listTypes = ['Bus Number', 'Driver Name', 'Busy', 'Empty'];
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((routeInfo: any) => {
      if (routeInfo.id) {
        return this.loadResources(routeInfo.id);
      }
    });
    const colsFromService: ItemProps[] = this.service.featureProps;
    if (colsFromService.length) {
      this.columns = colsFromService;
    }
  }

  assign(event: any, id: number) {
    console.log('status => ' + event.checked, 'student id => ' + id, 'bus id => ' + this.itemId);
    this.service.updateItem(true, this.itemId, { student_id: id, action: event.checked });
  }

  getValue(obj: any, path: string) {
    return AppHelper.deepFind(obj, path);
  }

  loadResources(id: number): void {
    this.itemId = id;
    this.service
      .showItem(id)
      .pipe(
        map(item => {
          // this.item = item;
          return this.refactorItem(item);
        })
      )
      .subscribe(
        response => {
          // const obj = JSON.parse(JSON.stringify(response)); // clone response object
          // return this.form.patchValue(obj);
          return (this.rows = response);
        },
        err => {
          this.service.errorHandle(err);
        }
      );
  }

  refactorItem(item: any): any {
    return item;
  }
}
