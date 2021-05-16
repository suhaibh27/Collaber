import { PlanService } from './../plan.service';
/* eslint-disable no-var */
import { ActivatedRoute, Router } from '@angular/router';
/* eslint-disable prefer-const */
import { GroupsServiceService } from './../groups-service.service';
import { TasksService } from './../tasks.service';
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { LoadingController, RouterLinkDelegate } from '@ionic/angular';
@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  tasks=[];
  planId='ISjS0B7sqvjonjiZ3BQo';
  username=[];
  progress=[];
  name='plan';
  desc='';
  plan;
  constructor(private planSrv:PlanService, private router:Router, private activatedRoute:ActivatedRoute, private taskSrv: TasksService, private loadingController: LoadingController) {
    this.planId=this.activatedRoute.snapshot.paramMap.get('id');
    this.planSrv.getPlan(this.planId).subscribe(res=>{this.plan=res.data();this.name=this.plan.Title;this.desc=this.plan.Description;});
    this.presentLoading();
    this.taskSrv.getTasks(this.planId).subscribe(res=>{
                                                  res.forEach(r=>
                                                      {(this.tasks.push(r));this.tasks.forEach(
                                                                                            (ros,index)=>{this.getUsername(ros.data().creator); this.progress.push(this.calcProgress(ros.id,index));});
                                                                                            });
    loadingController.dismiss();});
   }
  ngOnInit() {
  }
//for the date type it will differ from the firestore so you can use the best method to show DD-MM-YYYY in the tasks page
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  getUsername(id){
    let name;
    this.taskSrv.getuser(id).subscribe(res=>{this.username.push(res.data());});
  }
  calcProgress(id,index){
    let count=0;
    let finshed=0;
    this.taskSrv.getSteps(id).subscribe(data=>{data.forEach(res=>{if(res.data().isFinished){finshed+=1;} count++;});this.progress[index]=finshed/count;});
  }
  detail(id){
    this.router.navigateByUrl('task-details/'+id);
  }
  addTask(){
    this.router.navigateByUrl('plan-form-next/'+this.planId);
  }
  toDateTime(secs) {
    var t =secs.toDate();
    return t;
  }
  isOverdue(d){
    let now=new Date();
    let due=new Date(d);
    if(due<now){
      return true;
    }
    return false;
  }
}
