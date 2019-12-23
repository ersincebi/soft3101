import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentaffairService } from './studentaffair.service';
import { CourseServiceService } from '../services/course/course-service.service';


@Component({
  selector: 'app-studentaffair',
  templateUrl: './studentaffair.component.html',
  styleUrls: ['./studentaffair.component.css']
})
export class StudentaffairComponent implements OnInit {

    requestForm: FormGroup;
    dataRequest : any;
  constructor(public user: UserService, private fb:FormBuilder,private serviceCourses: CourseServiceService) {
    this.requestForm= this.fb.group({
        'RequestDetail':[null,Validators.required],
        'Title':[null,Validators.required],
        })
   }

  ngOnInit() {
      
  }

  onSubmit(detail,title){
      this.serviceCourses.addRequests(detail,title);
  }


}
