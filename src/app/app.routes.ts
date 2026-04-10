import { Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing';
import { HomeComponent } from './components/home/home';
import { WeaponsComponent } from './components/weapons/weapons';
import { TutorialComponent } from './components/tutorial/tutorial';
import { AboutComponent } from './components/about/about';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { Contact } from './components/contact/contact';
import { ak117Component } from './components/weapon-details/ak117/ak117';
import { WeaponDetailComponent } from './components/weapon-details/weapon-detail/weapon-detail';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'weapons', component: WeaponsComponent },
  { path: 'tutorial', component: TutorialComponent },
  {
  path: 'weapon/:id',
  component: WeaponDetailComponent
},
{
  path: 'tutorial/:id',
  component: TutorialComponent
},
  { path: 'ak117', component: ak117Component },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contacts', component: Contact }
];