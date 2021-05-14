import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanFormNextPageRoutingModule } from './plan-form-next-routing.module';

import { PlanFormNextPage } from './plan-form-next.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanFormNextPageRoutingModule
  ],
  declarations: [PlanFormNextPage]
})
export class PlanFormNextPageModule {}
