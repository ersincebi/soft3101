import { Injectable } from '@angular/core';
import {of as observableOf, Observable} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import {map, switchMap } from 'rxjs/operators'
import {auth} from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable({
  providedIn: 'root',

})

export class UserService {

uid = this.afAuth.authState.pipe(
  map(authState => {
    if(!authState){
      return null;
    }else{
      return authState.uid;
    }
  })
    );
isAdmin:Observable<boolean>= this.uid.pipe(
  switchMap(uid=>{
    if(!uid){
      return observableOf(false);
    }else{
      return this.db.object<boolean>('/admin/'+ uid).valueChanges()
    }
  })
);
isOgrenciIsleri:Observable<boolean>=this.uid.pipe(
  switchMap(uid=>{
    if(!uid){
      return observableOf(false);
    }else{
      return this.db.object<boolean>('/ogrenciIsleri/'+ uid).valueChanges()
    }
  })
);
  constructor(private afAuth:AngularFireAuth,private db :AngularFireDatabase) { this. afAuth.authState.subscribe(user => {this.saveUser(user); });}
  login(email, password){

this.afAuth.auth.signInWithEmailAndPassword(email, password);

  }
  logout(){
this.afAuth.auth.signOut();
  }
  saveUser(user: firebase.User) {
    if (!user) { return; }
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }
}

