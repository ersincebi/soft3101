import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from '../services/course/course-service.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  dataCourses: any;
  constructor(private serviceCourses: CourseServiceService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.user.subscribe(user => this.serviceCourses.getAllUsers(user).subscribe(user => this.dataCourses = user));
  }

}
