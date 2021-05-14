import { ClistService } from './../clist.service';
import { TasksService } from './../tasks.service';
/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable object-shorthand */
/* eslint-disable eqeqeq */
/* eslint-disable curly */
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalenderModalPage } from '../calender-modal/calender-modal.page';
import { Router, ActivatedRoute } from '@angular/router';
import { CalendarMode } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  gr='';
  s=6;
  e=20;
  st=30;
  sdw=1;
  tasks=[];
  lists=[];
  pids=[];
  eventSource = [];
  viewTitle: string;
  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date(),
  };
  selectedDate: Date;
  constructor(private activatedRoute:ActivatedRoute, private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
    private modalCtrl: ModalController,private loadingController:LoadingController,private taskSrv: TasksService,private listSrv: ClistService) {
      this.gr=this.activatedRoute.snapshot.paramMap.get('id');
      this.taskSrv.getCalenderTasks(this.gr).subscribe(res=>{res
          .forEach(plan=>{this.pids.push(plan.data());this.taskSrv.getTasks(plan.id)
              .subscribe(r=>r
                  .forEach(task=>{this.tasks.push({tt:task,pp:plan.data()});this.createRandomEvents();}));});});
      this.listSrv.getgroupLists(this.gr).subscribe(res=>res.forEach(lis=>this.lists.push(lis)));

    }

  ngOnInit() {
  }
  next() {
    this.myCal.slideNext();
  }
  back() {
    this.myCal.slidePrev();
  }
  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  createRandomEvents() {
    var events = [];
      for(let t of this.tasks){
        var date=t.tt.data().dueDate.toDate();
        var date2;
        console.log(date =new Date(Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate())));
        date2 =new Date(Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate()+1));
        var h=date.getHours();
        var m=date.getMinutes();
        if(h<10){h='0'+h;}
        if(m<10){m=m+'0';}
        h=h.toString();
        m=m.toString();
        var startTime;
        var endTime;
        startTime =date;
        endTime = date2;
        events.push({
          title: t.tt.data().title+ ' Due: '+h+':'+m +' In('+t.pp.Title+')',
          startTime: startTime,
          endTime: endTime,
          allDay: true,
        });}
        for(let t of this.lists){
          var date=t.data().dateTime.toDate();
          var date2;
          console.log(date =new Date(Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate())));
          date2 =new Date(Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate()+1));
          var h=date.getHours();
          var m=date.getMinutes();
          if(h<10){h='0'+h;}
          if(m<10){m=m+'0';}
          h=h.toString();
          m=m.toString();
          var startTime;
          var endTime;
          startTime =date;
          endTime = date2;
          events.push({
            title: t.data().Title+ ' At: '+h+':'+m+' (Contrbution list)',
            startTime: startTime,
            endTime: endTime,
            allDay: true,
          });}
    this.eventSource = events;
}
  removeEvents() {
    this.eventSource = [];
  }
}
