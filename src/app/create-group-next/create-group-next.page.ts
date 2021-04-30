import { GroupsServiceService } from './../groups-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-group-next',
  templateUrl: './create-group-next.page.html',
  styleUrls: ['./create-group-next.page.scss'],
})
export class CreateGroupNextPage implements OnInit {
  users;
  privacy: boolean;
  name;
  constructor(private activatedRoute: ActivatedRoute,public groupSrv: GroupsServiceService) { }
  ngOnInit() {
    this.users=JSON.parse(this.activatedRoute.snapshot.paramMap.get('users'));
    console.log(this.users);
  }
  createGroup(){
    this.groupSrv.addGroupUsers(this.users,this.name,this.privacy);
  }

}
