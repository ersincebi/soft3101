import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service'
@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.css']
})
export class MyProfilComponent implements OnInit {
userTemp:any;

  constructor(private us : UserService) { }

  ngOnInit() {
    this.us.getCurrentUser().subscribe(userTemp=>this.userTemp=userTemp.email);
  
  }

}
