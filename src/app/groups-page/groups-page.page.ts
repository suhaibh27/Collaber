import { LoadingController } from '@ionic/angular';
import { GroupsServiceService } from './../groups-service.service';
/* eslint-disable prefer-const */
/* eslint-disable curly */
/* eslint-disable eqeqeq */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.page.html',
  styleUrls: ['./groups-page.page.scss'],
})
export class GroupsPagePage implements OnInit {
  segment;
  groups=[];
  m;
  load=0;
  constructor(private loadingController: LoadingController, private router: Router,private groupSrv: GroupsServiceService) {
    this.segment='code';
  }

  ngOnInit() {
  }
  changePage(){
   return;
  }
  searchGroups(ev){
    this.groups=[];
    let v= ev.target.value;
    if(v.length>0){
      if(this.load==0){
        this.presentLoading();this.load=1;}
      this.groups=[];
      console.log(v);
      this.groupSrv.getFilteredGroups(v).subscribe(res=>{
                              res.forEach(g=>this.groups.push(g));
                              if(this.load==1)
                              {this.loadingController.dismiss();this.load=0;}});}
    }
  searchGroupsCode(ev){
    this.groups=[];
    let v= ev.target.value.trim();
    if(v.length>0){
      if(this.load==0){
        this.presentLoading();
        this.load=1;}
      this.groups=[];
      if(v==''){
        v='!';
      }
      this.groupSrv.searchbyCode(v).subscribe(res=>{if(res.data()!=undefined)
                                                            this.groups.push(res);
                                                            if(this.load==1)
                                                            {this.loadingController.dismiss();this.load=0;};
                                                          });}

  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      spinner: 'circles',
      keyboardClose:false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  viewGroup(id){
    this.router.navigateByUrl('edit-group/'+id+'/true');
  }
}
