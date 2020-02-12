import { Component, OnInit } from '@angular/core';
import { Post } from './post.interface';
import { PostService } from './posts.service';

@Component({
  selector: 'app-awesome-https',
  templateUrl: './awesome-https.component.html',
  styleUrls: ['./awesome-https.component.scss']
})
export class AwesomeHttpsComponent implements OnInit {
  loadedPosts = [];
  isLoading = false;

  constructor(private postsService: PostService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData:  Post) {
    this.postsService.createAndStorePost(postData)
        .subscribe(responseData => {
          console.log(responseData);
        });;
  }

  onFetchPosts() {
    this.isLoading = true;
    this.postsService.fetchPosts()
      .subscribe((posts) => {
        this.isLoading = false;
        this.loadedPosts = posts;
      });
  }

  onClearPosts() {
    // Send Http request
  }
}
