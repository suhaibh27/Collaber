import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
/* eslint-disable max-len */
import { GroupsServiceService } from './../groups-service.service';
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ActivatedRoute } from '@angular/router';
import { ClistService } from './../clist.service';
import { PlanService } from './../plan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  plans=[];
  contLists=[];
  g;
  id;
  displayPlans=true;
  displaylists=true;
  chevronIcon='chevron-down-outline';
  listChevronIcon='chevron-down-outline';
  constructor(private router: Router ,
              private grpSrv: GroupsServiceService,
              private planSrv: PlanService,
              private listSrv: ClistService,
              private activatedRoute: ActivatedRoute,
              private actionSheetController: ActionSheetController){
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.grpSrv.getgroup(this.id).get().subscribe(res=>this.g=res);
    this.planSrv.getPlans(this.id).subscribe(res=>res.forEach(plan=>this.plans.push(plan)));
    this.listSrv.getgroupLists(this.id).subscribe(res=>res.forEach(list=>this.contLists.push(list)));
    this.grpSrv.getgroup(this.id).get().subscribe(res=>this.g=res);
}
  ngOnInit() {
  }
  viewPlan(id){
    this.router.navigateByUrl('task/'+id);
  }
  viewList(id){
    this.router.navigateByUrl('contrbution-list/'+id);
  }
  togglePlans(){
    if(this.displayPlans)
      {this.chevronIcon='chevron-forward-outline';
      this.displayPlans=false;
      }
    else{
      this.chevronIcon='chevron-down-outline';
      this.displayPlans=true;
    }
  }
  togglecList(){
    if(this.displaylists)
      {this.listChevronIcon='chevron-forward-outline';
      this.displaylists=false;
      }
    else{
      this.listChevronIcon='chevron-down-outline';
      this.displaylists=true;
    }
  }
  goCalender(){
    this.router.navigateByUrl('calender');
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Create',
      cssClass: 'my-custom-class',
      buttons: [
        {
        text: 'Create Contbution List',
        icon: 'add',
        handler: () => {
          this.router.navigateByUrl('contrbution-list-form');
        }
      },
      {
        text: 'Create a new Plan',
        icon: 'add',
        handler: () => {
          this.router.navigateByUrl('plan-form/'+this.id);
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
