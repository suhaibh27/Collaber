import { Router } from '@angular/router';
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable, ╔Á╔ÁinjectPipeChangeDetectorRef } from '@angular/core';
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
  constructor(private router: Router,private afAuth: AngularFireAuth,public afs: AngularFirestore) {
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  }
  createUser(){
    return;
  }
  getCurrent(){
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
    return this.afAuth.signInWithEmailAndPassword(email, password).then(()=>{this.afAuth.onAuthStateChanged((user) => {
      console.log(this.currentUser = user.uid);
    });this.router.navigateByUrl('home');});
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
  getUserbyID(id){
    return this.afs.collection('users').doc(id);
  }
  searchUser(id){
    return this.afs.collection('users',ref=>
                      ref.orderBy('username').where('username','>=',id).where('username','<',id+'\uf8ff'))
                      .get();
  }
  updateUser(id,data){
    return this.afs.collection('users').doc(id).set(data);
  }
  deleteUser(){

  }
  checkDuplicate(){
    return this.afs.collection('users').get();
  }
}
