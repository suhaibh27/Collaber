import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
/* eslint-disable eqeqeq */
/* eslint-disable no-var */
import { ClistService } from './../clist.service';
/* eslint-disable curly */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
import { UsersService } from './../users.service';
import { GroupsServiceService } from './../groups-service.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-contrbution-list',
  templateUrl: './contrbution-list.page.html',
  styleUrls: ['./contrbution-list.page.scss'],
})
export class ContrbutionListPage implements OnInit {
  isjoined=[];
  //thisGroup;
  users=[];
  usersNames=[];
  dataObj;
  date;
  title;
  description;
  location;
  locLink;
  usersjoinedDocs=[];
  listID='';
  grId='';
  constructor(private activatedRoute: ActivatedRoute, private alertController: AlertController, private groupSrv: GroupsServiceService, private userSrv: UsersService, private listSrv: ClistService){ }
  ngOnInit() {
    this.listID=this.activatedRoute.snapshot.paramMap.get('id');
    //this.groupSrv.getgroup(this.grId).get().subscribe(res=>{this.thisGroup=res.data();});
    this.listSrv.getcList(this.listID).get().subscribe(res=>{this.dataObj=res.data();
                                                                        this.grId=this.dataObj.groupID;
                                                                        this.title=this.dataObj.Title;
                                                                        this.description=this.dataObj.Description;
                                                                        this.date=this.toDateTime(this.dataObj.dateTime).toISOString()  ;
                                                                        this.location=this.dataObj.Location;
                                                                        this.locLink=this.dataObj.locationLink;
                                                                        this.groupSrv.getGroupUsers(this.grId).pipe(take(1)).subscribe(r=>
                                                                                                                  r.forEach(re=> {
                                                                                                                      console.log(this.isjoined.push(false));
                                                                                                                      this.users.push(re.userID);
                                                                                                                      this.listSrv.getJoinedUsers(this.listID).subscribe(ro=>ro.forEach(u=>{
                                                                                                                        if(this.users.includes(u.data().userID)){
                                                                                                                          this.isjoined[this.users.indexOf(u.data().userID)]=true;
                                                                                                                          this.usersjoinedDocs.push(u.id);}else{this.usersjoinedDocs.push('');}
                                                                                                                        ;}
                                                                                                                        ));
                                                                                                                      this.groupSrv.getuser(re.userID).then(n=>
                                                                                                                                            n.get().subscribe(us=>this.usersNames.push(us.data())));}));
                                                                      });

  }
  toggleJoin(index){
    if(this.isjoined[index]){
      this.presentAlertConfirm('unjoin',index);
    }
    else{
      this.presentAlertConfirm('join',index);
    }
  }
  toDateTime(secs) {
    var t = new Date(Date.UTC(10001, 0, 1)); // Epoch
    t.setSeconds(secs);
    return t;
  }
  save(){
    return;
  }
  disable(u){
    if(this.users[u]!='QSqITrKDOZPEY7qo68OnkTsXF8q1'){
      return 'disabled';
    }
    return '';
  }
  myUser(i){
    if(this.users[i]=='QSqITrKDOZPEY7qo68OnkTsXF8q1'){
      return 'secondary';
    }
    return '';
  }

  async presentAlertConfirm(stat,index) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to '+stat,
      buttons: [
        {
          text: 'Nope',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.isjoined[index]=! this.isjoined[index];
          }
        }, {
          text: 'Yes',
          handler: () => {
            //update database server
            this.listSrv.updateJoin(this.users[index],this.isjoined[index],this.listID,this.usersjoinedDocs[index]);
          }
        }
      ]
    });
    await alert.present();
  }
}
