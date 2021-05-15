/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable, ɵɵinjectPipeChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersCollectionRef: AngularFirestoreCollection<any>;
  currentUser = null;
  constructor(private afAuth: AngularFireAuth,public afs: AngularFirestore) {
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  }
  createUser(){
    return;
  }
  async signup({ email, password,name,usrname,phone, }): Promise<any> {
    const credential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    const uid = credential.user.uid;
    return this.afs.doc(
      `users/${uid}`
    ).set({
      userID:uid,
      email: credential.user.email,
      phoneNumber:phone,
      username:usrname,
      Name:name
    });
  }

  signIn({ email, password }) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }
  getUsers(val){
    this.usersCollectionRef = this.afs.collection('users',ref=>ref.where('username','==',val));
    this.usersCollectionRef.get().subscribe(res=>res.docs.forEach(a=>console.log(a.data())));
    return this.usersCollectionRef.get();
  }
  getUser(id){
    return this.afs.collection('users',ref=>ref.where('username','==',id)).get();
  }
  searchUser(id){
    return this.afs.collection('users',ref=>ref.where('username','==',id)).get();
  }
  updateUser(){
    return;
  }
  deleteUser(){

  }
}
