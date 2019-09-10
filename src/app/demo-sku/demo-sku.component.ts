import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-sku',
  templateUrl: './demo-sku.component.html',
  styleUrls: ['./demo-sku.component.css']
})
export class DemoSkuComponent implements OnInit {

  myForm: FormGroup;

	constructor(fb: FormBuilder) {
		this.myForm = fb.group({
			sku: [ '4123' ],
			price: 20
		});
	}

	ngOnInit() {}
}
