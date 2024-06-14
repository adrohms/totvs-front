import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'totvs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authenticationError = false;

  public loginForm: FormGroup = this.fb.group({
    email: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {

  }

  public get email() {
    return this.loginForm.get('email');
  }


  public authenticate(): void {
    this.loginService.login(this.loginForm.value).subscribe({
      next: response => {
        console.log(response);
        this.authenticationError = false;
        this.toastr.success("Autenticado com sucesso!")
        if (!this.router.getCurrentNavigation()) {
          // There were no routing during login (eg from navigationToStoredUrl)
          this.router.navigate(['']);
        }
      },
      error: () => {
        this.authenticationError = true
        this.toastr.error("Login ou senha inválidos.")
      },
    });
  }
}
