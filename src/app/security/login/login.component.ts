import { Component } from '@angular/core';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { userData } from '../security';
import { parseErrorsAPI } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private securityService: SecurityService,
              private router: Router) {}

  errors: string[] =[];
  
  login(uData: userData){
    this.securityService.login(uData).subscribe(
      response=>{
        this.securityService.saveToken(response);
        this.securityService.setIsLogged(true);
        this.router.navigate(['/home/']);
        //console.log('Going to home')
      },
      errors => this.errors = parseErrorsAPI(errors));
  }
}
