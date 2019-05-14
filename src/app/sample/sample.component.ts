import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  buttons=[{name:"1"},{name:"2"}];
  constructor() { }

  ngOnInit() {
  }
  addButton(){
  
    var newButton ={name:""+ (this.buttons.length)};
    this.buttons.push(newButton);
   }
   removeButton(button){
     this.buttons.pop();
   }
  
}
