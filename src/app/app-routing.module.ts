import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandpageComponent } from './landpage/landpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/land', pathMatch: 'full' },
  { path: 'land', component: LandpageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
