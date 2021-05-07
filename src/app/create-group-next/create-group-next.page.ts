import { GroupsServiceService } from './../groups-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-group-next',
  templateUrl: './create-group-next.page.html',
  styleUrls: ['./create-group-next.page.scss'],
})
export class CreateGroupNextPage implements OnInit {
  users;
  privacy= false;
  name;
  constructor(private activatedRoute: ActivatedRoute,public groupSrv: GroupsServiceService, public router: Router) { }
  ngOnInit() {
    this.users=JSON.parse(this.activatedRoute.snapshot.paramMap.get('users'));
    console.log(this.users);
  }
  createGroup(){
    this.groupSrv.addGroupUsers(this.users,this.name,this.privacy);
    this.router.navigateByUrl('/home');
  }

}