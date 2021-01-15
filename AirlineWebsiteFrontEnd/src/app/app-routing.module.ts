import { FlightSearchComponent } from './UserOperation/flight-search/flight-search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './Login/user-login/user-login.component';


const routes: Routes = [
  { path: 'flightSearch', component: FlightSearchComponent },
  { path: 'userLogin', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
