import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  baseUrl: string = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl + 'photos')
      .pipe(
        map(albums => albums.filter((album: any) => album.id < 10)),
        catchError(this.handleError)
      )
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Server error');
  }
}
