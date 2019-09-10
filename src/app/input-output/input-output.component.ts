import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-input-output',
	templateUrl: './input-output.component.html',
	styleUrls: [ './input-output.component.css' ]
})
export class InputOutputComponent implements OnInit {
  constructor() { }
 
  @Output() myOutPut: EventEmitter<String> = new EventEmitter(); 
  outPutString = "Hello i am your child where is the child support?"; 
  
  sendData() {
    this.myOutPut.emit(this.outPutString); 
  }

  ngOnInit() {
    
   
  }
}
