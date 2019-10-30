import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './pages/signin/signin.component';
import { BlanklayoutComponent } from './layouts/blanklayout/blanklayout.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

@NgModule({
	declarations: [
		AppComponent,
		SigninComponent,
		BlanklayoutComponent,
		TopbarComponent,
		SidebarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
