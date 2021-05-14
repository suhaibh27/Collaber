import { PlanService } from './../plan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.page.html',
  styleUrls: ['./plan-form.page.scss'],
})
export class PlanFormPage implements OnInit {
  id;
  title='';
  description='';
  error=false;
  constructor(private router: Router, private planSrv: PlanService,private activatedRoute: ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }
  create(){
    if(this.title.length<=0){
      this.error=true;
    }
    else{
    this.planSrv.createPlan(this.title,this.description,this.id).then(res=>{this.router.navigateByUrl('task/'+res.id);});
    }
  }

}
