import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { VariableModel } from '../models/variable.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class VariableService {

    constructor(private http: HttpClient) { }

    getAllVariables(): Observable<Array<VariableModel>> {
        return this.http.get<Array<VariableModel>>(environment.VAR_URL).pipe(map((x: any) => x.data));
    }

    save(v: VariableModel): Observable<VariableModel> {
        //console.log(v);
        return this.http.post<VariableModel>(environment.VAR_URL, v);
    }

}