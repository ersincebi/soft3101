import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private db : AngularFireDatabase) { }

  getRequests(user: firebase.User) {
    return  this.db.list('/Requests/').snapshotChanges();
}
}
