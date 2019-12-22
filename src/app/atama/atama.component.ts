import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from '../services/course/course-service.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-atama',
  templateUrl: './atama.component.html',
  styleUrls: ['./atama.component.css']
})

export class AtamaComponent implements OnInit {
  dataCourses: any;
key:any;
email:any;
  constructor(private cs:CourseServiceService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.user.subscribe(user => this.cs.getAllUsers(user).subscribe(user => this.dataCourses = user));
  }
  ogrenciYap(row)
{
this.key=row.key
this.email=row.email;
console.log(this.key)
this.cs.ogrenciYap(row.key,row.email,row.name);
}
ogretmenYap(row)
{
this.key=row.key
this.email=row.email;
console.log(this.key)

this.cs.ogretmenYap(row.key,row.email,row.name);
}

}
