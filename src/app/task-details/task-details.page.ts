import { AngularFirestore } from '@angular/fire/firestore';
/* eslint-disable no-var */
/* eslint-disable prefer-const */
import { TasksService } from './../tasks.service';
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResponsePage } from '../response/response.page';
import { ActivatedRoute } from '@angular/router';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import * as firebase from 'firebase';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {
  task;
  tId;
  progress=0;
  sts;
  clr="danger";
  title='';
  creator='';
  creationDate;
  dueDate;
  username={username:'',phoneNumber:''};
  mstyle='width:'+this.progress/100+'%';
  steps=[];
  count=0;
  finished=0;
  b=[];
  comments=[];
  commenters=[];
  comment='';
  constructor( public modalController:ModalController, private taskSrv: TasksService,private activatedRoute: ActivatedRoute,
    ) {
    this.taskSrv.getTask(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(res=>{
                                                                            console.log(this.task=res.data() );
                                                                            this.title=this.task.title;
                                                                            this.creationDate=this.toDateTime(this.task.creationDate).slice(0,21);
                                                                            this.dueDate=this.toDateTime(this.task.dueDate).slice(0,21);
                                                                            this.creator=this.task.creator;
                                                                            this.getUsername(this.creator);
                                                                          });
  }
  ngOnInit() {
    this.taskSrv.getSteps(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(res=>{res.forEach(step=>{this.steps.push(step);this.b.push(step.data().isFinished);});
                                                                                          this.calcProgress(this.activatedRoute.snapshot.paramMap.get('id'));});
    this.taskSrv.getComments(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(res=>res.forEach(comment=>{this.comments.push(comment.data());this.addCommenter(comment.data().senderID);}));
}
//for the date type it will differ from the firestore so you can use the best method to show DD-MM-YYYY in the tasks page
  respond(index){
    this.presentModal();
  }
  async presentModal(){
    const modal = await this.modalController.create(
    {
      component: ResponsePage,
      cssClass: 'my-custom-modal-css',
      backdropDismiss:true,
      showBackdrop:true,
    });
    return await modal.present();
  }
  calcProgress(id){
    let mcolor='blue';
    console.log(this.b.length);
    for(let step of this.b){
      if(step){
        this.finished++;}
      this.count++;
    }
    this.progress=Math.round((this.finished/this.count)*100);
    if(this.progress<100){
      this.sts="uncompleted";
      this.clr="primary";
      mcolor='#3880ff';
    }else if(this.progress==100){
      this.sts="Completed";
      this.clr="success";
      mcolor='#2dd36f';
    }
    if (this.progress==0){mcolor='#bcd4f3';}
    this.mstyle=' width:'+this.progress+'%; background-color:'+mcolor;
  }
  toDateTime(secs) {
    var t =secs.toDate().toString(); // Epoch
    //t.setSeconds(secs);
    return t;
  }
  getUsername(id){
    let name;
    this.taskSrv.getuser(id).subscribe(res=>{name=res.data(); this.username=name;});
  }
  addCommenter(id){
    let name;
    this.taskSrv.getuser(id).subscribe(res=>{name=res.data(); this.commenters.push(name.username);});
  }
  checkboxHandler(id,index){
    if(this.b[index])
      {this.finished++;}
    else{this.finished--;}
    this.taskSrv.stepCheckHandeler(this.activatedRoute.snapshot.paramMap.get('id'),id);
    this.updateProgress();
  }
  updateProgress(){
    let mcolor='';
    this.progress=Math.round((this.finished/this.count)*100);
    if(this.progress<100){
      this.sts="uncompleted";
      this.clr="primary";
      mcolor='#3880ff';
    }else if(this.progress==100){
      this.sts="Completed";
      this.clr="success";
      mcolor='#2dd36f';
    }
    if (this.progress==0){mcolor='#bcd4f3';}
    this.mstyle='width:'+this.progress+'%; background-color:'+mcolor;
  }
  sendComment(){
    if(this.comment.length<1){
      return;
    }
    console.log(this.comments,this.commenters);
    let mtimeStamp=firebase.default.firestore.Timestamp.now();
    this.comments.push({comment:this.comment,senderID:'IoBBNSa8mNwXQbm8vrIP',date:mtimeStamp});
    this.getUsername('IoBBNSa8mNwXQbm8vrIP');
    this.taskSrv.sendComment(this.comment,'IoBBNSa8mNwXQbm8vrIP',mtimeStamp,this.activatedRoute.snapshot.paramMap.get('id'));
    this.comment='';
  }
  doRefresh(ev){
    location.reload();
  }
}
