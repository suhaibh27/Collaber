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

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/File/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
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

  providers: [ImagePicker,
    MediaCapture,
    File,
    Media,
    StreamingMedia,
    PhotoViewer,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
