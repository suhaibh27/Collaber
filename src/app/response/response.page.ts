import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-response',
  templateUrl: './response.page.html',
  styleUrls: ['./response.page.scss'],
})
export class ResponsePage implements OnInit {

  constructor(public modalController:ModalController,public router:Router) { }

  ngOnInit() {
  }
close(){
  this.modalController.dismiss();
}
}
