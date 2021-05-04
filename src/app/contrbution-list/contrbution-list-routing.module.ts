import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContrbutionListPage } from './contrbution-list.page';

const routes: Routes = [
  {
    path: '',
    component: ContrbutionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContrbutionListPageRoutingModule {}
