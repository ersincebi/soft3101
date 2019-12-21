import { Injectable } from '@angular/core';
import {of as observableOf, Observable} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import {map, switchMap } from 'rxjs/operators'
import {auth} from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import {CanActivate, Router} from '@angular/router'
@Injectable({
  providedIn: 'root',

})

export class UserService implements CanActivate {

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
isOgrenci:Observable<boolean>=this.uid.pipe(
  switchMap(uid=>{
    if(!uid){
      return observableOf(false);
    }else{
      return this.db.object<boolean>('/ogrenci/'+ uid).valueChanges()
    }
  })
);
isOgretmen:Observable<boolean>=this.uid.pipe(
  switchMap(uid=>{
    if(!uid){
      return observableOf(false);
    }else{
      return this.db.object<boolean>('/ogretmen/'+ uid).valueChanges()
    }
  })
);
  constructor(private afAuth:AngularFireAuth,private db :AngularFireDatabase, private router:Router) {
    
     this. afAuth.authState.subscribe(user => {this.saveUser(user); });}
  login(email, password){

this.afAuth.auth.signInWithEmailAndPassword(email, password).then((result)=> this.router.navigate(['liste']));

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
  getCurrentUser(){

    return this.afAuth.authState;
  }
  canActivate():Observable<boolean>{
    return this.afAuth.authState.pipe(
      map(user=>{
        if(user){
          return true;
        }else{
          this.router.navigateByUrl('');
          return false;
        }
      })
    )
  }
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.saveUser(result.user);
        this.router.navigate(['']) //kayıt yapıldıgında nereye yönlendiricegini sec 
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

}

