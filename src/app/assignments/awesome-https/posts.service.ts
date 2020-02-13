import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.interface';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(private http: HttpClient) {}

    createAndStorePost(postData: Post) {
        return this.http
          .post(
              'https://awesome-angular-app.firebaseio.com//posts.json',
              postData,
              { observe: 'response' }
            );
    }

    fetchPosts() {
      //***multiple params example
      // let params = new HttpParams();
      // params = params.append('par1', '1');
      // params = params.append('par2', '2');

      return this.http
      .get<{ [key: string]: Post }>(
        'https://awesome-angular-app.firebaseio.com//posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'hello' }),
          params: new HttpParams().set('print', 'pretty')
        })
      .pipe(
        map((responseData: { [key: string]: Post }) => {
          const postsArr: Post[] = [];
          for(const key in responseData) {
            if(responseData.hasOwnProperty(key)) {
              postsArr.push({ ...responseData[key], id: key })
            }
          }
          return postsArr;
        }),
        catchError(errorResponse => {
          return throwError(errorResponse);
        })
      )
    }

    deletePosts() {
      return this.http
          .delete(
              'https://awesome-angular-app.firebaseio.com//posts.json',
              {
                observe: 'events',
                responseType: 'json'
              }
            ).pipe(
              tap(event => {
                console.log(event);
              })
            );
    }
}