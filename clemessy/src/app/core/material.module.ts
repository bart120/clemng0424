import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    //imports: [ MatButtonModule ],
    exports: [MatButtonModule, MatCardModule],
})
export class MaterialModule { }