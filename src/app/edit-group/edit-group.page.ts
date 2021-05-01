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
  constructor(
        public groupSrv: GroupsServiceService,
        private activatedRoute: ActivatedRoute,
        public actionSheetController: ActionSheetController
        ) {
          }

  ngOnInit() {
    this.grId = this.activatedRoute.snapshot.paramMap.get('id');
    this.thisGroup=this.groupSrv.getgroup(this.grId).get().subscribe(res=>{this.thisGroup=res.data();this.newPrivacy=this.thisGroup.isPrivate;});
    this.users=this.groupSrv.getGroupUsers(this.grId);
    this.users.subscribe(res=>res.forEach(r=>this.groupSrv.getuser(r.userID).then(rr=>rr.get().subscribe(ii=>this.usersNames.push(ii.data())))));
  }
  save(){
    let newGroup={Name:this.newName.toString(),isPrivate:this.newPrivacy==='true'};
    this.groupSrv.updateGroup(this.grId,newGroup);
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
  async presentActionSheet(user,name) {
    const actionSheet = await this.actionSheetController.create({
      header:'Actions On '+name,
      cssClass: 'actionSheet',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'person-remove',
        handler: () => {
          console.log('delete')
        }
      }, {
        text: 'Promote',
        icon: 'arrow-up-circle-outline',cssClass:'promoteActionSheet',
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
  async presentDemoteActionSheet(user,name) {
    const actionSheet = await this.actionSheetController.create({
      header:'Actions On '+name,
      cssClass: 'actionSheet',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'person-remove',
        handler: () => {
          console.log('delete')
        }
      }, {
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

}




