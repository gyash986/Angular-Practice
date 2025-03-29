import { Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { Form1Component } from './form1/form1.component';
import { authGuardGuard } from './auth-guard.guard';


export const routes: Routes = [
//   {
// path:'feature', loadComponent: ()=> import('./feature/feature.component').then(m=>m.FeatureComponent)
//   },import { authGuardGuard } from './auth-guard.guard';


//   { path: '', redirectTo: '/feature', pathMatch: 'full' },


{ path: 'home', component: FeatureComponent, canActivate: [authGuardGuard] },
{ path: 'login', component: Form1Component },
{ path: '', redirectTo: '/login', pathMatch: 'full' }

];
