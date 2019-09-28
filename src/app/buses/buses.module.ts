import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesListComponent } from './components/buses-list/buses-list.component';
import { BusesFormComponent } from './components/buses-form/buses-form.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { extract } from '@app/core';

@NgModule({
  declarations: [BusesListComponent, BusesFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        data: { title: extract('buses.title') },
        component: BusesListComponent,
        children: [
          {
            path: 'create',
            component: BusesFormComponent
          },
          {
            path: 'edit/:id',
            component: BusesFormComponent
          }
        ]
      }
    ])
  ]
})
export class BusesModule {}
