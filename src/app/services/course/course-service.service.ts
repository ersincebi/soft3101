import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
  getAllcoursess(){
      return  this.db.list('/AllCourses').snapshotChanges().pipe(
          map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()}))));
  }
    getItems() {
    return this.db.list('/requestCourses/').snapshotChanges();
    }

    getSubItems(key) {
    return this.db.list('/requestCourses/' + key + "/").snapshotChanges();
    }
  /*return  this.db.list('/requestCourses/').snapshotChanges().pipe(map(changes => changes
           .map(c => ({key: c.payload.key, ...c.payload.val()}))));*/
  sendRequest(user: firebase.User, key){
      this.db.object('/requestCourses/' + user.uid + '/' + key).update({
          email: user.email,
          uid: user.uid
    });
  }
  getAllUsers(user: firebase.User) {
    return  this.db.list('/users/').snapshotChanges().pipe(map(changes => changes
        .map(c => ({key: c.payload.key, ...c.payload.val()}))));
}
  responseRequest(uid, key){
      this.db.object('/users/' + uid + '/Courses/' + key).update({
          onay: true
    });
  }
 AddCourse(Title,Teacher){
   this.db.list('AllCourses').push({
     Title:Title,
     Teacher:Teacher
   })
 }
}