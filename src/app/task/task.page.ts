import { Component, OnInit } from '@angular/core';



interface myComment{
  title:String,
  body:String,
  priority:number //on scale from 1 to 10 where 1 is least importent and 10 is most important

}

interface task{
  title:String,
  creationDate:String,
  dueDate:String,
  progress:number, //the number of the progress percentage
  isFinished:boolean,
  comments:myComment,
  creator:String

}


@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//for the date type it will differ from the firestore so you can use the best method to show DD-MM-YYYY in the tasks page
  array:task[]=[
    {title:"my first task",creationDate:"10-10-2020",dueDate:"10-10-2021",progress:70,isFinished:false,creator:"Yasmeen",comments:{title:"First comment",body:"This is my first comment's body",priority:4}},
    {title:"my Second task",creationDate:"10-10-2020",dueDate:"10-10-2021",progress:70,isFinished:false,creator:"Lina",comments:{title:"First comment",body:"This is my first comment's body",priority:4}},
 
  ];



}
