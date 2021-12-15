import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: '[app-student]',
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {

  @Input('input_student') student :any;
  @Input('input_title') title :any;
  @Input('input_i') i :any;

  @Output('handleDeleteItem') handleDeleteItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(index:any){
    console.log('StudentComponent:handleDelete');
    this.handleDeleteItem.emit(index);
  }

}
