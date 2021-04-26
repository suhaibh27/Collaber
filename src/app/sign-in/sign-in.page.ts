/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

interface user {
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  phoneNumber: number
  username: string,

}
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  public login=true;
  muser: Observable<user[]>;
  productsCollectionRef: AngularFirestoreCollection<user>;
  constructor(public router: Router, public afs: AngularFirestore) {
    this.productsCollectionRef = this.afs.collection('users');
    this.muser = this.productsCollectionRef.valueChanges();
  }
  toggleRegisterForm(){
    this.login=((this.login) ?false:true);
  }
  signIn(){
    this.router.navigateByUrl('/home');
  }
  signUp(){
    alert('Signed Up');
  }

  ngOnInit() {
  }

}
