/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-var */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
import { Injectable, ɵɵinjectPipeChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(public afs: AngularFirestore) { }
  getPlans(groupid){
    return this.afs.collection('plans', ref=>ref.where('groupID', '==', groupid)).get();
  }
  createPlan(title,description,gid){
    return this.afs.collection('plans').add({Title:title,Description:description,groupID:gid});
  }
  getPlan(pid){
    return this.afs.collection('plans').doc(pid).get();
  }
}
