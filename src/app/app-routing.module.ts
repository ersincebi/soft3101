import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './dersListesi/liste.component';
import { LoginComponent } from './login/login.component';
import { DersEkleComponent } from './dersListesi/ders-ekle/ders-ekle.component';
import { DersSilComponent } from './dersListesi/ders-sil/ders-sil.component';
import { DersInfoComponent } from './dersListesi/ders-info/ders-info.component';
import { DerseEkleComponent } from './dersListesi/derse-ekle/derse-ekle.component';
import { CreateComponent } from './attendance/create/create.component';
import { EditComponent } from './attendance/edit/edit.component';
import { ViewComponent } from './attendance/view/view.component';
import { TakeComponent } from './attendance/take/take.component';
import { EditAttendanceComponent } from './attendance/edit-attendance/edit-attendance.component';
import { AppComponent } from './app.component';


const routes: Routes = [
	{ path:'',component:LoginComponent},
	{ path: 'liste',component:ListeComponent},
	{ path: 'dersEkle', component:DersEkleComponent},
	{ path: "dersSil", component:DersSilComponent},
	{ path: "dersInfo", component:DersInfoComponent},
	{ path: "derseEkle", component: DerseEkleComponent },
	{ path: "createAttendance", component: CreateComponent},
	{ path: "editAttendance", component: EditComponent},
	{ path: "viewAttendance", component: ViewComponent },
	{ path: "takeAttendance", component: TakeComponent },
	{ path: "editTakedAttendance", component: EditAttendanceComponent },
  {path:"app", component:AppComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
