/* eslint-disable eqeqeq */
import { Router } from '@angular/router';
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-create-group-form',
  templateUrl: './create-group-form.page.html',
  styleUrls: ['./create-group-form.page.scss'],
})
export class CreateGroupFormPage implements OnInit {
  users=[];
  addeddUsers=[];
  load=0;
  constructor(private loadingController: LoadingController,
              public usersSrv: UsersService,
              public toastController: ToastController,
              public router: Router) {
  }

  ngOnInit() {
  }
  searchUsers(e){
    this.users=[];
    let v= e.target.value;
    if(v.length>0){
    if(this.load==0){
      this.presentLoading();
      this.load=1;
    }
    this.usersSrv.searchUser(v).subscribe(res=>{
                      this.users=[];res.docs.forEach(u=>
                                        this.users.push(u.data()));this.loadingController.dismiss();this.load=0;});
  }}
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      spinner: 'circles',
      keyboardClose:false,
      duration:2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  addUser(username){
    if(this.addeddUsers.includes(username)){
      this.presentRedunduntToast();
    }
    else{
    this.addeddUsers.push(username);
    }
    console.log(this.addeddUsers);
  }
  removeUser(index){
    this.addeddUsers.splice(index,index+1);
    console.log(this.addeddUsers);
  }
  async presentRedunduntToast() {
    const toast = await this.toastController.create({
      message: 'User is already added',
      duration: 2000
    });
    toast.present();
  }
  nextPage(){
    this.router.navigateByUrl('/create-group-next/'+JSON.stringify(this.addeddUsers));
  }
}
