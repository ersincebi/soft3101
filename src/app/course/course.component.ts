import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from '../services/course/course-service.service';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
dataCourses: any;
myDate = Date.now();
newdate :string;
courseid:any;
  constructor(private serviceCourses: CourseServiceService, private afAuth: AngularFireAuth) { }
students:any;
  ngOnInit() {
    console.log(this.myDate)
      this.afAuth.user.subscribe(user => this.serviceCourses.getAllcourses(user).subscribe(courses => this.dataCourses = courses));
  }
  getId(ıd){
    var dateObj = new Date();
      var month = ("0" + (dateObj.getMonth() + 1)).slice(-2); //months from 1-12
      var day = ("0" + dateObj.getDate()).slice(-2)
      var year = dateObj.getFullYear();
       this.newdate = year + "-" + month + "-" + day;
       console.log(this.newdate)
       this.courseid=ıd;
    this.serviceCourses.getMyStudents(ıd).subscribe(courses => this.students = courses);
    }
    getReq(studentid,attandance){
      this.serviceCourses.getAtt(studentid,this.courseid,attandance,this.newdate)  
      }
}
