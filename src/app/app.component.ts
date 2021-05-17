import { LoadingController } from '@ionic/angular';
import { UsersService } from './users.service';
/* eslint-disable @typescript-eslint/quotes */
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;
  constructor(private loadingController: LoadingController,private userSrv: UsersService) {this.sideMenu();  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Profile",
        url   : "/profile/QSqITrKDOZPEY7qo68OnkTsXF8q1",
        icon  : "person"
      },
      {
        title : "New Group",
        url   : "/create-group-form",
        icon  : "add"
      },
    ];
  }
  signout(){
    this.presentLoading();
    this.userSrv.signOut().then(()=>this.loadingController.dismiss()).catch(er=>alert(er.message));
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }
}
