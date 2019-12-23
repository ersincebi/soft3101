import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { StudentaffairrequestsService } from './studentaffairrequests.service';

@Component({
  selector: 'app-studentaffairrequests',
  templateUrl: './studentaffairrequests.component.html',
  styleUrls: ['./studentaffairrequests.component.css']
})
export class StudentaffairrequestsComponent implements OnInit {

    listArray: any[];
    constructor(private rs : StudentaffairrequestsService,private afAuth: AngularFireAuth) { }
  
    ngOnInit() {
      this.afAuth.user.subscribe(
          user => this.rs.getRequests(user)
                  .subscribe(Request =>
                      this.listArray = Request
                      ));
      
      console.log(this.listArray);
  
    }

}
