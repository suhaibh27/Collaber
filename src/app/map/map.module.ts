import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDAHKx6qty0oKdh0qSdl1-iEWS1agQzf-w',
      libraries: ['places']
    })
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
