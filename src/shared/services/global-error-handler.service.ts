import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      retry(3),
      catchError((err) => {
        console.log('error handled by Http interceptor');
        return throwError(() => {
          console.log('Error reThrown by Http interceptor');
          return err;
        });
      })
    );
  }
}
