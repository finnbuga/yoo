import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IAlbum } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  baseUrl: string = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>(this.baseUrl + 'photos')
      .pipe(
        map((albums: IAlbum[]) => 
          albums
            .filter((album: IAlbum) => album.id < 10)
            .map((album: IAlbum) => ({...album, path: "/albums/" + album.id}))
        ),
        catchError(this.handleError)
      )
  }

  getAlbum(id: number): Observable<IAlbum> {
    return this.http.get<IAlbum>(this.baseUrl + 'photos/' + id)
      .pipe(
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
