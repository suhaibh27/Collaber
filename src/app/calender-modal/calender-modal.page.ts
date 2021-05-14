/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarMode } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-calender-modal',
  templateUrl: './calender-modal.page.html',
  styleUrls: ['./calender-modal.page.scss'],
})
export class CalenderModalPage implements OnInit {
  t=true;
  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date()
  };
  viewTitle: string;

  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };

  modalReady = false;

  constructor(private modalCtrl: ModalController) { }
  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }
  save() {
    this.modalCtrl.dismiss({event: this.event});
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  onTimeSelected(ev) {
    this.event.startTime = new Date(ev.selectedTime);
  }
  close() {
    this.modalCtrl.dismiss();
  }
}
