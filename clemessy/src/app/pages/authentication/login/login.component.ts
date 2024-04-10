import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { Router } from '@angular/router';
import { AuthenticationModel } from '../../../core/models/authentication.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  token?: AuthenticationModel;

  @ViewChild('password')
  passwd!: ElementRef;

  //private servAuth: AuthenticationService;

  constructor(private servAuth: AuthenticationService) {
    //this.servAuth = servAuth;
  }

  onLogin(login: string): void {
    //console.log("login", login);
    //console.log('mot de passe', this.passwd.nativeElement.value);
    this.servAuth.getTokenMinute(login, this.passwd.nativeElement.value).subscribe({
      next: (val: AuthenticationModel) => {
        this.token = val;
      }, error: (err) => {
        alert(err);
      }
    });
  }

  /*onLoginKeyUp(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.passwd.nativeElement.focus();
    }
  }*/

}

