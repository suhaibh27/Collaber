import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContrbutionListFormPage } from './contrbution-list-form.page';

const routes: Routes = [
  {
    path: '',
    component: ContrbutionListFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContrbutionListFormPageRoutingModule {}
