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
  ad:any;
email:any
  constructor(private serviceCourses: CourseServiceService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.user.subscribe(user => this.serviceCourses.getAllUsers(user).subscribe(user => this.dataCourses = user));
  }
  Edit(row)
{
this.ad=row.key
console.log(this.ad)
this.email=row.email

}

}
