/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class ClistService {
  cListCollectionRef: AngularFirestoreCollection<any>;
  constructor(public afs: AngularFirestore) { }
  getgroupLists(grid){
    return this.afs.collection('contributionList',ref=>ref.where('groupID','==',grid)).get();
  }
  getcList(id){
      return this.afs.collection('contributionList').doc(id);
  }
  getJoinedUsers(id){
    return this.afs.collection('contributionList').doc(id).collection('joinedUsers').get();
}
updateJoin(uid,isjoin,lid,jid){
  console.log(uid+" " +isjoin+" "+ lid+" "+jid);
  this.cListCollectionRef=this.afs.collection('contributionList').doc(lid).collection('joinedUsers');
  if(!isjoin){
    this.cListCollectionRef.doc(jid).delete();
  }
  else{
    this.cListCollectionRef.add({userID:uid});
  }
}
createList(title,desc,loc,locLink,dT,gID){
  let timestampDate=firebase.firestore.Timestamp.fromDate(new Date(dT));
  this.afs.collection('contributionList').add({
                                              Title:title.toString(),
                                              Description:desc.toString(),
                                              Location:loc.toString(),
                                              dateTime:timestampDate,
                                              locationLink:locLink.toString(),
                                              groupID:gID.toString()}).then(res=> {
                                                                            if(res){
                                                                              alert('listAdded');
                                                                            }}
                                                                            ).catch(e=>console.log(e));
}
}
