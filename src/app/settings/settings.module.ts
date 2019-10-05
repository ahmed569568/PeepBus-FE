import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekDaysComponent } from './components/week-days/week-days.component';
import { VacationDaysComponent } from './components/vacation-days/vacation-days.component';
import { ShiftsComponent } from './components/shifts/shifts.component';
import { RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

@NgModule({
  declarations: [WeekDaysComponent, VacationDaysComponent, ShiftsComponent, UserSettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        data: { title: extract('settings.title') },
        children: [
          {
            path: 'user-settings',
            component: UserSettingsComponent
          },
          {
            path: 'weekdays',
            component: WeekDaysComponent
          },
          {
            path: 'vacation',
            component: VacationDaysComponent
          },
          {
            path: 'shifts',
            component: ShiftsComponent
          }
        ]
      }
    ])
  ]
})
export class SettingsModule {}
