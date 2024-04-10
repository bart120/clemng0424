import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../core/models/user.model';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    user?: UserModel;
    constructor(private servUser: UserService, private router: Router) { }

    ngOnInit(): void {
        this.servUser.obsUser$.subscribe(u => {
            this.user = u;
        });
    }

    logout(): void {
        this.servUser.logout();
        this.router.navigate(['home']);
    }
}
