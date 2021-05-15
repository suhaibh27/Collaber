/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable max-len */
import { GroupsServiceService } from './../groups-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-group-next',
  templateUrl: './create-group-next.page.html',
  styleUrls: ['./create-group-next.page.scss'],
})
export class CreateGroupNextPage implements OnInit {
  users;
  privacy= false;
  name;
  desc='';
  constructor(private alertController: AlertController, private activatedRoute: ActivatedRoute,public groupSrv: GroupsServiceService, public router: Router) { }
  ngOnInit() {
    this.users=JSON.parse(this.activatedRoute.snapshot.paramMap.get('users'));
    console.log(this.users);
  }
  createGroup(){
    this.presentAlertConfirm();
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to create this group ',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
                      }
        }, {
          text: 'Yes',
          handler: () => {
            this.groupSrv.addGroupUsers(this.users,this.name,this.privacy,this.desc);
            this.router.navigateByUrl('/home');
          }
        }
      ]
    });
    await alert.present();
  }

}
