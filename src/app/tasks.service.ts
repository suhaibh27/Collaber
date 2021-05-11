/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
import { Injectable, ɵɵinjectPipeChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})

export class TasksService {
  userGroupsCollectionRef: AngularFirestoreCollection<any>;
  constructor(public afs: AngularFirestore) { }
  getTasks(pID){
    return this.afs.collection('tasks',ref=>ref.where('planID','==',pID)).get();
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
  stepCheckHandeler(taskId,stepId){
    let val;
    this.afs.collection('tasks').doc(taskId).collection('steps').doc(stepId).get().subscribe(res=>{
                                                                                    if(res.data().isFinished){
                                                                                      val=false;
                                                                                    }
                                                                                    else{val=true;}
                                                                                    this.afs.collection('tasks').doc(taskId).collection('steps').doc(stepId).update({isFinished: val});
                                                                                  });
  }
  sendComment(comm,sender,d,taskID){

    return this.afs.collection('tasks').doc(taskID).collection('comments').add({comment:comm,senderID:sender,date:d});
  }
}
