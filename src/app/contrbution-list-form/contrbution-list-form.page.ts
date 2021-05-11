import { ClistService } from './../clist.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private clSrv: ClistService) { }

  ngOnInit() {
  }
  save(){
    this.clSrv.createList(this.title,this.description,this.loc,this.locLink,this.date,'kiLFwJTBSq0yA3OZk8qU');
    return;
  }

}
