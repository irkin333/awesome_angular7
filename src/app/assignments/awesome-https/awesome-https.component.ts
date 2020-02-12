import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-awesome-https',
  templateUrl: './awesome-https.component.html',
  styleUrls: ['./awesome-https.component.scss']
})
export class AwesomeHttpsComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://awesome-angular-app.firebaseio.com//posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
      .get('https://awesome-angular-app.firebaseio.com//posts.json')
      .subscribe((data) => {
        console.log(data)
      })
  }
}
