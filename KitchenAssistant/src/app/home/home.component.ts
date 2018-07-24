import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blnMealFound:boolean = false;
  vegetable:string = "Ladyfinger";
  roti:string = "Chapati";
  rice:string = "Jeera Rice";
  dal:string = "Dal Fry";
  constructor() { }

  ngOnInit() {
  }
  FindMeal()
  {
    console.log("Searching meal");
    this.blnMealFound = true;
  }
}
