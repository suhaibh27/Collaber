import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContrbutionListFormPageRoutingModule } from './contrbution-list-form-routing.module';

import { ContrbutionListFormPage } from './contrbution-list-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContrbutionListFormPageRoutingModule
  ],
  declarations: [ContrbutionListFormPage]
})
export class ContrbutionListFormPageModule {}
