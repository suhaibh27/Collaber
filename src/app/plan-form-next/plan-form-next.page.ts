import { AlertController } from '@ionic/angular';
/* eslint-disable id-blacklist */
import { Router } from '@angular/router';
/* eslint-disable prefer-const */
import { ActivatedRoute } from '@angular/router';
import { TasksService } from './../tasks.service';
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-form-next',
  templateUrl: './plan-form-next.page.html',
  styleUrls: ['./plan-form-next.page.scss'],
})
export class PlanFormNextPage implements OnInit {

  constructor(private alertController: AlertController, private router:Router,private taskSrv:TasksService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  list = [];
  array = [];
  subtask = "";
  dis = false;
  title='';
  date=new Date();
  desc='';
  error=false;
  add() {
    this.list.push({title:this.subtask,dis:false});
  }
  del(index) {
    this.list.splice(index,1);
  }
  done(index) {
   this.list[index].dis = true;
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to create this task',
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
            this.create();
          }
        }
      ]
    });
    await alert.present();
  }
  sav(){
    this.error=false;
    if(this.title.length<=0){
      this.error=true;
      return;
    }
    this.presentAlertConfirm();
  }
  create() {
 //Add for validation .. i didnt know how to do it :)
    let id=this.activatedRoute.snapshot.paramMap.get('id');
    this.array.push({title:this.capitalizeFirstLetter(this.title),dueDate:this.date,subtasks:this.list});
    this.taskSrv.addTask(id,this.title,this.date,this.desc,this.list).then(res=>{{
                                                                                    for(let i=0;i<this.list.length;i++){
                                                                                        this.taskSrv.addStep(this.list[i].title,res.id,i);}this.router.navigateByUrl('task-details/'+res.id);}});
  }
  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

}
