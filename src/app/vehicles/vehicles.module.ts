import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehiclesFormComponent } from './components/vehicles-form/vehicles-form.component';
import { VehiclesViewComponent } from './components/vehicles-view/vehicles-view.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { extract } from '@app/core';

@NgModule({
  declarations: [VehiclesListComponent, VehiclesFormComponent, VehiclesViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        data: { title: extract('vehicles.title') },
        component: VehiclesListComponent,
        children: [
          {
            path: 'create',
            component: VehiclesFormComponent
          },
          {
            path: 'edit/:id',
            component: VehiclesFormComponent
          },
          {
            path: 'view/:id',
            component: VehiclesViewComponent
          }
        ]
      }
    ])
  ]
})
export class VehiclesModule {}
