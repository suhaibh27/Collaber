import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanFormPageRoutingModule } from './plan-form-routing.module';

import { PlanFormPage } from './plan-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanFormPageRoutingModule
  ],
  declarations: [PlanFormPage]
})
export class PlanFormPageModule {}
