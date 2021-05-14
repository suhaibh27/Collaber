import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalenderModalPageRoutingModule } from './calender-modal-routing.module';

import { CalenderModalPage } from './calender-modal.page';
import { NgCalendarModule  } from 'ionic2-calendar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalenderModalPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [CalenderModalPage]
})
export class CalenderModalPageModule {}
