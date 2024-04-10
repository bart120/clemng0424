import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, interval, map, mergeMap, timer } from 'rxjs';
import { AuthenticationModel } from '../models/authentication.model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private http: HttpClient) {

    }

    getTokenTemp(user: string, password: string): Observable<any> {
        return this.http.get<any>('https://formation.inow.fr/demo/api/v1/brands/1');

    }


    getToken(user: string, password: string): Observable<AuthenticationModel> {
        //return this.http.get<AuthenticationModel>('https://formation.inow.fr/demo/api/v1/brands/1');


        let fd = new FormData();
        fd.append('username', user);
        fd.append('password', password);
        fd.append('scope', environment.AUTH_SCOPE);
        fd.append('grant_type', environment.AUTH_GRANT_TYPE);
        /*this.http.post(environment.AUTH_URL, fd,
            { headers: { Authorization: 'Basic QURNSU5JU1RSQVRFVVI6c2VjcmV0' } }).subscribe(this.finObservable);*/
        return this.http.post<AuthenticationModel>(environment.AUTH_URL, fd,
            { headers: { Authorization: 'Basic QURNSU5JU1RSQVRFVVI6c2VjcmV0' } });

        //this.http.get('https://formation.inow.fr/demo/api/v1/brands').subscribe(this.finObservable);
        /*this.http.get('https://formation.inow.fr/demo/api/v1/brands').subscribe((val: any) => {
            console.log(val);
        });
        console.log('fin getToken');
        return 'AZERTYGIUOJPPPIUF';*/
    }

    getTokenMinute(user: string, password: string): Observable<AuthenticationModel> {
        const obsInterval = interval(3000);


        let fd = new FormData();
        fd.append('username', user);
        fd.append('password', password);
        fd.append('scope', environment.AUTH_SCOPE);
        fd.append('grant_type', environment.AUTH_GRANT_TYPE);

        //return interval(3000).pipe(mergeMap(() => this.http.post<AuthenticationModel>(environment.AUTH_URL, fd,
        //    { headers: { Authorization: 'Basic QURNSU5JU1RSQVRFVVI6c2VjcmV0' } })));


        /*this.http.post(environment.AUTH_URL, fd,
            { headers: { Authorization: 'Basic QURNSU5JU1RSQVRFVVI6c2VjcmV0' } }).subscribe(this.finObservable);*/
        const obsCall = this.http.post<AuthenticationModel>(environment.AUTH_URL, fd,
            { headers: { Authorization: 'Basic QURNSU5JU1RSQVRFVVI6c2VjcmV0' } }).pipe(map(x => {
                x.scopeTab = x.scope.split(" ");
                return x;
            }));

        const obsCool = obsInterval.pipe(mergeMap(() => obsCall));
        return obsCool;



    }

    private finObservable(val: Object): void {
        console.log(val);
    }
}