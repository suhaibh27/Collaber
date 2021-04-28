/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsServiceService } from '../groups-service.service';
import { Observable } from 'rxjs';

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
  constructor(public groupSrv: GroupsServiceService,private activatedRoute: ActivatedRoute) { }

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

}
