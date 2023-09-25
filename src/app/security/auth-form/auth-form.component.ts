import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userData } from '../security';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  
  constructor(private formBuilder: FormBuilder) {}
  form: FormGroup;

  @Input()
  errors: string[] = [];
  @Input()
  action: string;

  @Output()
  formUserData: EventEmitter<userData> = new EventEmitter<userData>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['',{
        validators: [Validators.required],
      }],
      password: ['',{
        validators: Validators.required
      }]
    });
  }

}
