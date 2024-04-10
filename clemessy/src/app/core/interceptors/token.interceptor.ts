import { Injectable, inject } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
    HttpInterceptorFn
} from '@angular/common/http';
import { UserService } from '../services/user.service';
/* v16
@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let request = req.clone({
            setHeaders: {
                Authorization: `Bearer SDGSDFHGDXJDGHETSDGJDTSJQ`
            }
        });

        return next.handle(request);
    }
}*/

//v17
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const servUser = inject(UserService);
    if (servUser.userConnected.isConnected) {
        let request = req.clone({
            setHeaders: {
                Authorization: `Bearer ${servUser.userConnected.token?.access_token}`
            }
        });

        return next(request);
    } else {
        return next(req);
    }
};