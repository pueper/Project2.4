import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem("token");

    if (token) {
        req = req.clone({
          setHeaders: {
            'Content-Type':"application/json",
            'Accept' : 'application/json',
            'Authorization': `Bearer ${token}`,
            'Acces-Control-Allow-Origin' : 'http://localhost:4200',
            'Acces-Control-Allow-Methods' : 'GET, DELETE, HEAD, OPTIONS'
          },
      });
      return next.handle(req);
    }
    else {
      return next.handle(req);
    }
  }
}
