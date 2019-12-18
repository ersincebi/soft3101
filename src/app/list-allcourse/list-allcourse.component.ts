import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from '../services/course/course-service.service';
import {Subscriber, Subscription} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-list-allcourse',
  templateUrl: './list-allcourse.component.html',
  styleUrls: ['./list-allcourse.component.css']
})
export class ListAllcourseComponent implements OnInit {
dataCourses: any;
  constructor(private cs: CourseServiceService , private afAuth: AngularFireAuth) { }

  ngOnInit() {
      this.cs.getAllcoursess().subscribe(courses => this.dataCourses = courses);
  }
  getReq(key){
       this.afAuth.user.subscribe(user => this.cs.sendRequest(user, key));
  }
}
