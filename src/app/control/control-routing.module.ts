import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { MonitoringComponent } from './components';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/control', pathMatch: 'full' },
    { path: 'control', component: MonitoringComponent, data: { title: extract('control') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ControlRoutingModule {}

export const components = [MonitoringComponent];
