import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private db: AngularFireDatabase) { }

    getAllcourses(user: firebase.User) {
       return  this.db.list('/users/' + user.uid + '/Courses').snapshotChanges().pipe(map(changes => changes
           .map(c => ({key: c.payload.key, ...c.payload.val()}))));
  }

  getAttendance(user: firebase.User) {
       return  this.db.list('/Courses/' + user.uid + ':' ).snapshotChanges().pipe(map(changes => changes
           .map(c => ({key: c.payload.key, ...c.payload.val()}))));
  }
}
