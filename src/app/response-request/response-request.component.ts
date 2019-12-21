import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from '../services/course/course-service.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-response-request',
  templateUrl: './response-request.component.html',
  styleUrls: ['./response-request.component.css']
})
export class ResponseRequestComponent implements OnInit {
listArray: Array<Object>;
listRequest: Array<String>;
  constructor(private cs: CourseServiceService , private afAuth: AngularFireAuth) { }
count =0;
  ngOnInit() {
      const z = [];
       this.listArray = [];
      this.cs.getItems().subscribe(items => {
          items.forEach(values => {

                 this.listRequest = [];
                let key = values.key;
                this.listRequest.push(key);
              //console.log(key)
              this.listArray.push(this.listRequest);
           });

      for (let i = 0; i < this.listArray.length; i++) {

          this.cs.getSubItems(this.listArray[i][0]).subscribe(subItems => {
                    console.log(this.listArray[i][0]);
                  //console.log(subItems)
                   let k=1;
                  subItems.forEach(uid => {
                      this.listArray[i][k]=(uid.key);
                      k++;
                  });
              });
            }
      console.log(this.listArray);




      });


  }
    applyRequest(uid, key){
          this.cs.responseRequest(uid, key);
    }
}