import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';
/* eslint-disable guard-for-in */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-var */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
import { Injectable, ɵɵinjectPipeChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  currentUser=null;
  userGroupsCollectionRef: AngularFirestoreCollection<any>;
  constructor(private afAuth: AngularFireAuth, public afs: AngularFirestore) {
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user.uid;
    });
   }
  getTasks(pID){
    return this.afs.collection('tasks',ref=>ref.where('planID','==',pID)).get();
  }
  getCalenderTasks(gid){
    return this.afs.collection('plans',ref=>
                                ref.where('groupID','==',gid)).get();
  }
  getTask(taskID){
    return this.afs.collection('tasks').doc(taskID).get();
  }
  getuser(mid){
    return this.afs.collection('users').doc(mid).get();
  }
  getSteps(taskID){
   return this.afs.collection('tasks').doc(taskID).collection('steps',ref=>ref.orderBy('order')).get  ();
  }
  getComments(taskID){
    return this.afs.collection('tasks').doc(taskID).collection('comments',ref=>ref.orderBy('date')).get();
  }
  stepCheckHandeler(taskId,stepId,user,val){
    const FieldValue = firebase.firestore.FieldValue;
    this.afs.collection('tasks').doc(taskId).collection('steps').doc(stepId).get().pipe(take(1)).subscribe(res=>{
                                                                                    this.afs.collection('tasks').doc(taskId).collection('steps').doc(stepId).update({isFinished: val});
                                                                                    if(val){
                                                                                      this.afs.collection('tasks').doc(taskId).collection('steps').doc(stepId).update({finisherID: this.currentUser});
                                                                                    }
                                                                                    else{this.afs.collection('tasks').doc(taskId).collection('steps').doc(stepId).update({finisherID: FieldValue.delete()});}
                                                                                  });
  }
  sendComment(comm,sender,d,taskID){

    return this.afs.collection('tasks').doc(taskID).collection('comments').add({comment:comm,senderID:this.currentUser,date:d});
  }
  async addStep(tit,tID,ind){
    let s;
    s= await this.afs.collection('tasks').doc(tID).collection('steps').add({title:tit, isFinished: false,order:ind});
    return s;
  }
  addTask(pID,t,dueD,desc,stps){
    let timestampDate=firebase.firestore.Timestamp.fromDate(new Date(dueD));
    let tsCreationDate=firebase.firestore.Timestamp.fromDate(new Date());
    return this.afs.collection('tasks').add({planID:pID,creationDate:tsCreationDate,creator:this.currentUser,title:t,dueDate:timestampDate,description:desc});
  }
  getCurrent(){
    return this.currentUser;
  }
}
