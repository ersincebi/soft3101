import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from '../services/course/course-service.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-response-request',
  templateUrl: './response-request.component.html',
  styleUrls: ['./response-request.component.css']
})
export class ResponseRequestComponent implements OnInit {
 listRequest: any;
  constructor(private cs: CourseServiceService , private afAuth: AngularFireAuth) { }

  ngOnInit() {
      this.cs.getItems().subscribe(items => {
          console.log(items);
          items.forEach(values => {
              console.log(values);
              let key = values.key;
              console.log(key);
              this.cs.getSubItems(key).subscribe(subItems => {
                 this.listRequest= subItems;
                  subItems.forEach(uid => {
                      console.log(uid.payload.val());
                  });
              });
          });
      });
  }
    applyRequest(uid, key){
          this.cs.responseRequest(uid, key);
    }
}
