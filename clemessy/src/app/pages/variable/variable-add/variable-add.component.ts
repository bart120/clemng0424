import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VariableService } from '../../../core/services/variable.service';
import { VariableModel } from '../../../core/models/variable.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-variable-add',
  templateUrl: './variable-add.component.html',
  styles: ``
})
export class VariableAddComponent {

  constructor(private servVar: VariableService, private router: Router) {

  }

  maForm = new FormGroup({
    mnemonic1: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    label: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    domain: new FormControl(0, [Validators.required])
  });

  onSubmit(): void {
    let obj: any = { mnemonic2: null, active: false, region: 1, type: "TOR", variableClass: "TOR_ALA", anomalyClass: "TOR_ALA", position: null };
    Object.assign(obj, this.maForm.value);

    this.servVar.save(obj).subscribe((data) => {
      alert('Variable enregistrée');
      this.router.navigate(['variable/list']);
    });

    //console.log(obj);
  }


}
