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
   return this.afs.collection('tasks').doc(taskID).collection('steps').get();
  }
  getComments(taskID){
    return this.afs.collection('tasks').doc(taskID).collection('comments').get();
  }
  stepCheckHandeler(taskId,stepId,user){
    const FieldValue = firebase.firestore.FieldValue;
    let val;
    this.afs.collection('tasks').doc(taskId).collection('steps').doc(stepId).get().subscribe(res=>{
                                                                                    if(res.data().isFinished){
                                                                                      val=false;
                                                                                    }
                                                                                    else{val=true;}
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
  async addStep(tit,tID){
    let s;
    s= await this.afs.collection('tasks').doc(tID).collection('steps').add({title:tit, isFinished: false});
    return s;
  }
  addTask(pID,t,dueD,desc,stps){
    let timestampDate=firebase.firestore.Timestamp.fromDate(new Date(dueD));
    let tsCreationDate=firebase.firestore.Timestamp.fromDate(new Date());

    return this.afs.collection('tasks').add({planID:pID,creationDate:tsCreationDate,creator:'RJvbBwI1ZtCHbEs6EWP3',title:t,dueDate:timestampDate,description:desc});
  }
}
