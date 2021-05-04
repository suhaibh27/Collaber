import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContrbutionListPageRoutingModule } from './contrbution-list-routing.module';

import { ContrbutionListPage } from './contrbution-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContrbutionListPageRoutingModule
  ],
  declarations: [ContrbutionListPage]
})
export class ContrbutionListPageModule {}
