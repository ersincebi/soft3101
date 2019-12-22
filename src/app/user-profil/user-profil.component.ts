import { Component, OnInit, Injectable } from '@angular/core';
import {CourseServiceService} from '../services/course/course-service.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router'
import { UserService} from '../user.service'

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})

export class UserProfilComponent implements OnInit {
  dataCourses: any;
id:any;
  email:any
  constructor(private serviceCourses: CourseServiceService, private afAuth: AngularFireAuth,private router:Router,private user:UserService) { }

  ngOnInit() {
    this.afAuth.user.subscribe(user => this.serviceCourses.getAllStudentProfile(user).subscribe(user => this.dataCourses = user));//dataCourses öğrenci bilgileri
  }
  Edit(row)
{
this.id=row.key

this.email=row.email
console.log(this.email)
this.user.editProfil(row,this.id)
this.router.navigate(['editProfil'])
}

}
