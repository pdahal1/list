import { Component, OnInit } from '@angular/core';
import { KathmandulistService } from '../kathmandulist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  Students = [];
  Student: any;
  constructor(private kservice: KathmandulistService, private Route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.kservice.getStudents().subscribe(data => {
      this.Students = data;
    })

    this.getStudentDetails(this.Route.snapshot.params['id']);

  }
  getStudentDetails(id: any) {
    this.kservice.getStudent(id).subscribe(data => {
      this.Student = data;
      console.log(`Details of student with id ${id}`)
    })
  }

  deleteStudent(id: any) {
    this.kservice.deleteStudent(id).subscribe(res => {
      this.router.navigate(['/student']);
    }, (err) => {
      console.log(err);
    })
  }

}
