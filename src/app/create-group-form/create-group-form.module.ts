import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateGroupFormPageRoutingModule } from './create-group-form-routing.module';

import { CreateGroupFormPage } from './create-group-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateGroupFormPageRoutingModule
  ],
  declarations: [CreateGroupFormPage]
})
export class CreateGroupFormPageModule {}
