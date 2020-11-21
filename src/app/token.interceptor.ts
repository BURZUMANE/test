import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { GalleryService } from './gallery/services/gallery.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: GalleryService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth: any = JSON.parse(localStorage.getItem('auth'));
    if (auth.token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + auth.token) });
    }
    return next.handle(request);
  }
}
