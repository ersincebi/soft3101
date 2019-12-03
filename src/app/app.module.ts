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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    ListeComponent,
    DersEkleComponent,
    DersSilComponent,
    DersInfoComponent,
    DerseEkleComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAQkRsiiVowpbMdFx_lx8DhATKPtzxdBGk",
        authDomain: "angular-f02f6.firebaseapp.com",
        databaseURL: "https://angular-f02f6.firebaseio.com",
        projectId: "angular-f02f6",
        storageBucket: "angular-f02f6.appspot.com",
        messagingSenderId: "619730448238",
        appId: "1:619730448238:web:4a2e64c08cec751b911b7f",
        measurementId: "G-NE5CX9L337"
      }
    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

