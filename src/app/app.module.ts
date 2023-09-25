import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthFormComponent } from './security/auth-form/auth-form.component';
import { LoginComponent } from './security/login/login.component';
import { ShowErrorsComponent } from './utilities/show-errors/show-errors.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuComponent } from './menu/menu.component';
import { AccountsMainComponent } from './accounts/accounts-main/accounts-main.component';
import { RecordsMainComponent } from './records/records-main/records-main.component';
import { AnalyticsMainComponent } from './analytics/analytics-main/analytics-main.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    LoginComponent,
    ShowErrorsComponent,
    LandingPageComponent,
    MenuComponent,
    AccountsMainComponent,
    RecordsMainComponent,
    AnalyticsMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
