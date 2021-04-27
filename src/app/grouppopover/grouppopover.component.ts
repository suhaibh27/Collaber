/* eslint-disable @typescript-eslint/quotes */
import { AlertController } from '@ionic/angular';
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/contextual-lifecycle */
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input  } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'grouppopover',
  templateUrl: './grouppopover.component.html',
  styleUrls: ['./grouppopover.component.scss'],
})
export class GrouppopoverComponent implements OnInit {
  @Input() name;
  constructor(public alertController: AlertController) { }
  ngOnInit() {
  }
  delete(){
    alert(this.name);
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
}
