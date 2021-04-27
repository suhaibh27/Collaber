/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import {  group, GroupsServiceService } from './../groups-service.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myGroups=[];
    constructor(public groupSrv: GroupsServiceService) {
      this.myGroups=this.groupSrv.getGroups();

<<<<<<< HEAD
  }

=======
  constructor() {}
//hello
>>>>>>> 284c5d417c03bfac91ec84e289cfe7a93db35ade
}
