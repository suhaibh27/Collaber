import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  id;
  us;
  user={username:'',Name:'',email:'',phoneNumber:'',userID:''};
  constructor(private router: Router,
    private userSrv: UsersService,
     private activatedRoute: ActivatedRoute,
     private loadingController: LoadingController) {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.userSrv.getUserbyID(this.id).get().subscribe(res=>{this.us=res.data();
                                                    this.user=this.us;
                                                  });
  }

  ngOnInit() {
  }
  edit(){
    this.router.navigateByUrl('profile-form/'+this.id);
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }

}
