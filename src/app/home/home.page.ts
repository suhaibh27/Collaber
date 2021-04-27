/* eslint-disable arrow-body-style */
/* eslint-disable prefer-const */
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
  filteredList;
    constructor(public groupSrv: GroupsServiceService) {
      this.myGroups=this.groupSrv.getGroups();
      this.filteredList=this.myGroups;
  }
  getItems(ev: any){
    this.myGroups=this.filteredList;
    let v=ev.target.value;
    this.myGroups=this.myGroups.filter((product)=>{return(product.Name.toLowerCase().indexOf(v.toLowerCase())>-1);});
  }
//hello
}
