import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [MenuComponent, FooterComponent],
    imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
    exports: [MenuComponent, FooterComponent],
    providers: [],
})
export class SharedModule { }


