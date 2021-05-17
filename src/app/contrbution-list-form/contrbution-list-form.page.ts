import { Router } from '@angular/router';
import { ClistService } from './../clist.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MapPage } from '../map/map.page';

@Component({
  selector: 'app-contrbution-list-form',
  templateUrl: './contrbution-list-form.page.html',
  styleUrls: ['./contrbution-list-form.page.scss'],
})
export class ContrbutionListFormPage implements OnInit {
  title='';
  description='';
  loc='';
  locLink='';
  date=new Date().toISOString();
  constructor(public modalCtrl: ModalController, private clSrv: ClistService, private router: Router, private navCtrl: NavController) { }
  ngOnInit() {
  }
  async presentModal() {
        const modal = await this.modalCtrl.create({
          component: MapPage,
          backdropDismiss: false
        });
        modal.onDidDismiss().then(data=>{if(data.data){console.log(data.data);
        this.locLink='https://maps.google.com/?q='+data.data.lat+','+data.data.lng;}
        });
        return await modal.present(); }
  save(){
    this.clSrv.createList(this.title,this.description,this.loc,this.locLink,this.date,'kiLFwJTBSq0yA3OZk8qU');
    this.navCtrl.back();
  }

}
