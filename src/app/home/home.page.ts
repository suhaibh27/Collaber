import { UsersService } from './../users.service';
/* eslint-disable eqeqeq */
/* eslint-disable curly */
import { Router } from '@angular/router';
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
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
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
  count=0;
  seg;
  isAdmin=[];
  constructor(private userSrv:UsersService, private loadingController:LoadingController, public groupSrv: GroupsServiceService, public popoverController: PopoverController , public alertController: AlertController,public router:Router)
  {
    this.seg='home';
    this.presentLoading();
    this.groupSrv.getGroups2().subscribe(res=>{ if (this.count<1){
      this.count++;
      res.map(r=>{
          this.isAdmin.push(r.isAdmin);
          let myref= this.groupSrv.getMyref(r.groupID);
          myref.get().subscribe((snap)=>{
            if(snap.exists){
                console.log(snap.id);
                this.myGroups.push((snap));
              }
            else
                console.log('no data');
          });
      });}
      this.loadingController.dismiss();this.filteredList=this.myGroups;
    });

    //this.filteredList=this.myGroups;
  }
  getItems(ev: any){
    this.myGroups=this.filteredList;
    let v=ev.target.value;
    this.myGroups=this.myGroups.filter((product)=>{return(product.data().Name.toLowerCase().indexOf(v.toLowerCase())>-1);});
  }
  async presentPopover(ev,i,isAd) {
    let popover = await this.popoverController.create({
      component: GrouppopoverComponent,
      event: ev,
      componentProps:{id: i,admin:isAd},
      translucent: true
    });
    this.currentPopover = popover;
    return popover.present();
  }
  createGroup()
  {
    this.router.navigateByUrl('\create-group-form');
  }
  refresh(): void {
    window.location.reload();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 1500
    });
    await loading.present();
  }
  changePage(){
    return;
  }
  viewGroup(id){
    this.router.navigateByUrl('group/'+id);
  }
}
