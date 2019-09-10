import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Output() myOutPut: EventEmitter<string> = new EventEmitter();
  childOutPutString = "hello i am your child"; 

  sendData() {
    this.myOutPut.emit(this.childOutPutString); 
  }

  constructor() { }

  ngOnInit() {
  }

}
