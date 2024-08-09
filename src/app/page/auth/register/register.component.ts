import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from 'src/app/redux/actions/auth.actions';
import { AppState } from 'src/app/redux/reducer/rootReducers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    // Initialize form group with form controls and validation
    this.registerForm = this.fb.group({
      f_name: ['', Validators.required],
      l_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roleId: 1
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { f_name, l_name, email, password, roleId } = this.registerForm.value;
      console.log('Form submitted', this.registerForm.value);
      this.store.dispatch(register({ email, password, f_name, l_name, roleId }))
    } else {
      console.log("Form is invalide");
    }
  }
}
