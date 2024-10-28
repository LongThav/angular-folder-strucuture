// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/redux/actions/auth.actions';
import { AppState } from 'src/app/redux/reducer/rootReducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    // Subscribe to token changes in the store
    this.store.select(state => state.auth.token).subscribe(token => {
      if (token) {
        // Navigate to dashboard if token is present
        this.router.navigate(['/dashboard']);
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      // console.log('Dispatching login action with:', { email, password });
      this.store.dispatch(login({ email, password }));

       // Navigate to dashboard on successful login
      
    } else {
      console.log('Form is invalid');
    }
  }
}
