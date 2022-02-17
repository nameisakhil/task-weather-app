import { Component, OnInit } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public items = [];
  public newTask;
  public newDiscription;
  public newDate;
  public isNotEditing = [];
  public isSaved;


  constructor() { }

  ngOnInit(): void {

    if(JSON.parse(localStorage.getItem("items")) === null){
      localStorage.setItem("items", JSON.stringify(this.items))
    }
    else{
      this.items= JSON.parse(localStorage.getItem("items"))
    }
    for(let i=0; i < this.items.length; i++){
      this.isNotEditing.push(true)
    }

  }



  addToList() {
      if (this.newTask =='' || this.newTask ==undefined) {
      }
      else {
          this.items.push({text:this.newTask,isChecked:false,description:this.newDiscription, date:this.newDate});
          this.isNotEditing.push(true)
          this.newTask = '';
          this.newDiscription='';
          this.newDate=undefined;
          this.isSaved= undefined
      }
  }


  deleteTask(index) {
      this.items.splice(index, 1);
      this.isSaved = undefined
  }

  saveTasks(){
    localStorage.setItem("items", JSON.stringify(this.items))
    this.isSaved = true
  }

  onClickEdit(index){
    this.isNotEditing[index] = !this.isNotEditing[index]
    this.isSaved = undefined
  }

  trackByFn(index){
    return index;
  }

  onClickChecked(index){
    this.items[index].isChecked = !this.items[index].isChecked
  }
}
