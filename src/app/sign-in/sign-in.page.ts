/* eslint-disable no-var */
/* eslint-disable max-len */
import { ToastController } from '@ionic/angular';
/* eslint-disable eqeqeq */
import { UsersService } from './../users.service';
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import { PasswordValidator } from '../validators/password.validator';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
  validation_messages = {
    username: [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'use only letters, number "_", "." _ and . cannot be at start or the end' },
      { type: 'validUsername', message: 'Your username has already been taken.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    confirm_password: [
      { type: 'required', message: 'Confirm password is required.' }
    ],
    matching_passwords: [
      { type: 'areEqual', message: 'Password mismatch.' }
    ],
    name: [
      { type: 'pattern', message: 'only letters are accepted.' },
      {type: 'required', message: 'name is Required' }
    ],
    phone: [
      { type: 'required', message: 'Phone is required.' },
      { type: 'pattern', message: 'only numbers are accepted.' }
    ],
    email:[{type: 'required',message:'Email is required.'},
          {type: 'pattern', message: 'not a valid Email form.' }
    ]
};
  public login=true;
  signUpForm: FormGroup;
  matching_passwords_group: FormGroup;
  email;
  username;
  password;
  phone;
  name;
  error='';
  signInEmail;
  signInPassword;
  signInError;
  constructor(private toastController: ToastController, public userSrv: UsersService, public router: Router,public formbuilder: FormBuilder) {
    }
  toggleRegisterForm(){
    this.login=((this.login) ?false:true);
  }
  signIn(){
    this.signInError='';
    this.userSrv.signIn({email:this.signInEmail,password:this.signInPassword}).then(()=>this.presentToast()).catch(er=>this.signInError=er.message);
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Successful :).',
      duration: 1500,
    });
    toast.present();

  }
  checkDup(val){
    this.error='';
    if(val.status=='VALID'){
      var mUser;
      this.userSrv.checkDuplicate().subscribe(res=>res.forEach(user=>{mUser=user.data();if(mUser.username.toLowerCase()==this.username.toLowerCase()){this.error='username is already taken';}else{this.signUp();};}));
  }}
  signUp(){
    this.error='';
    this.userSrv.signup({email: this.email,
                        password: this.password,
                        name: this.name,
                        usrname: this.username,
                        phone: this.phone}).catch(er=>console.log(this.error=er.message));
  }

  ngOnInit() {
    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    },
    );
    this.signUpForm = this.formbuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$'),
        Validators.required
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z \s]*$')
      ])),
      matching_passwords: this.matching_passwords_group,
  });
  }
}
