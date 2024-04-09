import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { VariableModule } from './pages/variable/variable.module';
import { MasterModule } from './pages/master/master.module';
//import { AuthenticationModule } from './pages/authentication/authentication.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, VariableModule, MasterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clemessy';
}
