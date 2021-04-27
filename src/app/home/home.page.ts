/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import {  GroupsServiceService } from './../groups-service.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertController, PopoverController } from '@ionic/angular';
import { GrouppopoverComponent } from './../grouppopover/grouppopover.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myGroups=[];
  filteredList;
  currentPopover = null;

  constructor(public groupSrv: GroupsServiceService, public popoverController: PopoverController , public alertController: AlertController) {
      this.myGroups=this.groupSrv.getGroups();
      this.filteredList=this.myGroups;
  }
  getItems(ev: any){
    this.myGroups=this.filteredList;
    let v=ev.target.value;
    this.myGroups=this.myGroups.filter((product)=>{return(product.data().Name.toLowerCase().indexOf(v.toLowerCase())>-1);});
  }
  async presentPopover(ev,i) {
    let popover = await this.popoverController.create({
      component: GrouppopoverComponent,
      event: ev,
      componentProps:{name: i},
      translucent: true
    });
    this.currentPopover = popover;
    return popover.present();
  }
  edit(){}

}
