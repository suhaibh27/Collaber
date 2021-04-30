import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateGroupNextPage } from './create-group-next.page';

const routes: Routes = [
  {
    path: '',
    component: CreateGroupNextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateGroupNextPageRoutingModule {}
