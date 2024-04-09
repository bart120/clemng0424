import { Routes } from '@angular/router';
import { HomeComponent } from './pages/master/home/home.component';
//import { VariableListComponent } from './pages/variable/variable-list/variable-list.component';
//import { VariableAddComponent } from './pages/variable/variable-add/variable-add.component';
//import { LoginComponent } from './pages/authentication/login/login.component';
import { NotFoundComponent } from './pages/master/not-found/not-found.component';
//import { VariableComponent } from './pages/variable/variable/variable.component';
//import { AuthenticationModule } from './pages/authentication/authentication.module';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '404', component: NotFoundComponent },

    //{ path: 'variable/list', component: VariableListComponent },
    //{ path: 'variable/add', component: VariableAddComponent },
    /*{
        path: 'variable', component: VariableComponent, children: [
            { path: 'list', component: VariableListComponent },
            { path: 'add', component: VariableAddComponent },
            { path: '', pathMatch: 'full', redirectTo: 'list' }
        ]
    },*/
    { path: 'variable', loadChildren: () => import('./pages/variable/variable.module').then(x => x.VariableModule) },

    //{ path: 'auth/login', component: LoginComponent },
    { path: 'auth', loadChildren: () => import('./pages/authentication/authentication.module').then(x => x.AuthenticationModule) },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '404' }
];
