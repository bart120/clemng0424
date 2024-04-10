import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { Router } from '@angular/router';
import { AuthenticationModel } from '../../../core/models/authentication.model';
import { UserModel } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

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

  constructor(private servAuth: AuthenticationService, private servUser: UserService) {
    //this.servAuth = servAuth;
  }

  onLogin(login: string): void {
    //console.log("login", login);
    //console.log('mot de passe', this.passwd.nativeElement.value);
    this.servAuth.getTokenMinute(login, this.passwd.nativeElement.value).subscribe({
      next: (val: AuthenticationModel) => {
        //this.token = val;
        let user: UserModel = { name: "Bob", mail: login, token: val, isConnected: true };
        this.servUser.login(user);

      }, error: (err) => {
        let user: UserModel = { name: "Bob", mail: login, token: { access_token: '', expires_in: 12, scope: '', scopeTab: [], token_type: '', refresh_token: '' }, isConnected: true };
        this.servUser.login(user);
      }
    });
  }

  /*onLoginKeyUp(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.passwd.nativeElement.focus();
    }
  }*/

}

