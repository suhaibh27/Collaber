/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClistService {
  cListCollectionRef: AngularFirestoreCollection<any>;
  constructor(public afs: AngularFirestore) { }
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
}
