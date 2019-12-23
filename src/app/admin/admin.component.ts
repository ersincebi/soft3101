import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  listArray: any[];
  constructor(private rs : AdminService,private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.user.subscribe(
        user => this.rs.getRequests(user)
                .subscribe(Request =>
                    this.listArray = Request
                    ));
    
    console.log(this.listArray);

  }
  updateF(key){
      this.rs.update(key,'Rejected')
  }

  updateT(key){
    this.rs.update(key,'Approved')
  }   

}
