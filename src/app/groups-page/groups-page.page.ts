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
  constructor(private loadingController: LoadingController, private router: Router,private groupSrv: GroupsServiceService) {
    this.segment='code';
  }

  ngOnInit() {
  }
  changePage(){
   return;
  }
  searchGroups(ev){
    this.loadingController.dismiss();
    this.presentLoading();
    this.groups=[];
    let v= ev.target.value;
    console.log(v);
    this.groupSrv.getFilteredGroups(v).subscribe(res=>{res.forEach(g=>this.groups.push(g));this.loadingController.dismiss();});
  }
  searchGroupsCode(ev){
    this.presentLoading();
    this.groups=[];
    let v= ev.target.value.trim();
    if(v==''){
      v='!';
    }
    this.groupSrv.searchbyCode(v).subscribe(res=>{if(res.data()!=undefined)
                                                          this.groups.push(res);
                                                  this.loadingController.dismiss();
                                                        });

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
