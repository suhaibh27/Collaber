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
  userGroupsCollectionRef: AngularFirestoreCollection<any>;
  constructor(public afs: AngularFirestore) { }
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
   return this.afs.collection('tasks').doc(taskID).collection('steps',ref=>ref.orderBy('order')).get();
  }
  getComments(taskID){
    return this.afs.collection('tasks').doc(taskID).collection('comments',ref=>ref.orderBy('date')).get();
  }
  stepCheckHandeler(taskId,stepId,user,val){
    const FieldValue = firebase.firestore.FieldValue;
    this.afs.collection('tasks').doc(taskId).collection('steps').doc(stepId).get().pipe(take(1)).subscribe(res=>{
                                                                                    this.afs.collection('tasks').doc(taskId).collection('steps').doc(stepId).update({isFinished: val});
                                                                                    if(val){
                                                                                      this.afs.collection('tasks').doc(taskId).collection('steps').doc(stepId).update({finisherID: user});
                                                                                    }
                                                                                    else{this.afs.collection('tasks').doc(taskId).collection('steps').doc(stepId).update({finisherID: FieldValue.delete()});}
                                                                                  });
  }
  sendComment(comm,sender,d,taskID){

    return this.afs.collection('tasks').doc(taskID).collection('comments').add({comment:comm,senderID:sender,date:d});
  }
  async addStep(tit,tID,ind){
    let s;
    s= await this.afs.collection('tasks').doc(tID).collection('steps').add({title:tit, isFinished: false,order:ind});
    return s;
  }
  addTask(pID,t,dueD,desc,stps){
    let timestampDate=firebase.firestore.Timestamp.fromDate(new Date(dueD));
    let tsCreationDate=firebase.firestore.Timestamp.fromDate(new Date());
    return this.afs.collection('tasks').add({planID:pID,creationDate:tsCreationDate,creator:'QSqITrKDOZPEY7qo68OnkTsXF8q1',title:t,dueDate:timestampDate,description:desc});
  }
}
