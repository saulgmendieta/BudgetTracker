import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './security/login/login.component';
import { AccountsMainComponent } from './accounts/accounts-main/accounts-main.component';
import { RecordsMainComponent } from './records/records-main/records-main.component';
import { AnalyticsMainComponent } from './analytics/analytics-main/analytics-main.component';
import { loginGuardGuard } from './login-guard.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: LandingPageComponent, canActivate: [loginGuardGuard]},
  {path: 'accounts', component: AccountsMainComponent, canActivate: [loginGuardGuard]},
  {path: 'records', component: RecordsMainComponent, canActivate: [loginGuardGuard]},
  {path: 'analytics', component: AnalyticsMainComponent, canActivate: [loginGuardGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
