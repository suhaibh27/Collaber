import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateGroupFormPage } from './create-group-form.page';

const routes: Routes = [
  {
    path: '',
    component: CreateGroupFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateGroupFormPageRoutingModule {}
