import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanFormNextPage } from './plan-form-next.page';

const routes: Routes = [
  {
    path: '',
    component: PlanFormNextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanFormNextPageRoutingModule {}
