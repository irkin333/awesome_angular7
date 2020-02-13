import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        //it is possible to make modifications of request here
        const modifiedRequest = request.clone({
            headers: request.headers.append('Interceptor-Header', 'Header name')
        });
        return next.handle(modifiedRequest);
    }
}