import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ListeComponent } from './dersListesi/liste.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DersSilComponent } from './dersListesi/ders-sil/ders-sil.component';
import { DersInfoComponent } from './dersListesi/ders-info/ders-info.component';
import { DerseEkleComponent } from './dersListesi/derse-ekle/derse-ekle.component';
import { DersEkleComponent } from './dersListesi/ders-ekle/ders-ekle.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { CreateComponent } from './attendance/create/create.component';
import { EditComponent } from './attendance/edit/edit.component';
import { ViewComponent } from './attendance/view/view.component';
import { TakeComponent } from './attendance/take/take.component';
import { EditAttendanceComponent } from './attendance/edit-attendance/edit-attendance.component';
import { CourseComponent } from './course/course.component';
import { ListAllcourseComponent } from './list-allcourse/list-allcourse.component';
import { ResponseRequestComponent } from './response-request/response-request.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    ListeComponent,
    DersEkleComponent,
    DersSilComponent,
    DersInfoComponent,
    DerseEkleComponent,
    CreateComponent,
    EditComponent,
    ViewComponent,
    TakeComponent,
    EditAttendanceComponent,
    CourseComponent,
    ListAllcourseComponent,
    ResponseRequestComponent,
    UserProfilComponent,
    RegisterUserComponent,
    ForgotPasswordComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAt-VAJ9bwNn7MPCjoNuJkkge1rETT_wGQ",
    authDomain: "whentheringbells-e723b.firebaseapp.com",
    databaseURL: "https://whentheringbells-e723b.firebaseio.com",
    projectId: "whentheringbells-e723b",
    storageBucket: "whentheringbells-e723b.appspot.com",
    messagingSenderId: "839049410073",
    appId: "1:839049410073:web:f2c3a893e58ecc88b29c88",
    measurementId: "G-2FXFE9XWB3"
      }
    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

