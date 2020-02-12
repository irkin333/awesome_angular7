import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.interface';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(private http: HttpClient) {}

    createAndStorePost(postData: Post) {
        return this.http
          .post<{ name: string }>(
              'https://awesome-angular-app.firebaseio.com//posts.json',
              postData
            );
    }

    fetchPosts() {
      return this.http
      .get<{ [key: string]: Post }>('https://awesome-angular-app.firebaseio.com//posts.json')
      .pipe(
        map((responseData: { [key: string]: Post }) => {
          const postsArr: Post[] = [];
          for(const key in responseData) {
            if(responseData.hasOwnProperty(key)) {
              postsArr.push({ ...responseData[key], id: key })
            }
          }
          return postsArr;
        })
      )
    }
}