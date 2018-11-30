import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export interface IUser{
  lastname:string;
  firstname:string;
}
export interface ITest{
  id?: number;
  testName:string;
  pointsPossible:number;
  pointsReceived:number;
  percentage:number;
  grade:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }
addTest(){
  const test:ITest = {
    id:null,
    testName:null,
    pointsPossible:null,
    pointsReceived:null,
    percentage: null,
    grade:null
  };
  this.addTest.unshift(test);
  localStorage.setItem('test',JSON.stringify(this.test));
}

deleteTest(index:number){
this.test.splice(index,1);
this.saveToLocalStorage();
}

saveToLocalStorage(){
  localStorage.setItem('test',JSON.stringify(this.test));
}

validation(user:IUser){
const presetUser={


}
}
}

