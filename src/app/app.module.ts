import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PreheaderComponent } from './preheader/preheader.component';
import { FilterpplComponent } from './filterppl/filterppl.component';
import { PersonComponent } from './person/person.component';
import { ProfileComponent } from './profile/profile.component';
import { ProblemFormComponent } from './problem-form/problem-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const appRoutes:Routes = [
  {path:'', component: FilterpplComponent},
  {path:'profil', component: ProfileComponent},
  {path:'prijaviproblem', component: ProblemFormComponent},
  {path:'prijava', component: LoginComponent},
  {path:'registracija', component: RegisterComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreheaderComponent,
    FilterpplComponent,
    PersonComponent,
    ProfileComponent,
    ProblemFormComponent,
    LoginComponent,
    RegisterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
