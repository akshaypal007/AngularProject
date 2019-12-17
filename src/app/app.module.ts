import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importing routingmodule,httpmodule,formsmodule,reactiveformsgroup
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

//adding const mypage Routes
const mypages:Routes = [
                          {path:"home", component:HomeComponent},
                          {path:"login", component:LoginComponent},
                          {path:"signup", component:SignupComponent},
                          {path:"", redirectTo:"/home", pathMatch:"full"}
                       ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(mypages),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
