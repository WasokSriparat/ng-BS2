import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BS2';
  n1:number = 5;
  n2:number = 2;
  picName:string = "https://images.pexels.com/photos/5635101/pexels-photo-5635101.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

  hi(name:string) {
    alert("Hi " + name);
  }

}
