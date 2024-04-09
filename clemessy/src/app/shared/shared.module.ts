import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../core/material.module';



@NgModule({
    declarations: [MenuComponent, FooterComponent],
    imports: [CommonModule, MatToolbarModule, RouterModule, MaterialModule],
    exports: [MenuComponent, FooterComponent],
    providers: [],
})
export class SharedModule { }


