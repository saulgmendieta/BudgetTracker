import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { autenticationResponse, userData } from './security';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient,
              private router: Router) { }

  private apiURL = environment.apiURL + 'login';
  private readonly tokenKey = 'token';
  private readonly expiryKey = 'expiry-token';

  private isLogged = false;

  getIsLogged(): boolean{
    return this.isLogged;
  }

  setIsLogged(logged: boolean){
    this.isLogged = logged;
  }

  obtenerCampoJWT(campo: string):string{
    const token = localStorage.getItem(this.tokenKey);
    if(!token){return ''}
    var dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[campo];
  }

  saveToken(response: autenticationResponse){
    localStorage.setItem(this.tokenKey, response.accessToken);
    localStorage.setItem(this.expiryKey, response.expire.toString());
  }

  login(uData: userData): Observable<autenticationResponse>{
    return this.http.post<autenticationResponse>(`${this.apiURL}`, uData);
  }

  logout(){
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expiryKey);
    this.isLogged = false;
    this.router.navigate(['/home/']);
  }

  register(uData: userData): Observable<autenticationResponse>{
    return this.http.post<autenticationResponse>(`${this.apiURL}/make`, uData);
  }

  getToken(){
    return localStorage.getItem(this.tokenKey);
  }
}
