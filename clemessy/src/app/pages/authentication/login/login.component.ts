import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  @ViewChild('password')
  passwd!: ElementRef;

  onLogin(login: string): void {
    console.log("login", login);
    console.log('mot de passe', this.passwd.nativeElement.value);
  }

  /*onLoginKeyUp(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.passwd.nativeElement.focus();
    }
  }*/

}

