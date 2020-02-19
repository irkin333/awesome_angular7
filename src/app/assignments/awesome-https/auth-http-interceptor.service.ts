import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthHTTPInterceptorService implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        //it is possible to make modifications of request here
        const modifiedRequest = request.clone({
            /** works for cross origin requests http to https */
            /*headers: request.headers.append('sec-fetch-mode', 'no-cors')*/
        });
        return next.handle(modifiedRequest);
    }
}