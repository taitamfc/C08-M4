import { Component, OnInit } from '@angular/core';

import { Student } from '../interfaces/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit {

  students: Student[] = [
    {
      name: "Nguyen Van A",
      age: 18,
      phone: "0912345678",
      birthday: new Date(1988, 3, 15),
      gender: true
    },
    {
      name: "Nguyen Van B",
      age: 18,
      phone: "0912345678",
      birthday: new Date(1988, 3, 15),
      gender: false
    }
  ];

  title = "Hello anh em ở StudentsComponent";

  constructor() { }

  ngOnInit(): void {
    // console.log(this.students);
    //this.students = [];
  }
  ishowform: boolean = false;
  addNew() {
    console.log("1111");
    this.ishowform = true;

  }
  back() {
    this.ishowform = false;

  }

  toggleForm(){
    this.ishowform = !this.ishowform;
    // if(this.ishowform){
    //   this.ishowform = false;
    // }else{
    //   this.ishowform = true;
    // }
  }

  deleteItem(index:any){
    console.log('StudentsComponent:deleteItem');
    console.log(index);
    this.students.splice(index,1);
  }

}
