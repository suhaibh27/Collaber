/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { GrouppopoverComponent } from './grouppopover/grouppopover.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ResponsePageModule } from './response/response.module';

import { MapPageModule } from './map/map.module';
@NgModule({
  declarations: [AppComponent,GrouppopoverComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFireStorageModule,
            AppRoutingModule,
            AngularFirestoreModule.enablePersistence(),
            ResponsePageModule,MapPageModule
          ],

  providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
