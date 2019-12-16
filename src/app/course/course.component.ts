import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from '../course-service.service';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
dataCourses: any;
  constructor(private serviceCourses: CourseServiceService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
      this.afAuth.user.subscribe(user => this.serviceCourses.getAllcourses(user).subscribe(courses => this.dataCourses = courses));
  }

}
