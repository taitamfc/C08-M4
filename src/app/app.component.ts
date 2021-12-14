import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title:string  = 'Hello Angular';
  randy:string  = 'Xin chao Hung';
  age:number    = 18;
  count:number    = 0;
  image:any = {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    "width": 200,
    "height":200,
    "alt":"Logo Angular",
  }
  isActive:boolean = true;
  classes:any[] = ['class-1','class-2'];
  the_color:string = "red";

  handleChange(event:any) {
    this.title = event.target.value;
  }

  handleClickCong() {
    this.count++;
  }
  handleClickTru() {
    this.count--;
  }
 
  handleAddPhone(phone:any) {
    alert(phone);
  }
  
}
