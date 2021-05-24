import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
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
  currentUser;
  navigate: any;
  constructor(private router: Router,
    private afAuth: AngularFireAuth,
     private loadingController: LoadingController,private userSrv: UsersService) {this.sideMenu();
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user.uid;
    });  }
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
        url   : "/profile/"+this.currentUser,
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
    this.userSrv.signOut().then(()=>this.loadingController.dismiss())
                  .catch(er=>alert(er.message)).
                  then(()=>this.router.navigateByUrl('sign-in'));
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }
}
