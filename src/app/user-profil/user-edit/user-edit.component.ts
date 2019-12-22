import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService } from '../../user.service'
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {CourseServiceService} from '../../services/course/course-service.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  editForm:FormGroup;
  email:any
  name:any;
  id:any
  constructor( private userS:UserService, private fb:FormBuilder,private serviceCourses: CourseServiceService) { 
    this.editForm= this.fb.group({
      'studentName':[null,Validators.required]
      })

  }

  ngOnInit() {
  
  this.name=this.userS.temp.name
  this.email=this.userS.temp.email
  this.id=this.userS.editId
  console.log(this.name)
  console.log(this.email)
  }

  edit(from){
    if(this.editForm.valid){
      this.serviceCourses.editStudent(from.studentName,this.id);
    }
    
  }
  

}
