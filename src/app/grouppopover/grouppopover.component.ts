/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { GroupsServiceService } from './../groups-service.service';
/* eslint-disable @typescript-eslint/quotes */
import { AlertController, PopoverController } from '@ionic/angular';
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/contextual-lifecycle */
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, ɵsetCurrentInjector  } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'grouppopover',
  templateUrl: './grouppopover.component.html',
  styleUrls: ['./grouppopover.component.scss'],
})
export class GrouppopoverComponent implements OnInit {
  @Input() name;
  constructor(public alertController: AlertController, public groupSrv: GroupsServiceService,public router: Router,private popoverController: PopoverController) { }
  ngOnInit() {
  }
  delete(){
    alert(this.name);
  }
  edit(){
    this.DismissClick();
    this.router.navigateByUrl('/edit-group/'+this.name);
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are You sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
  async DismissClick() {
    await this.popoverController.dismiss();
  }
}
