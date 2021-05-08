import { Component, OnInit } from '@angular/core';


interface myComment{
  title:String,
  body:String,
  creator:String

}

interface task{
  title:String,
  creationDate:String,
  dueDate:String,
  progress:number, //the number of the progress percentage
  isFinished:boolean,
  comments:myComment[],
  creator:String,
  othertasks:subtask[],

}
interface subtask{
  title:String,
  Priority:number //on scale from 1 to 10 where 1 is least importent and 10 is most important
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
  comments:myComment[]=[
    {title:"First comment",body:"This is my first comment's body",creator:"Yasmeen"},
    {title:"Second comment",body:"This is my Second comment's body",creator:"Lina"},
  ];
  subtasks:subtask[]=[
    {title:"First subtask",Priority:4},
    {title:"Second subtask",Priority:3},
    

  ];

//for the date type it will differ from the firestore so you can use the best method to show DD-MM-YYYY in the tasks page
array:task[]=[
  {title:"my first task",creationDate:"10-10-2020",dueDate:"10-10-2021",progress:0.7,isFinished:false,creator:"Yasmeen",comments:this.comments,othertasks:this.subtasks},
  {title:"my Second task",creationDate:"10-10-2020",dueDate:"10-10-2021",progress:0.5,isFinished:false,creator:"Lina",comments:this.comments,othertasks:this.subtasks},
];


}
