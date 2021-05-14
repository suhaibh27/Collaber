import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalenderModalPage } from './calender-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CalenderModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalenderModalPageRoutingModule {}
