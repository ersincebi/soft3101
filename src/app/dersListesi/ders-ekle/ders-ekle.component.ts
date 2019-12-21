import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {CourseServiceService} from '../../services/course/course-service.service';

@Component({
  selector: 'app-ders-ekle',
  templateUrl: './ders-ekle.component.html',
  styleUrls: ['./ders-ekle.component.css']
})
export class DersEkleComponent implements OnInit {
  regiForm:FormGroup;
categories:any[];

constructor(public user: UserService, private fb:FormBuilder,private serviceCourses: CourseServiceService) {
  this.regiForm= this.fb.group({
  'DersinAdı':[null,Validators.required],
  'DersinOgretmeni':[null,Validators.required],
  'OgretmenID':[null,Validators.required],
  })
  }
  ngOnInit() {
  }
  onSubmit(from){
    console.log(from)
    if(this.regiForm.valid){
      this.serviceCourses.AddCourse(from.DersinAdı,from.DersinOgretmeni,from.OgretmenID);
    
    }

  }
}
