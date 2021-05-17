/* eslint-disable prefer-const */
import { AlertController } from '@ionic/angular';
/* eslint-disable no-var */
/* eslint-disable eqeqeq */
import { LoadingController } from '@ionic/angular';
import { UsersService } from './../users.service';
import { ActivatedRoute, Router } from '@angular/router';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.page.html',
  styleUrls: ['./profile-form.page.scss'],
})
export class ProfileFormPage implements OnInit {
  error='';
  id;
  us;
  oldName;
  user={username:'',Name:'',email:'',phoneNumber:'',userID:''};
  constructor(private router: Router,
    private alertController: AlertController,
    private userSrv: UsersService,
     private activatedRoute: ActivatedRoute,
     private loadingController: LoadingController) {
  this.presentLoading();
  this.id=this.activatedRoute.snapshot.paramMap.get('id');
  this.userSrv.getUserbyID(this.id).get().subscribe(res=>{this.us=res.data();
                                                  this.user=this.us; this.oldName=this.us.username; this.loadingController.dismiss();
                                                });}
  ngOnInit() {
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }
  save(){
    this.error='';
    var mUser;
    this.userSrv.checkDuplicate().subscribe(res=>{let found=false;
                              res.forEach(user=>{
                                      mUser=user.data();
                                      if(this.oldName!=this.user.username){
                                        if(mUser.username.toLowerCase()==this.user.username.toLowerCase()){
                                          this.error='username is already taken';found=true;}}
                                        ;});if(!found){this.presentAlertConfirm();}});
  }
  saveEdit(){
    this.presentLoading();
    this.userSrv.updateUser(this.id,this.user).then(()=>{
                                          this.loadingController.dismiss();
                                          alert('Your profile information have been updated');
                                          this.router.navigateByUrl('profile/'+this.id);
                                        }).catch(er=>alert(er.message));
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to save your informations',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.saveEdit();
          }
        }
      ]
    });
    await alert.present();
  }
}
