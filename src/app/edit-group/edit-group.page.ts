/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsServiceService } from '../groups-service.service';

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
  constructor(public groupSrv: GroupsServiceService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.grId = this.activatedRoute.snapshot.paramMap.get('id');
    this.thisGroup=this.groupSrv.getgroup(this.grId).get().subscribe(res=>{this.thisGroup=res.data();this.newPrivacy=this.thisGroup.isPrivate;});
  }
  save(){
    let newGroup={Name:this.newName.toString(),isPrivate:this.newPrivacy==='true'};
    this.groupSrv.updateGroup(this.grId,newGroup);
  }
  selectPrivacy(ev){
    this.newPrivacy=ev.target.value;
  }

}
