/* eslint-disable max-len */
/* eslint-disable object-shorthand */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
//import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';


export interface Message {
  createdAt: firebase.firestore.FieldValue;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentUser = null;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.currentUser={uid:'QSqITrKDOZPEY7qo68OnkTsXF8q1'};
    /**this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });*/
  }


  addChatMessage(gid,msg) {
    return this.afs.collection('Groups').doc(gid).collection('Messages').add({
      msg: msg,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
  getChatMessages(gid) {
    let users = [];
    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        return this.afs.collection('Groups').doc(gid).collection('Messages', ref => ref.orderBy('createdAt')).valueChanges() as Observable<Message[]>;
      }),
      map(messages => {
        // Get the real name for each user
        for (let m of messages) {
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser.uid === m.from;
        }
        return messages;
      })
    );
  }
  private getUsers() {
    return this.afs.collection('users').valueChanges() as Observable<any>;
  }
  private getUserForMsg(msgFromId, users): string {
    for (let usr of users) {
      console.log(usr);
      if (usr.userID == msgFromId) {
        return usr.username;
      }
    }
    return 'Deleted';
  }
  // TODO Chat functionality
}
