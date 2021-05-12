/* eslint-disable max-len */
/* eslint-disable curly */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import { Injectable, ɵɵinjectPipeChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class GroupsServiceService {
  group: Observable<any[]>;
  groupCollectionRef: AngularFirestoreCollection<any>;
  userGroupsCollectionRef: AngularFirestoreCollection<any>;
  usersCollectionRef: AngularFirestoreCollection<any>;
  constructor(public afs: AngularFirestore) {
   }
  createGroup(){
    return;
  }
  addTousersGroups()
  {
    return;
  }
  getFilteredGroups(name){
    return this.afs.collection('Groups',ref=>ref.where('Name','==',name).where('isPrivate','==',false)).get();
  }
  //move this to user service
  async getuser(mid){
    return this.afs.collection('users').doc(mid);
  }
  getGroupUsers(id){
    this.userGroupsCollectionRef = this.afs.collection('users-groups',ref=>ref.where('groupID','==',id));
    return this.userGroupsCollectionRef.valueChanges();
  }
  getgroup(id){
    //this.afs.collection('Groups').doc(id.toString()).get().subscribe(res=>console.log(res.data()));
    return this.afs.collection('Groups').doc(id);
  }
  deleteGroup(id){
    return;
  }

  getGroups(){
    let groups=[];
    this.userGroupsCollectionRef = this.afs.collection('users-groups',ref=>ref.where('userID','==','RJvbBwI1ZtCHbEs6EWP3'));
    let count=0;
    this.userGroupsCollectionRef.valueChanges().subscribe(res=>{ if (count<1){
                                                                        count++;
                                                                        res.map(r=>{
                                                                            console.log(r.groupID);
                                                                            let myref= this.afs.collection('Groups').doc(r.groupID);
                                                                            myref.get().subscribe((snap)=>{
                                                                              if(snap.exists){
                                                                                  console.log(snap.id);
                                                                                  groups.push((snap));
                                                                                }
                                                                              else
                                                                                  console.log('no data');
                                                                            });
                                                                        });}
                                                                        });
    return groups;
  }
  getGroups2(){
    let groups=[];
    this.userGroupsCollectionRef = this.afs.collection('users-groups',ref=>ref.where('userID','==','RJvbBwI1ZtCHbEs6EWP3'));
    let count=0;
    return this.userGroupsCollectionRef.valueChanges();
    //return groups;
  }
  getMyref(groupID){
    return this.afs.collection('Groups').doc(groupID);
  }
  async updateGroup(doc,newData)
  {
    console.log(doc);
    const res = await this.afs.collection('Groups').doc(doc).set(newData);
  }
  async addGroupUsers(users,name,pr)
  {
    let uid=[];
    for(let user of users){
      this.usersCollectionRef=await this.afs.collection('users',ref=>ref.where('username','==',user));
      const data=this.usersCollectionRef.get().forEach(ds=>(ds.docs.forEach(d=>uid.push(d.id))));
    }
    const id=(await this.afs.collection('Groups').add({Name:name,isPrivate: pr})).id;
    for(let i of uid)
      this.afs.collection('users-groups').add({userID:i,groupID: id,isAdmin: false});
  }
  async removeUser(id,groupid){
    let doc=await this.afs.collection('users-groups',ref=>ref.where('userID','==',id).where('groupID','==',groupid));
    doc.get().subscribe(res=>res.forEach(d=>console.log(this.afs.collection('users-groups').doc(d.id).delete())));

  }
  async makeAdmin(id,groupid){
    let doc=await this.afs.collection('users-groups',ref=>ref.where('userID','==',id).where('groupID','==',groupid));
    doc.get().subscribe(res=>res.forEach(d=>console.log(this.afs.collection('users-groups').doc(d.id).set({userID:id,groupID:groupid,isAdmin: true}))));
  }
  async makeMember(id,groupid){
    let doc=await this.afs.collection('users-groups',ref=>ref.where('userID','==',id).where('groupID','==',groupid));
    doc.get().subscribe(res=>res.forEach(d=>console.log(this.afs.collection('users-groups').doc(d.id).set({userID:id,groupID:groupid,isAdmin: false}))));
  }
  async addUser(uid,gid){
    await this.afs.collection('users-groups').add({userID:uid,groupID:gid,isAdmin:false});
  }
  searchbyCode(code)
  {
    let group=this.afs.collection('Groups').doc(code).get();
      return group;

  }

}
