import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateGroupNextPageRoutingModule } from './create-group-next-routing.module';

import { CreateGroupNextPage } from './create-group-next.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateGroupNextPageRoutingModule
  ],
  declarations: [CreateGroupNextPage]
})
export class CreateGroupNextPageModule {}
