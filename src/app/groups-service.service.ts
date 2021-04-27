/* eslint-disable curly */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import { Injectable, ɵɵinjectPipeChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
export interface group {
  Name: string,
  isPrivate: boolean
};
@Injectable({
  providedIn: 'root'
})

export class GroupsServiceService {
  group: Observable<any[]>;
  groupCollectionRef: AngularFirestoreCollection<any>;
  userGroupsCollectionRef: AngularFirestoreCollection<any>;
  constructor(public afs: AngularFirestore) {
   }
  createGroup(){
    return;
  }
  getgroup(id){
    return;
  }
  deleteGroup(id){
    return;
  }
  getGroups(){
    let groups=[];
    this.userGroupsCollectionRef = this.afs.collection('users-groups',ref=>ref.where('userID','==','RJvbBwI1ZtCHbEs6EWP3'));
    //this.groupCollectionRef.valueChanges().subscribe(res=>res.map(r=>console.log(r.Name)));
    let count=0;
    this.userGroupsCollectionRef.valueChanges().subscribe(res=>{ if (count<1){
                                                                        count++;
                                                                        res.map(r=>{
                                                                            console.log(r.groupID);
                                                                            let myref= this.afs.collection('Groups').doc(r.groupID);
                                                                            myref.get().subscribe((snap)=>{
                                                                              if(snap.exists){
                                                                                  groups.push((snap.data()));
                                                                                }
                                                                              else
                                                                                  console.log('no data');
                                                                            });
                                                                        });}
                                                                        });
    return groups;
  }
  updateGroup()
  {
    return;
  }
}
