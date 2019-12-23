import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from '../services/course/course-service.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {UserService} from '../user.service';
declare let alertify:any;

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
userTemp:firebase.User
ogrenci:boolean=false;
viewDetails:any;

  constructor(public user:UserService,private serviceCourses: CourseServiceService, private afAuth: AngularFireAuth,private db:AngularFireDatabase) { }
students:any;
ogretmen:boolean=false;
  ngOnInit() {
    this.user.getCurrentUser().subscribe(userTemp=>this.userTemp=userTemp);
    console.log(this.myDate)
    
      this.db.list('/ogrenci/').snapshotChanges().subscribe(items=>{
        items.forEach(values => {
         let key = values.key;
         if(this.userTemp.uid==key){
          this.ogrenci=true;
          console.log(key)
          console.log(this.userTemp.uid)
          this.afAuth.user.subscribe(user => this.serviceCourses.getAllcoursesStudent(user).subscribe(courses => this.dataCourses = courses));
         
         }       
       });

      });
      this.db.list('/ogretmen/').snapshotChanges().subscribe(items=>{
        items.forEach(values => {
         let key = values.key;
         if(this.userTemp.uid==key){
          this.ogretmen=true;
          console.log(key)
          console.log(this.userTemp.uid)
          this.afAuth.user.subscribe(user => this.serviceCourses.getAllcourses(user).subscribe(courses => this.dataCourses = courses));
         }
       });

      });
    
      
      


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
      console.log(attandance)
      if(attandance==true){
        alertify.success("Geldi");
      }else if(attandance==false){
        alertify.error("Gelmedi");
      }
      
      this.serviceCourses.getAtt(studentid,this.courseid,attandance,this.newdate)  
      }
      getAttDetails(ıd){
       
        this.afAuth.user.subscribe(user => this.serviceCourses.getAttDetails(ıd,user).subscribe(detail => this.viewDetails = detail));
        
      }
      dropCourse(courseId){
        if(window.confirm('Dersten Çekilmek İstediğine Emin misin?')){
        this.afAuth.user.subscribe(user => this.serviceCourses.dropCourses(courseId,user));
        }
      }
}
