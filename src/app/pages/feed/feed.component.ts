import { Component, OnInit } from "@angular/core";
import { FeedStore } from "./feed.store";
import { Feed } from "@models";

@Component({
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  isLoading$ = this._feedStore.isLoading$;
  feed$ = this._feedStore.feed$;

  constructor(private _feedStore: FeedStore) {
  }

  ngOnInit(): void {
    this._feedStore.getRecommendedFeed();
  }

  trackByFn(index: number, feed: Feed): string {
    return feed.media_id;
  }
}
