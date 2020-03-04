import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class LogInterceptorService implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log('Outgoing request: ');
        console.log(request.url);
        console.log(request.headers);
        
        return next.handle(request)
                    .pipe(tap(event => { //intercept response as well
                        if(event.type === HttpEventType.Response) {
                            console.log('Incoming response: ');
                            console.log(event.body);
                        }
                    }));
    }
}