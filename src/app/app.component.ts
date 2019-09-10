import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  getData(value){
    console.log(value); 
  }


	constructor() {}
	deleteStudent(id: number): void {}
}
