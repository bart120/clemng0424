import { Component, OnInit } from '@angular/core';
import { VariableModel } from '../../../core/models/variable.model';
import { VariableService } from '../../../core/services/variable.service';

@Component({
  selector: 'app-variable-list',
  templateUrl: './variable-list.component.html',
  styles: ``
})
export class VariableListComponent implements OnInit {
  variables: Array<VariableModel> = [];

  constructor(private servVar: VariableService) {

  }
  ngOnInit(): void {
    this.servVar.getAllVariables().subscribe((data) => this.variables = data);
  }



}
