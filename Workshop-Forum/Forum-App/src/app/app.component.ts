import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { IPost } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Forum-App';

  recentPosts: IPost[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchRecentPosts(5);
  }

  fetchRecentPosts(amount: number): void {
    this.recentPosts = undefined;
    this.contentService.loadPosts(amount).subscribe(posts => this.recentPosts = posts);
  }
}
