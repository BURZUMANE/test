import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) {
  }

  public getImages(currentPage): Observable<any> {
    return this.http.get('http://interview.agileengine.com/images', {
      params: {
        page: currentPage
      }
    });
  }

  public getImage(id): Observable<any> {
    return this.http.get(`http://interview.agileengine.com/images/${id}`, {});
  }
}
