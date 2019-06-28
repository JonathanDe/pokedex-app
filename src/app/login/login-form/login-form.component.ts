import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  newUser = false;
  loginForm: FormGroup;
  errorText = '';
  showError = false;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      fullName: ['', ],
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordConfirm: [''],
    });
  }

  ngOnInit() {}

  onLogin(e) {
    e.preventDefault();
    this.newUser = false;

    if (this.loginForm.valid) {
      this.showError = false;
      if (this.loginService.loginUser(this.loginForm.value)) {
        this.router.navigate(['/dashboard']);
      } else {
        this.showError = true;
        this.errorText = 'No se encontró usuario';
      }
    } else {
      this.showError = true;
      this.errorText = 'Ingrese usuario y contraseña';

      if(!this.loginForm.controls['email'].valid) {
        this.errorText = 'Ingresa un correo válido';
      }
    }
  }

  onSignUp(e) {
    e.preventDefault();
    this.newUser = true;

    if (this.loginForm.valid) {
      this.showError = false;
      if (this.loginForm.controls['password'].value !=  this.loginForm.controls['passwordConfirm'].value) {
        this.showError = true;
        this.errorText = 'Las contraseñas no coinciden';
      } else {
        this.showError = false;

        if (this.loginService.loginUser(this.loginForm.value)) {
          this.showError = true;
          this.errorText = 'El correo ya está registrado';
        } else {
          this.showError = false,
          this.loginService.registerUser(this.loginForm.value);
          if (this.loginService.loginUser(this.loginForm.value)) {

            this.router.navigate(['/dashboard']);
          }
          console.log('se puede registrar');

        }
      }

    } else {
      this.showError = true;
      this.errorText = 'Por favor llena los campos requeridos';

      if(!this.loginForm.controls['email'].valid) {
        this.errorText = 'Ingresa un correo válido';
      }
    }
  }

  changeTab() {
    this.newUser = !this.newUser;
    this.showError = false;
  }
}
