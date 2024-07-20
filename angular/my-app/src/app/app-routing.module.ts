import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceTeamComponent } from './service-team/service-team.component';
import { TeamComponent } from './team/team.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'about-us',component:AboutusComponent},
  {path:'service-team', component:ServiceTeamComponent},
  {path:'team',component:TeamComponent},
  {path:'contact-us', component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
