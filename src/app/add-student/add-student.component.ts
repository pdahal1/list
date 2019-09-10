import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KathmandulistService } from '../kathmandulist.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentForm: FormGroup;
  studentId: number;
  firstname:string;
  lastname: string; 
  gradYear: Date;
  major: string;


  constructor( private router: Router, private service: KathmandulistService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.studentForm= this.formBuilder.group({
      studentId: [null, Validators.required],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      gradYear: [null, Validators.required],
      major: [null, Validators.required],

    });
  }

  onFormSubmit(form:NgForm){
    this.service.addStudent(form).subscribe( data =>{
      let id= data['studentId'];
      this.router.navigate(['/students', id]);
    }, (err)=>{
      console.log(err);
    });
  }

}
