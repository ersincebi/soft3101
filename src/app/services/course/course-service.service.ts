import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
title="angular";
teacher="ogretmen";
  constructor(private db: AngularFireDatabase) { }

    getAllcourses(user: firebase.User) {
       return  this.db.list('/ogretmen/' + user.uid + '/Courses').snapshotChanges().pipe(map(changes => changes
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
  getOgretmen(){
    return  this.db.list('/ogretmen').snapshotChanges().pipe(
      map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()}))));
  }
  getAdmin(){
    return  this.db.list('/admin').snapshotChanges().pipe(
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
  responseRequest(uid, key,emaill){
      this.db.object('/users/' + uid + '/Courses/' + key).update({
          Title:this.title,
          Teacher:this.teacher,
          onay: true
          
    });
    this.db.object('/denemeDersler/' + key + '/students/' + uid).update({
      email: emaill //düzelt
});
  }
  ogrenciYap(key,email,name){
    var x=this.db.createPushId();
    this.db.object('/ogrenci/'+key).update({
      email:email,
      name:name
    });
  }
  ogretmenYap(key,email,name){
    var x=this.db.createPushId();
    this.db.object('/ogretmen/'+key).update({
      email:email,
      name:name
    });
  }
 AddCourse(Title,Teacher,uid){
   var x =this.db.createPushId();
   this.db.object('/AllCourses/' + x).update({
    Title: Title,
    Teacher:Teacher
  });
  this.db.object('/ogretmen/' + uid + '/Courses/' +x).update({
  Title: Title,
  Teacher:Teacher
});
this.db.object('/denemeDersler/' + x).update({
  Title: Title,
});

 /*  firebase.database().ref('/AllCourses/').child(String(x)).set("Title",Title)
   firebase.database().ref('/AllCourses/').child(String(x)).set("Teacher",Teacher)
   firebase.database().ref('/ogretmen/'+uid+'/').child(String(x)).set("Title",Title)
   firebase.database().ref('/ogretmen/'+uid+'/').child(String(x)).set("Teacher",Teacher)
   
   this.db.list('AllCourses').push({
     Title:Title,
     Teacher:Teacher
   })*/
 
 }
 CoruseService
getMyStudents(x){
    return  this.db.list('/denemeDersler/'+x+'/students/').snapshotChanges().pipe(map(changes => changes
      .map(c => ({key: c.payload.key, ...c.payload.val()}))));

  }
 

  getAtt(studentid,courseid,attendance,date){
  
   /* this.db.object('denemeDersler/' + courseid+'/attendance/'+studentid).update({
     date : attendance
   });*/

   this.db.object('denemeDersler/' + courseid+'/attendance/'+studentid+'/'+date).set(attendance);

  }
}