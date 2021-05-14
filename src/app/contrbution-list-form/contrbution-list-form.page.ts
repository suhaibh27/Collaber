import { Router } from '@angular/router';
import { ClistService } from './../clist.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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
  constructor(private clSrv: ClistService, private router: Router, private navCtrl: NavController) { }
  ngOnInit() {
  }
  save(){
    this.clSrv.createList(this.title,this.description,this.loc,this.locLink,this.date,'kiLFwJTBSq0yA3OZk8qU');
    this.navCtrl.back();
  }

}
