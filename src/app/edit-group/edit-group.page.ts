import { Router } from '@angular/router';
/* eslint-disable curly */
import { AlertController } from '@ionic/angular';
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable eqeqeq */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsServiceService } from '../groups-service.service';
import { ActionSheetController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.page.html',
  styleUrls: ['./edit-group.page.scss'],
})
export class EditGroupPage implements OnInit {
  grId;
  thisGroup;
  newName;
  newPrivacy;
  users;
  usersNames=[];
  toastCtrl: any;
  userExist=false;
  view=true;
  myUsersId=[];
  desc='';
  saved=false;
  constructor(
        private navCtrl: NavController,
        private alertController:AlertController,
        public groupSrv: GroupsServiceService,
        private activatedRoute: ActivatedRoute,
        public actionSheetController: ActionSheetController,
        private router: Router
        ) {
          }

  ngOnInit() {
    this.grId = this.activatedRoute.snapshot.paramMap.get('id');
    this.view = this.activatedRoute.snapshot.paramMap.get('view')=='true';
    this.thisGroup=this.groupSrv.getgroup(this.grId).get().subscribe(res=>{this.thisGroup=res.data();this.newPrivacy=this.thisGroup.isPrivate;});
    this.users=this.groupSrv.getGroupUsers(this.grId);
    this.users.subscribe(res=>{res.forEach(r=>{
                                            this.myUsersId.push(r.userID);
                                            this.groupSrv.getuser(r.userID).then(rr=>
                                                                              rr.get().subscribe(ii=>this.usersNames.push(ii.data())));
                                                                            });
                                            this.doesUserExist();});
}
  save(){
    let newGroup={Name:this.newName.toString(),isPrivate:this.newPrivacy==='true',Description:this.desc.toString()};
    this.groupSrv.updateGroup(this.grId,newGroup);
    this.saved=true;
  }
  selectPrivacy(ev){
    this.newPrivacy=ev.target.value;
  }
  getUsers(){
  }
  promote(user){
    this.groupSrv.makeAdmin(user,this.grId)
  }
  demote(user){
    this.groupSrv.makeMember(user,this.grId)
  }
  async presentActionSheet(user,name,index) {
    let stat="Delete";
    if(user=='QSqITrKDOZPEY7qo68OnkTsXF8q1'){
      stat="Leave";
    }
    const actionSheet = await this.actionSheetController.create({
      header:'Actions On '+name,
      cssClass: 'actionSheet',
      buttons: [{
        text: stat,
        role: 'destructive',
        icon: 'person-remove',
        cssClass:'remove',
        handler: () => {
          console.log('delete')
        }
      }, {
        text: 'Promote',
        icon: 'arrow-up-circle-outline',
        cssClass:'promoteActionSheet',
        handler: () => {
          this.promote(user);
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentDemoteActionSheet(user,name,index) {
    let stat="Delete";
    if(user=='QSqITrKDOZPEY7qo68OnkTsXF8q1'){
      stat="Leave";
    }
    const actionSheet = await this.actionSheetController.create({
      header:'Actions On '+name,
      cssClass: 'actionSheet',
      buttons: [{
        text: stat,
        role: 'destructive',
        icon: 'person-remove',
        cssClass:'remove',
        handler: () => {
          this.deleteUser(stat)
        }
      },
      {
        text: 'Demote',
        icon: 'arrow-down-circle-outline',cssClass:'demoteActionSheet',
        handler: () => {
          this.demote(user);
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  doesUserExist(userId='QSqITrKDOZPEY7qo68OnkTsXF8q1'){
    for(let user of this.myUsersId ){
      if(user==userId){
        console.log(this.userExist);
        this.userExist=true;
      }
    }

  }
  deleteUser(stat,user='RJvbBwI1ZtCHbEs6EWP3'){
    this.groupSrv.removeUser(user,this.grId).then(()=>{this.usersNames=[];if(stat=='Leave'){
                                                                              this.router.navigateByUrl('home');}})
  }
  addUser(user='RJvbBwI1ZtCHbEs6EWP3'){
    this.groupSrv.addUser(user,this.grId).then(()=>this.usersNames=[])
  }
  async presentAlertConfirm(stat) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to '+stat+'?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            if(stat=='Leave')
              this.deleteUser(stat);
            else
              this.addUser()
          }
        }
      ]
    });
    await alert.present();
  }
  async presentconAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Do you want to save you changes',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
              this.save()
          }
        }
      ]
    });
    await alert.present();
  }
  check(){
    if (!this.saved){
      {
        this.backpresentconAlert();
        }
    }
  }
  async backpresentconAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Do you want to save you changes',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.save();
            this.navCtrl.back();
          }
        }
      ]
    });
    await alert.present();
  }
}
