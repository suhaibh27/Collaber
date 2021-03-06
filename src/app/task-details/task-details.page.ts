import { AngularFireAuth } from '@angular/fire/auth';
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable no-trailing-spaces */
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
import * as firebase from 'firebase';
import { take } from 'rxjs/operators';


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
  finishers=[];
  newStep=false;
  stepTitle='';
  currentUser=null;
  taskID=null;
  constructor( private afAuth: AngularFireAuth,public modalController:ModalController, private taskSrv: TasksService,private activatedRoute: ActivatedRoute,
    ) {
      this.afAuth.onAuthStateChanged((user) => {
        console.log(this.currentUser = user.uid);
      });
    this.taskSrv.getTask(this.activatedRoute.snapshot.paramMap.get('id')).pipe(take(1)).subscribe(res=>{
                                                                            this.username={username:'',phoneNumber:''};

                                                                            console.log(this.task=res.data() );
                                                                            this.title=this.task.title;
                                                                            this.creationDate=this.toDateTime(this.task.creationDate).slice(0,21);
                                                                            this.dueDate=this.toDateTime(this.task.dueDate).slice(0,21);
                                                                            this.creator=this.task.creator;
                                                                            this.getUsername(this.creator);

                                                                            this.b=[];
                                                                            this.steps=[];
                                                                            this.finishers=[];
                                                                            this.count=0;
                                                                            this.finished=0;
                                                                            this.taskSrv.getSteps(res.id).pipe(take(1)).subscribe(re=>{re.forEach(step=>{this.steps.push(step);this.b.push(step.data().isFinished);});
                                                                                          this.calcProgress();this.finisherName();});
                                                                            this.taskSrv.getComments(this.activatedRoute.snapshot.paramMap.get('id')).pipe(take(1)).subscribe(rer=>rer.forEach(comment=>{this.addCommenter(comment.data());}));

                                                                          });
  }
  ngOnInit() {

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
  calcProgress(){
    this.finished=0;
    this.count=0;
    if(this.b.length>0){
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
    this.taskSrv.getuser(id.senderID).subscribe(res=>{name=res.data();console.log(name.username,id.comment);this.comments.push(id); this.commenters.push(name.username);});
  }
  checkboxHandler(id,index){
    let val=false;
    if(this.b[index])
      {this.Ifinished(id); val=true;}
    else{this.finished--;}
    this.taskSrv.stepCheckHandeler(this.activatedRoute.snapshot.paramMap.get('id'),id,this.currentUser,val);
    this.calcProgress();
  }
  sendComment(){
    if(this.comment.length<1){
      return;
    }
    let mtimeStamp=firebase.default.firestore.Timestamp.now();
    this.comments.push({comment:this.comment,senderID:this.currentUser,date:mtimeStamp});
    this.addCommenter(this.currentUser);
    //this.getUsername(this.currentUser);
    this.taskSrv.sendComment(this.comment,this.currentUser,mtimeStamp,this.activatedRoute.snapshot.paramMap.get('id'));
    this.comment='';
  }
  doRefresh(ev){
    location.reload();
  }
  addStep(){
    let i=this.taskSrv.addStep(this.stepTitle,this.activatedRoute.snapshot.paramMap.get('id'),this.steps.length);
    let d;
    i.then(res=>{this.steps.push({id:res.id});
    this.finishers.push({stepid:res.id,name:''});
    });
    this.newStep=false;
    this.b.push(false);
  }
  deleteStep(id){
    return;
  }
  finisherName(){
    let u;
    let i=0;
    for(let s of this.steps)
    {
      if(this.b[i]){
       this.taskSrv.getuser(s.data().finisherID).subscribe(res=>{ console.log(u=res.data());this.finishers.push({stepid:s.id,name:u.username});});
      }
      else{
        this.finishers.push({stepid:s.id,name:''});
      }
      i++;
    }
  }
  newfinisherName(){

  }
  fini(sid){
    for(let f of this.finishers){
      if(f.stepid==sid){
        return f.name;
      }
    }
  }
  Ifinished(id){
    for(let i=0;i<this.finishers.length;i++){
      if(this.finishers[i].stepid==id){
        this.finishers[i]={stepid:id,name:'Me'};
      }
    }
  }
  isOverdue(){
    let now=new Date();
    let due=new Date(this.dueDate);
    if(due<now){
      return true;
    }
    return false;
  }
}
