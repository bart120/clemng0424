import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariableComponent } from './variable/variable.component';
import { VariableListComponent } from './variable-list/variable-list.component';
import { VariableAddComponent } from './variable-add/variable-add.component';

const routes: Routes = [
    {
        path: '', component: VariableComponent, children: [
            { path: 'list', component: VariableListComponent },
            { path: 'add', component: VariableAddComponent },
            { path: '', pathMatch: 'full', redirectTo: 'list' }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VariableRoutingModule { }