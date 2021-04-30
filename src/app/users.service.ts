import { Injectable, ɵɵinjectPipeChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersCollectionRef: AngularFirestoreCollection<any>;
  constructor(public afs: AngularFirestore) { }
  createUser(){
    return;
  }
  getUsers(val){
    this.usersCollectionRef = this.afs.collection('users',ref=>ref.where('username','==',val));
    this.usersCollectionRef.get().subscribe(res=>res.docs.forEach(a=>console.log(a.data())));
    return this.usersCollectionRef.get();
  }
  getUser(id){
    return;
  }
  updateUser(){
    return;
  }
  deleteUser(){

  }
}
